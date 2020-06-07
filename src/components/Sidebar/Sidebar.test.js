import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import Sidebar from '.';
import App from '../../App';

const history = createMemoryHistory();

describe('sidebar component', () => {
  it('can renders left positioned sidebar', () => {
    expect.hasAssertions();

    const { container } = render(<App />);
    const sidebar = container.querySelector('aside');

    expect(sidebar).toBeInTheDocument();
  });

  it('can renders sidebar title', () => {
    expect.hasAssertions();

    const { getByText } = render(
      <Router history={history}>
        <Sidebar />
      </Router>,
    );
    const title = getByText(/semantix/i);

    expect(title).toBeInTheDocument();
  });

  it('can renders sidebar links', () => {
    expect.hasAssertions();

    const { container } = render(
      <Router history={history}>
        <Sidebar />
      </Router>,
    );
    const links = container.querySelectorAll('a');

    expect(links).toHaveLength(2);
    links.entries((link) => expect(link).toBeInTheDocument());
  });
});
