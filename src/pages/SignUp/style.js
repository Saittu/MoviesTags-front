import styled from "styled-components";
import BackgroundImg from "../../assets/BackgroundImg.jpg"

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 12.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;



    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 4.8rem;
        font-weight: 700;

    }

    > p { 
        color: ${({ theme }) => theme.COLORS.GRAY_050};
        font-size: 1.4rem;

        
    }

    > h2 {
        margin: 4.8rem 0;
        font-weight: 500;
        font-size: 2.4rem;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${({ theme }) => theme.COLORS.PINK};
        margin-top: 6.2rem;
        text-align: center;

        > svg {
            font-size: 2rem;
            margin-right: 8px
        }
    }

`;

export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundImg}) no-repeat center center;
    background-size: cover;
    opacity: 0.4;
`;