import React from "react"
import Layout from "../components/layout"
import Collapsible from "../components/collapsible"
import SEO from "../components/seo"
import PhotoList from "../components/PhotoList"
import { css } from "@emotion/core"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <div
        className="collapse"
        id="collapse"
        css={css`
          margin-bottom: 100px;
        `}
        data-scroll-section
      >
        <Collapsible>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
          veritatis totam, iste hic quibusdam doloribus, odio aliquid molestiae
          sunt rem. Minima, adipisci modi! Cumque aperiam delectus pariatur quia
          quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
          veritatis totam, iste hic quibusdam doloribus, odio aliquid molestiae
          sunt rem. Minima, adipisci modi! Cumque aperiam delectus pariatur quia
          quo.
        </Collapsible>
        <Collapsible>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
          veritatis totam, iste hic quibusdam doloribus, odio aliquid molestiae
          sunt rem. Minima, adipisci modi! Cumque aperiam delectus pariatur quia
          quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
          veritatis totam, iste hic quibusdam doloribus, odio aliquid molestiae
          sunt rem. Minima, adipisci modi! Cumque aperiam delectus pariatur quia
          quo.
        </Collapsible>
        <Collapsible>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
          veritatis totam, iste hic quibusdam doloribus, odio aliquid molestiae
          sunt rem. Minima, adipisci modi! Cumque aperiam delectus pariatur quia
          quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
          veritatis totam, iste hic quibusdam doloribus, odio aliquid molestiae
          sunt rem. Minima, adipisci modi! Cumque aperiam delectus pariatur quia
          quo.
        </Collapsible>
      </div>
      <PhotoList />
    </Layout>
  </>
)

export default IndexPage
