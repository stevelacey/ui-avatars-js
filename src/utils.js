// Hosts the proxy can't reach: single labels, local and reserved names, and private IPs
const LOCAL_HOST = new RegExp(
  '^(localhost|[^.:]+|.+\\.(localhost|test|local|internal|lan|example|home\\.arpa)' +
    '|(127|10|192\\.168|169\\.254|172\\.(1[6-9]|2\\d|3[01]))\\.[\\d.]+|0\\.0\\.0\\.0' +
    '|::1|f[cd][\\da-f]*:.*|fe[89ab][\\da-f]*:.*)$',
)

export function buildUrl(base, params) {
  const query = Object.entries(params)
    .filter(([, value]) => value != null)
    .map(([key, value]) => `${rawUrlEncode(key)}=${rawUrlEncode(String(value))}`)
    .join('&')

  return `${base}?${query}`
}

export function isLocal(url) {
  if (!url.includes('://')) {
    return true
  }

  const authority = url.split('://')[1].split(/[/?#]/)[0]
  let host = authority.replace(/^.*@/, '')
  host = host.startsWith('[') ? host.slice(1).split(']')[0] : host.split(':')[0]

  return LOCAL_HOST.test(host.toLowerCase().replace(/\.+$/, ''))
}

export function parseHostname(value) {
  return value ? withScheme(value) : (value ?? null)
}

export function withScheme(value) {
  return value.includes('://') ? value : `https://${value}`
}

export function rawUrlEncode(value) {
  return encodeURIComponent(value).replace(/[!'()*]/g, (char) => `%${char.charCodeAt(0).toString(16).toUpperCase()}`)
}

export function hexdec(value) {
  return Number.parseInt(value.replace(/[^0-9a-f]/gi, '') || '0', 16)
}

export function roundHalfEven(value) {
  const rounded = Math.round(value)

  return Math.abs(value % 1) === 0.5 && rounded % 2 !== 0 ? rounded - 1 : rounded
}

// Characters are code points, not UTF-16 units, so emoji and astral letters stay whole
export function substr(value, start, length) {
  return Array.from(value)
    .slice(start, start + length)
    .join('')
}
