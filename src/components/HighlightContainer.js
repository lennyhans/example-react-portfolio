const HighlightContainer = ({children}) =>{
    const hasChilds = children != null && children.length > 0
    return (
        hasChilds && 
        (<div className="w3-row w3-center w3-dark-grey w3-padding-16">
            {children}
        </div>)
        
    );
}

export default HighlightContainer;