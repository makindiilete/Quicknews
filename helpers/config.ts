const env = process.env.NODE_ENV;

const handleBASE_URL = () => {
  switch (env) {
    case "development":
        return ""
    case "master":
      return "";
      case "staging":
        return "";
    default:
      return process.env.BASE_URL;
  }
};

const CONFIG = {
    BASE_URL: handleBASE_URL(),
  };
  
  export default CONFIG;