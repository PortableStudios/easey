const fs = require('fs');
const path = require('path');

module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  plop.setGenerator('component', {
    description: 'a React component',
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
        path: 'src/components/{{folder}}/{{name}}/{{name}}.tsx',
        templateFile: 'templates/Component/Component.tsx.hbs',
      });
      // Generate index file
      actions.push({
        type: 'add',
        path: 'src/components/{{folder}}/{{name}}/index.ts',
        templateFile: 'templates/Component/index.ts.hbs',
      });
      // Generate story file
      if (data.story) {
        actions.push({
          type: 'add',
          path: 'src/components/{{folder}}/{{name}}/{{name}}.stories.tsx',
          templateFile: 'templates/Component/Component.stories.tsx.hbs',
        });
      }
      // Generate test file
      if (data.test) {
        actions.push({
          type: 'add',
          path: 'src/components/{{folder}}/{{name}}/{{name}}.test.tsx',
          templateFile: 'templates/Component/Component.test.tsx.hbs',
        });
      }
      // Create or update the barrel file
      if (data.barrel) {
        const barrelExists = fs.existsSync(
          path.resolve(__dirname, `./src/components/${data.folder}/index.ts`)
        );
        if (barrelExists) {
          actions.push({
            type: 'modify',
            pattern: /(\n\n*)$/g,
            path: 'src/components/{{folder}}/index.ts',
            templateFile: 'templates/Component/barrel.ts.hbs',
          });
        } else {
          actions.push({
            type: 'add',
            path: 'src/components/{{folder}}/index.ts',
            templateFile: 'templates/Component/barrel.ts.hbs',
          });
        }
      }
      return actions;
    },
  });
  plop.setGenerator('page', {
    description: 'a Next.js page',
    prompts: [
      {
        type: 'input',
        name: 'filename',
        message: 'page file name (e.g. contact-us, docs/getting-started)',
      },
      {
        type: 'input',
        name: 'name',
        message: 'component name (e.g. ContactUs, GettingStarted)',
      },
      {
        type: 'confirm',
        name: 'test',
        message: 'generate a Cypress test?',
        default: true,
      },
    ],
    actions: (data) => {
      const actions = [];
      // Generate page file
      actions.push({
        type: 'add',
        path: 'pages/{{filename}}.tsx',
        templateFile: 'templates/Page/Page.tsx.hbs',
      });
      if (data.test) {
        // Calculate necessary `../` occurences for relative import in template
        const upDir = data.filename.split('/');
        // Generate Cypress test file
        actions.push({
          type: 'add',
          path: 'cypress/integration/{{filename}}.spec.ts',
          templateFile: 'templates/Page/Page.spec.ts.hbs',
          data: { upDir },
        });
      }
      return actions;
    },
  });
};
