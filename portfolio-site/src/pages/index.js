import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from "../components/container"
import "../styles/global.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Choose your Adventure?" />
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`}}>
      <Image />
    </div>
    <Container>
      <h1> 
        What do you want to know?
      </h1>
    </Container>
  </Layout>
)

export default IndexPage
