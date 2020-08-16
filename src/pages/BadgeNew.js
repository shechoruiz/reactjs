import React from "react";
import Badge from "../components/badge";
import BadgeForm from "../components/BadgeForm";
import Header from "../images/badge-header.svg";
import Foto from "../images/Foto.jpg";
import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  state = { form: {} };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img src={Header} alt="" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.firstName}
                avatarUrl={Foto}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
