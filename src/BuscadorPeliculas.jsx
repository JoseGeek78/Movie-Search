import { useState } from "react";

export const BuscadorPeliculas = () => {

        const[pelicula, setPelicula] = useState('')

        return (
            <div className="container">

            <h1 className="title">Buscador de Películas</h1>
            <form>
                <input type="text"
                placeholder="Escribir un película"
                />
                <button type="submit" className="search-button">Buscar</button>
            </form>

            </div>
            );
        }    