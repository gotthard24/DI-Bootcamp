import axios from "axios";

async function fetchPosts(url) {
    try {
      const response = await axios.get(url);
    //   const data = await response.js
      console.log(response);
    } catch (error) {
      console.error(error);
    }
}

export default fetchPosts