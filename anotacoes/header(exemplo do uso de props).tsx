import React from 'react';

interface HeaderProps{
    title: string;//para ser opcional basta adicionar um ? apos o nome
}

const Header: React.FC<HeaderProps> = (props) =>{
    return(
        <header >
            {props.title}
        </header>
    )
}

export default Header;