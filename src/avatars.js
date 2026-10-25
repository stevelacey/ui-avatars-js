import { initials, substr } from './initials.js'
import { md5 } from './md5.js'
import { sha256 } from './sha256.js'

// Tailwind's 500 shades, in rainbow order
export const COLORS = [
  '#ef4444',
  '#f97316',
  '#f59e0b',
  '#eab308',
  '#84cc16',
  '#22c55e',
  '#10b981',
  '#14b8a6',
  '#06b6d4',
  '#0ea5e9',
  '#3b82f6',
  '#6366f1',
  '#8b5cf6',
  '#a855f7',
  '#d946ef',
  '#ec4899',
  '#f43f5e',
]

export const HOST = 'https://ui-avatars.com'

export const PROXY = 'https://wsrv.nl'

export const SOURCES = {
  gravatar: 'https://www.gravatar.com',
  libravatar: 'https://seccdn.libravatar.org',
}

let shared

/**
 * Call build() and configure() statically to use the shared instance,
 * or on an instance of your own.
 */
export class Avatars {
  alpha = 0.2
  background = null
  bold = true
  colors = COLORS
  fontColor = null
  fontSize = 0.4
  format = null
  hash = 'sha256'
  host = null
  length = 2
  mask = null
  proxy = null
  region = null
  rounded = false
  size = 128
  source = 'gravatar'
  uppercase = true

  constructor(options = {}) {
    this.configure(options)
  }

  static build(options) {
    return sharedInstance().build(options)
  }

  static configure(options) {
    return sharedInstance().configure(options)
  }

