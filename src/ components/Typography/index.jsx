import React from 'react';
import './style.css';


class Typography extends React.Component{
    render(){
        return <h1 class={this.props.class}>{this.props.name}</h1>
    }
}

export default Typography