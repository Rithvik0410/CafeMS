import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Homepage.css"; // Make sure this path is correct
import "../prd-Homepage.css";
import { Link } from "react-router-dom";
import FeedbackForm from "./Feedback";

const DesktopHomepage = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const handleShowFeedbackForm = () => setShowFeedbackForm(true);
  const handleCloseFeedbackForm = () => setShowFeedbackForm(false);

  return (
    <div>
      <header className="bg text-white d-flex justify-content-between align-items-center py-3 px-4">
        <img
          src="https://azpireeducations.com/uploads/institutions/70d61dcea2bd2f4649c18bc0f341302e.png"
          alt="Logo"
          className="header-logo"
        />
        <h1 className="header-text m-0">Sahyadri Canteen</h1>
        <button
          className="blinking-live"
          onClick={() =>
            (window.location.href = "http://localhost:3004/student.html")
          }
        >
          LIVE
        </button>
      </header>

      <div className="container mt-4">
        <h2 className="text-right-justify md-4 special-title">
          TODAY'S SPECIAL
        </h2>

        <Carousel className="mb-4">
          <Carousel.Item>
            <img
              src="https://orikaflavours.com/cdn/shop/articles/lndscpe.jpg?v=1695577046"
              className="d-block w-100 h-70"
              alt="Special 1"
            />
            <Carousel.Caption>
              <h3>Special 1</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/Gobi-Manchurian.jpg"
              className="d-block w-100 h-70"
              alt="Special 2"
            />
            <Carousel.Caption>
              <h3>Special 2</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://img.freepik.com/premium-photo/irresistible-sev-puri-dahi-puri-popular-fast-dahi-puri-picture-photography_1020697-126076.jpg"
              className="d-block w-100 h-70"
              alt="Special 3"
            />
            <Carousel.Caption>
              <h3>Special 3</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="row">
          <div className="col-md-4">
            <Link to="/breakfast">
              <div className="card product-card">
                <img
                  src="https://apollosugar.com/wp-content/uploads/2018/12/Masala-Dosa.jpg"
                  className="card-img-top product-image"
                  alt="Breakfast"
                />
                <div className="card-body">
                  <h5 className="card-title">Breakfast</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/lunch">
              <div className="card product-card">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/035/375/492/large_2x/ai-generated-chicken-biryani-kerala-style-chicken-dhum-biriyani-made-using-jeera-rice-and-spices-arranged-in-a-brass-serving-bowl-photo.jpg"
                  className="card-img-top product-image"
                  alt="Lunch"
                />
                <div className="card-body">
                  <h5 className="card-title">Lunch</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/snacks">
              <div className="card product-card">
                <img
                  src="https://www.todaystraveller.net/wp-content/uploads/2021/05/24-1024x769.jpeg"
                  className="card-img-top product-image"
                  alt="Snacks"
                />
                <div className="card-body">
                  <h5 className="card-title">Snacks</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <button
          className="btn btn-primary mt-4"
          onClick={handleShowFeedbackForm}
        >
          Give Feedback
        </button>

        {showFeedbackForm && <FeedbackForm onClose={handleCloseFeedbackForm} />}
      </div>

      <footer className="bg-dark text-white text-center py-3 mt-4">
        <p>&copy; Sahyadri Canteen. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default DesktopHomepage;
