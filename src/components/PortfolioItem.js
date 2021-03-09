import React from 'react';

export default class PortfolioItem extends React.Component{
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        console.log(e);
    }

    render(){
        const self = this.props;
        return (
            <div className="w3-col m3">
                <img src={self.src} 
                    style={{width:"100%"}} 
                    onClick={this.handleClick} 
                    className="w3-hover-opacity" 
                    alt={self.caption}/>
            </div>
        );
    }
}