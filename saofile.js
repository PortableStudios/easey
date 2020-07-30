const superb = require('superb');

const STACKS = [
  {
    name: 'Front end (Next.js, with Chakra UI)',
    value: 'CHAKRA',
  },
  {
    name: 'API (coming soon)',
    value: 'API',
  },
  {
    name: 'Fullstack (coming soon)',
    value: 'FS',
  },
];

module.exports = {
  prompts() {
    return [
      {
        name: 'meta.name',
        message: 'What is the name of the new project',
        default: this.outFolder,
        filter: (val) => val.toLowerCase(),
      },
      {
        name: 'meta.description',
        message: 'How would you describe the new project',
        default: `my ${superb()} project`,
      },
      {
        name: 'meta.author',
        message: 'What is your email?',
        default: this.gitUser.email,
        store: true,
      },
      {
        name: 'stack.type',
        message: 'What is your stack?',
        type: 'list',
        choices: STACKS,
      },
    ];
  },
  actions() {
    const { meta, stack } = this.answers;

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
        when: () => ['CHAKRA'].includes(stack.type),
      },
      // Update package contents with answers
      {
        type: 'modify',
        files: 'package.json',
        handler(data) {
          return {
            name: meta.name,
            description: meta.description,
            author: `<${meta.author}>`,
            ...data,
          };
        },
      },
    ].filter((action) => !action.when || action.when());
  },
  async completed() {
    this.gitInit();
    await this.npmInstall();
    this.showProjectTips();
  },
};
