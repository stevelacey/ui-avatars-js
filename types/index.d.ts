export type Color = string | readonly [background: string, text: string]

export interface Options {
  alpha?: number | null
  background?: string | null
  bold?: boolean | null
  colors?: readonly Color[] | null
  fontColor?: string | null
  fontSize?: number | null
  format?: string | null
  hash?: 'md5' | 'sha256' | null
  host?: string | null
  length?: number | null
  mask?: string | null
  proxy?: string | null
  region?: string | null
  rounded?: boolean | null
  size?: number | null
  source?: string | null
  uppercase?: boolean | null
}

export interface BuildOptions extends Omit<Options, 'colors'> {
  name?: string | null
  email?: string | null
  image?: string | URL | null
  color?: string | null
}

export interface UserOptions extends Omit<BuildOptions, 'name' | 'email' | 'image'> {
  avatars?: Avatars
}

export type User = Record<string, unknown>

export const COLORS: readonly string[]
export const HOST: string
export const PROXY: string
export const SOURCES: Readonly<Record<string, string>>

export class Avatars {
  alpha: number
  background: string | null
  bold: boolean
  colors: readonly Color[]
  fontColor: string | null
  fontSize: number
  format: string | null
  hash: 'md5' | 'sha256'
  host: string | null
  length: number
  mask: string | null
  proxy: string | null
  region: string | null
  rounded: boolean
  size: number
  source: string
  uppercase: boolean

  constructor(options?: Options)
  static build(options: BuildOptions): string
  static configure(options: Options): Avatars
  build(options: BuildOptions): string
  configure(options: Options): this
}

export function avatarUrl(options: BuildOptions): string
export function buildUrl(base: string, params: Record<string, string | number | null | undefined>): string
export function isLocal(url: string): boolean
export function parseHostname(value: string | null | undefined): string | null
export function initials(name: string, options?: { length?: number; uppercase?: boolean }): string
export function userAvatarName(user: User): string
export function userAvatarEmail(user: User): string
export function userAvatarImage(user: User): string | null
export function userAvatarUrl(user: User, options?: UserOptions): string
