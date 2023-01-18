import React from 'react'

function Cover() {
  return (
    <div id="container">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" id="nav">
    {/* <a className="navbar-brand" href="#">Carousel</a> */}
    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse" id="navbarCollapse" >
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Link</a> */}
        </li>
        <li className="nav-item">
          {/* <a className="nav-link disabled" href="#">Disabled</a> */}
        </li>
      </ul>
      <form className="form-inline mt-2 mt-md-0">
        <input  className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <div className="w3-display-topmiddle" >
    <main className="px-3">
        <h1 id="head">Cover your page.</h1>
        <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p className="lead">
        {/* <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-black" id="btn">Learn more</a> */}
        </p>
      </main>
  </div>




    </div>
  )
}

export default Cover