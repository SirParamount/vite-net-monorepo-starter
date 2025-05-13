import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { describe, it, expect } from 'vitest';
import { App2 } from './App2';

describe('App2 accessibility tests', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<App2 />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
