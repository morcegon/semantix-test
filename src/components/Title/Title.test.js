import { render } from '@testing-library/react';
import React from 'react';

import Title from '.';

describe('title component', () => {
  it('can renders a title with label', () => {
    expect.hasAssertions();

    const titleText = 'Title label';

    const { getByText } = render(<Title>{titleText}</Title>);

    const title = getByText(/title label/i);

    expect(title).toBeInTheDocument();
  });
});
