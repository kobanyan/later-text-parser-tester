import { render, screen, fireEvent } from '@testing-library/react';

import Main from '../Main';

describe('Main', () => {
  describe('render', () => {
    it('renders', () => {
      render(<Main />);
      expect(screen.queryByLabelText('Text')).toBeInTheDocument();
      expect(screen.queryByLabelText('Count')).toBeInTheDocument();
      expect(screen.queryByText('Occurrences')).toBeInTheDocument();
      expect(screen.queryByText('Error')).not.toBeInTheDocument();
    });
  });
  describe('change text', () => {
    it('renders', () => {
      render(<Main />);
      expect(screen.queryByText('Occurrences')).toBeInTheDocument();
      expect(screen.queryByText('Error')).not.toBeInTheDocument();
      fireEvent.input(screen.getByLabelText('Text'), {
        target: { value: 'error' },
      });
      expect(screen.queryByText('Occurrences')).not.toBeInTheDocument();
      expect(screen.queryByText('Error')).toBeInTheDocument();
    });
  });
  describe('change count', () => {
    it('renders', () => {
      render(<Main />);
      expect(screen.queryByText('Occurrences')).toBeInTheDocument();
      expect(screen.queryByText('Error')).not.toBeInTheDocument();
      fireEvent.input(screen.getByLabelText('Count'), {
        target: { value: '2' },
      });
      expect(screen.queryByText('Occurrences')).toBeInTheDocument();
      expect(screen.queryByText('Error')).not.toBeInTheDocument();
    });
  });
});
