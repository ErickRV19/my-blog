import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import "aos/dist/aos.css"
import AOS from "aos"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  AOS.init()
  return (
    <Layout location={location} title={siteTitle}>
      <div data-aos="fade-up" className="info">
        Excelente tenerte por aca de nuevo .
      </div>
      <SEO title="" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article data-aos="fade-up" key={node.fields.slug}>
            <link
              rel="stylesheet"
              href="https://unpkg.com/aos@next/dist/aos.css"
            />
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{ boxShadow: `none`, color: `#283de2` }}
                  to={node.fields.slug}
                >
                  {" "}
                  {title}{" "}
                </Link>{" "}
              </h3>{" "}
              <small> {node.frontmatter.date} </small>{" "}
            </header>{" "}
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />{" "}
            </section>{" "}
          </article>
        )
      })}{" "}
      <hr />
      <Bio />{" "}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
