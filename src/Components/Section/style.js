import styled from "styled-components";

export const Container = styled.section`
    margin: 2.8rem 0;
    display: grid;
    grid-template-areas: "title" "children";
    

    > h2 {
        grid-area: title;
        color: ${({ theme }) => theme.COLORS.WHITE};
        padding-bottom: 1.2rem;
        margin-bottom: 2.8rem;

        font-size: 2rem;
        font-weight: 400;
    }
`;