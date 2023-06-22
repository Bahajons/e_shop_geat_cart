import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <div>
      <header className="section-header">
        <nav className="navbar p-md-0 navbar-expand-sm navbar-light border-bottom">
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTop4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTop4">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">   Language </a>
                  <ul className="dropdown-menu small">
                    <li><a className="dropdown-item" href="#">English</a></li>
                    <li><a className="dropdown-item" href="#">Arabic</a></li>
                    <li><a className="dropdown-item" href="#">Russian </a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"> USD </a>
                  <ul className="dropdown-menu small">
                    <li><a className="dropdown-item" href="#">EUR</a></li>
                    <li><a className="dropdown-item" href="#">AED</a></li>
                    <li><a className="dropdown-item" href="#">RUBL </a></li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li><a href="#" className="nav-link"> <i className="fa fa-envelope"></i> Email </a></li>
                <li><a href="#" className="nav-link"> <i className="fa fa-phone"></i> Call us </a></li>
              </ul>
              {/* <!-- list-inline //  --> */}
            </div>
            {/* <!-- navbar-collapse .// --> */}
          </div>
          {/* <!-- container //  --> */}
        </nav>

        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-3 col-6">
                <a href="./" className="brand-wrap">
                  <img className="logo" src="./images/logo.png" />
                </a>
                {/* <!-- brand-wrap.// --> */}
              </div>
              <div className="col-lg col-sm col-md col-6 flex-grow-0">
                <div className="category-wrap dropdown d-inline-block float-right">
                  <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-bars"></i> All category
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Machinery / Mechanical Parts / Tools </a>
                    <a className="dropdown-item" href="#">Consumer Electronics / Home Appliances </a>
                    <a className="dropdown-item" href="#">Auto / Transportation</a>
                    <a className="dropdown-item" href="#">Apparel / Textiles / Timepieces </a>
                    <a className="dropdown-item" href="#">Home & Garden / Construction / Lights </a>
                    <a className="dropdown-item" href="#">Beauty & Personal Care / Health </a>
                  </div>
                </div>
                {/* <!-- category-wrap.// --> */}
              </div>
              {/* <!-- col.// --> */}
              <a href="./store.html" className="btn btn-outline-primary">Store</a>
              <div className="col-lg  col-md-6 col-sm-12 col">
                <form action="#" className="search">
                  <div className="input-group w-100">
                    <input type="text" className="form-control" style={{ width: '60%' }} placeholder="Search" />

                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
                {/* <!-- search-wrap .end// --> */}
              </div>
              {/* <!-- col.// --> */}
              <div className="col-lg-3 col-sm-6 col-8 order-2 order-lg-3">
                <div className="d-flex justify-content-end mb-3 mb-lg-0">
                  <div className="widget-header">
                    <small className="title text-muted">Welcome guest!</small>
                    <div>
                      <Link to={'/login'}><>Sign in</> </Link><span className="dark-transp"> | </span>
                      <Link to={'/register'}>
                        <>Register</>
                      </Link>
                    </div>
                  </div>
                  <a href="./cart.html" className="widget-header pl-3 ml-3">
                    <div className="icon icon-sm rounded-circle border"><i className="fa fa-shopping-cart"></i></div>
                    <span className="badge badge-pill badge-danger notify">0</span>
                  </a>
                </div>
                {/* <!-- widgets-wrap.// --> */}
              </div>
              {/* <!-- col.// --> */}
            </div>
            {/* <!-- row.// --> */}
          </div>
          {/* <!-- container.// --> */}
        </section>
        {/* <!-- header-main .// --> */}
      </header>
      {/* <!-- section-header.// --> */}
    </div>
  )
}
