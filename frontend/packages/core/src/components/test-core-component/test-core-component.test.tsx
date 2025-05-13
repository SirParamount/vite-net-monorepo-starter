import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';

describe('Core component tests', () => {
  it('should render without crashing', () => {
    const { container } = render(<div>Test Core Component</div>);
    expect(container).toBeTruthy();
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<div>Test Core Component</div>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
