const superb = require('superb');

const stacks = [
  {
    name: 'Front End (Next.js, with Chakra UI)',
    value: 'nextjs',
  },
];

module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: 'What is the name of the new project',
        default: this.outFolder,
        filter: (val) => val.toLowerCase(),
      },
      {
        name: 'description',
        message: 'How would you describe the new project',
        default: `my ${superb.random()} project`,
      },
      {
        name: 'author',
        message:
          'What is your name and email? (e.g. John Smith <john@portable.com.au>)',
        default: `${this.gitUser.name} <${this.gitUser.email}>`,
        store: true,
      },
      {
        name: 'type',
        message: 'What is your stack?',
        type: 'list',
        choices: stacks,
      },
    ];
  },
  actions() {
    const { type, name, description, author } = this.answers;

    return [
      // Copy the common files over
      {
        type: 'add',
        files: '**',
        templateDir: './template/common',
      },
      // Copy specific stacks based on answers
      {
        type: 'add',
        files: '**',
        templateDir: './template/next-ts-chakra-ui',
        filters: {
          '.next/**': false,
          'node_modules/**': false,
          'storybook-static/**': false,
        },
        when: () => type === 'nextjs',
      },
      // Update package contents with answers
      {
        type: 'modify',
        files: 'package.json',
        handler(data) {
          return {
            name: name,
            description: description,
            author: author,
            contributors: [author],
            ...data,
          };
        },
      },
    ].filter((action) => !action.when || action.when());
  },
  async completed() {
    this.gitInit();
    this.showProjectTips();
  },
};
