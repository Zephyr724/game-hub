import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "36b6691a28ea4e34a48262698b1b685c",
  },
});
