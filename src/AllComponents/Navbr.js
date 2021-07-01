import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Logo from '../Images/Logo.png';
import {Navbar,Form ,Nav,Button,FormControl} from 'react-bootstrap';

class Navbr extends Component{
    render(){
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand  href="#home"></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home"> 
                        </Nav.Link>
                        <Nav.Link href="#home">
                            <img
                                src={Logo}
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                                alt="Microsoft Teams logo"
                            />
                        </Nav.Link>
                        <Nav.Link href="#home">
                            <h2>Microsoft Teams</h2>
                            
                        </Nav.Link>
                    </Nav>

                </Navbar>
            </>
        )
    }
}
export default Navbr