

const Card = (props) => {
    let badgeText = '';
    if (props.data.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.data.location === 'Online') {
        badgeText = 'ONLINE'
    }
    return (     
        
        <section className='card'>
            {badgeText && <div className="badge">{badgeText}</div>}
            <img alt='Cover img' src={props.data.coverImg} className='card-image' />

            <div className='card--stats'>
                <img alt='star icon' src={props.icon} className='card--star' />
                <span>{props.data.stats.rating}</span>
                <span className='gray'>({props.data.stats.reviewCount}) &bull;</span>
                <span className='gray'>{props.data.location}</span>
            </div>
            <p className="card--title">{props.data.title}</p>
            <p className="card--price"><span className='bold'>${props.data.price} </span>/ person</p>
        </section>
    )
}
export default Card;