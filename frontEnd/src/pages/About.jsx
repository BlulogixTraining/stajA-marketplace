const About = () => {
  return (
    <div>



<div className=" mt-5">
        <div className="row">
            <div className="col-lg-12 position-relative text-white">
                <img src="https://arateg.com/static/images/%D0%B5-marketplaces_1920.webp" className=" opacity-50 w-100 " alt="About Us Image"/>
                <div className="position-absolute top-50 start-50 translate-middle p-4 text-black  rounded text-center">
                    <h2 className="fs-1">About Us</h2>
                    <hr />
                    <p className="fs-4">Welcome to Our Company! We are dedicated to providing the best services to our customers. Our team is composed of experienced professionals who are passionate about what they do. We believe in delivering quality and excellence in every project we undertake.</p>
                    <p className="fs-4">Our mission is to exceed customer expectations through continuous improvement and customer interaction. We aim to build long-term relationships with our clients by understanding their needs and providing tailored solutions.</p>
                </div>
            </div>
        </div>
    </div>




    <div className="container mt-5">
    <div className="row">
        <div className="col-lg-4 mb-4">
            <div className="card h-100 text-center text-bg-warning">
                <div className="card-body">
                    <h4 className="card-title text-white">Our Mission</h4>
                    <p className="card-text">To deliver quality and excellence in every project we undertake.</p>
                </div>
            </div>
        </div>
        <div className="col-lg-4 mb-4">
            <div className="card h-100 text-center text-bg-warning">
                <div className="card-body">
                    <h4 className="card-title text-white">Our Vision</h4>
                    <p className="card-text">To be the leading company in our industry, known for our innovative solutions and exceptional customer service.</p>
                </div>
            </div>
        </div>
        <div className="col-lg-4 mb-4">
            <div className="card h-100 text-center text-bg-warning">
                <div className="card-body">
                    <h4 className="card-title text-white">Our Values</h4>
                    <p className="card-text">Integrity, commitment, and excellence are the core values that drive our company.</p>
                </div>
            </div>
        </div>
    </div>
</div>


<div className="container mt-5 text-center">
    <h2 className="text-uppercase  bg-light">Meet Our Team</h2>
    <div id="teamCarousel" className="carousel slide mt-4" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4 team-member">
                        <div className="card bg-light ">
                            <img src="https://w7.pngwing.com/pngs/178/419/png-transparent-man-illustration-computer-icons-avatar-login-user-avatar-child-web-design-face-thumbnail.png" className="card-img-top rounded-circle mb-2" alt="Team Member 1"/>
                            <div className="card-body ">
                                <h5 className="card-title text-bg-dark">Sultan</h5>
                                <p className="card-text">CEO</p>
                                <p>John is the visionary behind our company with over 20 years of experience in the industry.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 team-member">
                        <div className="card bg-light">
                            <img src="https://w7.pngwing.com/pngs/178/419/png-transparent-man-illustration-computer-icons-avatar-login-user-avatar-child-web-design-face-thumbnail.png" className="card-img-top rounded-circle mb-2" alt="Team Member 2"/>
                            <div className="card-body">
                                <h5 className="card-title text-bg-dark">Ahmed Zaki</h5>
                                <p className="card-text">CTO</p>
                                <p>Jane is responsible for the technological direction of the company, ensuring we stay ahead of the curve.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 team-member">
                        <div className="card bg-light">
                            <img src="https://w7.pngwing.com/pngs/178/419/png-transparent-man-illustration-computer-icons-avatar-login-user-avatar-child-web-design-face-thumbnail.png" className="card-img-top rounded-circle mb-2" alt="Team Member 3"/>
                            <div className="card-body">
                                <h5 className="card-title text-bg-dark">Bshir</h5>
                                <p className="card-text">COO</p>
                                <p>Mike oversees our operations, ensuring everything runs smoothly and efficiently.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 team-member">
                        <div className="card bg-light">
                            <img src="https://w7.pngwing.com/pngs/178/419/png-transparent-man-illustration-computer-icons-avatar-login-user-avatar-child-web-design-face-thumbnail.png" className="card-img-top rounded-circle mb-2" alt="Team Member 4"/>
                            <div className="card-body">
                                <h5 className="card-title text-bg-dark">Ahmed</h5>
                                <p className="card-text">CMO</p>
                                <p>Emily leads our marketing efforts, helping us reach new heights with innovative strategies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
        </div>
        <a className="carousel-control-prev" href="#teamCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#teamCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
</div>



<footer className="bg-light text-center text-lg-start mt-5">
    <div className="container p-4">
        <div className="text-center p-3">
            © 2024 Our Company
        </div>
    </div>
</footer>

</div>

    


  );
};
export default About;
