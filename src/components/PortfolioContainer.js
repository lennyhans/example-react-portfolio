import React from 'react';

export default class PortfolioContainer extends React.Component{

    render(){
        const self = this.props;
        const end = self.items.length, step = 4;
        const steps = end/step;
        const chunks = [];
        let current = 0;
        for( let i = 0; i < steps; i++){
            chunks.push(self.items.slice(current, current + step));
            current += step;
        }
        const chunkLenght = chunks.length -1;
        return (
            //Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) -->
            chunks.map( (chunk, i) => {
                return <div key={i}
                    className="w3-row-padding w3-center w3-section">
                    {chunk}
                {chunkLenght === i && 
                    <button className="w3-button w3-padding-large w3-light-grey" 
                        style={{marginTop:"64px"}}>LOAD MORE</button>
                }
                </div>
            })
            
            
        );
    }
}