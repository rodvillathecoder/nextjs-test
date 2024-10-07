import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  margin: 0 8px;
  border: none;
  border-radius: 4px;
  background-color: #fff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
