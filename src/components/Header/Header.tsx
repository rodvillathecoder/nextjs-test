import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }
`;

const SearchbarContainer = styled.div`
  display: flex;
  width: 75%;
  border: 1px solid #30332e;
  border-radius: 6px;
  margin-bottom: 16px;
  padding: 8px; /* Añadir un poco de padding */

  @media (min-width: 768px) {
    margin-bottom: 0;
    flex: 1;
    justify-content: flex-start;
    max-width: 50%;
  }
`;
const InputField = styled.input`
  flex: 1;
  border: none;
  background-color: transparent; /* Fondo transparente */
  color: black; /* Color del texto del input */
  padding: 8px;
  margin-left: 8px; /* Espacio entre el ícono y el input */

  &::placeholder {
    color: gray; /* Color del texto del placeholder */
  }

  &:focus {
    outline: none; /* Quitar el contorno al hacer foco */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    justify-content: flex-end;
  }
`;

const Separator = styled.hr`
  border: 0;
  justify-content: center;
  align-content: center;
  height: 1px;
  background: #ccc;
  margin: 16px 0;
  width: 90%;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

interface HeaderProps {
  onSearch: (term: string) => void;
  onSort: (order: 'asc' | 'desc') => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onSort }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <HeaderContainer>
      {isMobile ? (
        <>
          <ButtonContainer>
            <Button onClick={() => onSort('desc')}>
              {' '}
              <Icon src="/minus.svg" alt="Precio Descendente" />
            </Button>
            <Button onClick={() => onSort('asc')}>
              {' '}
              <Icon src="/plus.svg" alt="Precio Ascendente" />
            </Button>
          </ButtonContainer>
          <SearchbarContainer>
            <Icon src="/search.svg" alt="Buscar" />
            <InputField placeholder="Buscar" onChange={handleInputChange} value={searchTerm} />
          </SearchbarContainer>
          <Separator />
        </>
      ) : (
        <>
          <SearchbarContainer>
            <Icon src="/search.svg" alt="Buscar" />
            <InputField placeholder="Buscar" onChange={handleInputChange} value={searchTerm} />
          </SearchbarContainer>
          <ButtonContainer>
            <Button onClick={() => onSort('desc')}>
              <Icon src="/minus.svg" alt="Precio Descendente" />
            </Button>
            <Button onClick={() => onSort('asc')}>
              <Icon src="/plus.svg" alt="Precio Ascendente" />
            </Button>
          </ButtonContainer>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
