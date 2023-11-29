import React from 'react'

const BottomHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        
        <a className="navbar-brand" href="index-2.html">
          <img className="navbar-brand-item light-mode-item" src="assets/images/logo.svg" alt="logo" />			
          <img className="navbar-brand-item dark-mode-item" src="assets/images/logo-light.svg" alt="logo" />			
        </a>
        
  
        
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="text-body h6 d-none d-sm-inline-block">Menu</span>
          <span className="navbar-toggler-icon"></span>
        </button>
  
        
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav navbar-nav-scroll mx-auto">
  
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" id="homeMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
              <ul className="dropdown-menu" aria-labelledby="homeMenu">
                <li> <a className="dropdown-item active" href="index-2.html">Home default</a></li>
                <li> <a className="dropdown-item" href="index-lazy.html">Home lazy load</a></li>
                <li> <a className="dropdown-item" href="index-3.html">Magazine classic</a></li>
                <li> <a className="dropdown-item" href="index-4.html">Magazine</a></li>
                <li> <a className="dropdown-item" href="index-5.html">Home cards</a></li>
                <li> <a className="dropdown-item" href="index-6.html">Blog classic</a></li>
                <li> <a className="dropdown-item" href="index-7.html">Blog Personal </a></li>
                <li> <a className="dropdown-item" href="index-8.html">Blog Vintage</a></li>
                <li> <a className="dropdown-item" href="index-9.html">Blog Tech</a></li>
                <li> <a className="dropdown-item" href="index-10.html">Blog Fashion</a></li>
                <li> <a className="dropdown-item" href="index-11.html">Blog Podcast</a></li>
                <li> <a className="dropdown-item" href="index-12.html">Home Shop </a></li>
              </ul>
            </li>
  
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
              <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                <li> <a className="dropdown-item" href="about-us.html">About</a></li>
                <li> <a className="dropdown-item" href="contact-us.html">Contact</a></li>
                
                <li className="dropdown-submenu dropend"> 
                  <a className="dropdown-item dropdown-toggle">Shop</a>
                  <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                    <li> <a className="dropdown-item" href="shop-grid.html">Shop grid</a> </li>
                    <li> <a className="dropdown-item" href="shop-detail.html">Shop detail</a> </li>
                    <li> <a className="dropdown-item" href="checkout.html">Checkout</a> </li>
                    <li> <a className="dropdown-item" href="my-cart.html">Cart</a> </li>
                    <li> <a className="dropdown-item" href="empty-cart.html">Empty Cart</a> </li>
                  </ul>
                </li>
                
                <li className="dropdown-submenu dropend"> 
                  <a className="dropdown-item dropdown-toggle">Other Archives</a>
                  <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                    <li> <a className="dropdown-item" href="author.html">Author Page</a> </li>
                    <li> <a className="dropdown-item" href="categories.html">Category page 1</a> </li>
                    <li> <a className="dropdown-item" href="categories-2.html">Category page 2</a> </li>
                    <li> <a className="dropdown-item" href="tag.html"># tag</a> </li>
                    <li> <a className="dropdown-item" href="search-result.html">Search result</a> </li>
                  </ul>
                </li>
                <li> <a className="dropdown-item" href="404.html">Error 404</a></li>
                <li> <a className="dropdown-item" href="signin.html">signin</a></li>
                <li> <a className="dropdown-item" href="signup.html">signup</a></li>
                <li> <a className="dropdown-item" href="offline.html">offline</a></li>
                
                <li className="dropdown-divider"></li>
                <li className="dropdown-submenu dropend">
                  <a className="dropdown-item dropdown-toggle">Dropdown levels</a>
                  <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                    
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle">Dropdown (end)</a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li> <a className="dropdown-item">Dropdown item</a> </li>
                        <li> <a className="dropdown-item">Dropdown item</a> </li>
                      </ul>
                    </li>
                    <li> <a className="dropdown-item">Dropdown item</a> </li>
                    
                    <li className="dropdown-submenu dropstart">
                      <a className="dropdown-item dropdown-toggle">Dropdown (start)</a>
                      <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                        <li> <a className="dropdown-item">Dropdown item</a> </li>
                        <li> <a className="dropdown-item">Dropdown item</a> </li>
                      </ul>
                    </li>
                    <li> <a className="dropdown-item">Dropdown item</a> </li>
                  </ul>
                </li>
                <li className="dropdown-divider"></li>
                <li> 
                  <a className="dropdown-item" href="https://support.webestica.com/" target="_blank">
                    <i className="text-warning fa-fw bi bi-life-preserver me-2"></i>Support
                  </a> 
                </li>
                <li> 
                  <a className="dropdown-item" href="docs/index.html" target="_blank">
                    <i className="text-danger fa-fw bi bi-card-text me-2"></i>Documentation
                  </a> 
                </li>
                <li className="dropdown-divider"></li>
                <li> 
                  <a className="dropdown-item" href="rtl/index.html" target="_blank">
                    <i className="text-info fa-fw bi bi-toggle-off me-2"></i>RTL demo
                  </a> 
                </li>
                <li> 
                  <a className="dropdown-item" href="https://themes.getbootstrap.com/store/webestica/" target="_blank">
                    <i className="text-success fa-fw bi bi-cloud-download-fill me-2"></i>Buy blogzine!
                  </a> 
                </li>
              </ul>
            </li>
  
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="postMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Post</a>
              <ul className="dropdown-menu" aria-labelledby="postMenu">
                
                <li className="dropdown-submenu dropend"> 
                  <a className="dropdown-item dropdown-toggle">Post grid</a>
                  <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                    <li> <a className="dropdown-item" href="post-grid.html">Post grid</a> </li>
                    <li> <a className="dropdown-item" href="post-grid-4-col.html">Post grid 4 col</a> </li>
                    <li> <a className="dropdown-item" href="post-grid-masonry.html">Post grid masonry</a> </li>
                    <li> <a className="dropdown-item" href="post-grid-masonry-filter.html">Post grid masonry filter</a> </li>
                    <li> <a className="dropdown-item" href="post-large-and-grid.html">Post mixed large than grid</a> </li>
                  </ul>
                </li>
                <li> <a className="dropdown-item" href="post-list.html">Post list</a> </li>
                <li> <a className="dropdown-item" href="post-list-2.html">Post list 2</a> </li>
                <li> <a className="dropdown-item" href="post-cards.html">Post card</a> </li>
                <li> <a className="dropdown-item" href="post-overlay.html">Post Overlay</a> </li>
                <li> <a className="dropdown-item" href="post-types.html">Post types</a> </li>
                <li className="dropdown-divider"></li>
                <li> <a className="dropdown-item" href="post-single.html">Post single magazine</a> </li>
                <li> <a className="dropdown-item" href="post-single-2.html">Post single classic</a> </li>
                <li> <a className="dropdown-item" href="post-single-3.html">Post single minimal</a> </li>
                <li> <a className="dropdown-item" href="post-single-4.html">Post single card</a> </li>
                <li> <a className="dropdown-item" href="post-single-5.html">Post single review</a> </li>
                <li> <a className="dropdown-item" href="post-single-6.html">Post single video</a> </li>
                <li> <a className="dropdown-item" href="podcast-single.html">Podcast single</a> </li>
                <li className="dropdown-divider"></li>
                <li> <a className="dropdown-item" href="pagination-styles.html">Pagination styles</a> </li>
              </ul>
            </li>
  
            
            <li className="nav-item dropdown dropdown-fullwidth">
              <a className="nav-link dropdown-toggle" id="megaMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Lifestyle</a>
              <div className="dropdown-menu" aria-labelledby="megaMenu">
                <div className="container">
                  <div className="row g-4 p-3 flex-fill">
                    
                    <div className="col-sm-6 col-lg-3">
                      <div className="card bg-transparent">
                        
                        <img className="card-img rounded" src="assets/images/blog/16by9/small/01.jpg" alt="Card image" />
                        <div className="card-body px-0 pt-3">
                          <h6 className="card-title mb-0"><a className="btn-link text-reset fw-bold">7 common mistakes everyone makes while traveling</a></h6>
                          
                          <ul className="nav nav-divider align-items-center text-uppercase small mt-2">
                            <li className="nav-item">
                              <a className="text-reset btn-link">Joan Wallace</a>
                            </li>
                            <li className="nav-item">Feb 18, 2022</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    
                    <div className="col-sm-6 col-lg-3">
                      <div className="card bg-transparent">
                        
                        <img className="card-img rounded" src="assets/images/blog/16by9/small/02.jpg" alt="Card image" />
                        <div className="card-body px-0 pt-3">
                          <h6 className="card-title mb-0"><a className="btn-link text-reset fw-bold">12 worst types of business accounts you follow on Twitter</a></h6>
                          
                          <ul className="nav nav-divider align-items-center text-uppercase small mt-2">
                            <li className="nav-item">
                              <a className="text-reset btn-link">Lori Stevens</a>
                            </li>
                            <li className="nav-item">Jun 03, 2022</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    
                    <div className="col-sm-6 col-lg-3">
                      <div className="card bg-transparent">
                        
                        <img className="card-img rounded" src="assets/images/blog/16by9/small/03.jpg" alt="Card image" />
                        <div className="card-body px-0 pt-3">
                          <h6 className="card-title mb-0"><a className="btn-link text-reset fw-bold">Skills that you can learn from business</a></h6>
                          
                          <ul className="nav nav-divider align-items-center text-uppercase small mt-2">
                            <li className="nav-item">
                              <a className="text-reset btn-link">Judy Nguyen</a>
                            </li>
                            <li className="nav-item">Sep 07, 2022</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    
                    <div className="col-sm-6 col-lg-3">
                      <div className="bg-primary bg-opacity-10 p-4 text-center h-100 w-100 rounded">
                        <span>The Blogzine</span>
                        <h3>Premium Membership</h3>
                        <p>Become a Member Today!</p>
                        <a className="btn btn-warning">View pricing plans</a>
                      </div>
                    </div>
                    
                  </div> 
                  
                  <div className="row px-3">
                    <div className="col-12">
                      <ul className="list-inline mt-3">
                        <li className="list-inline-item">Trending tags:</li>
                        <li className="list-inline-item"><a className="btn btn-sm btn-primary-soft">Travel</a></li>
                        <li className="list-inline-item"><a className="btn btn-sm btn-warning-soft">Business</a></li>
                        <li className="list-inline-item"><a className="btn btn-sm btn-success-soft">Tech</a></li>
                        <li className="list-inline-item"><a className="btn btn-sm btn-danger-soft">Gadgets</a></li>
                        <li className="list-inline-item"><a className="btn btn-sm btn-info-soft">Lifestyle</a></li>
                        <li className="list-inline-item"><a className="btn btn-sm btn-primary-soft">Vaccine</a></li>
                        <li className="list-inline-item"><a className="btn btn-sm btn-success-soft">Sports</a></li>
                        <li className="list-inline-item"><a className="btn btn-sm btn-danger-soft">Covid-19</a></li>
                        <li className="list-inline-item"><a className="btn btn-sm btn-info-soft">Politics</a></li>
                      </ul>
                    </div>
                  </div> 
                </div>
              </div>
            </li>
  
            
            <li className="nav-item"> <a className="nav-link" href="dashboard.html">Dashboard</a></li>
          </ul>
        </div>
        
  
        
        <div className="nav flex-nowrap align-items-center">
          
          {/* <div className="nav-item d-none d-md-block">
            <a className="btn btn-sm btn-danger mb-0 mx-2">Subscribe!</a>
          </div> */}
          
          <div className="nav-item dropdown dropdown-toggle-icon-none nav-search">
            <a className="nav-link dropdown-toggle" role="button" id="navSearch" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-search fs-4"> </i>
            </a>
            <div className="dropdown-menu dropdown-menu-end shadow rounded p-2" aria-labelledby="navSearch">
              <form className="input-group">
                <input className="form-control border-success" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-success m-0" type="submit">Search</button>
              </form>
            </div>
          </div>
          
          <div className="nav-item">
            <a className="nav-link p-0" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu">
              <i className="bi bi-text-right rtl-flip fs-2" data-bs-target="#offcanvasMenu"> </i>
            </a>
          </div>
        </div>
        
      </div>
    </nav>
  )
}

export default BottomHeader