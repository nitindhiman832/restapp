import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
const Header=(props)=>{
    return(
        <>
            <div id="header">
                        <Link to="/" className="logo">Edureka</Link>
                        <span className="leftopt" style={{float:'right'}}>Developer Funnel</span>
                    </div>
  
        </>
    )

}
export default Header;