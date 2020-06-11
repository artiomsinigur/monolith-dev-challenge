import React from "react"
import styled from "@emotion/styled"

const Marquee = styled.div`
  /* position: sticky;
  top: 20px; */
  position: relative;
  overflow: hidden;
  z-index: 1;
  --offset: 20vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));

  font-size: var(--lg-font-size);
  font-weight: normal;
  color: var(--color-primary);

  .marquee-inner {
    position: relative;
    display: flex;
    width: fit-content;
    white-space: nowrap;
    transform: translate3d(var(--move-initial), 0, 0);
    animation: marquee 5s linear infinite;
  }

  span {
    font-size: 10vw;
    padding: 0 2vw;
  }

  @keyframes marquee {
    0% {
      transform: translate3d(var(--move-initial), 0, 0);
    }

    100% {
      transform: translate3d(var(--move-final), 0, 0);
    }
  }

  @media screen and (min-width: 768px) {
    & {
      font-size: 10rem;
    }
  }
`

export default function MarqueeText() {
  return (
    <Marquee
      className="marquee"
      id="marquee"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#fixedOnGallery"
    >
      <div className="marquee-inner" aria-hidden="true">
        <span>Marquee Text</span>
        <span>Marquee Text</span>
        <span>Marquee Text</span>
        <span>Marquee Text</span>
      </div>
    </Marquee>
  )
}
