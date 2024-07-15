import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import SearchResults from "./pages/searchResults/SearchResults";
// import pageNotFound from "./pages/404/pageNotFound";

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  // console.log(url);

  useEffect(() => {
    fetchApiConfig();
  }, []);
  const fetchApiConfig = async () => {
    const response = await fetchDataFromApi("/configuration");

    const url = {
      backdrop: response.images.secure_base_url + "original",
      poster: response.images.secure_base_url + "original",
      profile: response.images.secure_base_url + "original",
    };

    dispatch(getApiConfiguration(url));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<pageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
