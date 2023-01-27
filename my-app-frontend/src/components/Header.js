import { Link } from "react-router-dom";

const Header = ({}) => {



    

    return(
        <div className="bg">
            <div className="header">.
                <h1 className="site-title">Placeholder Name</h1>
                <Link className="farm-name" to="/farms">Go to Farm</Link>
                <p className="site-description">Welcome to Placeholder Name - Your First Choice for Local and Organic Produce </p>
                
            </div>
        </div>
        
    )   
}; 

export default Header;