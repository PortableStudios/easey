import React from 'react';

import { render } from '@/utils/testing';
import Button from './Button';

describe('Button', () => {
  test('displays label', () => {
    const text = 'Get started';
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>{text}</Button>);

    getByText(text);
  });

  test('handles click', () => {
    const testId = 'button';
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button data-testid={testId} onClick={onClick}>
        Get started
      </Button>
    );

    getByTestId(testId).click();
    expect(onClick).toHaveBeenCalled();
  });

  test('can render a div', () => {
    const testId = 'button';
    const { getByTestId } = render(
      <Button data-testid={testId} as="div">
        Get started
      </Button>
    );

    const button = getByTestId(testId);
    expect(button).toBeInstanceOf(HTMLDivElement);
  });

  test('can render a link', () => {
    const testId = 'button';
    const href = '/contact-us';
    const { getByTestId } = render(
      <Button data-testid={testId} as="a" href={href}>
        Get started
      </Button>
    );

    const button = getByTestId(testId);
    expect(button).toBeInstanceOf(HTMLAnchorElement);
    expect(button).toHaveAttribute('href', href);
  });
});
