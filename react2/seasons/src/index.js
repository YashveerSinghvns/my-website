import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './component/ErrorBoundary';
import O from './component/l';



const App = () => {
    
/*
    constructor(props) {
        super(props);

        this.state= {lat : null ,errorMessage : '' };

        
    }
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat : position.coords.latitude})
            ,
            err => this.setState({errorMessage : err.message})
        );

    }
    renderContent() {
        if(this.state.errorMessage && !this.state.lat)
        {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat)
        {
            return <SeasonDisplay lat = {this.state.lat}/>
        }
    
   return <Spinner message="Please accept location request" />

    }

     */

        return (

            <div >
                hi
                <ErrorBoundary>
                <O />
                </ErrorBoundary>
                
            </div>
        )
       
         
    
}




ReactDOM.render(<App />, document.querySelector('#root'));