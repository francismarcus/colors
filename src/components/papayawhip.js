import React from 'react'
import styled, { css } from "styled-components"

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: palevioletred;
  font-family: CerealExtra
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  text-align: center;
`;

const Button = styled.button`
    color: papayawhip;
    cursor: pointer;
    background-color: palevioletred;
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
        background-color: #fdbcb4;
    }
`;

const Papayawhip = () => {
    return (
        <Wrapper>
        <Title>
          Hello,
        </Title>
        <Button>Sign up</Button>
      </Wrapper>

    )
}
export default Papayawhip
