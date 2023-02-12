import React from 'react'

const HomeP1Component = () => {
  return (
    <div>
        <div className="container" style={{height: "15vh"}}></div>
        <h1 className="text-center" style={{color: "hsl(151, 97%, 47%)"}}>Bringing Love. Connecting Communities.</h1>

        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button style={{backgroundColor: "hsl(151, 97%, 47%)"}} type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="carousel_button" aria-label="Slide 1"></button>
                <button style={{backgroundColor: "hsl(151, 97%, 47%)"}} type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active carousel_button" aria-current="true"></button>
                <button style={{backgroundColor: "hsl(151, 97%, 47%)"}} type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="carousel_button"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item">
                    {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="none"></rect></svg> */}
                    <div className="container" style={{width: "900px"}}>
                        <img src="./images/image.png" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <div className="carousel-item active">
                    {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="none"></rect></svg> */}
                    <div className="container" style={{width: "900px"}}>
                        <img src="./images/image.png" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <div className="carousel-item">
                    {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="none"></rect></svg> */}
                    <div className="container" style={{width: "900px"}}>
                        <img src="./images/image.png" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeP1Component