// Api Key for the Yelp API access.
const apiKey =
  "";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://api.yelp.com/v3/business/search?term=${term}&location=${location}&sort_by=${sortBy}`);
  },
};
