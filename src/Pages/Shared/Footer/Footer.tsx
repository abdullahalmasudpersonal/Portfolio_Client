import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div> */}
      <footer className="footer-bg text-center text-white">
        <h3 className="text-center pt-4">Abullah Al Masud</h3>
        <div className="container mt-3 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/abdullah-al-masud-48ab691b1"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/abdullahalmasudpersonal"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://stackoverflow.com/users/19008268/abdullah-al-masud"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-stack-overflow"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1 facebook-padding"
              href="https://www.facebook.com/abdullahal.masud.5891"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com/Abdulla14032407"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com/abdullahalmasud3/"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://dribbble.com/Abdullah540"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-dribbble"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-pinterest"></i>
            </a>
          </section>
        </div>
        <div className="text-center pb-3 footer-bottom-bg">
          © 2022
          <a className="text-white">
            {" "}
            Abdullah Al Masud All Rights Reserved <br />
            Designed by <span className="desigined-by">Abdullah al masud</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
