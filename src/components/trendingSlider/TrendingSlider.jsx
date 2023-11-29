import React from "react";
import TinySlider from "tiny-slider-react";

const TrendingSlider = ({
    newsData,
    newsLoading,
    everythingData,
    everythingLoading,
}) => {
    const settings = {
        lazyload: true,
        nav: false,
        mouseDrag: true,
        controls: true,
        controlsText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>',
        ],
    };
    // const [trendingData, setTrendingData]= useState([]);

    // useEffect(() => {
      // setTrendingData(everythingData?.articles?.slice(0, 20));
        // const sss = everythingData?.articles
        // console.log({ss,sss})
    // }, []);
    // console.log({newsData})

    return (
        <>
            {!newsLoading && newsData?.results?.length ? (
                <>
                    <section className="py-2">
                        <div className="container">
                            <div className="row g-0">
                                <div className="col-12 bg-primary bg-opacity-10 p-2 rounded">
                                    <div className="d-sm-flex align-items-center text-center text-sm-start">
                                        <div className="me-3 d-grid">
                                            <span className="badge bg-primary p-2 px-3">
                                                Trending:
                                            </span>
                                        </div>
                                        <div className="tiny-slider arrow-end arrow-xs arrow-white arrow-round arrow-md-none">
                                            <div className="tiny-slider-inner">
                                                <TinySlider settings={settings}>
                                                    {newsData?.results?.map(
                                                        (data, index) => (
                                                            <div key={index}>
                                                                <div className="text-reset btn-link d-inline">
                                                                    {
                                                                        data?.title
                                                                    }
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </TinySlider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <>
                    <section className="py-2">
                        <div className="container">
                            <div className="row g-0">
                                <div className="col-12 bg-primary bg-opacity-10 p-2 rounded skeleton anime">
                                    <div className="d-sm-flex align-items-center text-center text-sm-start">
                                        <div className="me-3 d-grid">
                                            <span className="badge bg-primary p-2 px-3 skeleton anime">
                                                Trending:
                                            </span>
                                        </div>

                                        <div className="tiny-slider arrow-end arrow-xs arrow-white arrow-round arrow-md-none">
                                            <div className="tiny-slider-inner">
                                                <div className="text-reset btn-link"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default TrendingSlider;
