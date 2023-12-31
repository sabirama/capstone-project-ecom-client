import { Segment, Container } from "semantic-ui-react";

import "./Footer.css";

const Footer = () => {
  return (
    <Segment className="container flex-col">
      <Container className="container">
        <Container className="footer-links-container flex-col my-1">
          <p>Connect with Us:</p>
          <a href="#" className="social-icon">
            Facebook
          </a>
          <a href="#" className="social-icon">
            Twitter
          </a>
          <a href="#" className="social-icon">
            Instagram
          </a>
        </Container>

        <Container className="footer-links-container flex-col my-1">
          <p>Quick Links:</p>
          <a href="/">Home</a>
          <a href="/about/about-us">About Us</a>
          <a href="/about/contact-us">Contact Us</a>
          <a href="#">Shipping & Returns</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </Container>

        <Container className="footer-links-container newsletter flex-col my-1">
          <p>Sign up for our Newsletter:</p>
          <div className="flex">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </Container>
      </Container>
      <Container className="container">
        <Container className="contact-info flex-col my-1">
          <p>Readers Shelf </p>
          <p>Address: 123 Main Street, Bookville</p>
          <p>Phone: (555) 123-4567</p>
          <p>
            Email: <a href="mailto:info@readersshelf.com">info@readersshelf.com</a>
          </p>
        </Container>
      </Container>
    </Segment>
  );
};

export default Footer;
