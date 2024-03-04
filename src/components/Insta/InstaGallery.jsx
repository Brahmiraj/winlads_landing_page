import axios from "axios";
import React, { useEffect, useState } from "react";
import InstaPostContainer from "./InstaPostContainer";
// import Gallery2 from "../Gallery/Gallery2";

const InstaGallery = () => {
  const [instaIdArray, setInstaIdArray] = useState([]);
  const [paging, setPaging] = useState({});
  const token = import.meta.env.VITE_INSTA_TOKEN;
  const id = import.meta.env.VITE_INSTA_ID;

  const getPostIds = async () => {
    try {
      const response = await axios.get(
        `https://graph.instagram.com/${id}/media?access_token=${token}&limit=6`
      );
      setInstaIdArray(response.data.data);
      setPaging(response.data.paging);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLoadMore = async () => {
    try {
      const response = await axios.get(paging.next);
      setInstaIdArray((prev) => [...prev, ...response.data.data]);
      setPaging(response.data.paging);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPostIds();
  }, []);
  return (
    <div className="text-center">
      {instaIdArray.length > 0 ? (
        <InstaPostContainer postIdArray={instaIdArray} />
      ) : (
        null
      )}
      <button
        className="bg-black hover:bg-black/75 px-4 py-2 my-5 text-white rounded-lg"
        onClick={handleLoadMore}
      >
        Load More...
      </button>
    </div>
  );
};

export default InstaGallery;
