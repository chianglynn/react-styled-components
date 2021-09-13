import styled from 'styled-components';

// tagged template literal
const BasicTitle = styled.h1`
    /* color: ${props => props.special && 'red'}; */
    color: ${({ special }) => special ? 'red' : 'blue'};
    text-align: center;
    text-transform: capitalize;
`;

export default BasicTitle;