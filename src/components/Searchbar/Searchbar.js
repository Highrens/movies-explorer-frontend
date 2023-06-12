import React, { useEffect, useState } from "react";
import { ToggleCheckbox } from "../ToggleCheckbox/ToggleCheckbox";
import "./Searchbar.css";
export function Searchbar(props) {
  const [SearchText, setSearchText] = useState("");
  useEffect(() => {
    if (window.location.pathname !== "/saved-movies"){
      if (localStorage.getItem("SearchText")) {
      setSearchText(localStorage.getItem("SearchText"));
    }};
  }, []);

  function HandleSearchChange(e) {
    setSearchText(e.target.value);
  }

  function SumbitSearch(e) {
    e.preventDefault();
    props.onSearchSubmit(SearchText);
  }

  return (
    <section aria-label="searchbar" className="searchbar">
      <form onSubmit={SumbitSearch} className="searchbar-container">
        <input
          type="text"
          id="search-input"
          placeholder="Фильмы"
          name="search"
          value={SearchText}
          className="searchbar__input"
          onChange={HandleSearchChange}
        ></input>
        <button className="searchbar__button">Найти</button>
      </form>
      <div className="searchbar__checkbox-container">
        
        <label className="searchbar__checkbox-name" htmlFor="shorts">
          <ToggleCheckbox htmlFor={"shorts"} 
          checkboxChange={props.checkboxChange}
          
          />
          Короткометражки
        </label>
      </div>
    </section>
  );
}
