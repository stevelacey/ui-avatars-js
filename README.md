# ui-avatars

[![npm](https://img.shields.io/npm/v/@stevelacey/ui-avatars.svg?style=flat-square)](https://www.npmjs.com/package/@stevelacey/ui-avatars)
[![CI](https://img.shields.io/github/actions/workflow/status/stevelacey/ui-avatars-js/ci.yml?branch=main&style=flat-square)](https://github.com/stevelacey/ui-avatars-js/actions/workflows/ci.yml?query=branch:main)
[![Coverage](https://img.shields.io/codecov/c/github/stevelacey/ui-avatars-js?style=flat-square)](https://codecov.io/gh/stevelacey/ui-avatars-js)
[![Downloads](https://img.shields.io/npm/dm/@stevelacey/ui-avatars.svg?style=flat-square)](https://www.npmjs.com/package/@stevelacey/ui-avatars)
[![License](https://img.shields.io/github/license/stevelacey/ui-avatars-js?style=flat-square)](LICENSE.md)

Deterministic avatar URLs for light and dark designs:
[Gravatar](https://gravatar.com) or [Libravatar](https://libravatar.org) photos falling
back to colored initials via [ui-avatars.com](https://ui-avatars.com).
Same input, same URL, always.

Also available for [Python](https://github.com/stevelacey/ui-avatars-python) and
[PHP](https://github.com/stevelacey/ui-avatars-php), which build identical URLs.

<table>
<tr>
<td align="center"><a href="https://ui-avatars.com/api/AL/128/f9731633/f97316/2/0.4/0/1/1/svg"><img src="https://ui-avatars.com/api/AL/128/f9731633/f97316/2/0.4/0/1/1/svg" style="object-fit: contain" width="72" height="72"></a></td>
<td align="center"><a href="https://www.gravatar.com/avatar/7487baad7b087cb03cc4ccf7d044c150?s=128&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FSL%2F128%2Frgba%28236%2C72%2C153%2C0.2%29%2Fec4899%2F2%2F0.4%2F0%2F1%2F1%2Fpng"><img src="https://www.gravatar.com/avatar/7487baad7b087cb03cc4ccf7d044c150?s=128&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FSL%2F128%2Frgba%28236%2C72%2C153%2C0.2%29%2Fec4899%2F2%2F0.4%2F0%2F1%2F1%2Fpng" style="object-fit: contain" width="72" height="72"></a></td>
<td align="center"><a href="https://ui-avatars.com/api/AT/128/84cc1633/84cc16/2/0.4/0/1/1/svg"><img src="https://ui-avatars.com/api/AT/128/84cc1633/84cc16/2/0.4/0/1/1/svg" style="object-fit: contain" width="72" height="72"></a></td>
<td align="center"><a href="https://ui-avatars.com/api/LT/128/06b6d433/06b6d4/2/0.4/0/1/1/svg"><img src="https://ui-avatars.com/api/LT/128/06b6d433/06b6d4/2/0.4/0/1/1/svg" style="object-fit: contain" width="72" height="72"></a></td>
<td align="center"><a href="https://www.gravatar.com/avatar/629999fcb3f6a928abe5f65ed0ab09c2?s=128&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FPI%2F128%2Frgba%2859%2C130%2C246%2C0.2%29%2F3b82f6%2F2%2F0.4%2F0%2F1%2F1%2Fpng"><img src="https://www.gravatar.com/avatar/629999fcb3f6a928abe5f65ed0ab09c2?s=128&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FPI%2F128%2Frgba%2859%2C130%2C246%2C0.2%29%2F3b82f6%2F2%2F0.4%2F0%2F1%2F1%2Fpng" style="object-fit: contain" width="72" height="72"></a></td>
<td align="center"><a href="https://ui-avatars.com/api/MH/128/3b82f633/3b82f6/2/0.4/0/1/1/svg"><img src="https://ui-avatars.com/api/MH/128/3b82f633/3b82f6/2/0.4/0/1/1/svg" style="object-fit: contain" width="72" height="72"></a></td>
<td align="center"><a href="https://www.gravatar.com/avatar/3869e93ce6b2a22e37cf13281d9e6f75?s=128&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FLV%2F128%2Frgba%28139%2C92%2C246%2C0.2%29%2F8b5cf6%2F2%2F0.4%2F0%2F1%2F1%2Fpng"><img src="https://www.gravatar.com/avatar/3869e93ce6b2a22e37cf13281d9e6f75?s=128&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FLV%2F128%2Frgba%28139%2C92%2C246%2C0.2%29%2F8b5cf6%2F2%2F0.4%2F0%2F1%2F1%2Fpng" style="object-fit: contain" width="72" height="72"></a></td>
<td align="center"><a href="https://www.gravatar.com/avatar/047f2332cde3730f1ed661eebb0c5686?s=128&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FGR%2F128%2Frgba%28139%2C92%2C246%2C0.2%29%2F8b5cf6%2F2%2F0.4%2F0%2F1%2F1%2Fpng"><img src="https://www.gravatar.com/avatar/047f2332cde3730f1ed661eebb0c5686?s=128&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FGR%2F128%2Frgba%28139%2C92%2C246%2C0.2%29%2F8b5cf6%2F2%2F0.4%2F0%2F1%2F1%2Fpng" style="object-fit: contain" width="72" height="72"></a></td>
</tr>
<tr>
<td align="center"><a href="https://www.gravatar.com/avatar/b8605bc56f7d1249560eb40f7cc69001?s=128&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FCW%2F128%2Frgba%2820%2C184%2C166%2C0.2%29%2F14b8a6%2F2%2F0.4%2F0%2F1%2F1%2Fpng"><img src="https://www.gravatar.com/avatar/b8605bc56f7d1249560eb40f7cc69001?s=128&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FCW%2F128%2Frgba%2820%2C184%2C166%2C0.2%29%2F14b8a6%2F2%2F0.4%2F0%2F1%2F1%2Fpng" style="object-fit: contain" width="72" height="72"></a></td>
<td align="center"><a href="https://www.gravatar.com/avatar/8d924f842e67d03be5d0812563e8d672?s=256&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FBA%2F256%2Frgba%2834%2C197%2C94%2C0.2%29%2F22c55e%2F2%2F0.4%2F0%2F1%2F1%2Fpng"><img src="https://www.gravatar.com/avatar/8d924f842e67d03be5d0812563e8d672?s=256&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FBA%2F256%2Frgba%2834%2C197%2C94%2C0.2%29%2F22c55e%2F2%2F0.4%2F0%2F1%2F1%2Fpng" style="object-fit: contain" width="72" height="72"></a></td>
<td align="center"><a href="https://www.gravatar.com/avatar/f29327647a9cff5c69618bae420792ea?s=128&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FAP%2F128%2Frgba%2814%2C165%2C233%2C0.2%29%2F0ea5e9%2F2%2F0.4%2F0%2F1%2F1%2Fpng"><img src="https://www.gravatar.com/avatar/f29327647a9cff5c69618bae420792ea?s=128&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FAP%2F128%2Frgba%2814%2C165%2C233%2C0.2%29%2F0ea5e9%2F2%2F0.4%2F0%2F1%2F1%2Fpng" style="object-fit: contain" width="72" height="72"></a></td>
<td align="center"><a href="https://ui-avatars.com/api/BP/128/1d4ed833/1d4ed8/2/0.4/0/1/1/svg"><img src="https://ui-avatars.com/api/BP/128/1d4ed833/1d4ed8/2/0.4/0/1/1/svg" style="object-fit: contain" width="72" height="72"></a></td>
<td align="center"><a href="https://ui-avatars.com/api/TB/128/84cc1633/84cc16/2/0.4/0/1/1/svg"><img src="https://ui-avatars.com/api/TB/128/84cc1633/84cc16/2/0.4/0/1/1/svg" style="object-fit: contain" width="72" height="72"></a></td>
<td align="center"><a href="https://www.gravatar.com/avatar/de3fe73f6cd2adaac3a8a1fa04d4d80f?s=128&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FCC%2F128%2Frgba%28249%2C115%2C22%2C0.2%29%2Ff97316%2F2%2F0.4%2F0%2F1%2F1%2Fpng"><img src="https://www.gravatar.com/avatar/de3fe73f6cd2adaac3a8a1fa04d4d80f?s=128&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FCC%2F128%2Frgba%28249%2C115%2C22%2C0.2%29%2Ff97316%2F2%2F0.4%2F0%2F1%2F1%2Fpng" style="object-fit: contain" width="72" height="72"></a></td>
<td align="center"><a href="https://ui-avatars.com/api/KJ/128/10b98133/10b981/2/0.4/0/1/1/svg"><img src="https://ui-avatars.com/api/KJ/128/10b98133/10b981/2/0.4/0/1/1/svg" style="object-fit: contain" width="72" height="72"></a></td>
<td align="center"><a href="https://www.gravatar.com/avatar/21a241aa10ee457a5f6b72aca98a4860?s=128&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FWW%2F128%2Frgba%2834%2C197%2C94%2C0.2%29%2F22c55e%2F2%2F0.4%2F0%2F1%2F1%2Fpng"><img src="https://www.gravatar.com/avatar/21a241aa10ee457a5f6b72aca98a4860?s=128&d=https%3A%2F%2Fui-avatars.com%2Fapi%2FWW%2F128%2Frgba%2834%2C197%2C94%2C0.2%29%2F22c55e%2F2%2F0.4%2F0%2F1%2F1%2Fpng" style="object-fit: contain" width="72" height="72"></a></td>
</tr>
</table>

## Install

```bash
npm install @stevelacey/ui-avatars
```

It has no dependencies, so it also works in browsers and edge runtimes.

## Usage

```js
import { avatarUrl } from '@stevelacey/ui-avatars'

avatarUrl({ name: 'Ada Lovelace', email: 'ada@example.com' })
// Gravatar photo, falling back to generated initials

avatarUrl({ name: 'Ada Lovelace' })
// straight ui-avatars.com URL, no Gravatar lookup

avatarUrl({ name: 'Ada Lovelace', email: 'ada@example.com', image: photoUrl })
// uploaded photo, falling back to Gravatar or initials

avatarUrl({ email: 'ada@example.com' })
// initials from the first two letters of the email

avatarUrl({ name: 'Ada Lovelace', alpha: 0.75, size: 256, rounded: true })
// pass any of the options as one-off overrides

avatarUrl({ name: 'Ada Lovelace', mask: 'hexagon', format: 'webp' })
// crop the image to a hexagon and serve webp via wsrv.nl

avatarUrl({ name: 'Ada Lovelace', email: 'ada@example.com', source: 'libravatar' })
// look up the photo on Libravatar instead of Gravatar

avatarUrl({ email: 'ada@example.com', host: 'example.com', source: 'secure.gravatar.com' })
// override hostnames to use custom/self-hosted servers
```

## Arguments

At least one of `name` or `email` is required.

| Name | Description |
| :-- | :-- |
| `name` | Name used to generate initials |
| `email` | Email address used to look up a photo via Gravatar or Libravatar |
| `image` | Image URL, e.g. an uploaded photo |

## Options

Options can be configured globally or overridden per call.

| Name | Default | Description |
| :-- | :-- | :-- |
| `alpha` | `0.2` | Background opacity (`0` to `1`) |
| `background` | | Pin the background color |
| `bold` | `true` | Bold the initials |
| `colors` | `COLORS` | List of hex values or `[background, text]` pairs |
| `fontColor` | | Pin the text color |
| `fontSize` | `0.4` | Size of the initials (`0.1` to `1`) |
| `format` | | Image format, e.g. `png`, `svg`, and other [formats](https://wsrv.nl/docs/format) |
| `hash` | `sha256` | Email hash for photo lookups, `sha256` or `md5` |
| `host` | `ui-avatars.com` | User initials avatars host |
| `length` | `2` | Number of initials |
| `mask` | | Shape mask, e.g. `hexagon`, `pentagon`, `square`, and other [masks](https://wsrv.nl/docs/mask) |
| `proxy` | `wsrv.nl` | Proxy for masks, rounding, and extra formats |
| `region` | | Service region, e.g. `eu` or `na` (ignored if `host` is set) |
| `rounded` | `false` | Round the image (ignored if `mask` is set) |
| `size` | `128` | Image size in pixels |
| `source` | `gravatar` | Photo source, e.g. `gravatar`, `libravatar`, or any compatible host |
| `uppercase` | `true` | Uppercase the initials |

## Configuration

Call `Avatars.configure()` to configure the shared instance that `avatarUrl()` uses, or construct your own:

```js
import { Avatars, avatarUrl } from '@stevelacey/ui-avatars'

Avatars.configure({ colors: ['#1d4ed8', '#b91c1c'], size: 256, rounded: true })
avatarUrl({ name: 'Ada Lovelace', email: 'ada@example.com' })
// or Avatars.build({ name: 'Ada Lovelace', email: 'ada@example.com' })

const avatars = new Avatars({ colors: ['#1d4ed8', '#b91c1c'], size: 256, rounded: true })
avatars.build({ name: 'Ada Lovelace', email: 'ada@example.com' })
```

## Colors

The default color palette is Tailwind's 500 shades in rainbow order, `COLORS`.
Swap it for your own:

```js
Avatars.configure({ colors: ['#f00', '#0f0', '#00f'] })
```

Pair colors manually with `[background, text]` pairs.
Set `alpha: 1` for solid backgrounds:

```js
Avatars.configure({ alpha: 1, colors: [['#f00', '#fff'], ['#000', '#00f']] })
```

To override the palette and force a specific color, pass the `color` argument:

```js
avatarUrl({ name: 'Ada Lovelace', email: 'ada@example.com', color: '#f00' })
```

To pin the background color, text color, or both, pass `background` and `fontColor`:

```js
avatarUrl({ name: 'Ada Lovelace', alpha: 1, background: '#f00', fontColor: '#000' })
```

## Users

`userAvatarUrl()` builds a URL from a user object, e.g. from Auth.js, Clerk, Drizzle, Prisma or Supabase:

```js
import { userAvatarUrl } from '@stevelacey/ui-avatars'

userAvatarUrl(user)
userAvatarUrl(user, { size: 64, rounded: true })
userAvatarUrl(user, { avatars: new Avatars({ source: 'libravatar' }) })
```

It uses `displayName`, `fullName`, `name`, `firstName` and `lastName`, or `username` for initials,
and `avatar`, `avatarUrl`, `image`, `imageUrl`, or `picture` for images, in that order.
The snake_case versions, e.g. `display_name` and `avatar_url`, work too.

If your fields are named differently, call `avatarUrl()` with them instead:

```js
avatarUrl({ name: user.nickname, email: user.email, image: user.photo })
```

## Development

```bash
npm install
npm test
npm run lint
```

`test/fixtures.json` holds URLs built by the [PHP package](https://github.com/stevelacey/ui-avatars-php),
so the packages stay in sync.

## License

MIT
