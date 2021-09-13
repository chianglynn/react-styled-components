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
    display: inline-block;
    padding: 1rem;
    width: 150px;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    background-color: transparent;

    &:not(:last-child){
        margin-right: 1rem;
    }

    /* <a> tag */
    box-sizing: border-box;
    font-size: 1rem;
    text-align: center;
    text-decoration: none;
`;