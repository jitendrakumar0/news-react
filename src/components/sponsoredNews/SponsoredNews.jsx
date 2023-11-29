import React, { useEffect, useState } from 'react'
import TinySlider from 'tiny-slider-react'
import Img from '../lazyLoadImage/Img';
import { Link } from 'react-router-dom';
import { fetchDataFromApi } from '../../utils/api';

const SponsoredNews = () => {
  const [everythingData, setEverythingData] = useState([]);
  const [everythingLoading, setEverythingLoading] = useState(false);
  const [setting, setSetting] = useState();

  const everythingDataFunction = () => {
    setEverythingLoading(true);
    fetchDataFromApi("/top-headlines?country=us&").then((res)=>{
      setEverythingData(res?.data);
      setEverythingLoading(false);
    })
  }
    useEffect(() => {
        everythingDataFunction()
    }, []);

    useEffect(()=>{
      setSetting({
        lazyload: false,
        nav: false,
        mouseDrag: true,
        controls: true,
        loop:false,
        // autoplay: true,
        autoplayTimeout: 3000,
        hoverpause: true,
        gutter: 24,
        arrow: true,
        dots: false,
        controlsText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>'
        ],
        responsive: {
            1200: {
                items: 4,
            },
            992: {
                items: 3,
            },
            768: {
                items: 2,
            },
            0: {
                items: 1,
            },
        },
      })
    },[everythingData])
  return (
    <>
    {!everythingLoading && everythingData?.articles?.length ? 
      <>
      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              
              <div className="mb-4 d-md-flex justify-content-between align-items-center">
                <h2 className="m-0"><i className="bi bi-megaphone"></i> Sponsored news</h2>
                <Link className="text-body small"><u>Content by: BijarniaDream</u></Link>
              </div>
              <div className="tiny-slider arrow-hover arrow-blur arrow-dark arrow-round">
                  <TinySlider settings={setting}>
                    {everythingData?.articles?.map((data, index)=>
                      <div key={index} className="card">
                        <div className="position-relative">
                          <Img className="card-img" src={data?.urlToImage} alt="Card image" />
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            
                            <div className="w-100 mb-auto d-flex justify-content-end">
                              <div className="text-end ms-auto">
                                
                                <div className="icon-md bg-white bg-opacity-10 bg-blur text-white fw-bold rounded-circle" title="8.5 rating">8.5</div>
                              </div>
                            </div>
                            
                            {/* <div className="w-100 mt-auto">
                              <Link className="badge text-bg-info mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Marketing</Link>
                            </div> */}
                          </div>
                        </div>
                        <div className="card-body px-0 pt-3">
                          <h5 className="card-title"><Link className="btn-link text-reset fw-bold">{data?.title}</Link></h5>
                          
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center position-relative">
                                  {/* <div className="avatar avatar-xs">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                                  </div> */}
                                  <span>by <Link className="stretched-link text-reset btn-link">Lori</Link></span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Mar 07, 2022</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </TinySlider>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
      :
      <>
      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              
              <div className="mb-4 d-md-flex justify-content-between align-items-center">
                <h2 className="m-0"><i className="bi bi-megaphone"></i> Sponsored news</h2>
                <Link className="text-body small"><u>Content by: BijarniaDream</u></Link>
              </div>
              <div className="tiny-slider">
                <div className="tiny-slider-inner">
                  <div className="card">
                    
                    <div className="position-relative">
                      <img className="card-img" src="assets/images/blog/4by3/07.jpg" alt="Card image" />
                      <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                        
                        <div className="w-100 mb-auto d-flex justify-content-end">
                          <div className="text-end ms-auto">
                            
                            <div className="icon-md bg-white bg-opacity-10 bg-blur text-white fw-bold rounded-circle" title="8.5 rating">8.5</div>
                          </div>
                        </div>
                        
                        <div className="w-100 mt-auto">
                          <Link className="badge text-bg-info mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Marketing</Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-3">
                      <h5 className="card-title"><a href="post-single-3.html" className="btn-link text-reset fw-bold">7 common mistakes everyone makes while traveling</a></h5>
                      
                      <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                              {/* <div className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                              </div> */}
                              <span>by <Link className="stretched-link text-reset btn-link">Lori</Link></span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">Mar 07, 2022</li>
                      </ul>
                    </div>
                  </div>
                  
                  
                  <div className="card">
                    
                    <div className="position-relative">
                      <img className="card-img" src="assets/images/blog/4by3/08.jpg" alt="Card image" />
                      <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                        
                        <div className="w-100 mt-auto">
                          <Link className="badge text-bg-danger mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Sports</Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-3">
                      <h5 className="card-title"><a href="post-single-3.html" className="btn-link text-reset fw-bold">Skills that you can learn from business</a></h5>
                      
                      <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                              {/* <div className="avatar avatar-xs">
                                <div className="avatar-img rounded-circle bg-warning">
                                  <span className="text-dark position-absolute top-50 start-50 translate-middle fw-bold small">MK</span>
                                </div>
                              </div> */}
                              <span>by <Link className="stretched-link text-reset btn-link">Joan</Link></span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">Aug 15, 2022</li>
                      </ul>
                    </div>
                  </div>
                  
                  
                  <div className="card">
                    
                    <div className="position-relative">
                      <img className="card-img" src="assets/images/blog/4by3/09.jpg" alt="Card image" />
                      <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                        
                        <div className="w-100 mt-auto">
                          <Link className="badge text-bg-success mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Marketing</Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-3">
                      <h5 className="card-title"><a href="post-single-3.html" className="btn-link text-reset fw-bold">10 tell-tale signs you need to get a new business</a></h5>
                      
                      <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                              {/* <div className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                              </div> */}
                              <span>by <Link className="stretched-link text-reset btn-link">Bryan</Link></span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">Jun 01, 2022</li>
                      </ul>
                    </div>
                  </div>
                  
                  
                  <div className="card">
                    
                    <div className="position-relative">
                      <img className="card-img" src="assets/images/blog/4by3/10.jpg" alt="Card image" />
                      <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                        
                        <div className="w-100 mb-auto d-flex justify-content-end">
                          <div className="text-end ms-auto">
                            
                            <div className="icon-md bg-white-soft bg-blur text-white rounded-circle" title="This post has images"><i className="fas fa-image"></i></div>
                          </div>
                        </div>
                        
                        <div className="w-100 mt-auto">
                          <Link className="badge bg-primary mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Photography</Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-3">
                      <h5 className="card-title"><a href="post-single-3.html" className="btn-link text-reset fw-bold">This is why this year will be the year of startups</a></h5>
                      
                      <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                              {/* <div className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="avatar" />
                              </div> */}
                              <span>by <Link className="stretched-link text-reset btn-link">Samuel</Link></span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">Dec 07, 2022</li>
                      </ul>
                    </div>
                  </div>
                  
                  
                  <div className="card">
                    
                    <div className="position-relative">
                      <img className="card-img" src="assets/images/blog/4by3/11.jpg" alt="Card image" />
                      <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                        
                        <div className="w-100 mt-auto">
                          <Link className="badge text-bg-warning mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Technology</Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-3">
                      <h5 className="card-title"><a href="post-single-3.html" className="btn-link text-reset fw-bold">Best Pinterest Boards for learning about business</a></h5>
                      
                      <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                              {/* <div className="avatar avatar-xs">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt="avatar" />
                              </div> */}
                              <span>by <Link className="stretched-link text-reset btn-link">Dennis</Link></span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">Sep 07, 2022</li>
                      </ul>
                    </div>
                  </div>
      
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    }
    </>
  )
}

export default SponsoredNews