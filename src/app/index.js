import React from "react";
import { render } from "react-dom";

class App extends React.Component {
    
    render() {
        var getDate = function () {
            return new Date().toDateString();
        }
    
         return ( 
             
               <div className="container">
                    <div className="row">
                          <div className="col-xs-10 col-xs-offset-1">
                                 <h1 style={{color:'blue'}}> First ReactJS Component </h1>
                                 <h1 style={{color:'red'}}> { getDate() } </h1>
                           </div>
                      </div>
                </div> 
          
         );

    }
    
}

render( <App/> , document.getElementById("app"));
