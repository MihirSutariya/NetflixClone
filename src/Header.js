import React, { useState } from 'react';

const Header = ()=>{

    return (
    <header>
        <div class="Navb">
            <img src={require('./netflixl.jpg')} className='Logo'/>
            <button class="SignIn btn" type="submit">Sign In</button>

        </div>
    </header> );

}
export default Header;