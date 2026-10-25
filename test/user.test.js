import { describe, expect, test } from 'vitest'
import { Avatars, userAvatarEmail, userAvatarImage, userAvatarName, userAvatarUrl } from '../src/index.js'

describe('userAvatarName', () => {
  test.each([
    [{ displayName: 'Ada L', name: 'Ada Lovelace' }, 'Ada L'],
    [{ display_name: 'Ada L', name: 'Ada Lovelace' }, 'Ada L'],
    [{ fullName: 'Ada Lovelace', username: 'ada' }, 'Ada Lovelace'],
    [{ full_name: 'Ada Lovelace' }, 'Ada Lovelace'],
    [{ name: ' Ada Lovelace ' }, 'Ada Lovelace'],
    [{ firstName: 'Ada', lastName: 'Lovelace' }, 'Ada Lovelace'],
    [{ first_name: 'Ada', last_name: 'Lovelace' }, 'Ada Lovelace'],
    [{ firstName: 'Ada' }, 'Ada'],
    [{ lastName: 'Lovelace' }, 'Lovelace'],
    [{ username: 'ada_lovelace' }, 'ada lovelace'],
    [{ name: '', username: 'ada' }, 'ada'],
    [{ name: '   ', username: 'ada' }, 'ada'],
    [{ name: 42, username: 'ada' }, 'ada'],
    [{}, ''],
  ])('%j is %j', (user, expected) => {
    expect(userAvatarName(user)).toBe(expected)
  })
})

describe('userAvatarEmail', () => {
  test.each([
    [{ email: 'ada@example.com' }, 'ada@example.com'],
    [{ email: null }, ''],
    [{}, ''],
  ])('%j is %j', (user, expected) => {
    expect(userAvatarEmail(user)).toBe(expected)
  })
})

describe('userAvatarImage', () => {
  test.each([
    [{ avatar: 'a.png', image: 'i.png' }, 'a.png'],
    [{ avatarUrl: 'a.png' }, 'a.png'],
    [{ avatar_url: 'a.png' }, 'a.png'],
    [{ image: 'i.png', picture: 'p.png' }, 'i.png'],
    [{ imageUrl: 'i.png' }, 'i.png'],
    [{ image_url: 'i.png' }, 'i.png'],
    [{ picture: 'p.png' }, 'p.png'],
    [{ avatar: '', image: 'i.png' }, 'i.png'],
    [{}, null],
  ])('%j is %j', (user, expected) => {
    expect(userAvatarImage(user)).toBe(expected)
  })
})

describe('userAvatarUrl', () => {
  const user = { name: 'Ada Lovelace', email: 'ada@example.com', image: 'https://example.com/ada.png' }

  test('builds from the user fields', () => {
    expect(userAvatarUrl(user)).toBe(Avatars.build({ name: user.name, email: user.email, image: user.image }))
  })

  test('passes options through', () => {
    expect(userAvatarUrl(user, { size: 64 })).toBe(Avatars.build({ ...user, size: 64 }))
  })

  test('uses a custom instance', () => {
    const avatars = new Avatars({ source: 'libravatar' })
    expect(userAvatarUrl(user, { avatars })).toBe(avatars.build(user))
  })

  test('requires a name or email', () => {
    expect(() => userAvatarUrl({})).toThrow('requires at least one of name or email')
  })
})
