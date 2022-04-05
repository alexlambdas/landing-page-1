import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/LandingPage";

import styles from './Styles';
import './App.css';

function App() {

    const [openNav, setOpenNav] = useState(false);

    const handleOpenNav = () => setOpenNav(!openNav);

    const handleOnClickSideNav = (event) => {
        if(openNav){
            if(parseInt(event.clientX, 10) >= 250) setOpenNav(false);
        }
    };

    useEffect(() => {
        if(openNav){
            document.body.style.width = "100%";
            document.body.style.position = "fixed";
            document.body.style.overflowY = "scroll";
            
        }
        else {
            document.body.style.position = "static";
            document.body.style.overflowY = "auto";
        }
    },[openNav])

    const dynamicStyles = () => {
        if(openNav){
            document.body.style.overflow = "hidden";
            return styles.app_withOutScrollX;
        }
        if(!openNav){
            document.body.style.overflow = "visible";
            return styles.app_withOutScrollX;
        }
    }

    return (
        <div 
            style={styles.app} 
            onClick={handleOnClickSideNav}>
                <BrowserRouter>
                    <Switch>
                        <Route 
                            path="/"
                            render={() => {
                                return(
                                    <LandingPage 
                                        openNav={openNav}
                                        handleOpenNav={handleOpenNav}/>
                                )
                            }}>
                        </Route>
                    </Switch>
                </BrowserRouter>
        </div>
    );
}

export default App;
