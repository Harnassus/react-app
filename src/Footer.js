import Twitter from "./Image/Twitter Icon.png";
import Facebook from "./Image/Facebook Icon.png";
import Instagram from "./Image/Instagram Icon.png";
import Github from "./Image/GitHub Icon.png";

const Footer = () => {
    return (
        <div className="footer">
            <img alt='Twitter Social Icon' src={Twitter} />
            <img alt='Facebook Social Icon' src={Facebook} />
            <img alt='Instagram Social Icon' src={Instagram} />
            <img alt='Github Social Icon' src={Github}/>
        </div>
    )
}

export default Footer;