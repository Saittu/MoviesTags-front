import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 14.4rem;

        background: ${({ theme }) => theme.COLORS.PINK_000};

        display: flex;
        align-items: center;
        padding: 0 12.4rem;
    }

    a > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2.4rem;
    }
`;

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;

    > div:nth-child(3){
        margin-top: 2.4rem
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -9.4rem auto 3.2rem;

    width: 18.6rem;
    height: 18.6rem;

    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        > input {
            display: none;
        }

        > svg {
            width: 2rem;
            height: 2rem;
            color: ${({ theme }) => theme.COLORS.BLACK_300};
        }

    }
`;