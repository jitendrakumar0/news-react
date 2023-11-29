import React from 'react'
import { Link } from 'react-router-dom'

const TrendingTopics = () => {
  return (
    <div>
      <h4 className="mt-4 mb-3">Trending topics</h4>
      
      <div className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded bg-dark-overlay-4 " style={{backgroundImage:'url(assets/images/blog/4by3/01.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
        <div className="p-3">
          <Link className="stretched-link btn-link fw-bold text-white h5">Entertainment</Link>
        </div>
      </div>
      
      <div className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded" style={{backgroundImage:'url(assets/images/blog/4by3/02.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
        <div className="bg-dark-overlay-4 p-3">
          <Link className="stretched-link btn-link fw-bold text-white h5">Business</Link>
        </div>
      </div>
      
      <div className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded" style={{backgroundImage:'url(assets/images/blog/4by3/03.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
        <div className="bg-dark-overlay-4 p-3">
          <Link className="stretched-link btn-link fw-bold text-white h5">General</Link>
        </div>
      </div>
      
      <div className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded" style={{backgroundImage:'url(assets/images/blog/4by3/04.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
        <div className="bg-dark-overlay-4 p-3">
          <Link className="stretched-link btn-link fw-bold text-white h5">Technology</Link>
        </div>
      </div>
      
      <div className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded" style={{backgroundImage:'url(assets/images/blog/4by3/05.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
        <div className="bg-dark-overlay-4 p-3">
          <Link className="stretched-link btn-link fw-bold text-white h5">Sports</Link>
        </div>
      </div>
      
      <div className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded bg-dark-overlay-4 " style={{backgroundImage:'url(assets/images/blog/4by3/01.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
        <div className="p-3">
          <Link className="stretched-link btn-link fw-bold text-white h5">Health</Link>
        </div>
      </div>
      
      {/* <div className="text-center mt-3">
        <Link className="fw-bold text-body text-primary-hover"><u>View all categories</u></Link>
      </div> */}
    </div>
  )
}

export default TrendingTopics