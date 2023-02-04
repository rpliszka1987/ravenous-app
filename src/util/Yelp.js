// Api Key for the Yelp API access.
const apiKey = "";

//   Stores information about Yelp request
const Yelp = {
  search(term, location, sortBy) {
    // fetch request
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/business/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.business) {
          return jsonResponse.business.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.address,
              city: business.city,
              state: business.state,
              zipCode: business.zip_code,
              category: business.category,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  },
};

export default Yelp;
