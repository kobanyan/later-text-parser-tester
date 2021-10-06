import { render, screen } from '@testing-library/react';

import Occurrences from '../Occurrences';

describe('Occurrences', () => {
  it('renders', () => {
    const occurrences = [new Date('2021-01-01'), new Date('2021-01-02')];
    render(<Occurrences occurrences={occurrences} />);
    expect(screen.queryByText('Occurrences')).toBeInTheDocument();
    expect(
      screen.queryByText(occurrences[0].toLocaleString())
    ).toBeInTheDocument();
    expect(
      screen.queryByText(occurrences[1].toLocaleString())
    ).toBeInTheDocument();
  });
});
