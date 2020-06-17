import React from "react"
import { graphql, Link } from "gatsby"
import EdNav from "../components/education-nav"
import Footer from "../components/footer"

export default props => {
  const pageData = props.data.educationJson
  return (
    <div>
      <header className="py-12 border-purple-500 border-solid border-t-8 ml-2 ">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="uppercase btn-link mt-4 ml-2 ">
            Regresar al inicio
          </Link>
          <h2 className="capitalize text-6xl font-bold education-title mt-4">
            {pageData.title}
          </h2>
          <p className="text-xl">{pageData.description}</p>
        </div>
      </header>
      <ul className="max-w-3xl mx-auto mt-12 mb-12">
        {pageData.items.map((item, index) => (
          <li className="bg-white shadow mt-4 flex block education" key={index}>
            <div className="flex items-center bg-purple-200">
              <p className="flex content-center vertical-text tracking-tighter">
                {item.platform}
              </p>
            </div>
            <div className="flex items-center flex-1 p-8">
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                {item.degree && (
                  <span className="inline-block p-2 radius bg-purple-100 text-purple-700">
                    {item.degree}
                  </span>
                )}
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn mt-4 inline-block"
                  >
                    Ver más
                  </a>
                )}
              </div>
              <div className="inline-block">
                <span className="inline-block p-2 text-2xl bg-green-100 text-green-700">
                  {item.date}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <EdNav />
      <Footer />
    </div>
  )
}

export const query = graphql`
  query($slug: String) {
    educationJson(slug: { eq: $slug }) {
      title
      description
      slug
      items {
        platform
        name
        degree
        date
        score
        url
      }
    }
  }
`
