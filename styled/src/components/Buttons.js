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
    background-color: #645cff;
    cursor: pointer;
`;

export const HipsterButton = styled(DefaultButton)`
    width: 400px;
    color: #645cff;
    border: 1px solid #645cff;
    background-color: transparent;
`;