import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:6020/api/v1",
});
