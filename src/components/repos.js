import React, { useState, useEffect } from "react"
//import repos from "../data/repos";
import Repo from "./repo"

export default () => {
  const [repos, setRepos] = useState([])
  const [reposCount, setReposCount] = useState([])
  //../imgs/waveColor.png
  const reposGood = [
    {
      name: "admin-panel-reactjs",
      image: "images/admin_panel.jpg",
    },
    {
      name: "reactjs-social-media-dashboard",
      image: "images/social_media_dashboard.jpg",
    },
    {
      name: "rick-and-morty-vanilla",
      image: "images/rick_and_morty.jpg",
    },
    {
      name: "rock-paper-scissors-react",
      image: "images/rock_paper_scissors.jpg",
    },
  ]

  useEffect(() => {
    const data = sessionStorage.getItem("repos")
    let myRepos

    if (data) {
      myRepos = JSON.parse(data)
      setReposCount(myRepos.length)
      // myRepos = myRepos.slice(1, 4)
      // myRepos.name.includes("reactjs-social-media-dashboard")
      // myRepos = myRepos.filter(f => reposGood.includes(f.name))
      let result = myRepos.filter(myRepos =>
        reposGood.some(reposSearching => myRepos.name === reposSearching.name)
      )
      // console.log(result)
      return setRepos(result)
    }

    async function fetchRepos() {
      const response = await fetch(
        "https://api.github.com/users/yesmeMorales/repos"
      )
      let myRepos = await response.json()

      setReposCount(myRepos.length)
      sessionStorage.setItem("repos", JSON.stringify(myRepos))
      // myRepos = myRepos.slice(1, 4)
      // myRepos = myRepos.filter(f => reposGood.includes(f.name))
      let result = myRepos.filter(myRepos =>
        reposGood.some(reposSearching => myRepos.name === reposSearching.name)
      )
      // console.log(result)

      setRepos(result)
    }

    fetchRepos()
  }, [])

  return (
    <div className="max-w-4xl mx-auto mt-6 mb-12 container_repos">
      <header className="text-center mb-4">
        <h2 className="text-3xl font-bold">Proyectos Personales</h2>
        {/* <p>Colaboracion y Contribución de código</p> */}
      </header>
      <ul className="repos-list items-center justify-center">
        {repos.map((repo, index) => {
          return <Repo repo={repo} key={repo.id} reposGood={reposGood[index]} />
        })}
      </ul>
      <div className="mt-8 text-center mb-4">
        <a
          href="https://github.com/yesmeMorales"
          className="btn btn_ver_mas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver más en GitHub ({reposCount})
        </a>
      </div>
    </div>
  )
}
