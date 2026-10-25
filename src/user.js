import { Avatars } from './avatars.js'

function read(user, ...keys) {
  for (const key of keys) {
    const value = user[key]
    if (typeof value === 'string' && value.trim()) {
      return value.trim()
    }
  }

  return ''
}

export function userAvatarName(user) {
  const name =
    read(user, 'displayName', 'display_name', 'fullName', 'full_name', 'name') ||
    `${read(user, 'firstName', 'first_name')} ${read(user, 'lastName', 'last_name')}`.trim() ||
    read(user, 'username')

  return name.replaceAll('_', ' ').trim()
}

export function userAvatarEmail(user) {
  return read(user, 'email')
}

export function userAvatarImage(user) {
  return read(user, 'avatar', 'avatarUrl', 'avatar_url', 'image', 'imageUrl', 'image_url', 'picture') || null
}

// Avatar URL for a user object, e.g. from Auth.js, Clerk, Drizzle, Prisma or Supabase
export function userAvatarUrl(user, { avatars, ...options } = {}) {
  const values = {
    name: userAvatarName(user),
    email: userAvatarEmail(user),
    image: userAvatarImage(user),
    ...options,
  }

  return avatars ? avatars.build(values) : Avatars.build(values)
}
