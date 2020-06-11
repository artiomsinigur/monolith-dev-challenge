import React from "react"
import styled from "@emotion/styled"

const Rocket = styled.div`
  position: absolute;
  top: 50vh;
  left: 0;
  right: 0;
  z-index: 10;

  .rocket-container {
    padding-top: 130vh;
    text-align: right;
  }

  span {
    font-size: 2rem;
  }

  @media screen and (min-width: 768px) {
    & {
      span {
        font-size: 4rem;
      }
    }
  }
`

export default function Racket() {
  return (
    <Rocket className="rocket" id="rocketEmoji" data-scroll-section>
      <div
        className="rocket-container"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-10"
      >
        <span role="img" aria-label="Rocket">
          🚀
        </span>
      </div>
    </Rocket>
  )
}
