import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';//lembrar de instalar o types do react pois da erro com dependencia de desenvolvimento
import Home from './pages/home';
import CreatePoint from  './pages/CreatePoint'


const Routes=()=>{
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={CreatePoint} path="/create-point"/>
        </BrowserRouter> 
    )
}

export default Routes;