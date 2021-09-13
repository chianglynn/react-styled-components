import React from 'react';
import styled, { css } from 'styled-components';

const fruits = ['orange', 'apple', 'banana', 'peach'];

const Item = styled.li`
    list-style-type: none;
    ${({ odd }) => odd ? css`
        padding: 1.5rem;
        font-size: 1.5rem;
        color: var(--color-white);
        background-color: red;
    ` : css`
        padding: 1rem;
        color: #222;        
    `}
`;

const List = () => {
    return (
        <ul>
            {fruits.map((item, index) => <Item key={index} odd={(index + 1) % 2 !== 0}>{item}</Item>)}
        </ul>
    );
};

export default List;