import { render } from '@testing-library/react';
import React from 'react';

import Card from '.';

describe('card component', () => {
  it('can renders a children component inside it', () => {
    expect.hasAssertions();

    const childrenNode = <strong>Test</strong>;

    const { container } = render(<Card>{childrenNode}</Card>);
    const strong = container.querySelector('strong');

    expect(strong).toBeInTheDocument();
  });
});
