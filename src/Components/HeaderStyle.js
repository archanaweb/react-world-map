import styled from "styled-components";

export const HeaderWrapper = styled.header`
    display: flex;
    align-items:center;
    justify-content: center;
    position: relative;
    z-index: 9999;
    padding: 1.32rem 0;
    & .searchInput{
        width: 50rem;
    }
    @media (max-width: 768px) {
        padding: 1.32rem 1rem;
        & .searchInput{
            width: 100%;
        }
    }
`