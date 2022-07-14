import React from 'react';

import classes from './Header.module.css';
import meals from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>RUMAH MAKAN MEGIS</h1>
                <HeaderCartButton onKlikCartButton={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt='ENAKKK ENAK ENAKKK ~' />
            </div>
        </React.Fragment>
    )
}

export default Header;