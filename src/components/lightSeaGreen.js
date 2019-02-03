import React from 'react'
import styled, { css } from "styled-components"

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: white;
  font-family: CerealExtra
`;

const Wrapper = styled.section`
  padding: 4em;
  background: #1ABC9C;
  text-align: center;
`;
// #00A699 = Airbnb
// #69D7C1; = Soft

const Button = styled.button`
    color: #00A699
    cursor: pointer;
    background-color: white;
    line-height: normal;
    margin: 1% 3% 0 0.5%;
    padding: 0.5% 1% 0.5% 1%;
    font-weight: 100;
    font-family: CerealBook;
    border: transparent;
    border-radius: 3px;
    font-size: 16px;
    text-decoration: one;

    ${props => props.right && css`
        float: right;
    `}
    &:hover {
        background-color: #D7DBDD;
    }
`;

const Lightseagreen = () => {
    return (
        <Wrapper>
        <Title>
          Hello,
        </Title>
        <Button>Sign up</Button>
      </Wrapper>

    )
}
export default Lightseagreen
