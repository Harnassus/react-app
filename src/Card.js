import icon from './assets/Location-icon.png'

const Card = (props) => {
    
    return (     
        
        <section className='card'>
            <img className="cover-img" src={props.imageUrl} alt='Location' />
            
            <div className='content'>
                <img className='icon' src={icon} alt='Location icon' />
                <span className='location'>{props.location}</span>
                <a href={props.googleMapsUrl} className='gray'>View on Google Maps</a>
                <h2>{props.title}</h2>
                <div className='description'>
                    <span className='bold'>{props.startDate} -</span>
                    <span className='bold'>{props.endDate}</span>
                    <p className='description'>{props.description}</p>
                </div>
            </div>

        </section>
    )
}
export default Card;