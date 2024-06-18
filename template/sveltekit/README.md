# <%= name %>

This is a [SvelteKit](https://kit.svelte.dev/) and [Tailwind CSS](https://tailwindcss.com/) project bootstrapped using Portable's [Easey](https://github.com/PortableStudios/easey) generator.

## Getting Started

### 1. Create your .env file

Generate an `.env` file from the template and fill in the details as necessary:

```
cp .env.example .env
```

### 2. Start developing

Ensure you are using the correct Node version via [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md):

```bash
nvm install
```

Start the development server:

```bash
yarn dev
```

Open http://localhost:5173 to see the app.

### 3. Open Storybook (optional)

While developing you may also want to run Storybook to see your components in isolation:

```bash
yarn storybook
```

Open http://localhost:6006 to see your component library.

## Generating theme from Figma file

If the project Figma file was created from the [Portable UI Kit](https://www.figma.com/design/b6tcOWalyHLDfsD0IBSXyE/Portable-UI-Kit-v2) template
you can use our [`figma2theme`](https://github.com/PortableStudios/figma2theme) tool to generate a Tailwind CSS theme.

First, create a `.figma2themerc` file in your project containing the
Figma file URL, here's an example using the URL of our Figma template:

```json
{
	"fileUrl": "https://www.figma.com/design/b6tcOWalyHLDfsD0IBSXyE/Portable-UI-Kit-v2"
}
```

Now add your Figma API key to the `.env` file of your project.
A key can be generated under the 'Personal Access Tokens' section of the Figma settings.

```
FIGMA_API_KEY=
```

Now run the following command:

```bash
yarn update-theme
```

This will generate a Tailwind theme and save the file to `./tailwind.figma2theme.js`.

Open your `tailwind.config.js` file and add the generated theme to your `presets` array like so:

```js
import figmaPreset from './tailwind.figma2theme.js';

/** @type {import('tailwindcss').Config} */
const config = {
	presets: [figmaPreset],
```

This setting will use the generated theme as the base for your Tailwind configuration,
giving you access to all the tokens from the UI Kit while still allowing you to extend
or override them in your `tailwind.config.js` file as needed.

For more information on this setting see the Tailwind docs: https://tailwindcss.com/docs/presets

## Code Generation

[Plop](https://plopjs.com/) is included in this project to allow us to quickly generate code.

```bash
yarn plop
```

Currently the available options are:

- A Svelte component, with a Storybook story and a Vitest test
- A SvelteKit page, with a Playwright test

The config for this tool can be found in `plopfile.js` and
the templates can be found in the `/templates` folder.

## Included

The following features were included in this project by Portable's [`Easey`](https://github.com/PortableStudios/easey) generator:

- [SvelteKit](https://kit.svelte.dev/), the official framework for building Svelte applications
- [Tailwind CSS](https://tailwindcss.com/), a utility-first CSS framework
- [figma2theme](https://github.com/PortableStudios/figma2theme), our tool for generating a Tailwind theme from a Figma UI Kit file
- [Storybook](https://storybook.js.org/) for building and testing components in isolation, with:
  - [Accessibility addon](https://storybook.js.org/addons/@storybook/addon-a11y) for testing accessibility
  - [Svelte CSF addon](https://storybook.js.org/addons/@storybook/addon-svelte-csf) for writing stories in Svelte syntax
- [ESLint](https://eslint.org/) for identifying code problems, with:
  - [Prettier](https://prettier.io/) formatting for consistent code style
  - Autorun on pre-commit using [`husky`](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged)
- [Plop](https://plopjs.com/) for generating boilerplate, with:
  - Templates for generating a Svelte component with a story and a Vitest test
  - Templates for generating a SvelteKit component page a Playwright test
- Testing libraries:
  - [Vitest](https://vitest.dev/) for writing unit tests, with [Svelte Testing Library](https://testing-library.com/docs/svelte-testing-library/intro/) integration for better testing practices
  - [Playwright](https://playwright.dev/) for writing end-to-end tests
- Some further examples, including:
  - Global styles in the `app.pcss` file
  - Self-hosted open-source fonts in the `globalCss.ts` file
  - A `Button.svelte` component using `bits-ui` and `tailwind-variants`, with stories and tests
  - A `MetaTags.svelte` component for easily adding meta tags to your pages
  - An SVG icon sprite with a corresponding Svelte component (see `icons.svg` and `Icon.svelte`)

## Learn More

### Svelte

To learn more about Svelte, take a look at the following resources:

- [GitHub](https://github.com/sveltejs/svelte)
- [Documentation](https://svelte.dev/)
- [Tutorial](https://learn.svelte.dev/)

### SvelteKit

To learn more about SvelteKit, take a look at the following resources:

- [GitHub](https://github.com/sveltejs/kit)
- [Documentation](https://kit.svelte.dev/)
- [Tutorial](https://learn.svelte.dev/tutorial/introducing-sveltekit)

### Tailwind CSS

To learn more about Tailwind CSS, take a look at the following resources:

- [GitHub](https://github.com/tailwindlabs/tailwindcss)
- [Documentation](https://tailwindcss.com/)

### Storybook

To learn more about Storybook, take a look at the following resources:

- [GitHub](https://github.com/storybookjs/storybook)
- [Documentation](https://storybook.js.org/docs)
- [Tutorial](https://storybook.js.org/tutorials)
