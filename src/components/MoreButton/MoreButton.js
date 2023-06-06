import './Morebutton.css'

export function Morebutton (props) {

    function handleMoreButtonClick(){
      props.OnClick();
    }

    return (
        <section aria-label='more-button' className='morebutton-container'>
            <button className='morebutton' onClick={handleMoreButtonClick}>Еще</button>
        </section>
    )
}