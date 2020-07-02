import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    {
      allEducationJson {
        edges {
          node {
            slug
            title
            description
          }
        }
      }
    }
  `)

  return (
    <div className="max-w-4xl mx-auto mt-8 container_nav mb-4">
      <h2 className="text-3xl font-bold text-center sub-education">
        {" "}
        Conoce sobre mi formación académica
      </h2>
      <nav className="flex justify-center mt-8 container_node">
        {data.allEducationJson.edges.map((element, index) => {
          const { node } = element
          return (
            <article
              className="flex-1 bg-white shadow m-4 max-w-sm p-4"
              key={index}
            >
              <header className="h-48 container_formacion">
                <p className="font-bold leading-loose h-8">{node.title}</p>
                <div className="mt-6 h-32 container_description">
                  <p className="h-16 font-light overflow-hidden description">
                    {node.description}
                  </p>
                  <Link to={`/${node.slug}`} className="btn inline-block mt-6">
                    Ir
                  </Link>
                </div>
              </header>
            </article>
          )
        })}
      </nav>
    </div>
  )
}
