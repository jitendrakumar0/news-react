import React from 'react'
import Card from '../../../components/card/Card'
import Socials from '../../../components/socials/Socials'
import TrendingTopics from '../../../components/trendingTopics/TrendingTopics'
import RecentPost from '../../../components/recentPost/RecentPost'
import { Link } from 'react-router-dom'

const TodaysTopHighlights = ({
  everythingData,
  everythingLoading,
}) => {
  return (
    <section className="position-relative">
      <div className="container" data-sticky-container>
        <div className="row">
          
          <div className="col-lg-9">
            
            <div className="mb-4">
              <h2 className="m-0"><i className="bi bi-hourglass-top me-2"></i>Top highlights</h2>
              <p>Latest breaking news, pictures, videos, and special reports</p>
            </div>
            <div className="row gy-4">
              <Card everythingData={everythingData} everythingLoading={everythingLoading}/>
              
              <div className="col-12 text-center mt-5">
                <button type="button" className="btn btn-primary-soft">Load more post <i className="bi bi-arrow-down-circle ms-2 align-middle"></i></button>
              </div>
              
            </div>
          </div>
          
          
          <div className="col-lg-3 mt-5 mt-lg-0 d-flex">
            <div data-sticky data-margin-top="80" data-sticky-for="767" className='d-flex flex-column flex-fill'>
                <Socials/>
                <TrendingTopics/>
                <RecentPost/>
            </div>
          </div>
          
        </div> 
      </div>
    </section>
  )
}

export default TodaysTopHighlights