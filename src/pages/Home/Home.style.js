import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: rgb(36, 36, 36);
    margin: 0;
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 3rem;
    padding: 6rem 3.5rem;
    box-shadow: 0 0.4rem 0.8rem 0 rgb(0 0 0 / 20%), 0 0.6rem 2rem 0 rgb(0 0 0 / 19%);
    border-radius: 1.2rem;
    height: fit-content;
    background-color: rgb(16, 15, 16);
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #fffffff5;
    margin-bottom: 3rem;
`;

export const Input = styled.input`
    height: 2.8rem;
    padding: 0 0.5rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    height: 2.8rem;
    width: 10rem;

    font-family: "Open Sans", "Roboto", sans-serif;
    font-size: 1.2rem;
    font-weight: 600;

    border: 0.1rem solid #3781f1;
    border-radius: 0.5rem;
    background: #3781f1;
    color: #fffffff5;
`;

export const Span = styled.span`
    display: block;
    font-size: 1rem;
    color: #fffffff5;
    font-family: "Open Sans", "Roboto", sans-serif;
    font-weight: 600;
    margin-top: 1rem;
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: 1.4rem;
    color: red;
    font-family: sans-serif;
    font-weight: 600;
    margin-top: 1rem;
`;