  build(options) {
    let { name, email } = options
    const alpha = options.alpha ?? this.alpha
    const background = options.background ?? this.background
    const bold = Number(options.bold ?? this.bold)
    const color = options.color
    const fontColor = options.fontColor ?? this.fontColor
    const fontSize = options.fontSize ?? this.fontSize
    let format = options.format ?? this.format
    const hash = options.hash ?? this.hash
    let host = parseHostname(options.host || this.host)
    const image = options.image ? String(options.image) : null
    const length = options.length ?? this.length
    const region = options.region ?? this.region
    let rounded = Number(options.rounded ?? this.rounded)
    const mask = options.mask || this.mask || ((email || image) && rounded ? 'circle' : null)
    rounded = Number(rounded || mask === 'circle')
    let proxy = parseHostname(options.proxy || this.proxy)
    const size = options.size ?? this.size
    const source = options.source ?? this.source
    const origin = source ? withScheme(SOURCES[source] ?? source) : ''
    const uppercase = Number(options.uppercase ?? this.uppercase)

    if (!name && !email) {
      throw new Error('requires at least one of name or email')
    }

    if (host && !host.includes('.')) {
      throw new Error(`unknown host: '${host}'`)
    }

    if (proxy && !proxy.includes('.')) {
      throw new Error(`unknown proxy: '${proxy}'`)
    }

    if (region && !['eu', 'na'].includes(region)) {
      throw new Error(`unknown region: '${region}'`)
    }

    if (hash !== 'md5' && hash !== 'sha256') {
      throw new Error(`unknown hash: '${hash}'`)
    }

    if (origin && !origin.includes('.')) {
      throw new Error(`unknown source: '${source}'`)
    }

    host = host || (region ? HOST.replace('//', `//${region}.`) : HOST)
    const output = format || 'png'
    proxy = proxy || PROXY

    if (!name) {
      const localPart = String(email).trim().split('@')[0]
      name = substr(localPart.replace(/\P{L}/gu, ''), 0, 2) || substr(localPart, 0, 2)
    }

    const digest = md5((email || name).trim().toLowerCase())
    const emailHash = email ? (hash === 'md5' ? md5 : sha256)(email.trim().toLowerCase()) : null

    const paletteItem = this.colors[Number.parseInt(digest.slice(0, 8), 16) % this.colors.length]
    const palettePair = typeof paletteItem === 'string' ? [paletteItem, paletteItem] : paletteItem
    let backgroundColor = (background || color || palettePair[0]).replace(/^#+/, '')
    let textColor = (fontColor || color || palettePair[1]).replace(/^#+/, '')

    if (backgroundColor.length === 3) {
      backgroundColor = backgroundColor.replace(/./g, '$&$&')
    }
    if (textColor.length === 3) {
      textColor = textColor.replace(/./g, '$&$&')
    }

    if (format !== 'png' && format !== 'svg') {
      format = email && (origin.includes('gravatar.com') || rounded) ? 'png' : 'svg'
    }

    if (backgroundColor === 'random') {
      textColor = 'auto'
    } else if (format === 'png') {
      const [r, g, b] = [0, 2, 4].map((i) => hexdec(backgroundColor.slice(i, i + 2)))
      backgroundColor = `rgba(${r},${g},${b},${alpha})`
    } else if (alpha < 1) {
      const alphaSuffix = Math.min(255, Math.max(0, roundHalfEven(alpha * 255)))
      backgroundColor = `${backgroundColor}${alphaSuffix.toString(16).padStart(2, '0')}`
    }

    const text = initials(name, { length, uppercase: Boolean(uppercase) })
    let defaultUrl = `${host}/api/${rawUrlEncode(text).replaceAll('%2F', '/')}/${size}/${backgroundColor}/${textColor}/${length}/${fontSize}/${rounded}/${bold}/${uppercase}/${format}`
    let url = defaultUrl

    if (email) {
      url = buildUrl(`${origin}/avatar/${emailHash}`, { s: size, d: defaultUrl })
    }

    const supportedDefault = !origin.includes('libravatar.org') || host.includes('ui-avatars.com')
    const supportedFormat = output === 'png' || output === 'svg'
    const supportedMask = mask === null || mask === 'circle'
    const supportedNatively = supportedDefault && supportedFormat && supportedMask

    if ((email && mask) || image || !supportedNatively) {
      const params = { w: size, h: size, mask, output }

      if (!supportedFormat || !supportedMask) {
        defaultUrl = buildUrl(`${proxy}/`, { url: defaultUrl, ...params })
      }

      // Without a photo to look up, the proxy fetches the initials directly
      const photo = image || (email ? buildUrl(`${origin}/avatar/${emailHash}`, { s: size, d: 404 }) : null)

      url = buildUrl(`${proxy}/`, {
        url: photo || url,
        default: photo ? defaultUrl : null,
        fit: 'cover',
        ...params,
      })
    }

    return url
  }

  configure(options) {
    this.alpha = options.alpha ?? this.alpha
    this.background = options.background ?? this.background
    this.bold = options.bold ?? this.bold
    this.colors = options.colors ?? this.colors
    this.fontColor = options.fontColor ?? this.fontColor
    this.fontSize = options.fontSize ?? this.fontSize
    this.format = options.format ?? this.format
    this.hash = options.hash ?? this.hash
    this.host = options.host ?? this.host
    this.length = options.length ?? this.length
    this.mask = options.mask ?? this.mask
    this.proxy = options.proxy ?? this.proxy
    this.region = options.region ?? this.region
    this.rounded = options.rounded ?? this.rounded
    this.size = options.size ?? this.size
    this.source = options.source ?? this.source
    this.uppercase = options.uppercase ?? this.uppercase

    return this
  }
}

function sharedInstance() {
  shared ??= new Avatars()

  return shared
}

export function avatarUrl(options) {
  return Avatars.build(options)
}

// Mirrors PHP's http_build_query with RFC 3986 encoding, which skips nulls
export function buildUrl(base, params) {
  const query = Object.entries(params)
    .filter(([, value]) => value != null)
    .map(([key, value]) => `${rawUrlEncode(key)}=${rawUrlEncode(String(value))}`)
    .join('&')

  return `${base}?${query}`
}

export function parseHostname(value) {
  return value ? withScheme(value) : (value ?? null)
}

function withScheme(value) {
  return value.includes('://') ? value : `https://${value}`
}

function rawUrlEncode(value) {
  return encodeURIComponent(value).replace(/[!'()*]/g, (char) => `%${char.charCodeAt(0).toString(16).toUpperCase()}`)
}

function hexdec(value) {
  return Number.parseInt(value.replace(/[^0-9a-f]/gi, '') || '0', 16)
}

function roundHalfEven(value) {
  const rounded = Math.round(value)

  return Math.abs(value % 1) === 0.5 && rounded % 2 !== 0 ? rounded - 1 : rounded
}
