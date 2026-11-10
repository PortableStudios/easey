import { cleanup } from '@testing-library/react';
import { setProjectAnnotations } from '@storybook/react';
import '@testing-library/jest-dom';

import globalStorybookConfig from './.storybook/preview';

setProjectAnnotations(globalStorybookConfig);

afterEach(() => {
  cleanup();
});
