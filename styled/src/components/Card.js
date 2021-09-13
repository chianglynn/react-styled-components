import React from 'react';
import styled from 'styled-components';

const Card = () => {
    return (
        <StyledCard>
            <img src="https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160" alt="product" />
            <footer>
                <h4>product name</h4>
                <p>$15</p>
            </footer>
        </StyledCard>
    );
};

const StyledCard = styled.article`
    width: 90vw;
    max-width: 300px;
    border-radius: .25rem;
    background-color: var(--color-white);
    transition: all .5s ease-in-out;

    img{
        width: 100%;
        border-top-left-radius: .25rem;
        border-top-right-radius: .25rem;
    }

    footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;

        h4 {
            text-transform: capitalize;

            /* &:hover{
                color: green;
            } */

            &::before{
                content: 'Name: ';
            }
        }

        /* h4:hover{
            color: green;
        } */

        p{
            font-weight: 700;
            color: var(--color-primary);
        }
    }

    &:hover {
        box-shadow: 0 3px 3px #222;
        cursor: pointer;
    }

    @media (min-width: 768px){
        max-width: 600px;
    }
`;

export default Card;