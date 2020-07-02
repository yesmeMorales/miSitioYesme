import React from "react"

export default () => (
  <>
    {/* <img
      src="images/bg-footer-top-desktop.svg"
      className="wave mt-4"
      alt="wave background"
    /> */}
    <div className="content-wave">
      <div className="wave_footer"></div>
      {/* <div className="footer text-white font-bold block"> */}
      {/* <div className="bg-gray-800 border-gray-800"> */}
      <div className="border-gray-800 footer">
        <ul className="w-40 footer-content">
          <li className="icon-social-network email inline-block">
            <a
              target="_blank"
              href="https://twitter.com/ChessMinn"
              rel="noopener noreferrer"
            >
              <img src="images/redes-sociales-twitter.svg" alt="Icon Email" />
            </a>
          </li>
          <li className="icon-social-network linkedin inline-block">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/yesme-morales/"
              rel="noopener noreferrer"
            >
              <img
                src="images/redes-sociales-linkedin.svg"
                alt="Icon Linkedin"
              />
            </a>
          </li>
          <li className="icon-social-network github inline-block">
            <a
              target="_blank"
              href="https://github.com/yesmeMorales"
              rel="noopener noreferrer"
            >
              <img src="images/redes-sociales-github4.svg" alt="Icon Github" />
            </a>
          </li>
        </ul>
        <h2 className="text-center text-white font-bold flex-1 mb-3 copyright">
          &copy; Yesme Morales{" "}
        </h2>
      </div>
    </div>
    {/* </div> */}
    {/* </div> */}
  </>
)
