import React, { useState } from "react";
import Typical from "react-typical";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import Image from "next/image";
import { Footer } from "../components";


const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [bool, setBool] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBool(true);
    setSuccess(false);
    try {
      if (!name || !email || !message) {
        return (
          toast.error(`There is an error sending the Email!`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }),
          setError(true),
          setSuccess(false),
          setBool(false)
        );
      } else {
        toast.success(`Email has been sent successfully!`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        await emailjs
          .sendForm(
            "service_yio2e9q",
            "template_jkh40kd4",
            e.target,
            "y-2nxWBv5KnEejNHO"
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      }
      setSuccess(true);
      setError(false);
      setBool(false);
    } catch (err) {
      setSuccess(false);
      setError(true);
      setBool(false);
      console.log(err);
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div id="min2">
        <h1
          id="h1x"
          style={{
            color: "#FF5823",
            textAlign: "center",
            fontSize: "3rem",
            fontFamily: "'Josefin Sans', sans-serif",
          }}
        >
          Contact ~ us
        </h1>
        <div className="main-container">
          <div className="central-form">
            <div className="col">
              <h2 id="typics" className="title3">
                <Typical
                  className="typics"
                  loop={Infinity}
                  steps={[
                    "👋🌻 If you'd like to 📑",
                    3000,
                    "Post 📝 your Own Story 📜",
                    3000,
                    "Please, Mail us the story 📚",
                    3000,
                    "& The Necessary files 📁",
                    3000,
                  ]}
                />
              </h2>
              <h4
                style={{
                  color: "white",
                  marginLeft: "5px",
                  marginBottom: "10px",
                  fontFamily: "'Josefin Sans', sans-serif",
                }}
              >
                MailAddress:{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:islamic.and.asssunnahblog@gmail.com"
                  style={{
                    fontSize: "16.7px",
                    textDecoration: "none",
                    color: "#8db2e5",
                    fontFamily: "'Josefin Sans', sans-serif",
                  }}
                >
                  <b style={{ letterSpacing: "0.07rem" }}>
                    islamic.and.asssunnahblog@gmail.com
                  </b>
                </a>
              </h4>
              <a rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100089603141421">
                <i className="topIcon fab fa-facebook-square"></i>
              </a>
              <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/minhaz-khan-a96763245/">
                <i className="topIcon fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="topIcon fab fa-pinterest-square"></i>
              </a>
              <a href="#">
                <i className="topIcon fab fa-instagram-square"></i>
              </a>
            </div>
            <div className="back-form">
              <div className="img-back">
                <h4 className="mt-2">Send your Email Here!</h4>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:islamic.and.asssunnahblog@gmail.com"
                >
                  <Image
                    src="/mailz.jpeg"
                    alt="logo"
                    width={7000}
                    height={100}
                    className="mb-5"
                  />
                  <button id="mail">
                    {" "}
                    mail us <i className="fa fa-paper-plane"></i>{" "}
                  </button>
                </a>
              </div>
              <form id="form" action="" onSubmit={handleSubmit}>
                {error && !success ? (
                  <span id="pp">Ops!🤦‍♂️ Please, fill-up all fields!</span>
                ) : (
                  success && <span id="pp">Your message has beeb sent👍!</span>
                )}
                <label htmlFor="name">Name</label>
                <input
                  placeholder="type your name here.."
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  name="name"
                  id="input"
                />

                <label htmlFor="email">Email</label>
                <input
                  placeholder="type your email here.."
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="user_email"
                  id="input"
                />

                <label htmlFor="message">Message</label>
                <textarea
                  placeholder="type your message here.."
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  name="message"
                  id="textarea"
                />

                <div className="send-btn">
                  <button id="mj" type="submit">
                    send <i className="fa fa-paper-plane" id="opp"></i>
                    {bool ? (
                      <b id="load">
                        <Image
                          id="send-img"
                          src="/load2.gif"
                          alt="logo"
                          height={9}
                          width={50}
                          className="flex"
                        />
                      </b>
                    ) : (
                      ""
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
        <ToastContainer />
        <div className="mt-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default contact;
