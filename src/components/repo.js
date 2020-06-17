import React from "react"

export default props => (
  <li className="flex items-center justify-center mb-8">
    <div className="w-10/12 flex items-center justify-center flex-col">
      <img
        src={props.reposGood.image}
        alt={props.reposGood.name}
        className="mb-3 rounded-md img-project"
      />
      <h4 className="text-pink-600 font-bold truncate">{props.repo.name}</h4>
      <p
        className="text-sm text-gray-800 overflow-y-hidden mb-3 h-16"
        style={{ height: "3em" }}
      >
        {" "}
        {props.repo.description}{" "}
      </p>

      <h3 className="mb-4 font-bold">Ver</h3>
      <div className="w-full flex justify-center btns_projects">
        <a
          href={props.repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn mr-4 w-5/12 text-center flex justify-around items-center btn_project "
        >
          <img
            src="images/github2.svg"
            alt="Icono github"
            className="w-5 h-5 mr-2"
          />
          Repositorio
        </a>
        <a
          href={props.repo.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="btn w-5/12 text-center flex justify-around items-center btn_project"
        >
          <img
            src="images/pagina-principal.svg"
            alt="Icono web"
            className="w-6 h-6 mr-2"
          />
          Página web
        </a>
      </div>
    </div>
  </li>
)
