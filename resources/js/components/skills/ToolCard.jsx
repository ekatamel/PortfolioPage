function ToolCard(props) {
  return (
    <div className="skills__toolcard">
      <img className="skills__toollogo" src={props.logo} alt="logo" />
      <p className="skills__toolname">{props.name}</p>
    </div>
  );
}

export default ToolCard;
