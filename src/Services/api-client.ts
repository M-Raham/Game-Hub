import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cb7bc962acf94ef08371838c4dabc9fe",
  },
});
