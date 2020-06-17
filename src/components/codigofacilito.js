import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Posts from "./posts"
import Course from "./course"
import CourseFinish from "./courseFinish"

export default () => {
  const data = useStaticQuery(graphql`
    {
      codigofacilitoJson {
        data {
          courses {
            title
            progress
            url
          }
          _finished_courses_ {
            url_
            title_
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <section>
      <div className="mt-24">
        <div className="max-w-4xl mx-auto">
          <Posts
            data={data.codigofacilitoJson.data.courses}
            card={Course}
            titulo={"Mis Cursos"}
          />

          <Posts
            data={data.codigofacilitoJson.data._finished_courses_}
            card={CourseFinish}
            titulo={"Cursos Terminados"}
          />
        </div>
      </div>
    </section>
  )
}
