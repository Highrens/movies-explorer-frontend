import './ToggleCheckbox.css'
export function ToggleCheckbox(props) {

    return ( 
        <div className="toggler-wrapper">
            <input type="checkbox" id={props.for} defaultChecked></input>
            <div className="toggler-slider">
                <div className="toggler-knob"></div>
            </div>
      </div>
        )
}
