import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({data}) =>  {
  return (
    <div>
      <h1> Latest Posts </h1>
      {
        data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <h3> {post.node.frontmatter.title} </h3>
            <small> Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date} </small>
          
            <br />
            <br />
            <Link to={post.node.frontmatter.path}> Read More </Link>
          </div>
        ))
      }
    </div>
  )
}

export const pageQuery = graphql`
  query blogIndexQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
      }
  }
`

export default BlogPage
