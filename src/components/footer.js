import React from "react"

export default () => (
  <>
    <img
      src="images/bg-footer-top-desktop.svg"
      className="wave mt-4"
      alt="wave background"
    />
    <div className="footer text-white font-bold block">
      <div className="bg-gray-800 border-gray-800 pb-3">
        <div className="flex justify-center block border-gray-800">
          <ul className="w-40 footer-content block flex justify-between mt-1 ">
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
                <img
                  src="images/redes-sociales-github4.svg"
                  alt="Icon Github"
                />
              </a>
            </li>
          </ul>
        </div>
        <h2 className="text-center flex-1 mt-3">&copy; Yesme Morales </h2>
      </div>
    </div>
  </>
)
