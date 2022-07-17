function SkillCard(props) {
    return (
        <div className={props.cardclass}>
            <img className={props.logoclass} src={props.logo} alt="logo" />
            <p className={props.nameclass}>{props.name}</p>

            {props.skills && (
                <ul className="skills__list">
                    {props.skills.map((e, i) => {
                        return (
                            <li key={i} className="skills__item">
                                {e}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default SkillCard;
