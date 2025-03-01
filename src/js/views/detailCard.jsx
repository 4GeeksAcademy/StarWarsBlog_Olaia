import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router";
import { Link } from 'react-router-dom';

const DetailCard = () => {

    const { store, actions } = useContext(Context);
    const { people_id } = useParams();
    const [character, setCharacter] = useState(null);

    const fetchCharacter = async () => {
        const urlApi = `https://www.swapi.tech/api/people/${people_id}`;
        try {
            const response = await fetch(`${urlApi}`);
            const data = await response.json();
            setCharacter(data)

        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {

        fetchCharacter();
    }, []);


    return (
        <div className="container">

            <div className="d-flex">
                <img style={{ minWidth: "380px", height: "400px" }}
                    src={`https://starwars-visualguide.com/assets/img/characters/${people_id}.jpg`} />

                <div className="mx-auto p-5 ">
                    {character && <h1 className="text-center">{character.result.properties.name}</h1>}
                    {!character && <p className="text-center">...loading</p>}



                    <p className="mx-auto p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="d-flex justify-content-between border-top border-danger mt-3" style={{ padding: "30px" }}>
                {character &&
                    <>
                        <p className="text-center" style={{ color: "red" }}>
                            Name: <br />
                            {character.result.properties.name}
                        </p>

                        <p className="text-center" style={{ color: "red" }}>
                            Birth Year: <br />
                            {character.result.properties.birth_year}
                        </p>

                        <p className="text-center" style={{ color: "red" }}>
                            Gender: <br />
                            {character.result.properties.gender}
                        </p>

                        <p className="text-center" style={{ color: "red" }}>
                            Height: <br />
                            {character.result.properties.height}
                        </p>

                        <p className="text-center" style={{ color: "red" }}>
                            Skin Color: <br />
                            {character.result.properties.skin_color}
                        </p>

                        <p className="text-center" style={{ color: "red" }}>
                            Eye Color: <br />
                            {character.result.properties.eye_color}
                        </p>
                    </>
                }
            </div>
        </div>
    )
};


export default DetailCard;
