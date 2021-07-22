import { useState, useEffect } from "react";
import './style.css'
export default function SearchBox( { onSearch, onClose, isSearching } ){

    const [searchText, setSearchText] = useState();

    const handleCloseClick = () => {
        setSearchText('')
        onClose()
    }

    return(
        <div className="search-box">
            <h2 className="search-box-tittle"> Buscador de imágenes </h2>
            <div className="search-box-buttons">
                <label>
                    <input
                    value={searchText} 
                    onChange={({target: {value} })=> setSearchText(value)}
                    className="search-box-input"
                    />
                </label>
                <button onClick={ () => onSearch(searchText)} disabled={!searchText} > Buscar </button>
                {isSearching && <button onClick={ handleCloseClick } disabled={!searchText} > Cerrar </button> }
            </div> {/* Fin del contenedor de input y button */}
        </div>
    );
}