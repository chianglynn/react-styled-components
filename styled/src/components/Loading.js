import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
    to{
        transform: rotate(360deg);
    }
`;

const Loading = styled.div`
    width: 6rem;
    height: 6rem;
    border: 5px solid #ccc;
    border-top-color: var(--color-primary);
    border-radius: 50%;
    animation: ${spinner} .6s linear infinite;
`;

export default Loading;