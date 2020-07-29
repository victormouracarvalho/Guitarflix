import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button'
import {Link} from 'react-router-dom';

function Menu (){
    return (
        <nav className="Menu">
            <Link href="/">  
                <img className ="Logo" src={Logo} alt="Aluraflix Logo"/>
            </Link>
            
            <Button as={Link} className="ButtonLink" to="/cadastro/Video">  
                Confira meu curriculos
            </Button>
            
        </nav>

    );
}

export default Menu;