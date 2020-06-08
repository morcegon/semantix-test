import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('app component', () => {
  it('can renders learn react link', () => {
    expect.hasAssertions();

    const { container } = render(<App />);
    const linkElement = container.querySelector('main');

    expect(linkElement).toBeInTheDocument();
  });
});
