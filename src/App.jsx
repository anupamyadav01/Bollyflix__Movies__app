import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";

const App = () => {
  const getData = async () => {
    const data = await fetchDataFromApi("/movie/popular");
    console.log(data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>App</div>;
};

export default App;
