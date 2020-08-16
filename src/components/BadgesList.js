import React, { Component } from "react";
import "./styles/BadgeList.css";

export class BadgesList extends Component {
  render() {
    return (
      <div>
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li className="list__element" key={badge.id}>
                <div className="container__img">
                  <img src={badge.avatarUrl} alt="" />
                </div>
                <div className="container__text">
                  <p className="container__text-name">
                    Nombre: {badge.firstName} {badge.lastName}
                  </p>
                  <p className="container__text-twitter">@{badge.twitter}</p>
                  <p>{badge.jobTitle}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
