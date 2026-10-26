import { createHash } from 'node:crypto'
import { describe, expect, test } from 'vitest'
import { Avatars, initials } from '../src/index.js'
import { md5 } from '../src/md5.js'
import { sha256 } from '../src/sha256.js'
import fixtures from './fixtures.json' with { type: 'json' }

describe('fixtures', () => {
  test.each(fixtures.avatars)('$input with $config', ({ config, input, url, error }) => {
    const build = () => new Avatars({ ...config }).build({ ...input })

    if (error) {
      expect(build).toThrow(error)
    } else {
      expect(build()).toBe(url)
    }
  })

  test.each(fixtures.initials)(
    'initials of $name ($length, $uppercase)',
    ({ name, length, uppercase, initials: expected }) => {
      expect(initials(name, { length, uppercase })).toBe(expected)
    },
  )
})

const HASH_INPUTS = [
  '',
  'a',
  'ada@example.com',
  'łukasz@example.pl',
  '😀',
  'x'.repeat(55),
  'x'.repeat(56),
  'x'.repeat(64),
  'x'.repeat(1000),
]

describe('md5', () => {
  test.each([
    '',
    'a',
    'ada@example.com',
    'łukasz@example.pl',
    '😀',
    'x'.repeat(55),
    'x'.repeat(56),
    'x'.repeat(64),
    'x'.repeat(1000),
  ])('hashes %j like node', (value) => {
    expect(md5(value)).toBe(createHash('md5').update(value).digest('hex'))
  })
})

describe('sha256', () => {
  test.each(HASH_INPUTS)('hashes %j like node', (value) => {
    expect(sha256(value)).toBe(createHash('sha256').update(value).digest('hex'))
  })
})
