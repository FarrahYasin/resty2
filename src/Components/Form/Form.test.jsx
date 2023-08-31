import { test, describe, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import Form from './index';

describe('Form component', () => {
  test('calls handleApiCall with correct data on form submission', () => {
    const mockHandleApiCall = vi.fn();
    const mockDispatch = vi.fn();

    render(<Form handleApiCall={mockHandleApiCall} dispatch={mockDispatch} state={{ method: 'GET', url: 'https://example.com/api' }} />)

    const urlInput = screen.getByPlaceholderText('Enter URL HERE');
    const goButton = screen.getByText('GO!');

    fireEvent.change(urlInput, { target: { value: 'https://example.com/api' } });
    fireEvent.click(goButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SET_URL',
      payload: 'https://example.com/api',
    });

    expect(mockHandleApiCall).toHaveBeenCalledWith({
      method: 'GET',
      url: 'https://example.com/api',
    });
  });
});
