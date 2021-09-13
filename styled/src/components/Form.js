import React from 'react';
import styled, { css } from 'styled-components/macro';

const Button = styled.button.attrs(props => {
    return { type: props.type || 'button' };
})`
    padding: .25rem;
    color: var(--color-white);
    border: none;
    background-color: var(--color-primary);
    cursor: pointer;
    ${({ type }) => {
        return type === 'submit' && css`
            display: block;
            margin-top: 1rem;
            width: 100%;
            border-radius: .25rem;
        `;
    }}
`;

const BasicInput = styled.input.attrs(props => {
    return { type: props.type || 'text', placeholder: props.placeholder || 'please enter a value' };
})`
    box-sizing: border-box;
    padding: .5rem;
    margin-top: 1rem;
    width: 100%;
    border: 2px solid #f2f4f8;
    border-radius: .25rem;
`;

const Form = () => {
    return (
        <div>
            <h2>random</h2>
            <Button>click me</Button>
            <form css={`
                padding: 2rem;
                margin-top: 1rem;
                width: 300px;
                background-color: #fff;
            `}>
                <h2>form</h2>
                <BasicInput />
                <BasicInput type="email" placeholder="please enter your email" />
                <Button type="submit">submit</Button>
            </form>
        </div>
    );
};

export default Form;