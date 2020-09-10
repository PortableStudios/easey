# Easey 🏭

Based on Lee Briggs' [`deja-dev`](https://github.com/theleebriggs/deja-dev),
the purpose of this scaffolding tool is to enable us to painlessly skip the
boilerplate and start working on the real meat of our projects as soon as possible.

Built using the [SAO](https://github.com/saojs/sao) framework.

> ⚠️ **Warning:** The Next.js stack is currently using a pre-release version of [Chakra UI v1](https://next.chakra-ui.com/).
>
> If your generated project is intended for production, please consider downgrading to [Chakra UI v0.8](https://chakra-ui.com/).

## Usage

```bash
npx sao PortableStudios/sao-easey -u my-project
```

## Development

First, ensure you can install private Portable packages by following [the authentication steps in our `figma2theme` repo](https://github.com/PortableStudios/figma2theme).

You can test the tool locally by running the following command from the parent directory:

```bash
npx sao ./sao-easey -u my-project
```

The easiest way to make changes to the templates while testing
them is running the following commands from the parent directory:

```bash
npx sao ./sao-easey -u my-project
cd my-project
yarn install
git add .
git commit -m "Initial commit"
```

Now any changes you make to the project can be viewed
in Git and copied back to the template after testing.

## Stacks

### Frontend

- Next.js, with Chakra UI

### API

- NestJS (coming soon)

## Included

### Common files

- .gitignore
- .gitattributes
- .editorconfig
- .nvmrc

### Next.js, with Chakra UI

- Next.js framework
- TypeScript support
- Chakra UI
- Storybook
- Plop
- ESLint
- Prettier
- Jest, with React Testing Library
- Cypress, with Cypress Testing Library
- Third-party integrations
  - Sentry
  - Google Analytics
- Various additional features and code examples

(See [`README.md`](./template/next-ts-chakra-ui/README.md) for more info)

### NestJS

- Coming soon

## License

MIT © [Portable](https://portable.com.au)
