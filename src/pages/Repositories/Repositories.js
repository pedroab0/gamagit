import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./Repositories.style";
import "./../../globals.css";

export default function Repositories(props) {
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem("repositoriesName");
        if (repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        } else history.push("/");
    }, [history]);

    return (
        <S.Container>
            <S.Title>Repositories</S.Title>
            <S.List>
                {repositories.map((repository) => {
                    return <S.ListItem>{repository}</S.ListItem>;
                })}
            </S.List>
            <S.LinkHome to="/">Return</S.LinkHome>
        </S.Container>
    );
}
