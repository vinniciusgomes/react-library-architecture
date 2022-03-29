# Architecture Reference for Library using Typescript

## Principles

- Dependencies
  - All build-time dependencies must be defined in `peerDependencies`
    - It also necessaries add do `devDependencies`
  - `dependencies` it just added if the library has an specific dependencies
- Testing library
  - Use demo application for validate your library
  - Use `npm link` to validate integration resources [link](https://docs.npmjs.com/cli/link.html)

---

## Building with [Rollup](https://rollupjs.org/)

- Apart from compile TS to JS, it is currently prepared to handle fonts, images _(svg,png,jpg,jpeg,gif)_ and json
  - fonts are copied and referenced
  - JSONs are embeded in the bundle
  - Images are encoded to base64 and are bundled or chunked

---

### Before releasing new library

- Do not forget to delete MyComponent
  - It is only a sample
- Edit Readme, filling template below with valid information
- Edit Changelog to reflect new library
- For new components, use the template below to describe it

---

# Components

## MyComponent

- Props

```tsx
interface MyComponentProps {
  children: ReactChild
}
```

- Usage

```tsx
import { MyComponent } from 'react-library-architecture'
;<MyComponent>valid-text</MyComponent>
```
