import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Learn how to design and code React apps.</h1>
    <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
    <Link to="/page-2/">Go to next page</Link>
  </Layout>
)

export default IndexPage
