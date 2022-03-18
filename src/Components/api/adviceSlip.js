import axios from "axios";

const adviceSlip = axios.create({
  baseURL: "https://api.adviceslip.com/",
});

export default adviceSlip;
