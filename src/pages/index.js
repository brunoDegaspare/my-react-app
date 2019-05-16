import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="My First React app" keywords={[`design`, `application`, `react`]} />
    <Header />
    <div className="hero">
      <div className="hero__group">
        <h1 className="hero__heading">Learn how to design and code React apps.</h1>
        <p className="hero__paragraph">Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link className="hero__cta" to="/page-2/">Go to next page</Link>
      </div>    
    </div>
  </Layout>
)

export default IndexPage
