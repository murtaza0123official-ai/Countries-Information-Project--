import { FaLongArrowAltRight } from "react-icons/fa";
import "./Hero.css"
import { NavLink } from 'react-router-dom';

export const Hero = () =>
{

    return(
         <div className="World">
            <div className="Info-World">
                <h1>Explore the World One,
                   Country at a time.
                </h1>
                <p>
                    Discover the History Culture and Beauty. <br />
                    You Can Explore by Searching the Country in <br />
                    which your are interested.
                   </p>
                   <NavLink to="/country" style={{ textDecoration: "none" }}>
                   <button >Start Exploring <FaLongArrowAltRight /></button>
                   </NavLink>
            </div>

            <div className="world-image">
                <img src="/world-image-removebg-preview.png" alt="" />
            </div>
        </div>
    )
}