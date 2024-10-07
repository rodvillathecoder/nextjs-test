import React from 'react';
import { render } from '@testing-library/react';
import ListCloths from '../src/components/ListCloths/ItemList';
import { useCloths } from '../src/hooks/useCloths';

jest.mock('../src/hooks/useCloths');

describe('ListCloths', () => {
  const mockClothsData = {
    data: [
      {
        id: '1',
        name: 'Bañador Niño bermuda combinado',
        price: '18.99€',
        discountPrice: '13.29€ (-20%)',
        subText: 'más colores',
        imageUrl:
          'https://tortugablava.es/17261-thickbox_default/banador-nino-bermuda-combinado.jpg',
      },
      {
        id: '2',
        name: 'Pantalon felpa contraste niño',
        price: '27.99€',
        discountPrice: null,
        subText: 'más colores',
        imageUrl:
          'https://tortugablava.es/14372-thickbox_default/pantalon-felpa-contraste-plan-de-mayoral-para-nino-modelo-7546.jpg',
      },
    ],
  };

  beforeEach(() => {
    (useCloths as jest.Mock).mockReturnValue({
      clothsData: mockClothsData,
      loading: false,
      error: null,
    });
  });

  it('should render loading state', () => {
    (useCloths as jest.Mock).mockReturnValueOnce({
      clothsData: null,
      loading: true,
      error: null,
    });

    const { getByText } = render(<ListCloths searchTerm="" sortOrder="asc" />);
    expect(getByText('Cargando...')).toBeInTheDocument();
  });

  it('should render error state', () => {
    (useCloths as jest.Mock).mockReturnValueOnce({
      clothsData: null,
      loading: false,
      error: 'Error al cargar los productos',
    });

    const { getByText } = render(<ListCloths searchTerm="" sortOrder="asc" />);
    expect(getByText('Error: Error al cargar los productos')).toBeInTheDocument();
  });

  it('should display products based on search term', () => {
    const { getByText, queryByText } = render(<ListCloths searchTerm="bañador" sortOrder="asc" />);
    expect(getByText('Bañador Niño bermuda combinado')).toBeInTheDocument();
    expect(queryByText('Pantalon felpa contraste niño')).not.toBeInTheDocument();
  });

  it('should sort products correctly', () => {
    const { getByText } = render(<ListCloths searchTerm="" sortOrder="asc" />);

    expect(getByText('Bañador Niño bermuda combinado')).toBeInTheDocument();
    expect(getByText('Pantalon felpa contraste niño')).toBeInTheDocument();
  });
});
