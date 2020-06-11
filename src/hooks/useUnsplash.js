import { graphql, useStaticQuery } from "gatsby"

export default function useUnsplash() {
  const data = useStaticQuery(graphql`
    query {
      allUnsplashPhoto(sort: { fields: [created_at], order: DESC }) {
        nodes {
          urls {
            regular
          }
          alt_description
          description
          id
        }
      }
    }
  `)
  

  return data.allUnsplashPhoto.nodes.map(photo => ({
    id: photo.id,
    regular: photo.urls.regular,
    alt: photo.alt_description,
    description: photo.description,
  }))
}
