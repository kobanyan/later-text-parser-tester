import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it('renders', () => {
    render(<App />);
    expect(
      screen.queryByText('@breejs/later Text Parser Tester')
    ).toBeInTheDocument();
    expect(screen.queryByText('Docs')).toBeInTheDocument();
    expect(screen.queryByLabelText('Text')).toBeInTheDocument();
    expect(screen.queryByLabelText('Count')).toBeInTheDocument();
    expect(screen.queryByText('Occurrences')).toBeInTheDocument();
    expect(
      screen.queryByText('Copyright © kobanyan 2021.')
    ).toBeInTheDocument();
  });
});
