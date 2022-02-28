import avatar from './Image/Avatar.png'
import emailIcon from './Image/EmailIcon.png'
import LinkedinIcon from './Image/LinkedinIcon.png'

const Info = () => {
    return (
        <div className='info-container'>
            <img alt='Hero' src={avatar} className='info-avatar' />
            <info>
                
                <h2>
                    Festus Michael <br></br> <span>Front-end Developer</span>
                </h2>
                <p>Olaoluwa.io</p>
                <div className='btn-div'>
                <button className='info-btn1'>
                    <img alt='email icon' src={emailIcon} />
                    <p>Email</p>
                </button>
                  <button className='info-btn2'>
                    <img alt='email icon' src={LinkedinIcon} />
                    <p>LinkedIn</p>
                    </button>
                    </div>
            </info>
        </div>
    )
}

export default Info;