import React from 'react';
import styled from 'styled-components';
import ItemCard from './ItemCard';
import { useCloths } from '../../hooks/useCloths';

const ItemListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

interface ListClothsProps {
  searchTerm: string;
  sortOrder: 'asc' | 'desc';
}

const ListCloths: React.FC<ListClothsProps> = ({ searchTerm, sortOrder }) => {
  const { clothsData, loading, error } = useCloths();

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!clothsData || !clothsData.data.length) return <div>No hay productos disponibles</div>;

  const filteredCloths = clothsData.data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const sortedCloths = filteredCloths.sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);
    return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
  });

  return (
    <ItemListContainer>
      {sortedCloths.length > 0 ? (
        sortedCloths.map((item) => (
          <ItemCard
            key={item.id}
            image={item.imageUrl}
            name={item.name}
            price={item.price}
            discountPrice={item.discountPrice}
            subText={item.subText}
            onButtonClick={() => console.log(`Agregado: ${item.name}`)}
          />
        ))
      ) : (
        <div>No hay productos que coincidan con "{searchTerm}"</div>
      )}
    </ItemListContainer>
  );
};

export default ListCloths;
