import React from 'react';
import Header from './Header';

class App extends React.Component{
    render(){
        return <div className="app">
            <Header tagContent="This is the header"/>
        </div>
    }
}

export default App;