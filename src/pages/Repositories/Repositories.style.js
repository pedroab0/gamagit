import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
    background-color: rgb(36, 36, 36);
    font-size: auto;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #fffffff5;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0 2rem;
    font-family: sans-serif;
`;

export const ListItem = styled.li`
    margin: 0.5rem 0;
    background-color: rgb(16, 15, 16);
    color: #ffffff;
    padding: 0.5rem;
    border-radius: 0.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LinkHome = styled(Link)`
    // display: block;
    // width: 4rem;
    text-align: center;
    margin: 2rem auto;
    // padding: 0.5rem 0;
    // background-color: #000000;
    // color: #ffffff;
    // font-family: sans-serif;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    height: 2.5rem;
    width: 10rem;

    font-family: "Open Sans", "Roboto", sans-serif;
    font-size: 1.2rem;
    font-weight: 600;

    border: 0.1rem solid #3781f1;
    border-radius: 0.5rem;
    background: #3781f1;
    color: #fffffff5;
`;
