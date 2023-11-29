import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const HeroSection = ({
  everythingData,
  everythingLoading,
}) => {
  const [everythingDataFinal, setEverythingDataFinal] = useState(null);

  useEffect(()=>{
    if(everythingData?.articles?.length){
      const sortedArticles = everythingData?.articles?.sort((a, b) => {
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      });
      setEverythingDataFinal(sortedArticles)
    }
  },[everythingData])

  return (
    <>
    {!everythingLoading && everythingDataFinal?.length ? 
      <>
        <section className="pt-4 pb-0 card-grid">
          <div className="container">
            <div className="row g-4">
              
              <div className="col-lg-6">
                <div className="card card-overlay-bottom card-grid-lg card-bg-scale" style={{backgroundImage:`url(${everythingDataFinal[0]?.urlToImage})`, backgroundPosition: 'center left', backgroundSize: 'cover'}}>
                  
                  <span className="card-featured" title="Featured post"><i className="fas fa-star"></i></span>
                  
                  <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4"> 
                    <div className="w-100 mt-auto">
                      
                      {/* <Link className="badge text-bg-danger mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Lifestyle</Link> */}
                      
                      <h2 className="text-white h1"><Link className="btn-link stretched-link text-reset">{everythingDataFinal[0]?.title}</Link></h2>
                      <p className="text-white">{everythingDataFinal[0]?.description}</p>
                      
                      <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center text-white position-relative">
                              {/* <div className="avatar avatar-sm me-3">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="avatar" />
                              </div> */}
                              <span className="">by <Link className="stretched-link text-reset btn-link">{everythingDataFinal[0]?.author ? everythingDataFinal[0]?.author : everythingDataFinal[0]?.source?.name}</Link></span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">{dayjs(everythingDataFinal[0]?.publishedAt).format('MMM. DD, YYYY')}</li>
                        {/* <li className="nav-item">5 min read</li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="row g-4">
                  
                  <div className="col-12">
                    <div className="card card-overlay-bottom card-grid-sm card-bg-scale" style={{backgroundImage:`url(${everythingDataFinal[1]?.urlToImage})`, backgroundPosition: 'center left', backgroundSize: 'cover'}}>
                      
                      
                      <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4"> 
                        <div className="w-100 mt-auto">
                          
                          {/* <Link className="badge text-bg-warning mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Technology</Link> */}
                          
                          <h4 className="text-white"><Link className="btn-link stretched-link text-reset">{everythingDataFinal[1]?.title}</Link></h4>
                          
                          <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                            <li className="nav-item position-relative">
                              <div className="nav-link">by <Link className="stretched-link text-reset btn-link">{everythingDataFinal[1]?.author ? everythingDataFinal[1]?.author : everythingDataFinal[1]?.source?.name}</Link>
                              </div>
                            </li>
                            <li className="nav-item">{dayjs(everythingDataFinal[1]?.publishedAt).format('MMM. DD, YYYY')}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                  <div className="col-md-6">
                    <div className="card card-overlay-bottom card-grid-sm card-bg-scale" style={{backgroundImage:`url(${everythingDataFinal[2]?.urlToImage})`, backgroundPosition: 'center left', backgroundSize: 'cover'}}>
                      
                      <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4"> 
                        <div className="w-100 mt-auto">
                          
                          {/* <Link className="badge text-bg-success mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Business</Link> */}
                          
                          <h4 className="text-white"><Link className="btn-link stretched-link text-reset">{everythingDataFinal[2]?.title}</Link></h4>
                          
                          <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                            <li className="nav-item position-relative">
                              <div className="nav-link">by <Link className="stretched-link text-reset btn-link">{everythingDataFinal[2]?.author ? everythingDataFinal[2]?.author : everythingDataFinal[2]?.source?.name}</Link>
                              </div>
                            </li>
                            <li className="nav-item">{dayjs(everythingDataFinal[2]?.publishedAt).format('MMM. DD, YYYY')}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                  <div className="col-md-6">
                    <div className="card card-overlay-bottom card-grid-sm card-bg-scale" style={{backgroundImage:`url(${everythingDataFinal[3]?.urlToImage})`, backgroundPosition: 'center left', backgroundSize: 'cover'}}>
                      
                      <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4"> 
                        <div className="w-100 mt-auto">
                          
                          {/* <Link className="badge text-bg-info mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Sports</Link> */}
                          
                          <h4 className="text-white"><Link className="btn-link stretched-link text-reset">{everythingDataFinal[3]?.title}</Link></h4>
                          
                          <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                            <li className="nav-item position-relative">
                              <div className="nav-link">by <Link className="stretched-link text-reset btn-link">{everythingDataFinal[3]?.author ? everythingDataFinal[3]?.author : everythingDataFinal[3]?.source?.name}</Link>
                              </div>
                            </li>
                            <li className="nav-item">{dayjs(everythingDataFinal[3]?.publishedAt).format('MMM. DD, YYYY')}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      :
      <>
        <section className="pt-4 pb-0 card-grid">
          <div className="container">
            <div className="row g-4">
              
              <div className="col-lg-6">
                <div className="card card-overlay-bottom card-grid-lg card-bg-scale" style={{backgroundImage:'url(assets/images/blog/1by1/01.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
                  
                  <span className="card-featured" title="Featured post"><i className="fas fa-star"></i></span>
                  
                  <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4"> 
                    <div className="w-100 mt-auto">
                      
                      <Link className="badge text-bg-danger mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Lifestyle</Link>
                      
                      <h2 className="text-white h1"><Link href="post-single-4.html" className="btn-link stretched-link text-reset">Ten tell-tale signs you need to get a new startup.</Link></h2>
                      <p className="text-white">No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. </p>
                      
                      <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center text-white position-relative">
                              <div className="avatar avatar-sm">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="avatar" />
                              </div>
                              <span className="ms-3">by <Link className="stretched-link text-reset btn-link">Louis</Link></span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">Nov 15, 2022</li>
                        <li className="nav-item">5 min read</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="row g-4">
                  
                  <div className="col-12">
                    <div className="card card-overlay-bottom card-grid-sm card-bg-scale" style={{backgroundImage:'url(assets/images/blog/1by1/02.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
                      
                      
                      <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4"> 
                        <div className="w-100 mt-auto">
                          
                          <Link className="badge text-bg-warning mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Technology</Link>
                          
                          <h4 className="text-white"><Link href="post-single-4.html" className="btn-link stretched-link text-reset">Best Pinterest boards for learning about business</Link></h4>
                          
                          <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                            <li className="nav-item position-relative">
                              <div className="nav-link">by <Link className="stretched-link text-reset btn-link">Bryan</Link>
                              </div>
                            </li>
                            <li className="nav-item">Aug 18, 2022</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                  <div className="col-md-6">
                    <div className="card card-overlay-bottom card-grid-sm card-bg-scale" style={{backgroundImage:'url(assets/images/blog/1by1/03.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
                      
                      <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4"> 
                        <div className="w-100 mt-auto">
                          
                          <Link className="badge text-bg-success mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Business</Link>
                          
                          <h4 className="text-white"><Link href="post-single-4.html" className="btn-link stretched-link text-reset">Five intermediate guide to business</Link></h4>
                          
                          <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                            <li className="nav-item position-relative">
                              <div className="nav-link">by <Link className="stretched-link text-reset btn-link">Joan</Link>
                              </div>
                            </li>
                            <li className="nav-item">Jun 03, 2022</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                  <div className="col-md-6">
                    <div className="card card-overlay-bottom card-grid-sm card-bg-scale" style={{backgroundImage:'url(assets/images/blog/1by1/04.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
                      
                      <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4"> 
                        <div className="w-100 mt-auto">
                          
                          <Link className="badge text-bg-info mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Sports</Link>
                          
                          <h4 className="text-white"><Link href="post-single-4.html" className="btn-link stretched-link text-reset">15 reasons to choose startup</Link></h4>
                          
                          <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                            <li className="nav-item position-relative">
                              <div className="nav-link">by <Link className="stretched-link text-reset btn-link">Amanda</Link>
                              </div>
                            </li>
                            <li className="nav-item">Jan 28, 2022</li>
                          </ul>
                        </div>
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

export default HeroSection