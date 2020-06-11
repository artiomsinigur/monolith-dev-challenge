import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const HeaderTag = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 100px;
  padding: 0 1.45rem;
  padding-top: 10px;

  .page-header-logo a {
    font-size: var(--base-font-size);
    line-height: 1.2;
    color: var(--color-primary);
    text-decoration: none;
  }

  .toggler {
    padding: 1.5rem;
    background: none;
    border: none;

    &::after {
      content: "";
      position: relative;
      display: inline-block;
      top: -13px;
      left: 0;
      right: 0;
      width: 30px;
      height: 3px;
      background-color: var(--color-primary);
      box-shadow: 0 10px 0 var(--color-primary), 0 20px 0 var(--color-primary);
    }
  }

  @media screen and (min-width: 768px) {
    & {
      margin-bottom: 30px;
      padding: 70px 1.45rem;
    }
    .page-header-logo a {
      font-size: var(--lg-font-size);
    }
  }
`

export default function Header() {
  return (
    <HeaderTag className="page-header" id="pageHeader" data-scroll-section>
      <div
        className="page-header-logo"
        data-scroll
        data-scroll-speed="4"
        data-scroll-position="top"
        data-scroll-direction="horizontal"
        data-scroll-target="#pageHeader"
      >
        <Link to="/">Monolith Challenge</Link>
      </div>
      <button
        type="button"
        className="toggler"
        aria-controls="mainNavigation"
        aria-label="Toggle navigation"
        data-scroll
        data-scroll-speed="-4"
        data-scroll-position="top"
        data-scroll-direction="horizontal"
        data-scroll-target="#pageHeader"
      ></button>
    </HeaderTag>
  )
}
