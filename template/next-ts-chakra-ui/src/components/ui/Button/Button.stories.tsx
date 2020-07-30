import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Flex, Stack } from '@chakra-ui/core';

import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
};

const onClick = action('click');

export const Black = () => {
  const label = text('Label', 'Next');
  return <Button onClick={onClick}>{label}</Button>;
};

export const White = () => {
  const label = text('Label', 'Back');
  return (
    <Button variant="white" onClick={onClick}>
      {label}
    </Button>
  );
};

export const InContainer = () => {
  return (
    <Flex height="100%">
      <Stack margin="auto" spacing={4} textAlign="center" width="200px">
        <Button onClick={onClick}>Next</Button>
        <Button variant="white" onClick={onClick}>
          Back
        </Button>
      </Stack>
    </Flex>
  );
};
