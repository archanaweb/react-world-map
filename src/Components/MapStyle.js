import styled from "styled-components";


export const MapWrapper = styled.div`
        --sidebar-width: 20rem;
        display: flex;

    & .leaflet-container {
        width: calc(100% - var(--sidebar-width));
        height: calc(100vh - 5rem)
    }
    @media (max-width: 768px) {
        flex-direction: column;
        & .leaflet-container{
            width: 100%;
            height: calc(50vh - 5rem);
        }
    }

`