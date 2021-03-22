import React from 'react';
const Footer=(props)=>{
    return(
        <footer>
            <hr/>
            <center>
               <h3>&copy; edureka {props.year} {props.month}</h3>
            </center>
        </footer>
    )

}
export default Footer;