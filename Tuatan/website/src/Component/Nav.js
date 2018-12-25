import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';

function Nav() {
    return(
        // Navigation Bar
        <div>
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
                {/* Navigation bar logo */}
                <a className="navbar-brand" href="#"> <img id="logo" src="https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/header/1.png?raw=true" /> </a>
                {/*<!-- Toggle Button -->*/}
                <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span  className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarContent">
                    <LContent />
                    {/*<!-- Search and ค้นหา button -->*/}
                    <Finding />
                    {/*<!-- Right most content -->*/}
                    <RContent />
                </div>
            </nav>
        </div> 
    );  
}


function LContent() {
    return(
        <ul className="navbar-nav mr-auto">
            {/*<!-- หมวดหมู่สินค้า -->*/}
            <li className="nav-item">
                <a className="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/header/2.png?raw=true" style={{height:"1.4em"}} /></a>
            </li>
            {/*<!-- โพสสินค้า -->*/}
            <li className="nav-item">
                <a className="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/header/3.png?raw=true" style={{height:"1.5em"}} /></a>
            </li>
            {/*<!-- บทความ -->*/}
            <li className="nav-item">
                    <a className="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/header/4.png?raw=true" style={{height:"1.5em"}} /></a>
            </li>
            {/*<!-- ติดต่อเรา -->*/}
            <li className="nav-item">
                    <a className="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/header/5.png?raw=true" style={{height:"1.5em"}} /></a>
            </li>
        </ul>
    );
}

class Finding extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ""
        }
    }

    handleSubmit = (e) => {
        // submitting a form to somewhere.....
    }

    render() {
        return(
            <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                <input className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" 
                    value={this.state.search}/>
                <button className="btn btn-outline-success my-2 my-sm-0">ค้นหา</button>
            </form>
        );
    }
}

class RContent extends React.Component {
    render() {
        return(
            <ul className="navbar-nav" id="navRight">
                <div className="row">
                    {/*<!-- Eye image -->*/}
                    <li className="nav-item">
                        <img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/header/8.png?raw=true" />
                    </li>
                    {/*<!-- heart image -->*/}
                    <li className="nav-item">
                        <img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/header/9.png?raw=true" />
                    </li>
                    {/*<!-- person image -->*/}
                    <li className="nav-item">
                        <img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/header/10.png?raw=true" />
                    </li>
                </div>
            </ul>
        );
    }
}


export default Nav;