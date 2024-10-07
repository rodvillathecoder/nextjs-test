import React, { useState } from 'react';
import Header from 'components/Header/Header';
import ListCloths from 'components/ListCloths/ItemList';
import { useCloths } from 'hooks/useCloths';
import { Cloth } from 'constants/types/cloths';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const { clothsData } = useCloths();
  const cloths: Cloth[] = clothsData ? clothsData.data : [];

  const filteredCloths = cloths
    .filter((cloth) => cloth.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleSort = (order: 'asc' | 'desc') => {
    setSortOrder(order);
  };

  return (
    <>
      <Header onSearch={handleSearch} onSort={handleSort} />
      <ListCloths searchTerm={searchTerm} sortOrder={sortOrder} />{' '}
    </>
  );
};

export default HomePage;
