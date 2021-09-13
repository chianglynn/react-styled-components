import React from 'react';
import styled, { css } from 'styled-components';

const Product = ({ name, price }) => {
    return (
        <Wrapper price={price}>
            <h4>{name}</h4>
            <p>${price}</p>
        </Wrapper>
    );
};

const Wrapper = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
    width: 300px;
    border-radius: .25rem;
    background-color: var(--color-white);

    h4{
        text-transform: capitalize;
    }

    p{
        color: ${({ price }) => {
        if (price < 100) return 'green';
        if (price > 500) return 'red';
        return '#222';
    }};
    }
`;

export default Product;