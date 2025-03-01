import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router";
import { Link } from 'react-router-dom';

const DetailPlanet = () => {

    const { store, actions } = useContext(Context);
    const { planet_id } = useParams();
    const [characterPlanet, setCharacterPlanet] = useState(null);

    const fetchCharacterPlanet = async () => {

        let urlApi = `https://www.swapi.tech/api/planets/${planet_id}`;


        try {
            const response = await fetch(`${urlApi}`);
            const data = await response.json();
            setCharacterPlanet(data)
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {

        fetchCharacterPlanet();
    }, []);


    return (
        <div className="container">

            <div className="d-flex">
                <img style={{ minWidth: "380px", height: "400px" }}
                    src={planet_id == '1'
                        ? `https://starwars-visualguide.com/assets/img/placeholder.jpg`
                        : `https://starwars-visualguide.com/assets/img/planets/${planet_id}.jpg`} />

                <div className="mx-auto p-5 ">
                    {characterPlanet && <h1 className="text-center">{characterPlanet.result.properties.name}</h1>}
                    {!characterPlanet && <p className="text-center">...loading</p>}



                    <p className="mx-auto p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="d-flex justify-content-between border-top border-danger mt-3" style={{ padding: "30px" }}>
                {characterPlanet &&
                    <>
                        <p className="text-center" style={{ color: "red" }}>
                            Name <br />
                            {characterPlanet.result.properties.name}
                        </p>

                        <p className="text-center" style={{ color: "red" }}>
                            Climate <br />
                            {characterPlanet.result.properties.climate}
                        </p>

                        <p className="text-center" style={{ color: "red" }}>
                            Population <br />
                            {characterPlanet.result.properties.population}
                        </p>

                        <p className="text-center" style={{ color: "red" }}>
                            Orbital period <br />
                            {characterPlanet.result.properties.orbital_period}
                        </p>

                        <p className="text-center" style={{ color: "red" }}>
                            Rotation Period <br />
                            {characterPlanet.result.properties.rotation_period}
                        </p>

                        <p className="text-center" style={{ color: "red" }}>
                            Diameter <br />
                            {characterPlanet.result.properties.diameter}
                        </p>
                    </>
                }
            </div>
        </div>
    )
};


export default DetailPlanet;