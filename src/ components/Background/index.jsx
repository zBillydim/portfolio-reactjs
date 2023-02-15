import React from 'react';
import './style.css';


class Background extends React.Component{
    render(){
        return <div id={this.props.name}></div>
    }
}

export default Background