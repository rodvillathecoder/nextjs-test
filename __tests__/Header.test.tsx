import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../src/components/Header/Header';

describe('Header', () => {
  it('should call onSearch when input changes', () => {
    const mockOnSearch = jest.fn();
    const mockOnSort = jest.fn();

    const { getByPlaceholderText } = render(<Header onSearch={mockOnSearch} onSort={mockOnSort} />);

    const input = getByPlaceholderText('Buscar');
    fireEvent.change(input, { target: { value: 'camiseta' } });

    expect(mockOnSearch).toHaveBeenCalledWith('camiseta');
  });

  it('should call onSort when sorting buttons are clicked', () => {
    const mockOnSearch = jest.fn();
    const mockOnSort = jest.fn();

    const { getByAltText } = render(<Header onSearch={mockOnSearch} onSort={mockOnSort} />);

    fireEvent.click(getByAltText('Precio Ascendente'));
    expect(mockOnSort).toHaveBeenCalledWith('asc');

    fireEvent.click(getByAltText('Precio Descendente'));
    expect(mockOnSort).toHaveBeenCalledWith('desc');
  });
});
