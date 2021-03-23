import React from 'react';
import QuickApi from './QuickApi';
import Search from './Search';

const Home = (props)=>{
    console.log(props);
    return(
            <>
                <Search/>
                <QuickApi/>
            </>
    )
}

export default Home;