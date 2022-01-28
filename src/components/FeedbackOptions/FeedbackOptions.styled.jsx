import styled from '@emotion/styled';

export const Button = styled.button`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.8rem;
  padding: 1rem 3rem;
  border-radius: 1rem;
  margin-left: 2rem;
  background-color: #ffffff;

  &:hover {
    cursor: pointer;
    background-color: #1eff00;
  }

  &:active {
    transform: scale(0.9);
    color: #000000;
    border-color: #333232;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }
`;
