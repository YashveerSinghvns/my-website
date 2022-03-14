
import React from 'react';
import LanguageContext from '../contexs/LanguageContext';
import ColorContext from '../contexs/ColorContext';

class Button extends React.Component {
  
    renderSubmit(language) {
        return language === 'english' ? 'submit':'voorleggen';
    }
   

    render() {

       
        return (
        <ColorContext.Consumer>
         {(color) => 
             <button className={`ui button ${color}`}>
         
             <LanguageContext.Consumer>
                {({language}) => this.renderSubmit(language)}
             </LanguageContext.Consumer>
            
            </button>
        
         }
       
        </ColorContext.Consumer>);
    }
}

export default Button;

/*
import React from 'react';
import LanguageContext from '../contexs/LanguageContext';

class Button extends React.Component {
    static contextType = LanguageContext;
    render () {
        const text = this.context === 'english' ? 'Name' : 'Naam';
        return (
           
        <div className="ui field">
            <label>{text}</label>
            <input />
        </div>
        )

    }
}

export default Button;
*/