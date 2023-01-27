import { Link } from "react-router-dom";

const Header = ({}) => {



    

    return(
        <div className="bg">
            <div className="header">.
                <h1 className="site-title">Perfect Produce Company</h1>
                <h2 className="sub-header">Established 2023</h2>
                <p className="site-description">Welcome to Perfect Produce Co. - Your First Choice for Local and Organic Produce </p>
                <Link className="farm-name" to="/farms">See Our Farms</Link>
            </div>
        </div>
        
    )   
}; 

export default Header;