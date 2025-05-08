import { expect } from 'vitest';
import * as matchers from 'vitest-axe/matchers';

expect.extend(matchers);

// This is a workaround for the issue where vitest tries to call getContext on a canvas element
// that is not actually a canvas element, leading to an error.
// jsdom (which powers vitest) doesn’t implement canvas APIs by default
Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
  value: () => null
});