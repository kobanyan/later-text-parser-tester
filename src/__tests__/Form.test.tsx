import { render, screen, fireEvent } from '@testing-library/react';

import Form from '../Form';

describe('Form', () => {
  const mockedOnTextChange = jest.fn();
  const mockedOnCountChange = jest.fn();
  const renderComponent = () =>
    render(
      <Form
        text="text"
        count={2}
        onTextChange={mockedOnTextChange}
        onCountChange={mockedOnCountChange}
      />
    );
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('render', () => {
    it('renders', () => {
      renderComponent();
      expect(screen.queryByLabelText('Text')).toBeInTheDocument();
      expect(screen.queryByLabelText('Count')).toBeInTheDocument();
      expect(screen.getByLabelText('Text')).toHaveValue('text');
      expect(screen.getByLabelText('Count')).toHaveValue(2);
    });
  });
  describe('change text', () => {
    it('calls onTextChange', () => {
      renderComponent();
      expect(mockedOnTextChange).toHaveBeenCalledTimes(0);
      fireEvent.input(screen.getByLabelText('Text'), {
        target: { value: 'new-text' },
      });
      expect(mockedOnTextChange).toHaveBeenCalledTimes(1);
    });
  });
  describe('change count', () => {
    it('calls onCountChange', () => {
      renderComponent();
      expect(mockedOnCountChange).toHaveBeenCalledTimes(0);
      fireEvent.input(screen.getByLabelText('Count'), {
        target: { value: '3' },
      });
      expect(mockedOnCountChange).toHaveBeenCalledTimes(1);
    });
  });
});
