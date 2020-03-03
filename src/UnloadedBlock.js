import React from "react";
import Dropdown from "./Dropdown";
import AuthComponent from "./AuthComponent";

class UnloadedBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      unloadedMarginTop: "25vh",
      unloadedHeaderP: "block"
    };
    this.handlerMarginTop = this.handlerMarginTop.bind(this);
  }

  componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => response.json())
      .then(data => {
        this.setState({
          categories: data.categories.map(item => item.strCategory)
        });
      });
  }

  handlerMarginTop() {
    this.setState({ unloadedMarginTop: "5vh", unloadedHeaderP: "none" });
  }

  render() {
    return (
      <div className="unloaded">
        <nav className="navbar fixed-top navbar-light ">
          <div className="navbar-button-block">
            <AuthComponent />
          </div>
        </nav>
        <h1
          style={{ marginTop: this.state.unloadedMarginTop }}
          className="display-3"
        >
          Random recipe generator
        </h1>
        <p style={{ display: this.state.unloadedHeaderP }}>
          Choose category and hit a button to get one of the delicious recipes
        </p>
        <p>{this.props.state.testText}</p>
        <Dropdown
          categories={this.state.categories}
          handleClick={this.props.handleClick}
          handlerMarginTop={this.handlerMarginTop}
          classNameButton="btn btn-primary dropdown-toggle"
        />
      </div>
    );
  }
}

export default UnloadedBlock;
