

const Card = (props) => {
    console.log(props);
    return (
        <section className='card'>
            <img alt='Cover img' src={props.image} className='card-image' />

            <div className='card--stats'>
                <img alt='star icon' src={props.icon} className='card--star' />
                <span>{props.rating}</span>
                <span className='gray'>{props.reviewCount}</span>
                <span className='gray'>{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className='bold'>${props.price} </span>/ person</p>
        </section>
    )
}
export default Card;