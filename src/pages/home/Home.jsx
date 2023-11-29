import React, { useEffect, useState } from "react";
import TrendingSlider from "../../components/trendingSlider/TrendingSlider";
import HeroSection from "./heroSection/HeroSection";
import TodaysTopHighlights from "./todaysTopHighlights/TodaysTopHighlights";
import SectionDivider from "../../components/sectionDivider/SectionDivider";
import SponsoredNews from "../../components/sponsoredNews/SponsoredNews";
import { fetchDataFromApi, fetchDataFromApi2 } from "../../utils/api";

const Home = () => {
    const [everythingData, setEverythingData] = useState([]);
    const [everythingLoading, setEverythingLoading] = useState(false);

    const [newsData, setNewsData] = useState([]);
    const [newsLoading, setNewsLoading] = useState(false);

    const everythingDataFunction = () => {
      setEverythingLoading(true);
      fetchDataFromApi("/everything?q=a&language=hi&").then((res)=>{
        setEverythingData(res?.data);
        setEverythingLoading(false);
      })
    }
    const newsDataFunction = () => {
        setNewsLoading(true);
        fetchDataFromApi2("/news?language=hi&").then((res) => {
            setNewsData(res?.data);
            setNewsLoading(false);
        });
    };

    useEffect(() => {
        // everythingDataFunction()
        // newsDataFunction();
    }, []);
    return (
        <>
            <TrendingSlider newsData={newsData} newsLoading={newsLoading} everythingData={everythingData} everythingLoading={everythingLoading} />

            <HeroSection everythingData={everythingData} everythingLoading={everythingLoading} />

            <TodaysTopHighlights everythingData={everythingData} everythingLoading={everythingLoading} />

            <SectionDivider />

            <SponsoredNews />
        </>
    );
};

export default Home;
