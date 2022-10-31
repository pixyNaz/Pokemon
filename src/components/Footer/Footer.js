import "./Footer.css";
import "../../Photos/logo-instagram.png";
import "../../Photos/logo-facebook.png";
import "../../Photos/logo-Telegram.png";
import "../../Photos/logo-youtube.png";


export default function AppFooter () {
    return (
        <div className="Footer">
            <p>Подпишитесь на нас!</p>
            <ul className="socials">
                <li><a href="instagram"><i className="logo-instagram"></i></a></li>
                <li><a href="facebook"><i className="logo-facebook"></i></a></li>
                <li><a href="Telegram"><i className="logo-Telegram"></i></a></li>
                <li><a href="youtube"><i className="logo-youtube"></i></a></li>
            </ul>
        </div>
    )
}