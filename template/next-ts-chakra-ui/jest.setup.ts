import { cleanup } from '@testing-library/react';
import { setGlobalConfig } from '@storybook/testing-react';
import '@testing-library/jest-dom/extend-expect';

import * as globalStorybookConfig from './.storybook/preview';

setGlobalConfig(globalStorybookConfig);

afterEach(() => {
  cleanup();
});
