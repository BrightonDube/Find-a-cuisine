import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrormessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          location: "USA",
          limit: 50,
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrormessage(`Something went wrong  ${err}`);
    }
  };

  //useEffect to call searchApi only once when component renders

  useEffect(() => {
    searchApi("sushi");
  }, []);

  return [results, searchApi, errorMessage];
};
