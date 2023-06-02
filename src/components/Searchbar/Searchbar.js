import React, { useEffect, useState } from "react";
import { ToggleCheckbox } from "../ToggleCheckbox/ToggleCheckbox";
import './Searchbar.css'
export function Searchbar(props) {

    const [SearchText, SetSearchText] = useState("");

    function HandleSearchChange(e) {
        SetSearchText(e.target.value);
      }

    return (
        <section aria-label="searchbar" className="searchbar">
            <form
            onSubmit={props.onSubmit} 
            className="searchbar-container">
                <input
                type="text"
                id="search-input"
                placeholder="Фильмы"
                name="search"
                value={SearchText || ''}
                className="searchbar__input"
                onChange={HandleSearchChange}
                ></input>
                <button className="searchbar__button">Найти</button>             
            </form>
           <div className="searchbar__checkbox-container">
                <ToggleCheckbox for={"shorts"} />
                <label className="searchbar__checkbox-name" htmlFor="shorts">Короткометражки</label>
           </div>
        </section>
    )
}