
const ParallaxImage = (props) =>{
    const Text = props != null && props.text != null ? props.text : null;
    const hasText = props != null && props.text != null;
    
    const image = props != null && props.image != null ? props.image : "bgimg-1"
    const ID = props.id;

    const isMain = props != null && props.isprincipal;
    const mainStyle = {whiteSpace: "nowrap"}
    const mainClass = "w3-center w3-padding-large w3-black w3-xlarge w3-animate-opacity"
    const secondaryClass = "w3-xxlarge w3-text-white"
    const commonClass= "w3-wide"
    
    return (
        //
        <div className={`${image} w3-display-container w3-opacity-min`}
            id={ID}>
          <div className="w3-display-middle" style={isMain ? mainStyle : {}}>
             { hasText && 
                <span className={`${commonClass} ${isMain ? mainClass : secondaryClass}`}>{Text}</span>
             }
          </div>
        </div>
        
    );
}

export default ParallaxImage;