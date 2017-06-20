import React from "react";
import {render} from "react-dom";

class App extends React.Component {
    render() {
	 return ( 
		<div>
            <h1 style={{color:'blue'}}> First Reactjs Components </h1>
			<h1 style={{color:'red'}}> { new Date().toDateString() } </h1>
    	</div>
        );
    }
}

render( < App / > , document.getElementById("app"));