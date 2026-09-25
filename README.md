# chroma-catalogue

The source of truth for hue data, TypeScript types, validation, and exports.
Other projects can consume this repository as a package or use its static JSON
files directly.

## Structure

- `data/index.json` lists every catalogue entry.
- `data/scales/` contains ordered hue scales with steps from 50 through 950.
- `data/engineered/` contains individually engineered hues and optional links to
  related scales.
- `src/types/` contains the TypeScript model used by consumers.
- `src/schemas/catalogue.schema.json` describes the JSON document format.

## Development

```sh
npm install
npm run typecheck
```

Colour values store a six-digit sRGB hex value and OKLCH coordinates. Display-P3
values, contrast examples, Pantone references, and presentation settings are
optional.
