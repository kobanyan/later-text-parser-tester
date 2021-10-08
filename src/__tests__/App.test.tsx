import { render, screen } from '@testing-library/react';

import App from '../App';
import packageJson from '../../package.json';

describe('App', () => {
  it('renders', () => {
    render(<App />);
    expect(
      screen.queryByText('@breejs/later Text Parser Tester')
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Open GitHub' })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Open @breejs/later Documents' })
    ).toBeInTheDocument();
    expect(screen.queryByLabelText('Text')).toBeInTheDocument();
    expect(screen.queryByLabelText('Count')).toBeInTheDocument();
    expect(screen.queryByText('Occurrences')).toBeInTheDocument();
    expect(
      screen.queryByText('Copyright © kobanyan 2021.')
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        `@breejs/later version: ${packageJson.dependencies['@breejs/later']}`
      )
    ).toBeInTheDocument();
  });
});
