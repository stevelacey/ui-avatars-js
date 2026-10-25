import { createHash } from 'node:crypto'
import { beforeEach, describe, expect, test } from 'vitest'
import { Avatars, avatarUrl, buildUrl, COLORS, parseHostname } from '../src/index.js'

const NAME = 'Ada Lovelace'
const EMAIL = 'ada@example.com'

// Restore the defaults that tests configure on the shared instance
beforeEach(() => {
  Avatars.configure(new Avatars())
})

describe('Avatars', () => {
  test('requires name or email', () => {
    expect(() => new Avatars().build({})).toThrow('requires at least one of name or email')
  })

  test('has sensible defaults', () => {
    const avatars = new Avatars()
    expect(avatars.size).toBe(128)
    expect(avatars.colors).toBe(COLORS)
    expect(avatars.host).toBeNull()
  })

  test('constructor options override the defaults', () => {
    expect(new Avatars({ size: 256 }).build({ name: NAME })).toContain('/256/')
  })

  test('null options keep the defaults', () => {
    expect(new Avatars({ size: null }).size).toBe(128)
  })

  test('configure persists options and returns the instance', () => {
    const avatars = new Avatars()
    expect(avatars.configure({ colors: ['#000'] })).toBe(avatars)
    expect(avatars.build({ name: NAME })).toContain('/00000033/000000/')
  })

  test('separate instances do not share configuration', () => {
    expect(new Avatars({ colors: ['ff0000'] }).build({ name: NAME })).toContain('/ff0000')
    expect(new Avatars({ colors: ['0000ff'] }).build({ name: NAME })).toContain('/0000ff')
  })

  test('accepts URL objects as images', () => {
    const url = new Avatars().build({ name: NAME, image: new URL('https://example.com/ada.png') })
    expect(url).toContain('url=https%3A%2F%2Fexample.com%2Fada.png')
  })

  test('ignores non-hex characters when converting to rgba', () => {
    expect(decodeURIComponent(new Avatars().build({ email: EMAIL, background: 'zzzzzz' }))).toContain('rgba(0,0,0,0.2)')
  })

  test('looks up photos by the sha256 of the email', () => {
    const hash = createHash('sha256').update(EMAIL).digest('hex')
    expect(new Avatars().build({ email: ` ${EMAIL.toUpperCase()} ` })).toContain(`/avatar/${hash}?`)
  })

  test('can look up photos by md5', () => {
    const hash = createHash('md5').update(EMAIL).digest('hex')
    expect(new Avatars({ hash: 'md5' }).build({ email: EMAIL })).toContain(`/avatar/${hash}?`)
  })

  test('throws on an unknown hash', () => {
    expect(() => new Avatars().build({ email: EMAIL, hash: 'sha1' })).toThrow("unknown hash: 'sha1'")
  })

  test('colors are valid and unique hex triples', () => {
    for (const color of COLORS) {
      expect(color).toMatch(/^#[0-9a-f]{6}$/)
    }
    expect(new Set(COLORS).size).toBe(COLORS.length)
  })
})

describe('shared instance', () => {
  test('static build uses the shared instance', () => {
    expect(Avatars.build({ name: NAME })).toBe(new Avatars().build({ name: NAME }))
  })

  test('static configure changes the shared instance', () => {
    Avatars.configure({ size: 64, rounded: true })
    expect(Avatars.build({ name: NAME, email: EMAIL })).toBe(
      new Avatars({ size: 64, rounded: true }).build({ name: NAME, email: EMAIL }),
    )
  })

  test('avatarUrl uses the shared instance', () => {
    Avatars.configure({ colors: ['#123456'] })
    expect(avatarUrl({ name: NAME })).toContain('/12345633/123456/')
  })

  test('per call options override the shared configuration', () => {
    Avatars.configure({ size: 64 })
    expect(avatarUrl({ name: NAME, size: 32 })).toContain('/32/')
  })
})

describe('helpers', () => {
  test('buildUrl omits nulls and encodes like rawurlencode', () => {
    expect(buildUrl('https://example.com/', { a: null, b: undefined, c: "two words (it's)", d: 4 })).toBe(
      'https://example.com/?c=two%20words%20%28it%27s%29&d=4',
    )
  })

  test('parseHostname defaults to https', () => {
    expect(parseHostname('example.com')).toBe('https://example.com')
    expect(parseHostname('http://example.com')).toBe('http://example.com')
    expect(parseHostname(null)).toBeNull()
    expect(parseHostname(undefined)).toBeNull()
    expect(parseHostname('')).toBe('')
  })
})
