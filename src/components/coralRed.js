import React from 'react'
import styled, { css } from "styled-components"

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: black;
  font-family: CerealExtra
`;

const Wrapper = styled.section`
  padding: 4em;
  background: #fc4445;
  text-align: center;
`;

const Button = styled.button`
    color: white;
    cursor: pointer;
    background-color: black;
    line-height: normal;
    margin: 1% 3% 0 0.5%;
    padding: 0.5% 1% 0.5% 1%;
    font-weight: 100;
    font-family: CerealBook
    border: transparent;
    border-radius: 3px;
    font-size: 16px;
    text-decoration: one;

    ${props => props.right && css`
        float: right;
    `}
    &:hover {
        background-color: #e55448;
    }
`;

const Coralred = () => {
    return (
        <Wrapper>
        <Title>
          Hello,
        </Title>
        <Button>Sign up</Button>
      </Wrapper>

    )
}
export default Coralred
