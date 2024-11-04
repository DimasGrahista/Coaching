const lol = () => {
    return (
        <>
          <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content />
            <meta name="author" content />
            <title>Shop Item - Start Bootstrap Template</title>
            {/* Favicon*/}
            <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
            {/* Bootstrap icons*/}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            {/* Core theme CSS (includes Bootstrap)*/}
            <link href="css/styles.css" rel="stylesheet" />
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">DisNatt Games</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Service</a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {/* <li><a className="dropdown-item" href="#!">All Service</a></li> */}
                        {/* <li><hr className="dropdown-divider" /></li> */}
                        <li><a class="dropdown-item" href="#!">Coaching</a></li>
                        <li><a class="dropdown-item" href="#!">Boost Rank</a></li>
                      </ul>
                    </li>
                  </ul>
                  {/* <form className="d-flex">
                    <button className="btn btn-outline-dark" type="submit">
                      <i className="bi-cart-fill me-1" />
                      Cart
                      <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                    </button>
                  </form> */}
                </div>
              </div>
            </nav>
            {/* Product section*/}
            <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                  <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src="./img/lol.png" alt="..." /></div>
                  <div className="col-md-6">
                    {/* <div className="small mb-1">SKU: BST-498</div> */}
                    <h1 className="display-5 fw-bolder">league Of legends</h1>
                    {/* Product reviews*/}
                    <div className="d-flex justify-content small text-warning mb-2">
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                          </div>
                    <div className="fs-5 mb-5">
                      {/* <span className="text-decoration-line-through">$45.00</span> */}
                      <span>Rp200.000 - Rp600.000</span>
                    </div>
                    <p className="lead">Tingkatkan permainan Anda di League of Legends dengan bimbingan dari pelatih DisNatt! Pelajari strategi laning, penguasaan champion, dan taktik tim yang akan membawa Anda meraih kemenangan di setiap pertandingan. Dengan panduan kami, Anda akan memahami mekanika permainan, pengambilan keputusan yang cepat, dan cara berkolaborasi dengan tim untuk mencapai tujuan bersama. Bergabunglah dengan kelas coaching kami dan jadilah pemain yang lebih tangguh di dunia League of Legends!</p>
                    <div className="d-flex">
                      <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="https://api.whatsapp.com/send?phone=6281358622017&text=Hallo kak saya mau coaching League of Legends">Join Class</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Related items section*/}
            <section className="py-5 bg-light">
              <div className="container px-4 px-lg-5 mt-5">
                <h2 className="fw-bolder mb-4">Trending Coaching</h2>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  <div className="col mb-5">
                    <div className="card h-100">
                      {/* Product image*/}
                      <img className="card-img-top" src="./img/valorant.png" alt="..." />
                      {/* Product details*/}
                      <div className="card-body p-4">
                      <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Trending</div>
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">Valorant</h5>
                          {/* Product reviews*/}
                          <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                          </div>
                          {/* Product price*/}
                          Rp150.000 - Rp300.000
                        </div>
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/valo">View Options</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-5">
                    <div className="card h-100">
                      {/* Sale badge*/}
                      <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Tranding</div>
                      {/* Product image*/}
                      <img className="card-img-top" src="./img/rsix.png" alt="..." />
                      {/* Product details*/}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">Rainbow Six</h5>
                          {/* Product reviews*/}
                          <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                          </div>
                          {/* Product price*/}
                          <span className="text-muted text-decoration-line-through">Rp30.000</span>
                          Rp147.000 - Rp290.000
                        </div>
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/rainsix">View Option</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-5">
                    <div className="card h-100">
                      {/* Sale badge*/}
                      <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Tranding</div>
                      {/* Product image*/}
                      <img className="card-img-top" src="./img/cs2.png" alt="..." />
                      {/* Product details*/}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">Counter Strike 2</h5>
                          {/* Product reviews*/}
                          <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                          </div>
                          {/* Product price*/}
                          Rp150.000
                        </div>
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/cs2">View Option</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-5">
                    <div className="card h-100">
                      {/* Product image*/}
                      <img className="card-img-top" src="./img/apex-01.png" alt="..." />
                      {/* Product details*/}
                      {/* Product details*/}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">APEX</h5>
                          {/* Product reviews*/}
                          <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                          </div>
                          {/* Product price*/}
                          <span className="text-muted text-decoration-line-through">Rp50.000</span>
                          Rp150.000-Rp500.000
                        </div>
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/apex">View Option</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Footer*/}
            <footer className="py-5 bg-dark">
              <div className="container"><p className="m-0 text-center text-white">Copyright © Your Website 2023</p></div>
            </footer>
            {/* Bootstrap core JS*/}
            {/* Core theme JS*/}
          </div>
  
        </>
    )
  }
  export default lol