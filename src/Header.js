import React, { useState } from 'react';

const Header = ()=>{

    // return (
    //     <nav class="Nav navbar Transparent">
    //     <div class="container-fluid">
            
    //         <div className="navbar-brand">
    //         <img src={require('./netflixl.jpg')} className='Logo'/>
    //         </div>
    //         <form class="d-flex" role="search">
    //         <button class="signIn btn" type="submit">Sign In</button>
    //         </form>
    //     </div>
    //     </nav>
    // );
    return (
    <header>
        <div class="Navb">
            <img src={require('./netflixl.jpg')} className='Logo'/>
            <button class="SignIn btn" type="submit">Sign In</button>

        </div>
    </header> );

}
export default Header;