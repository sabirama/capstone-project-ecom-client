import { Segment, Container } from "semantic-ui-react";

import "./Footer.css";

const Footer = () => {
  return (
    <Segment className="container content-space-between">
      <Container className="contact-info flex-col my-1">
        <p>Readers Shelf </p>
        <p>Address: 123 Main Street, Bookville</p>
        <p>Phone: (555) 123-4567</p>
        <p>
          Email: <a href="mailto:info@abcbookstore.com">info@abcbookstore.com</a>
        </p>
      </Container>

      <Container className="social-media flex-col my-1">
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

      <Container className="categories flex-col my-1">
        <p>Browse Our Categories:</p>
        <a href="#">Fiction</a>
        <a href="#">Non-Fiction</a>
        <a href="#">Bestsellers</a>
        <a href="#">Science</a>
        <a href="#">Romance</a>
        <a href="#">Mystery</a>
      </Container>

      <Container className="quick-links flex-col my-1">
        <p>Quick Links:</p>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <a href="#">FAQs</a>
        <a href="#">Shipping & Returns</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </Container>

      <Container className="newsletter flex-col my-1">
        <p>Sign up for our Newsletter:</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </Container>
    </Segment>
  );
};

export default Footer;
