import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const HeaderMovie = styled.div`
    grid-area: headermovie;
    display: grid;
    grid-template-areas: "h2 button";
    align-items: center;
    grid-template-columns: auto 20.7rem;

    margin: 5rem 12.3rem 4rem 12.3rem;

    > h2 {
        font-size: 3.2rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: 400;
    }
    
    
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 12.3rem;
    padding-right: 10px;
    overflow: auto;

    height: 70rem;
    border-radius: 8px;

    

    
`;