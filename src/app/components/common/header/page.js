import Image from 'next/image'


export default function Header() {
    return (
        <>
            <header>
               <div className="tp-header-area tp-header-style-darkRed tp-header-height">
                  <div id="header-sticky" className="tp-header-bottom-2 tp-header-sticky">
                     <div className="container">
                        <div className="tp-mega-menu-wrapper p-relative">
                           <div className="row align-items-center">
                              <div className="col-xl-2 col-lg-5 col-md-5 col-sm-4 col-6">
                                 <div className="logo">
                                    <a className='d-flex align-items-center gap-2' href="index.html">
                                       <Image 
                                             src="/assets/img/logo/logo.png" 
                                             alt="logo"
                                             width={45}
                                             height={45}
                                       /> 
                                       <span><strong>Aljeco</strong> </span>
                                    </a>
                                 </div>
                              </div>
                              <div className="col-xl-5 d-none d-xl-block">
                                 <div className="main-menu menu-style-2">
                                    <nav className="tp-main-menu-content">
                                       <ul>
                                          <li><a href="contact.html">Clothing</a></li>
                                          <li><a href="contact.html">Shoes</a></li>
                                          <li><a href="contact.html">Bags</a></li>
                                          <li><a href="contact.html">Watch</a></li>
                                          <li><a href="contact.html">Electronics</a></li>
                                       </ul>
                                    </nav>
                                 </div>
                              </div>
                        <div className="col-xl-5 col-lg-7 col-md-7 col-sm-8 col-6">
                           <div className="tp-header-bottom-right d-flex align-items-center justify-content-end gap-4 pl-30">
                              <div className="tp-header-search-2 d-none d-sm-block">
                                 <form action="#">
                                    <input type="text" placeholder="Search Products..." />
                                    <button type="submit">
                                       <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M18.9999 19L14.6499 14.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                       </svg>                                       
                                    </button>
                                 </form>
                              </div>
                              <div className="tp-header-action d-flex align-items-center ml-30">
                                 <div className="tp-header-action-item d-none d-lg-block">
                                    <a href="wishlist.html" className="tp-header-action-btn">
                                       <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.239 18.8538C13.4096 17.5179 15.4289 15.9456 17.2607 14.1652C18.5486 12.8829 19.529 11.3198 20.1269 9.59539C21.2029 6.25031 19.9461 2.42083 16.4289 1.28752C14.5804 0.692435 12.5616 1.03255 11.0039 2.20148C9.44567 1.03398 7.42754 0.693978 5.57894 1.28752C2.06175 2.42083 0.795919 6.25031 1.87187 9.59539C2.46978 11.3198 3.45021 12.8829 4.73806 14.1652C6.56988 15.9456 8.58917 17.5179 10.7598 18.8538L10.9949 19L11.239 18.8538Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M7.26062 5.05302C6.19531 5.39332 5.43839 6.34973 5.3438 7.47501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                       </svg> 
                                       <span className="tp-header-action-badge">4</span>                          
                                    </a>
                                 </div>
                                 <div className="tp-header-action-item">
                                       <button className="tp-header-action-btn cartmini-open-btn" >
                                       <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M7.70365 10.1018H7.74942" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M13.5343 10.1018H13.5801" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                       </svg>    
                                       <span className="tp-header-action-badge">13</span>                                                                          
                                    </button>
                                 </div>
                                 <div className="tp-header-action-item tp-header-hamburger mr-20 d-xl-none">
                                    <button type="button" className="tp-offcanvas-open-btn">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                                          <rect x="10" width="20" height="2" fill="currentColor"/>
                                          <rect x="5" y="7" width="25" height="2" fill="currentColor"/>
                                          <rect x="10" y="14" width="20" height="2" fill="currentColor"/>
                                       </svg>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
        </>
    )
}