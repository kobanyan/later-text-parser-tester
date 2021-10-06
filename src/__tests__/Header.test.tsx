import { render, screen } from '@testing-library/react';

import Header from '../Header';

describe('Header', () => {
  it('renders', () => {
    render(<Header />);
    expect(
      screen.queryByText('@breejs/later Text Parser Tester')
    ).toBeInTheDocument();
    expect(screen.queryByText('Docs')).toBeInTheDocument();
  });
});
