import fs from 'fs';
import path from 'path';

export default function (
	/** @type {import('plop').NodePlopAPI} */
	plop,
) {
	plop.setGenerator('component', {
		description: 'a Svelte component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'component name',
			},
			{
				type: 'input',
				name: 'folder',
				message: 'component folder (e.g. ui, layout, pages)',
			},
			{
				type: 'confirm',
				name: 'story',
				message: 'generate a story?',
				default: true,
			},
			{
				type: 'confirm',
				name: 'test',
				message: 'generate a test?',
				default: true,
			},
			{
				type: 'confirm',
				name: 'barrel',
				message: 'create/update barrel file in parent folder?',
				default: true,
			},
		],
		actions: (data) => {
			const actions = [];
			// Generate component file
			actions.push({
				type: 'add',
				path: 'src/lib/components/{{folder}}/{{name}}/{{name}}.svelte',
				templateFile: 'templates/Component/Component.svelte.hbs',
			});
			// Generate index file
			actions.push({
				type: 'add',
				path: 'src/lib/components/{{folder}}/{{name}}/index.ts',
				templateFile: 'templates/Component/index.ts.hbs',
			});
			// Generate story file
			if (data.story) {
				actions.push({
					type: 'add',
					path: 'src/lib/components/{{folder}}/{{name}}/{{name}}.stories.svelte',
					templateFile: 'templates/Component/Component.stories.svelte.hbs',
				});
			}
			// Generate test file
			if (data.test) {
				actions.push({
					type: 'add',
					path: 'src/lib/components/{{folder}}/{{name}}/{{name}}.test.ts',
					templateFile: 'templates/Component/Component.test.ts.hbs',
				});
			}
			// Create or update the barrel file
			if (data.barrel) {
				const barrelExists = fs.existsSync(
					path.resolve(import.meta.dirname, `./src/lib/components/${data.folder}/index.ts`),
				);
				if (barrelExists) {
					actions.push({
						type: 'modify',
						pattern: /(\n\n*)$/g,
						path: 'src/lib/components/{{folder}}/index.ts',
						templateFile: 'templates/Component/barrel.ts.hbs',
					});
				} else {
					actions.push({
						type: 'add',
						path: 'src/lib/components/{{folder}}/index.ts',
						templateFile: 'templates/Component/barrel.ts.hbs',
					});
				}
			}
			return actions;
		},
	});
	plop.setGenerator('page', {
		description: 'a SvelteKit page',
		prompts: [
			{
				type: 'input',
				name: 'filename',
				message: 'page route (e.g. contact-us, docs/getting-started)',
			},
			{
				type: 'input',
				name: 'name',
				message: 'component name (e.g. ContactUs, GettingStarted)',
			},
			{
				type: 'confirm',
				name: 'test',
				message: 'generate a Playwright test?',
				default: true,
			},
		],
		actions: (data) => {
			const actions = [];
			// Generate page file
			actions.push({
				type: 'add',
				path: 'src/routes/{{filename}}/+page.svelte',
				templateFile: 'templates/Page/+page.svelte.hbs',
			});
			if (data.test) {
				// Generate Cypress test file
				actions.push({
					type: 'add',
					path: 'tests/{{filename}}.spec.ts',
					templateFile: 'templates/Page/page.spec.ts.hbs',
				});
			}
			return actions;
		},
	});
}
