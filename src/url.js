const Url =
  process.env.NODE_ENV === "production"
    ? "https://cms-backend-red.vercel.app"
    : "http://localhost:8080";

export default Url;
