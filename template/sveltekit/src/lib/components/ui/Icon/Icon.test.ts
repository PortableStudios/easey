import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/svelte';

import { render } from '$lib/utils/testing';

import { Icon } from '.';

describe('<Icon />', () => {
	it('hidden to screen readers if it has no label', async () => {
		render(Icon, { props: { name: 'loader' } });

		const icon = screen.getByRole('graphics-symbol', { hidden: true });
		expect(icon).toHaveAttribute('aria-hidden', 'true');
	});

	it('visible to screen readers if it has a label', async () => {
		render(Icon, { props: { name: 'loader', label: 'Loading' } });

		const icon = screen.getByRole('graphics-symbol');
		expect(icon).toHaveAttribute('aria-hidden', 'false');
		expect(icon).toHaveAttribute('aria-label', 'Loading');
	});
});
