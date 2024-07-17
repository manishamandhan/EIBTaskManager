export const prod = {
  url: {
    API_URL: "",
    //API_URL: "https://filemule-api-live.azurewebsites.net/api"

    // API_URL: "https://api.filemule.io/api"
  },
};
export const dev = {
  url: {
    API_URL: "http://localhost:5175/api",
    //  API_URL: "https://localhost:7018/api"
  },
};
export const live = {
  url: {
    API_URL: "",
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : process.env.NODE_ENV === "live" ? live : prod;
