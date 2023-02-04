import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business.js";

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {/* Runs through the busnisses array and creates a separate component. */}
        {this.props.businesses.map((business) => {
          return <Business key={business.id} business={business} />;
        })}
      </div>
    );
  }
}

export default BusinessList;
