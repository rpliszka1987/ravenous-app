import React from "react";
import "./App.css";

// Import BusinessList and SearchBar components.
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../util/Yelp";

// Temporary business object
// const business = {
//   imageSrc:
//     "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
//   name: "MarginOtto Pizzeria",
//   address: "1010 Paddington Way",
//   city: "Bordertown",
//   state: "NY",
//   zipCode: "10101",
//   category: "Italian",
//   rating: 4.5,
//   reviewCount: 90,
// };

// Creates temporary 6 business for the business list.
// const businesses = [business, business, business, business, business, business];

// App component.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({
        businesses: businesses,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        {/* Search bar component which passes the searchYelp method. */}
        <SearchBar searchYelp={this.searchYelp} />
        {/* Business list component which passes the business array */}
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
