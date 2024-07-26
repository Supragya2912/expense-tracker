import React from 'react';
import NavigationBar from '../components/NavigationBar.jsx';


const Layout = (props) => {
    return (

        <>
            <NavigationBar />
            <>
                {props.children}
            </>
        </>
    )
}


export default Layout