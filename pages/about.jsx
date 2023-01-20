import Link from "next/link";
import React from "react";
import { Footer } from "../components";

const about = () => {
  return (
    <>
      <div id="back15">
        <div className="main-container1">
          <h1
            id="h1y"
            style={{
              color: "#FF5823",
              textAlign: "center",
              fontSize: "3rem",
              fontFamily: "'Josefin Sans', sans-serif",
            }}
            className="title"
          >
            About ~ us
          </h1>
          <div className="welText">
            <span className="main-text" id="maint">
              <span id="fi">A</span>ssalamuAlaikum, dear reader hope you are
              doing well by the Grace of Allah(S.W.T). All praises due to Allah,
              Islamic & AsSunnah Blog is working for you. Our main focus is to
              help people to know different things about Islam. For that purpose
              we are trying to write or create content about Islamic stories,
              Dua's, fasting, prayers, biographies, Islamic culture and so on
              related to Islam. We hope you will be benefited from reading our
              articles. But one thing goes without saying, we apologize for any
              unintentional mistakes and humbly request you to contact us to
              help us accurately convey them to other readers. <br />
              <br />
              You are a valuable part of our Islamic & AsSunnah Blog. Thank you
              very much for reading our posts regularly. We always try to write
              all contents saved for you. Your participation in our efforts is
              the main driver of our motivation. If you would like, you can send
              your writings to our blog. We will try to publish your excellent
              writing. <br /> <br />
              Dear reader, you can send us your minds, thoughts, stories and
              problems. In order to contact us, you can e-mail (**by just
              clicking on the mail mailAddress) with your text and required
              images & files. Yes also, feel free to send us message (**just
              click the contact button below).
              <br /> <br />
              <b id="email">
                MailAddress:
                <a
                  id="email1"
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:islamic.and.asssunnahblog@gmail.com"
                >
                  {" "}
                  islamic.and.asssunnahblog@gmail.com
                </a>
              </b>
            </span>
            <div className="btn">
              <Link href={`/contact`}>
                <button id="cont">
                  Contact us <i className="fa fa-paper-plane"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default about;
