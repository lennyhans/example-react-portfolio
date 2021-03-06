

const SkillBar = (props) =>{
    const skill = {
        name : props.name,
        icon : props.icon,
        percentage : props.percentage
    }
    return (
    <div>
        <p className="w3-wide"><i className={`fa ${skill.icon}`}></i>
            {skill.name}
        </p>
        <div className="w3-light-grey">
            <div className="w3-container w3-padding-small w3-dark-grey w3-center" 
                style={{ width: `${skill.percentage}%`}}>{skill.percentage}%</div>
        </div>
    </div>
    );
}

export default SkillBar;