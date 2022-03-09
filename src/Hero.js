

const Hero = () => {
    return (
        <div className='hero'>
            
                <img alt="hero" src={process.env.PUBLIC_URL + "/image/Hero.png"}className='heroimage'/>
            <h1>
                Online Experiences
            </h1>
            <p>
               Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. 
            </p>
        </div>
    )
}
export default Hero;