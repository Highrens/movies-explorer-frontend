import './ToggleCheckbox.css'
import React, { useState, useEffect } from 'react';

export function ToggleCheckbox(props) {

    const [checked, setChecked] = useState(true);

    useEffect(() => {
      if (window.location.pathname !== "/saved-movies"){
        if (localStorage.getItem("Shorts")) {
          setChecked(localStorage.getItem("Shorts") === "true");
      }};
    }, []);

    const handleChange = () => { 
      props.checkboxChange(!checked);
      setChecked(checked => !checked);
    };

    return ( 
        
        <div className="toggler-wrapper" htmlFor="shorts" >
            <input type="checkbox" id={props.htmlFor} checked={checked} onChange={handleChange}></input>
            <div className="toggler-slider" >
                <div className="toggler-knob"></div>
            </div>
      </div>
        )
}
