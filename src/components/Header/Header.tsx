import React from 'react';
import {Link} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <div className={css.h5}>
                <h5>CARS</h5>
            </div>
            <div className={css.tools}>
                <Link to={'/login'}>Login</Link>
                <hr/>
                <Link to={'/register'}>Register</Link>
            </div>
        </div>
    );
};

export {Header};