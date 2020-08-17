import React from "react";
import Badge from "../components/badge";
import BadgeForm from "../components/BadgeForm";
import Header from "../images/platziconf-logo.svg";
import PageLoading from "../components/PageLoading";
import Foto from "../images/Foto.jpg";
import Api from "../api";
import "./styles/BadgeNew.css";

class BadgeEdit extends React.Component {
  state = { loading: true, error: null, form: {} };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });
    try {
      const data = await Api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await Api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img src={Header} alt="" className="BadgeNew__hero-image img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "Nombre"}
                lastName={this.state.form.lastName || "Apellido"}
                twitter={this.state.form.twitter || "Twitter"}
                jobTitle={this.state.form.jobTitle || "Profesión"}
                email={this.state.form.email || "email"}
                avatarUrl={Foto}
              />
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
