import '@testing-library/jest-dom';
import { describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/svelte';

import { render } from '$lib/utils/testing';

import { Button } from '.';

describe('<Button />', () => {
	it('fires click event when pressed', async () => {
		const { component, user } = render(Button);

		const handleClick = vi.fn();
		component.$on('click', handleClick);

		await user.click(screen.getByRole('button'));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('renders a link when passed a href', async () => {
		render(Button, { props: { href: 'https://www.google.com' } });

		expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.google.com');
	});

	// Ensure we use `aria-disabled` instead of `disabled` for accessibility
	// Why? See: https://a11y-101.com/development/aria-disabled
	it('disables a button using the `aria-disabled` property instead of `disabled`', async () => {
		render(Button, { props: { disabled: true } });

		expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
		expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
	});
});
