import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={`container mt-5 ${classes.containerCustom}`}>
      <div className="row mb-4">
        <div className="col-12">
          <div className="text-center">
            <h2 className={`fs-1  fw-bold mb-4 ${classes.textDangerEmphasis}`}>
              Our Location
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385398.7255790423!2d28.731987!3d41.0054958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabaecdea9e0b1%3A0xfce55e0d7c39a6cf!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1628535694579!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <div className={`p-4 ${classes.bgLight} ${classes.rounded}`}>
            <h2
              className={`text-center mb-4 fs-1 text-uppercase fw-bold ${classes.textDangerEmphasis}`}
            >
              Contact Us
            </h2>
            <p className={`text-center ${classes.textMuted} mb-4`}>
              We'd love to hear from you! Please fill out the form below to get
              in touch with us.
            </p>
            <form>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Enter subject"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`btn btn-dark btn-block mt-2 py-2 fs-5 ${classes.btnDarkCustom}`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
