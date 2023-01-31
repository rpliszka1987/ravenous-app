import React from "react";
import "./SearchBar.css";

// searchBar component
class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    // setting the state values
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };

    // Binds the methods.
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };
  }

  // Methos which calls different tab styles depending on chosen sorting
  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return "active";
    }
    return "";
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  // Method which sets term state to the value of the field
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  // Method which sets term state to the value of the field
  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  // Method which passes all the values needed to search the Yelp
  handleSearch(event) {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );

    event.preventDefault();
  }

  // Will return search results from the search
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          className={this.getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          {/* renders the sort options */}
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          {/* Input fields for search bar */}
          <input
            placeholder="Search Businesses"
            // Calls the handleTermChange() when you type in the value
            onChange={this.handleTermChange}
          />
          <input
            placeholder="Where?"
            // Calls the handleLocationChange() when you type in the value
            onChange={this.handleLocationChange}
          />
        </div>
        <div className="SearchBar-submit">
          {/* Submit form button which calls handleSearch() method */}
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
