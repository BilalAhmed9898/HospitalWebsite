import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import pic1 from './Assests/pic1.jpg';
import pic2 from './Assests/pic2.jpg';
import pic3 from './Assests/pic3.jpg';
import pic4 from './Assests/pic4.jpg';
function HowItWork() {
  document.title = "How It Work | Al-Shams Hospital";
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6">
            <img
              src={pic1} width={'80%'} height={'80%'} alt="My Image"
            />
          </div>
          <div className="col-md-6">
            <h1>01</h1>
            <p >
              Choose from our
              list of specialities</p>
          </div>
        </div>
        <h3>Swipe</h3>
      </Carousel.Item>
      <Carousel.Item  >
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6">
            <img
              src={pic2} width={'90%'} height={'90%'} alt="My Image"
            />
          </div>
          <div className="col-md-6 ">
            <h1>02</h1>
            <p>
              Pick from our list of
              verified doctors</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item  >
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6">
            <img
              src={pic3} width={'90%'} height={'90%'} alt="My Image"
            />
          </div>
          <div className="col-md-6 p-2">
            <h1>03</h1>
            <p>
              Book a time slot that best
              suits your schedule</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item  >
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6">
            <img
              src={pic4} width={'70%'} height={'70%'} alt="My Image"
            />
          </div>
          <div className="col-md-6 ">
            <h1>04</h1>
            <p>
              Begin your consultation!
            </p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HowItWork;