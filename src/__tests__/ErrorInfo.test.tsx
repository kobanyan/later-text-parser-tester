import { render, screen } from '@testing-library/react';

import ErrorInfo from '../ErrorInfo';

describe('ErrorInfo', () => {
  describe('error is 0', () => {
    it('renders', () => {
      render(<ErrorInfo text="ever" error={0} />);
      expect(screen.queryByText('Error')).toBeInTheDocument();
      expect(screen.getByTestId('text')).toHaveTextContent('ever');
      expect(screen.getByTestId('error').textContent).toEqual('^');
    });
  });
  describe('error is text.length', () => {
    it('renders', () => {
      render(<ErrorInfo text="every" error={5} />);
      expect(screen.getByTestId('text')).toHaveTextContent('every');
      expect(screen.getByTestId('error').textContent).toEqual(
        '\u00A0\u00A0\u00A0\u00A0\u00A0^'
      );
    });
  });
});
