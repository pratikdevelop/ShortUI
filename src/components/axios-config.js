import axios from "axios";

const axiosConfig = axios.create({
    baseURL: "https://youtube-video-download-api-pg6z.onrender.com",
    headers: {
      "Content-Type": "application/json",
    },
})

export default axiosConfig;