import userEvent from '@testing-library/user-event';
import { render as standardRender } from '@testing-library/svelte';

// Utility to wrap the `@testing-library/svelte` render function
// Sets up and returns the userEvent object so we can simulate user interactions
// https://testing-library.com/docs/user-event/intro/#writing-tests-with-userevent
export const render = (...args: Parameters<typeof standardRender>) => {
	return {
		user: userEvent.setup(),
		...standardRender(...args),
	};
};
