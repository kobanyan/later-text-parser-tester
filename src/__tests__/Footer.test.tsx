import { render, screen } from '@testing-library/react';

import Footer from '../Footer';
import packageJson from '../../package.json';

describe('Footer', () => {
  it('renders', () => {
    render(<Footer />);
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
