import React from 'react'
import SideAds from '../ads/sideAds/SideAds'
import { Link } from 'react-router-dom'

const RecentPost = () => {
  return (
    <div className="row flex-column flex-fill">
      
      <div className="col-12 col-sm-6 col-lg-12">
        <h4 className="mt-4 mb-3">Recent post</h4>
        
        <div className="card mb-3">
          <div className="row g-3">
            <div className="col-4">
              <img className="rounded" src="assets/images/blog/4by3/thumb/01.jpg" alt="" />
            </div>
            <div className="col-8">
              <h6><Link className="btn-link stretched-link text-reset fw-bold">The pros and cons of business agency</Link></h6>
              <div className="small mt-1">May 17, 2022</div>
            </div>
          </div>
        </div>
        
        <div className="card mb-3">
          <div className="row g-3">
            <div className="col-4">
              <img className="rounded" src="assets/images/blog/4by3/thumb/02.jpg" alt="" />
            </div>
            <div className="col-8">
              <h6><Link className="btn-link stretched-link text-reset fw-bold">5 reasons why you shouldn't startup</Link></h6>
              <div className="small mt-1">Apr 04, 2022</div>
            </div>
          </div>
        </div>
        
        <div className="card mb-3">
          <div className="row g-3">
            <div className="col-4">
              <img className="rounded" src="assets/images/blog/4by3/thumb/03.jpg" alt="" />
            </div>
            <div className="col-8">
              <h6><Link className="btn-link stretched-link text-reset fw-bold">Ten questions you should answer truthfully.</Link></h6>
              <div className="small mt-1">Jun 30, 2022</div>
            </div>
          </div>
        </div>
        
        <div className="card mb-3">
          <div className="row g-3">
            <div className="col-4">
              <img className="rounded" src="assets/images/blog/4by3/thumb/04.jpg" alt="" />
            </div>
            <div className="col-8">
              <h6><Link className="btn-link stretched-link text-reset fw-bold">Five unbelievable facts about money.</Link></h6>
              <div className="small mt-1">Nov 29, 2022</div>
            </div>
          </div>
        </div>
      </div>
      

      <SideAds/>
      
    </div>
  )
}

export default RecentPost