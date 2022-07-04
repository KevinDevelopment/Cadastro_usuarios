import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../components/navbar";
import "./style.css";

function Lista() {


    const [list, setList] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8080/list')
            .then((response) => {
                console.log(response.data);
                setList(response.data);



            }).catch((erro) => {
                console.log(`Houve um erro ${erro}`)
            })

    }, []);






    return (
        <div>

            <Nav />

            <div className="container">

                <ul>
                    {list.map((objeto) => {
                        return (
                            <div className="card mb-4">

                                <div className="card-header">
                                    <label>Id da sugestão: </label>
                                    <li key={objeto.id}>{objeto.id}</li>
                                </div>

                                <div className="card-body">
                                  <p>Nome: {objeto.nome}</p>
                                  <p>Email: {objeto.email}</p>
                                  <p>Telefone: {objeto.telefone}</p>
                                  <p>CEP: {objeto.cep}</p>
                                  <p>Numero: {objeto.numero}</p>
                                  <p>Complemento: {objeto.complemento}</p>
                                  <p>Sugestão: {objeto.sugestão}</p>
                                </div>

                                <a type="submit" className="btn btn-primary" href={`http://localhost:8080/delete/${objeto.id}`}>Teste</a>
                            </div>
                        );
                    })}
                </ul>

            </div>



        </div>
    );
}

export default Lista;