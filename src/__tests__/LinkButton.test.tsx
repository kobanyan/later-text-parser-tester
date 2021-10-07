import { render, screen, fireEvent } from '@testing-library/react';

import LinkButton from '../LinkButton';

const spyWindowOpen = jest.spyOn(window, 'open');

describe('LinkButton', () => {
  it('renders', () => {
    render(<LinkButton title="title" url="http://localhost" />);
    expect(screen.queryByRole('button', { name: 'title' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'title' }));
    expect(spyWindowOpen).toHaveBeenCalledWith('http://localhost', '_blank');
  });
});
