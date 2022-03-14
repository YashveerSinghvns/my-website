import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is fromt end java script framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use react by creating components '
    }
];

const options = [
    {
        label : 'The colour red',
        value: 'red'
    },
    {
        label: 'the colour green',
        value: 'green'
    },
    {
        label: 'a shade of blue',
        value: 'blue'
    }

];



export default () => {

    const [selected,setSelected] = useState(options[0])
 
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items = {items} />
            </Route>
            <Route path = "/list">
                <Search />
            </Route>
            <Route path = "/dropdown">
                <Dropdown 
                label = "select a clour"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
            <Translate />
            </Route>
               
          
        </div>
    );
};

