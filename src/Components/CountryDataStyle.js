import styled from "styled-components";

export const CountryWrap = styled.div`
    height: calc(100vh - 5rem);
    overflow-y: auto;
    padding: 0 2rem;
    width: var(--sidebar-width);
    & .country-details img {
        max-width: 100%;
    }
    & .country-details h2 {
        margin-bottom: 10px;
        text-transform: uppercase;
        text-align: center;
        font-size: 30px;
        margin-top: 0;
    } 
    & .country-details * {
        word-break: break-all;
    }
    @media (max-width: 768px) {
        width:100%;
        height: calc(50vh - 0.1rem);
        & .country-details img {
            width: 100%;
            height: 7rem;
            display: block;
            padding: 1rem;
            background: #e1e1e1;
            object-fit: contain;
            border-radius: 5px;
        }
    }
`