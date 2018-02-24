import React from 'react';
import Header from './Header';

class App extends React.Component{
    render(){
        return <div className="app">
            <Header tagContent="This is the header"/>
            <Header tagContent="This is also a header, but with its own tag!" subHead="I'm a subhead, too"/>
        </div>
    }
}

export default App;