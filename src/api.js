import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 364qqGDl-2q2xFM6D-VAywrwTO8aCkcVj7MY91tOiZk",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
