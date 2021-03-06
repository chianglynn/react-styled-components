import React from 'react';
import styled from 'styled-components';
import { setupBoarder } from './utils';

// Method 1
// const ComplexTitle = ({ title }) => {
// return (
//     <Wrapper className="bg-grey">
//         <h1>{title}</h1>
//         <div className="underline"></div>
//     </Wrapper>
// );
// Method 2
const ComplexTitle = ({ title, className }) => {
    return (
        <div className={`${className} bg-grey`}>
            <h1>{title}</h1>
            <div className="underline"></div>
            {/* <div className="border"></div> */}
        </div>
    );
};

// Method 1
// const Wrapper = styled.div`
// Method 2
const Wrapper = styled(ComplexTitle)`
    h1{
        text-align: center;
        text-transform: capitalize;
    }

    .underline{
        margin: 0 auto;
        width: 5rem;
        height: .25rem;
        background-color: var(--color-primary);
    }

    .border{
        height: 10px;
        border: ${setupBoarder({ width: 5, color: 'red' })};
    }
`;

// Method 1
// export default ComplexTitle;
// Method 2
export default Wrapper;