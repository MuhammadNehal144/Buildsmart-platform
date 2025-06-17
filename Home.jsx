import React from "react";
import { Link } from "react-router-dom";


const Home = () =>{
    return(
        <>
        
        <div className="container-xxl bg-white p-0">
        {/* {/* <!-- Spinner Start -->  */}
             {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
              <div className="spinner-border text-dark" style={{ width: '3rem', height: '3rem' }} role="status">

                <span className="sr-only">Loading...</span>
            </div>
        </div>  */}
        {/* <!-- Spinner End -->

   
   
        {/* <!-- Navbar Start --> */}
        <div className="container-fluid nav-bar bg-transparent">
            <nav className="navbar navbar-expand-lg bg-dark navbar-light py-0 px-4">
                <a href="Home.html" className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon p-2 me-2">
                        <img className="img-fluid" src="assets/img/logo2.jpeg" alt="Icon" style={{width: '70px', height: '70px', borderRadius: '30px'}} />
                    </div>
                    <h1 className="m-0 text-dark"><span style={{color: 'white'}}>𝓑𝓾𝓲𝓵𝓭</span><span style={{color: 'red'}}>𝓢𝓶𝓪𝓻𝓽</span></h1>
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="about" className="nav-item nav-link">About</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Materials</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="materialslist" className="dropdown-item">Materials List</Link>
                                <Link to="materialsType" className="dropdown-item">Materials Type</Link>
                                <Link to="professional" className="dropdown-item">Professionals</Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="testimonal" className="dropdown-item">Testimonial</Link>
                               
                            </div>
                        </div>
                        <Link to="contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    <a href="" className="btn btn-danger px-5.5 d-none d-lg-flex bg-dark">+</a>
                </div>
            </nav>
        </div>
        {/* <!-- Navbar End --> */}


        {/* <!-- Header Start --> */}
        <div className="container-fluid header bg-white p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-5">
                    <h1 className="display-5 animated fadeIn mb-4">Get Everything  <span className="text-dark">You Need </span>for a Successful Construction Project</h1>
                    <p className="animated fadeIn mb-4 pb-2">Find the Perfect Construction Materials, Maintenance Supplies & Trusted Professionals for Your Project.</p>
                    <a href="" className="btn btn-dark py-3 px-5 me-3 animated fadeIn bg-dark ">Get Started</a> 
                </div>
                <div className="col-md-6 animated fadeIn height">
                    <div className="owl-carousel header-carousel">
                        <div className="owl-carousel-item">
                            <img className="img-fluid" src="assets/img/Const3.png" alt="" />
                        </div>
                        <div className="owl-carousel-item">
                            <img className="img-fluid" src="assets/img/Constm3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}


        {/* <!-- Search Start --> */}
        <div className="container-fluid bg-dark mb-5 wow fadeIn" data-wow-delay="0.1s" style={{Padding: '35px'}}>
            <div className="container">
                <div className="row g-2">
                    <div className="col-md-10">
                        <div className="row g-2">
                            <div className="col-md-4">
                                <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword" />
                            </div>
                            <div className="col-md-4">
                                <select className="form-select border-0 py-3">
                                    <option selected>Materials Type</option>
                                    <option value="1">Materials Type 1</option>
                                    <option value="2">Materials Type 2</option>
                                    <option value="3">Materials Type 3</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <select className="form-select border-0 py-3">
                                    <option selected>Location</option>
                                    <option value="1">Location 1</option>
                                    <option value="2">Location 2</option>
                                    <option value="3">Location 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-dark border-0 w-100 py-3 bg-danger">Search</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Search End --> */}


        {/* <!-- Category Start --> */}
        <div className="container-xxl py-4">
            <div className="container">
                <div className="text-center mx-auto mb-4 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                    <h1 className="mb-2">Materials Types</h1>
                    <p>Sellers can list items like cement, iron, and blocks. Customers can easily find and buy what they need.   
                        .</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-4 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="assets/img/cement.png" alt="Icon" />
                                </div>
                                <h6>Cement & Binders</h6>
                                <span>Construction Materials</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-4 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="assets/img/stone.png" alt="Icon" />
                                </div>
                                <h6>Stones & Sand</h6>
                                <span>Construction Materials</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-4 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="assets/img/bricks.png" alt="Icon" />
                                </div>
                                <h6>Bricks & Blocks</h6>
                                <span>Construction Materials</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-4 wow fadeInUp" data-wow-delay="0.7s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="assets/img/steel.png" alt="Icon" />
                                </div>
                                <h6>Steel & Irons</h6>
                                <span>Construction Materials</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-4 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="assets/img/wood.png" alt="Icon" />
                                </div>
                                <h6>Wood & Boards</h6>
                                <span>Construction Materials</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-4 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="assets/img/roofing.png" alt="Icon" />
                                </div>
                                <h6>Roofing & Insulation</h6>
                                <span>Construction Materials</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-4 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="assets/img/electricity.png" alt="Icon" />
                                </div>
                                <h6>Electrical & Plumbinf</h6>
                                <span>Maintenance Materials</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-4 wow fadeInUp" data-wow-delay="0.7s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="assets/img/painting.png" alt="Icon" />
                                </div>
                                <h6>Painting & Coating</h6>
                                <span>Maintenance Materials</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Category End --> */}


        {/* <!-- About Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img position-relative overflow-hidden p-5 pe-0">
                            <img className="img-fluid w-100" src="assets/img/material.png" />
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4"> Place To Find Perfect Construction Material</h1>
                        <p className="mb-4"> A platform that combines everything related to infrasteucture Services and its makes the process faster,Cheap, and Eassy for people to manage their projects.
                        </p>
                        <p><i className="fa fa-check text-dark me-3"></i>Cement & Binders</p>
                        <p><i className="fa fa-check text-dark me-3"></i>Stones & Sands </p>
                        <p><i className="fa fa-check text-dark me-3"></i>Bricks & Blocks</p>
                        <p><i className="fa fa-check text-dark me-3"></i>Iron & Steel</p>
                        <p><i className="fa fa-check text-dark me-3"></i>Electrical & Plumbing</p>
                        <a className="btn btn-dark py-3 px-5 mt-3 bg-dark" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}


        {/* <!-- Property List Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-0 gx-5 align-items-end">
                    <div className="col-lg-6">
                        <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 className="mb-3">Materials Listing</h1>
                            <p>Find all essential construction materials in one place, including cement, sand, bricks, blocks, steel, iron, wood, roofing, electrical, plumbing, and painting supplies—listed by trusted sellers for all your building needs..</p>
                        </div>
                    </div>
                    <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                            <li className="nav-item me-2">
                                <a className="btn btn-outline-dark active" data-bs-toggle="pill" href="#tab-1">Featured</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="btn btn-outline-dark" data-bs-toggle="pill" href="#tab-2">For Sell</a>
                            </li>
                            <li className="nav-item me-0">
                                <a className="btn btn-outline-dark" data-bs-toggle="pill" href="#tab-3">For Rent</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="assets/img/cementss.jpg" alt="" /></a>
                                        <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Cement</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-dark mb-3">Rs 1500</h5>
                                        <a className="d-block h5 mb-2" href="">All brands cements aviable</a>
                                        <p><i className="fa fa-map-marker-alt text-dark me-2"></i>Hangu patak Kohat</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fab fa-whatsapp text-success me-2"></i>+923315996805
                                          </small>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="assets/img/stondsand.jpg" alt="" /></a>
                                        <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For sell</div>
                                        <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Stone & Sand  </div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-dark mb-3">RS 250 Sqft </h5>
                                        <a className="d-block h5 mb-2" href="">stone & sand etc avilable in my stock</a>
                                        <p><i className="fa fa-map-marker-alt text-dark me-2"></i>Tall road Hangu</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fab fa-whatsapp text-success me-2"></i>+923315996805
                                          </small>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="assets/img/bricksblock.jpg" alt="" /></a>
                                        <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Bricks & Blocks</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-dark mb-3">Rs12 per brick,34 per block</h5>
                                        <a className="d-block h5 mb-2" href="">All size Bricks & block aviable</a>
                                        <p><i className="fa fa-map-marker-alt text-dark me-2"></i>Kohat Road Matani Peshawar</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fab fa-whatsapp text-success me-2"></i>+923315996805
                                          </small>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="assets/img/steeliron.jpg" alt="" /></a>
                                        <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For cell</div>
                                        <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Steel & Iron </div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-dark mb-3">RS 370 kg</h5>
                                        <a className="d-block h5 mb-2" href="">Aviable of Category of steel & Iron  </a>
                                        <p><i className="fa fa-map-marker-alt text-dark me-2"></i>Charsada road Peshawar</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fab fa-whatsapp text-success me-2"></i>+923315996805
                                          </small>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="assets/img/woodborders.jpg" alt="" /></a>
                                        <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Woody</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-dark mb-3">RS 500 sqft</h5>
                                        <a className="d-block h5 mb-2" href="">Woody aviable for all type construction</a>
                                        <p><i className="fa fa-map-marker-alt text-dark me-2"></i>University Road Kohat</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fab fa-whatsapp text-success me-2"></i>+923315996805
                                          </small>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="assets/img/electracalplumbing.jpg" alt="" /></a>
                                        <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For sell</div>
                                        <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Electrical & plumbing</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-dark mb-3">Cheap price</h5>
                                        <a className="d-block h5 mb-2" href="">Electrical & Plumbing Material Aviable</a>
                                        <p><i className="fa fa-map-marker-alt text-dark me-2"></i>Bunno Bazar Kohat</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fab fa-whatsapp text-success me-2"></i>+923315996805
                                          </small>
                                            
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                <a className="btn btn-dark py-3 px-5" href="">Browse More Material</a>
                            </div>
                        </div>
                    </div>
                     <div id="tab-2" className="tab-pane fade show p-0">
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="assets/img/rooffinginsulation.jpg" alt="" /></a>
                                        <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Roofing</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-dark mb-3">RS 780sqft</h5>
                                        <a className="d-block h5 mb-2" href="">Roofing Material and installation</a>
                                        <p><i className="fa fa-map-marker-alt text-dark me-2"></i>Pindi Road Kohat</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fab fa-whatsapp text-success me-2"></i>+923315996805
                                          </small>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="assets/img/machineRent.jpg" alt="" /></a>
                                        <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                        <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Machine</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-dark mb-3">RS 7000prhr</h5>
                                        <a className="d-block h5 mb-2" href="">Heavy machine aviable fot rent</a>
                                        <p><i className="fa fa-map-marker-alt text-dark me-2"></i>University chowk Kohat</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fab fa-whatsapp text-success me-2"></i>+923315996805
                                          </small>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="assets/img/cementss.jpg" alt="" /></a>
                                        <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Kohat Cement</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-dark mb-3">Rs 133444</h5>
                                        <a className="d-block h5 mb-2" href="">Kohat Cement factoory </a>
                                        <p><i className="fa fa-map-marker-alt text-dark me-2"></i>Babari Banda Kohat</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fab fa-whatsapp text-success me-2"></i>+923315996805
                                          </small>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="assets/img/MachineRent1.jpg" alt="" /></a>
                                        <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                        <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Machine </div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-dark mb-3">RS 1344 prhr</h5>
                                        <a className="d-block h5 mb-2" href="">Muhmand Hevy Machine</a>
                                        <p><i className="fa fa-map-marker-alt text-dark me-2"></i>Orakzai chowk Kohat</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fab fa-whatsapp text-success me-2"></i>+923315996805
                                          </small>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="assets/img/bricksblock.jpg" alt="" /></a>
                                        <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Bricks & Block </div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-dark mb-3">RS 32 </h5>
                                        <a className="d-block h5 mb-2" href="">Matani Bricks & blocks Batii</a>
                                        <p><i className="fa fa-map-marker-alt text-dark me-2"></i>Matani kohat Road Peshawar</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fab fa-whatsapp text-success me-2"></i>+923315996805
                                          </small>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="assets/img/MachineRent2.jpg" alt="" /></a>
                                        <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                        <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Machine</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-dark mb-3">RS..</h5>
                                        <a className="d-block h5 mb-2" href="">Heavy Machine for Rent</a>
                                        <p><i className="fa fa-map-marker-alt text-dark me-2"></i>Sadar Road Peshawar</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fab fa-whatsapp text-success me-2"></i>+923315996805
                                          </small>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <a className="btn btn-dark py-3 px-5" href="">Browse More Material</a>
                            </div>
                        </div>
                    </div>
                    <div id="tab-3" className="tab-pane fade show p-0">
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="assets/img/paintingcoating.jpg" alt="" /></a>
                                        <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Paint</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-dark mb-3">RS..</h5>
                                        <a className="d-block h5 mb-2" href="">Brighto Paint Company</a>
                                        <p><i className="fa fa-map-marker-alt text-dark me-2"></i>FC chowk Peshawar Saddar</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fab fa-whatsapp text-success me-2"></i>+923315996805
                                          </small>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="assets/img/MachineRent3.jpg" alt="" /></a>
                                        <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                        <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Machine</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-dark mb-3">Rs 4345 prhr</h5>
                                        <a className="d-block h5 mb-2" href="">Golden Heavy Machine For Rent</a>
                                        <p><i className="fa fa-map-marker-alt text-dark me-2"></i>Jand Road Pindi</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fab fa-whatsapp text-success me-2"></i>+923315996805
                                          </small>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="assets/img/stondsand.jpg" alt="" /></a>
                                        <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Stock</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-dark mb-3">$12,345</h5>
                                        <a className="d-block h5 mb-2" href="">Muhamand Sand stone Stock</a>
                                        <p><i className="fa fa-map-marker-alt text-dark me-2"></i>Pindi Pull Kohat</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fab fa-whatsapp text-success me-2"></i>+923315996805
                                          </small>
                                            
                                    </div>                             
                                   </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="assets/img/MachineRent5.jpg" alt="" /></a>
                                        <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                        <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Machine</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-dark mb-3">RS 2000perhr</h5>
                                        <a className="d-block h5 mb-2" href=""> Urban Heavy Machine For Rent</a>
                                        <p><i className="fa fa-map-marker-alt text-dark me-2"></i>Arbab Road Peshawar</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fab fa-whatsapp text-success me-2"></i>+923315996805
                                          </small>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="assets/img/cementss.jpg" alt="" /></a>
                                        <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                        <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Lucky Cement</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-dark mb-3">$12,345</h5>
                                        <a className="d-block h5 mb-2" href="">Lucky cement lttd</a>
                                        <p><i className="fa fa-map-marker-alt text-dark me-2"></i>Lachi tool plza Kohat</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fab fa-whatsapp text-success me-2"></i>+923315996805
                                          </small>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href=""><img className="img-fluid" src="assets/img/machineRent.jpg" alt="" /></a>
                                        <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                        <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Machine</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-dark mb-3">RS 4000prhr</h5>
                                        <a className="d-block h5 mb-2" href="">Hevy Machine For Rent</a>
                                        <p><i className="fa fa-map-marker-alt text-dark me-2"></i>Tranool Station Pindi</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2">
                                            <i className="fab fa-whatsapp text-success me-2"></i>+923315996805
                                          </small>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <a className="btn btn-dark py-3 px-5" href="">Browse More Property</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Property List End --> */}


        {/* <!-- Call to Action Start --> */}
        <div className="contader-xxl py-5">
            <div className="container">
                <div className="bg-light rounded p-3">
                    <div className="bg-white rounded p-4" style={{border: '1px dashed rgba(0, 185, 142, .3)'}}>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                                <img className="img-fluid rounded w-100 " src="assets/img/professuioinalgroup.jpeg" alt="" />
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="mb-4">
                                    <h1 className="mb-3">Contact With Certified Professionals</h1>
                                    <p>Connecting with  professionals & making  the one-stop solution for infrastructure projects.
                                        .</p>
                                </div>
                                <a href="Contact.html" className="btn btn-dark py-3 px-4 me-2"><i className="fa fa-phone-alt me-2"></i>Make Contact</a>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Call to Action End --> */}


        {/* <!-- Team Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px;'}}>
                    <h1 className="mb-3">Professionals</h1>
                    <p>The BuildSmart platform helps you find the right professionals easily and that Connect you with architects, engineers, contractors, and workers to build your project.
                        .</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="assets/img/engelectricty.jpg" alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-whatsapp"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Yasin Orakxxi</h5>
                                <small>Electrical Engneer</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="assets/img/contractor.jpg" alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-whatsapp"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">M.Nehal</h5>
                                <small>Contractor</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="assets/img/designer.jpg" alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-whatsapp"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Inam Ullah</h5>
                                <small>Architecture</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="assets/img/sami.jpg" alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-whatsapp"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                                </div>
                                <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Sami Ullah</h5>
                                <small>Civil Engneer</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Team End --> */}


        {/* <!-- Testimonial Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                    <h1 className="mb-3">Reviews from Our Clients!</h1>
                    <p>We are proud to Help Costomers,sellers & suppliers get what they need..fast and stress-free.Cheack out what our 
                      Clients think about BuildSmart.  .</p>
                      </div>
                      <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>BuildSmart made my material ordering so easy. Everything was delivered on the quality was top..</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src="assets/img/nehhalreviw.jpg" style={{width: '45px' , height: '45px'}} />
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">M.Nehal</h6>
                                    <small>Contractor</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>We hired Electrician through Buildsmart and the work was outstanding. very professional & hassle-free.</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src="assets/img/yasinreview.jpg" style={{width: '45px' , height: '45px'}} />
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Yasin Orakxxi</h6>
                                    <small>Homeowner</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>I sell construction materials on BuildSmart and my business has grown a lot.
                                A perfect platform for sellers..
                            </p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src="assets/img/inamreview.jpg" style={{width: '45px', height: '45px'}} />
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Inam Ullah </h6>
                                    <small>Iron Steel supplier</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>BuildSmart shows clear prices, and their help team replies fast. I really suggest using BuildSmart for 
                                anything related to construction..
                            </p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src="assets/img/samireview.jpg" style={{width: '45px' , height: '45px'}} />
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Sami Sahibzada </h6>
                                    <small>Architect</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        {/* <!-- Testimonial End --> */}
        

        {/* <!-- Footer Start --> */}
        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-2"></i>KUST HANGU CAMPUS, NEAR QAZI PUMP</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-4"></i>+923337475671</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>abc77@gmail.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <a className="btn btn-link text-white-50" href="About.html">About Us</a>
                        <a className="btn btn-link text-white-50" href="Contact.html">Contact Us</a>
                        <a className="btn btn-link text-white-50" href="Materials-list.html">Our Services</a>
                        <a className="btn btn-link text-white-50" href="Testimonial.html">Privacy Policy</a>
                        <a className="btn btn-link text-white-50" href="Materials-type.html">Terms & Condition</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Photo Gallery</h5>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="assets/img/imaes22.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="assets/img/image12.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="assets/img/images11.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="assets/img/images15.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="assets/img/images21.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="assets/img/images16.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Newsletter</h5>
                        <p>Get usefull construction tips,material updates and smart building solution from BuildSmart.</p>
                        <div className="position-relative mx-auto" style={{maxWidth: '400px'}}>
                            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-danger py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}


        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-dark btn-lg-square back-to-top bg-dark"><i className="bi bi-arrow-up"></i></a>
      </div>
        </>
    )
}

export default Home;