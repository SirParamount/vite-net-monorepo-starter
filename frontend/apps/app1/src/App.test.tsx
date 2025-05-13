import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { describe, it, expect } from 'vitest';
import { App1 } from './App1';

describe('App accessibility tests', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<App1 />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
