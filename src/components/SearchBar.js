import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value }); // function to set new state
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term); // props that we gave at searchbar
    //  that moves the input into the app.js where it will be used
    // for get request to youtube API via axios
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form action="" onSubmit={this.onFormSubmit} className="ui form">
          <div className="field" />
          <label htmlFor="">Video search</label>
          <input
            type="text"
            value={this.state.term} //value is changed from the state
            onChange={this.onInputChange} // callback to set new state
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
