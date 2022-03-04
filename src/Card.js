import star from './image/Star 1.png'

const Card = (props) => {
    return (
        <section className='card'>
            <img alt='Katie' src={`/Image/${props.img}`} className='card-image' />
            <div className='card-stats'>
                <img alt='star icon' src={star} className='stat-star' />
                <span>{props.rating}</span>
                <span className='gray'>{props.review}</span>
                <span className='gray'>{props.country}</span>
            </div>
            <p >{props.title}</p>
            <p><span className='bold'>{props.price} </span>/ person</p>
        </section>
    )
}
console.log(Card());
export default Card;