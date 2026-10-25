// Characters are code points, not UTF-16 units, so emoji and astral letters stay whole
export function substr(value, start, length) {
  return Array.from(value)
    .slice(start, start + length)
    .join('')
}

export function initials(name, { length = 2, uppercase = true } = {}) {
  name = name.trim()
  if (uppercase) {
    name = name.toUpperCase()
  }
  name = name.replace(/[!@#$%^&*(),.?":{}|<>_]/gu, '')
  name = name.replace(/^-+|-+$/g, '').trim()
  let names = name.split(/\s+/u).filter(Boolean)

  if (names.length < length) {
    names = names.flatMap((part) => part.split('-'))
  }

  if (names.length === 1) {
    return substr(name, 0, length)
  }

  let result = ''
  let assignedNames = 0
  let start = 0
  for (let index = 0; index < length; index++) {
    let nameIndex = index
    if ((index === length - 1 && index > 0) || index > names.length - 1) {
      nameIndex = names.length - 1
    }
    if (assignedNames >= names.length) {
      start++
    }
    result += substr(names[nameIndex] ?? '', start, 1)
    assignedNames++
  }

  return substr(result, 0, length)
}
