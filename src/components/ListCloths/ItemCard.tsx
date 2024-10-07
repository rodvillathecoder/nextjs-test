import React from 'react';
import styled from 'styled-components';

interface ItemCardProps {
  image: string;
  name: string;
  price: string;
  discountPrice?: string;
  subText?: string;
  onButtonClick: () => void;
}

const CardContainer = styled.div`
  border: 1px solid #2b74cc;
  border-radius: 6px;
  padding: 16px;
  text-align: center;
  transition: box-shadow 0.3s;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  min-width: 0;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
`;

const ProductImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const NameContainer = styled.div``;

const ProductName = styled.h3`
  font-size: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  box-sizing: border-box;
  min-width: 0;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 8px 0;
  height: 5rem;
`;

const Price = styled.p<{ $isDiscounted?: boolean }>`
  font-size: 1rem;
  color: #333;
  text-decoration: ${({ $isDiscounted }) => ($isDiscounted ? 'line-through' : 'none')};
`;

const DiscountPrice = styled.p`
  font-size: 1rem;
  color: red;
  margin-top: 4px;
`;

const SubTextContainer = styled.div`
  height: 17px;
`;

const SubText = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #0070f3;
  color: white;
  cursor: pointer;
  margin-top: 48px;

  &:hover {
    background-color: #005bb5;
  }
`;

const ItemCard: React.FC<ItemCardProps> = ({
  image,
  name,
  price,
  discountPrice,
  subText,
  onButtonClick,
}) => {
  const isDiscounted = !!discountPrice;

  return (
    <CardContainer>
      <ProductImageContainer>
        <ProductImage src={image} alt={name} />
      </ProductImageContainer>
      <NameContainer>
        <ProductName>{name}</ProductName>
      </NameContainer>
      <PriceContainer>
        <Price $isDiscounted={isDiscounted}>{price}</Price>
        {isDiscounted && <DiscountPrice>{discountPrice}</DiscountPrice>}
      </PriceContainer>
      <SubTextContainer>{subText && <SubText>{subText}</SubText>}</SubTextContainer>
      <Button onClick={onButtonClick}>AÑADIR</Button>
    </CardContainer>
  );
};

export default ItemCard;
