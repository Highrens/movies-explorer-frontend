import './ToggleCheckbox.css'
export function ToggleCheckbox(props) {

    return ( 
        <label className="toggler-wrapper">
            <input type="checkbox" defaultChecked></input>
            <div className="toggler-slider">
                <div className="toggler-knob"></div>
            </div>
      </label>
        )
}
