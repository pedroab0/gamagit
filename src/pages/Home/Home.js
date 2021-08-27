import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as S from "./Home.style";
import "./../../globals.css";

export default function Home(props) {
    const history = useHistory();
    const [usuario, setUsuario] = useState("");
    const [erro, setErro] = useState("");

    function handlePesquisa() {
        axios
            .get(`https://api.github.com/users/${usuario}/repos`)
            .then((response) => {
                console.log(response);
                const repositories = response.data;
                const repositoriesName = [];
                repositories.map((repository) => repositoriesName.push(repository.name));

                localStorage.setItem("repositoriesName", JSON.stringify(repositoriesName));
                setErro(false);
                history.push("/repositories");
            })
            .catch((err) => {
                setErro(true);
            });
    }

    return (
        <S.Container>
            <S.Title>Search anyone's GitHub public repositories</S.Title>
            <S.Content>
                <S.Card>
                    <S.Input type="text" className="usuarioInput" placeholder="Username" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    <S.Button type="button" onClick={handlePesquisa}>
                        Search
                    </S.Button>
                </S.Card>
            </S.Content>
            {erro ? <S.ErrorMsg>User not found.</S.ErrorMsg> : ""}
        </S.Container>
    );
}
