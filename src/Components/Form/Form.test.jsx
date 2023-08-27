import { test, describe, expect,vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import Form from './index'; 

describe('Form component', () => {
  test('calls handleApiCall with correct data on form submission', () => {
    const mockHandleApiCall = vi.fn();
    render(<Form handleApiCall={mockHandleApiCall} />);

    const urlInput = screen.getByPlaceholderText('Enter URL HERE');
    const goButton = screen.getByText('GO!', { name: /GO!/i });

    fireEvent.change(urlInput, { target: { value: 'https://example.com/api' } });
    fireEvent.click(goButton);

    expect(mockHandleApiCall).toHaveBeenCalledWith({
      method: 'GET',
      url: 'https://example.com/api',
    });
  });
});
///
