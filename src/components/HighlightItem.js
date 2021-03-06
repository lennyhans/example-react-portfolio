
const HighlightItem = ({name, ammount, manyMore}) =>{
    if(name == null)
        throw Error("Please specify a highlight name");

    const highlight = {
        name: name,
        ammount : ammount,
        manyMore : manyMore
    };

    return (
        <div className="w3-quarter w3-section">
            <span className="w3-xlarge">
                {highlight.ammount} 
                {highlight.manyMore && "+" } 
            </span><br/>
            {highlight.name}
        </div>
    );
}

export default HighlightItem;