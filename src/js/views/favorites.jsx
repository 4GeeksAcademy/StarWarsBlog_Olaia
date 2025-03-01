import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { People } from "../component/People.jsx";
import { Planets } from "../component/Planets.jsx";
import { Vehicles } from "../component/Vehicles.jsx";

export const Favorites = () => {

    const { store } = useContext(Context);

    return (
        <>
            <div className=" container py-3">
                <h1 className=" container " style={{ color: "#ef4545" }}>Favorites</h1>
                <div
                    style={{
                        display: "flex",
                        overflowX: "auto",
                        padding: "10px",
                        gap: "10px",
                    }}
                >
                </div>
                <div className=" container overflow-auto d-flex flex-noweap mx-0 px-0" style={{ overflow: "scroll" }}>
                    {store.favorites.map((item) => {
                        if (item.type === "characters") {
                            return (
                                <People
                                    key={`people-${item.name}`}
                                    people={item}

                                />
                            )
                        }
                        if (item.type === "planets") {
                            return (
                                <Planets
                                    key={`planet-${item.name}`}
                                    planets={item}

                                />
                            )
                        }
                        if (item.type === "vehicles") {
                            return (
                                <Vehicles
                                    key={`vehicle-${item.name}`}
                                    vehicle={item}

                                />
                            )
                        }
                    }
                    )}


                </div>
            </div>

        </>


    )
}