import { useState, useEffect } from "react";

const APIKEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
  const [url, setUrl] = useState("");

  const fetchGifs = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword
          .split(" ")
          .join("")}&limit=1`
      );
      const { data } = await response.json();
      setUrl(data[0]?.images?.downsized_medium.url);
    } catch (err) {
      setUrl(
        "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"
      );
    }
  };

  useEffect(() => {
    fetchGifs();
  }, [keyword]);

  return url;
};

export default useFetch;
