import styled from 'styled-components';

export const DefaultButton = styled.button`
    display: block;
    padding: .25rem;
    margin: 1rem auto;
    width: 200px;
    color: #fff;
    text-transform: capitalize;
    border: none;
    border-radius: .25rem;
    background-color: var(--color-primary);
    cursor: pointer;
`;

export const HipsterButton = styled(DefaultButton)`
    width: 400px;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    background-color: transparent;
`;