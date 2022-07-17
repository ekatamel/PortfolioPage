function Tab(props) {
  return (
    <li className="education__organization">
      <a className={props.className} onClick={props.onClick}>
        <img className="education__logo" src={props.src} alt={props.alt} />
      </a>
    </li>
  );
}

export default Tab;
