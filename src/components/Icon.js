
const baseClass="fa";

const Icon = (props) => {
    const iconName = props != null & props.iconName != null? props.iconName : ""
    const additionalClass = props != null & props.additionalClass != null? props.additionalClass : ""
    return(
        <i className={ `${baseClass} ${iconName} ${additionalClass}` } /> 
    );
}

export default Icon;