import './Morebutton.css'

export function Morebutton (props) {

    function handleMoreButtonClick(){
      props.OnClick();
    }

    return (
        <div className='morebutton-container'>
            <button className='morebutton' onClick={handleMoreButtonClick}>Еще</button>
        </div>
    )
}