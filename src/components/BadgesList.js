import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";
import "./styles/BadgeList.css";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);
  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="fromgroup">
          <label>Filter Badges</label>
          <input
            className="form-control mb-5"
            type="text"
            name=""
            id=""
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new Badges
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="fromgroup">
        <label>Filter Badges</label>
        <input
          className="form-control mb-5"
          type="text"
          name=""
          id=""
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li className="list__element" key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <div className="container__img">
                  <Gravatar email={badge.email} alt="Avatar" />
                </div>
                <div className="container__text">
                  <p className="container__text-name">
                    Nombre: {badge.firstName} {badge.lastName}
                  </p>
                  <p className="container__text-twitter">@{badge.twitter}</p>
                  <p>{badge.jobTitle}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
