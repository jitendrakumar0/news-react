import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Img from '../lazyLoadImage/Img';

const Card = ({
  everythingData,
  everythingLoading,
}) => {
  const [everythingDataFinal, setEverythingDataFinal] = useState(null);
  const [everythingDataFinally, setEverythingDataFinally] = useState(null);

  useEffect(()=>{
    if(everythingData?.articles?.length){
      const sortedArticles = everythingData?.articles?.sort((a, b) => {
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      });
      setEverythingDataFinal(sortedArticles)
    }
  },[everythingData])

  useEffect(()=>{
    if(everythingDataFinal?.length){
      setEverythingDataFinally(everythingDataFinal?.slice(4));
    }
  },[everythingDataFinal])
  return (
    <>
    {everythingDataFinally?.length ? 
      <>
        {
          everythingDataFinally?.map((data, index)=>(
            <div key={index} className="col-sm-6">
              <div className="card">
                
                <div className="position-relative">
                  <Img className="card-img w-full h-full object-cover object-center" src={data?.urlToImage} alt="Card image" />
                  <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                    
                    <div className="w-100 mt-auto">
                      
                      {/* <Link className="badge text-bg-warning mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Technology</Link> */}
                    </div>
                  </div>
                </div>
                <div className="card-body px-0 pt-3">
                  
                  {/* <Link className="mb-0 text-body small" tabIndex="0" role="button" data-bs-container="body" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" data-bs-content="You're seeing this ad because your activity meets the intended audience of our site.">
                    <i className="bi bi-info-circle ps-1"></i> Sponsored
                  </Link> */}
                  <h4 className="card-title mt-2"><Link to={data?.url} target='_blank' className="btn-link text-reset fw-bold">{data?.title}</Link></h4>
                  <p className="card-text">{data?.description}</p>
                  
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                    <li className="nav-item">
                      <div className="nav-link">
                        <div className="d-flex align-items-center position-relative">
                          {/* <div className="avatar avatar-xs me-3">
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                          </div> */}
                          <span>by <Link className="stretched-link text-reset btn-link">{data?.author ? data?.author : data?.source?.name}</Link></span>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">{dayjs(data?.publishedAt).format('MMM. DD, YYYY')}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))
        }
      </>
    :
      <>
        <div className="col-sm-6">
          <div className="card">
            
            <div className="position-relative">
              <img className="card-img" src="assets/images/blog/4by3/01.jpg" alt="Card image" />
              <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                
                <div className="w-100 mt-auto">
                  
                  <Link className="badge text-bg-warning mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Technology</Link>
                </div>
              </div>
            </div>
            <div className="card-body px-0 pt-3">
              
              <Link className="mb-0 text-body small" tabIndex="0" role="button" data-bs-container="body" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" data-bs-content="You're seeing this ad because your activity meets the intended audience of our site.">
                <i className="bi bi-info-circle ps-1"></i> Sponsored
              </Link>
              <h4 className="card-title mt-2"><Link className="btn-link text-reset fw-bold">12 worst types of business accounts you follow on Twitter</Link></h4>
              <p className="card-text">He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to</p>
              
              <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                <li className="nav-item">
                  <div className="nav-link">
                    <div className="d-flex align-items-center position-relative">
                      <div className="avatar avatar-xs">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                      </div>
                      <span className="ms-3">by <Link className="stretched-link text-reset btn-link">Samuel</Link></span>
                    </div>
                  </div>
                </li>
                <li className="nav-item">Jan 22, 2022</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    }
    
    
    </>
  )
}

export default Card