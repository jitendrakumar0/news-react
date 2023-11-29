import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark pt-5">
      <div className="container">
        
        <div className="row pt-3 pb-4">
          <div className="col-md-3">
            <img src="assets/images/logo-footer.svg" alt="footer logo" />
          </div>
          <div className="col-md-5">
            <p className="text-body-secondary">The next-generation blog, news, and magazine theme for you to start sharing your stories today! This Bootstrap 5 based theme is ideal for all types of sites that deliver the news.</p>
          </div>
          <div className="col-md-4">
            
            <form className="row row-cols-lg-auto g-2 align-items-center justify-content-end">
              <div className="col-12">
                <input type="email" className="form-control" placeholder="Enter your email address" />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary m-0">Subscribe</button>
              </div>
              <div className="form-text mt-2">By subscribing you agree to our 
                <a href="javascript:;" className="text-decoration-underline text-reset">Privacy Policy</a>
              </div>
            </form>
          </div>
        </div>
        
    
        
        <hr />
    
        
        <div className="row pt-5">
          
          <div className="col-md-6 col-lg-3 mb-4">
            <h5 className="mb-4 text-white">Recent post</h5>
            
            <div className="mb-4 position-relative">
              <div><a href="javascript:;" className="badge text-bg-danger mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Business</a></div>
              <a href="post-single-3.html" className="btn-link text-white fw-normal">Up-coming business bloggers, you need to watch</a>
              <ul className="nav nav-divider align-items-center small mt-2 text-body-secondary">
                <li className="nav-item position-relative">
                  <div className="nav-link">by <a href="javascript:;" className="stretched-link text-reset btn-link">Dennis</a>
                  </div>
                </li>
                <li className="nav-item">Apr 06, 2022</li>
              </ul>
            </div>
            
            <div className="mb-4 position-relative">
              <div><a href="javascript:;" className="badge text-bg-info mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Marketing</a></div>
              <a href="post-single-3.html" className="btn-link text-white fw-normal">How did we get here? The history of the business told through tweets</a>
              <ul className="nav nav-divider align-items-center small mt-2 text-body-secondary">
                <li className="nav-item position-relative">
                  <div className="nav-link">by <a href="javascript:;" className="stretched-link text-reset btn-link">Larry</a>
                  </div>
                </li>
                <li className="nav-item">May 29, 2022</li>
              </ul>
            </div>
          </div>
    
          
          <div className="col-md-6 col-lg-3 mb-4">
            <h5 className="mb-4 text-white">Navigation</h5>
            <div className="row">
              <div className="col-6">
                <ul className="nav flex-column text-primary-hover">
                  <li className="nav-item"><a className="nav-link pt-0" href="javascript:;">Features</a></li>
                  <li className="nav-item"><a className="nav-link" href="javascript:;">Style Guide</a></li>
                  <li className="nav-item"><a className="nav-link" href="javascript:;">Contact us</a></li>
                  <li className="nav-item"><a className="nav-link" href="javascript:;">Get Theme</a></li>
                  <li className="nav-item"><a className="nav-link" href="javascript:;">Support</a></li>
                  <li className="nav-item"><a className="nav-link" href="javascript:;">Privacy Policy</a></li>
                  <li className="nav-item"><a className="nav-link" href="javascript:;">Newsletter</a></li>
                </ul>
              </div>
               <div className="col-6">
                <ul className="nav flex-column text-primary-hover">
                  <li className="nav-item"><a className="nav-link pt-0" href="javascript:;">News</a></li>
                  <li className="nav-item"><a className="nav-link" href="javascript:;">Career <span className="badge text-bg-danger ms-2">2 Job</span></a></li>
                  <li className="nav-item"><a className="nav-link" href="javascript:;">Technology</a></li>
                  <li className="nav-item"><a className="nav-link" href="javascript:;">Startups</a></li>
                  <li className="nav-item"><a className="nav-link" href="javascript:;">Gadgets</a></li>
                  <li className="nav-item"><a className="nav-link" href="javascript:;">Inspiration</a></li>
                </ul>
              </div>
            </div>
          </div>
    
          
          <div className="col-sm-6 col-lg-3 mb-4">
            <h5 className="mb-4 text-white">Get Regular Updates</h5>
            <ul className="nav flex-column text-primary-hover">
              <li className="nav-item"><a className="nav-link pt-0" href="javascript:;"><i className="fab fa-whatsapp fa-fw me-2"></i>WhatsApp</a></li>
              <li className="nav-item"><a className="nav-link" href="javascript:;"><i className="fab fa-youtube fa-fw me-2"></i>YouTube</a></li>
              <li className="nav-item"><a className="nav-link" href="javascript:;"><i className="far fa-bell fa-fw me-2"></i>Website Notifications</a></li>
              <li className="nav-item"><a className="nav-link" href="javascript:;"><i className="far fa-envelope fa-fw me-2"></i>Newsletters</a></li>
              <li className="nav-item"><a className="nav-link" href="javascript:;"><i className="fas fa-headphones-alt fa-fw me-2"></i>Podcasts</a></li>
            </ul>
          </div>
    
          
          <div className="col-sm-6 col-lg-3 mb-4">
            <h5 className="mb-4 text-white">Our mobile App</h5>
            <p className="text-body-secondary">Download our App and get the latest Breaking News Alerts and latest headlines and daily articles near you.</p>
            <div className="row g-2">
              <div className="col">
                <a href="javascript:;"><img className="w-100" src="assets/images/app-store.svg" alt="app-store" /></a>
              </div>
              <div className="col">
                <a href="javascript:;"><img className="w-100" src="assets/images/google-play.svg" alt="google-play" /></a>
              </div>
            </div>
          </div>
        </div>
        
    
        
        <div className="row">
          <h5 className="mb-2 text-white">Hot topics</h5>
          <ul className="list-inline text-primary-hover lh-lg">
            <li className="list-inline-item"><a href="javascript:;">Covid-19</a></li>
            <li className="list-inline-item"><a href="javascript:;">Politics</a></li>
            <li className="list-inline-item"><a href="javascript:;">Entertainment</a></li>
            <li className="list-inline-item"><a href="javascript:;">Media</a></li>
            <li className="list-inline-item"><a href="javascript:;">Royalist</a></li>
            <li className="list-inline-item"><a href="javascript:;">World</a></li>
            <li className="list-inline-item"><a href="javascript:;">Half Full</a></li>
            <li className="list-inline-item"><a href="javascript:;">Scouted</a></li>
            <li className="list-inline-item"><a href="javascript:;">Travel</a></li>
            <li className="list-inline-item"><a href="javascript:;">Beast Inside</a></li>
            <li className="list-inline-item"><a href="javascript:;">Crossword</a></li>
            <li className="list-inline-item"><a href="javascript:;">Newsletters</a></li>
            <li className="list-inline-item"><a href="javascript:;">Podcasts</a></li>
            <li className="list-inline-item"><a href="javascript:;">Auction 2022</a></li>
            <li className="list-inline-item"><a href="javascript:;">Protests</a></li>
            <li className="list-inline-item"><a href="javascript:;">NewsCyber</a></li>
            <li className="list-inline-item"><a href="javascript:;">Education</a></li>
            <li className="list-inline-item"><a href="javascript:;">Sports</a></li>
            <li className="list-inline-item"><a href="javascript:;">Tech And Auto</a></li>
            <li className="list-inline-item"><a href="javascript:;">Opinion</a></li>
            <li className="list-inline-item"><a href="javascript:;">Share Market</a></li>
          </ul>
        </div>
        
      </div>
    
      
      <div className="bg-dark-overlay-3 mt-5">
        <div className="container">
          <div className="row align-items-center justify-content-md-between py-4">
            <div className="col-md-6">
              
              <div className="text-center text-md-start text-primary-hover text-body-secondary">©2023 <a href="https://www.webestica.com/" className="text-reset btn-link" target="_blank">Webestica</a>. All rights reserved
              </div>
            </div>
            <div className="col-md-6 d-sm-flex align-items-center justify-content-center justify-content-md-end">
              
              <div className="dropup me-0 me-sm-3 mt-3 mt-md-0 text-center text-sm-end">
                <a className="dropdown-toggle text-primary-hover" href="javascript:;" role="button" id="languageSwitcher" data-bs-toggle="dropdown" aria-expanded="false">
                  English Edition
                </a>
                <ul className="dropdown-menu min-w-auto" aria-labelledby="languageSwitcher">
                  <li><a className="dropdown-item" href="javascript:;">English</a></li>
                  <li><a className="dropdown-item" href="javascript:;">German </a></li>
                  <li><a className="dropdown-item" href="javascript:;">French</a></li>
                </ul>
              </div>
              
              <ul className="nav text-primary-hover text-center text-sm-end justify-content-center justify-content-center mt-3 mt-md-0">
                <li className="nav-item"><a className="nav-link" href="javascript:;">Terms</a></li>
                <li className="nav-item"><a className="nav-link" href="javascript:;">Privacy</a></li>
                <li className="nav-item"><a className="nav-link pe-0" href="javascript:;">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer