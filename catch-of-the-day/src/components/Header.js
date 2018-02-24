import React from 'react';

class Header extends React.Component{
    render (){
        return <div className="header">{this.props.tagContent}<br/>{this.props.subHead}</div>
    }
}

export default Header;