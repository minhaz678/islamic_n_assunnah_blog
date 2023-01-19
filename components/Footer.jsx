import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div style={{ marginTop: "10px", width: "100%" }}>
      <footer className="footer navbar-static-bottom">
        <div className="container">
          <div className="flex flex-row">
            <Link href={`/about`}>
              <span className="ml-5 hover:text-blue-400">
                <b>About us</b>
              </span>
            </Link>
            <Link href={`/contact`}>
              <span className="ml-8 hover:text-blue-400">
                <b>Contact us</b>
              </span>
            </Link>
          </div>
          <a id="topp" rel="noreferrer" href="#top" className="back-to-top">
            <i className="fas fa-angle-up " aria-hidden="true"></i>
          </a>
          <div className="social-links">
            <a
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100089603141421"
              target="_blank"
            >
              <i className="footerIcons fab fa-facebook fa-inverse hover:text-blue-500 text-3xl"></i>
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/minhaz-khan-a96763245/"
              target="_blank"
            >
              <i className="footerIcons fab fa-linkedin fa-inverse hover:text-blue-500 text-3xl"></i>
            </a>
            <a
              rel="noreferrer"
              href="https://github.com/minhaz678"
              target="_blank"
            >
              <i className="footerIcons fab fa-github fa-inverse hover:text-blue-500 text-3xl"></i>
            </a>
          </div>
          <hr />
          <p className="footer__text">
            © 2023 -{" "}
            <a id="copy" rel="noreferrer" href="/">
              Islamic & AsSunnah Blog{" "}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
