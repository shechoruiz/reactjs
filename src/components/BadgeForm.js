import React, { Component } from "react";

export class BadgeForm extends Component {
  // state = {};
  // handleChange = (e) => {
  //   // console.log({ value: e.target.value, name: e.target.name });
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  handleClick = (e) => {
    console.log("El botón fue clickeado");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("El formulario fue enviado");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              id=""
              onChange={this.props.onChange}
              value={this.props.formValues.firstName || ""}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              id=""
              onChange={this.props.onChange}
              value={this.props.formValues.lastName || ""}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id=""
              onChange={this.props.onChange}
              value={this.props.formValues.email || ""}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
              id=""
              onChange={this.props.onChange}
              value={this.props.formValues.jobTitle || ""}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              className="form-control"
              type="text"
              name="twitter"
              id=""
              onChange={this.props.onChange}
              value={this.props.formValues.twitter || ""}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
