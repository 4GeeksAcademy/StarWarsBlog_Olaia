import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Planets = ({ planets }) => {
    const { store, actions } = useContext(Context)
    const isFavorite = () => { return store.favorites.some(item => item.name === planets.name) ? true : false }
    return (
        <div className="card mx-2" style={{ minWidth: "250px" }}>
            <Link to={`/detail-planet/${planets.uid}`}>
                <img
                    src={planets.uid == '1'
                        ? `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg`
                        : `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${planets.type}/${planets.uid}.jpg`}
                    className="card-img-top"
                    alt="..."
                    width={248} height={270}
                />
            </Link>

            <div className="card-body d-flex flex-column justify-content-between">
                <div>

                    <h5 className="card-title">{planets.name}</h5>
                    <p className="card-text">
                        Population:  {planets.population} <br />
                        Terrain: {planets.terrain} <br />

                    </p>
                </div>
                <div className="d-flex justify-content-between ">
                    <Link to={`/detail-planet/${planets.uid}`} className="btn btn-primary my-3 btn-lg">Learn more!</Link>

                    <p className={`btn card-text m-3 border px-2 ${isFavorite() ? "border-danger" : "border-warning"}`}
                        onClick={() => {
                            if (isFavorite()) {
                                actions.deleteFavoriteCharacter(planets.name)
                            }
                            else {
                                actions.addFavoriteCharacter(planets)
                            }
                        }}
                    >
                        <i className={`${isFavorite() ? "fa-solid text-danger" : "fa-regular text-warning"} fa-heart`}></i>
                    </p>

                </div>

            </div>
        </div>
    )
}