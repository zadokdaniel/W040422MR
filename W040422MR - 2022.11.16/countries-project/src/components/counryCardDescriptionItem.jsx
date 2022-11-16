const CountryCardDescriptionItem = ({
  icon,
  title = "",
  value = "",
  unit = null,
}) => {
  return (
    <li className="list-group-item">
      <span>{typeof icon === "string" ? <i className={icon}></i> : icon}</span>
      <span className="fw-bold mx-2">
        {title.charAt(0).toUpperCase() + title.slice(1)}:
      </span>
      <span>
        {value}
        {unit ? <sup className="ms-1">{unit}</sup> : null}
      </span>
    </li>
  );
};

export default CountryCardDescriptionItem;
