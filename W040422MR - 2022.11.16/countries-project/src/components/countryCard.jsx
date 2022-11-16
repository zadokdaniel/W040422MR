import useCountryInformation from "../hooks/useCountryInformation";
import CountryCardDescriptionItem from "./counryCardDescriptionItem";

const CountryCard = ({ name }) => {
  const countryInformation = useCountryInformation(name);

  if (!countryInformation) {
    return <p>Loading..</p>;
  }

  const {
    name: { official: officialName },
    area,
    population,
    languages,
    flags,
    maps: { googleMaps: googleMapsLink },
  } = countryInformation;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 col-12 mx-auto">
          <div className="card">
            <img
              src={flags.svg}
              className="card-img-top"
              alt={`${officialName} flag`}
            />

            <div className="card-body">
              <h5 className="card-title">{officialName}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <CountryCardDescriptionItem
                icon="bi bi-people-fill"
                title="population"
                value={population.toLocaleString()}
              />
              <CountryCardDescriptionItem
                icon="bi bi-globe-europe-africa"
                title="area"
                value={area.toLocaleString()}
                unit="m2"
              />
              <CountryCardDescriptionItem
                icon="bi bi-translate"
                title="Languages"
                value={Object.values(languages).join(", ")}
              />
            </ul>
            <div className="card-body">
              <a
                href={`https://en.wikipedia.org/wiki/${officialName}`}
                target="_blank"
                className="card-link"
              >
                Wikipedia
              </a>
              <a href={googleMapsLink} target="_blank" className="card-link">
                Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
