import React from "react";
import "./Footer.css";



export default function AppFooter () {
    return (
        <footer className="footer">
                <div className="innerFooter">
                    <p>Подпишитесь на нас!</p>
                        <div className="social-links">
                            <ul>
                                <li className="social-items"><a href="#instagram"><i className="fa-brands fa-square-instagram"></i></a></li>
                                <li className="social-items"><a href="#facebook"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li className="social-items"><a href="#telegram"><i className="fa-regular fa-paper-plane"></i></a></li>
                                <li className="social-items"><a href="#youtube"><i className="fa-brands fa-youtube"></i></a></li>
                            </ul>
                        </div>
                </div>
        </footer>
    )
}