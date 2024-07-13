import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const { results } = await fetchDataFromApi("/movie/popular");
      console.log(results);
    };
    fetchData();
  }, []);
  return <div>App</div>;
};

export default App;
