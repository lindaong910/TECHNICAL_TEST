import React, {Component} from 'react';

export default class ImageCard extends Component{
    
    onMouseOver = () => {
        this.setState({
            isMouseOver:true,
        });
    }

    onMouseOut = () => {
        this.setState({
            isMouseOver:false,
        });
    }

    state = {
        isMouseOver:false,
    }

    render(){
        
        const src = this.state.isMouseOver ? this.props.imgHover : this.props.img;
        return(<img src={src} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}/>
    );
    }
}