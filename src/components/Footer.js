import React, { useRef, useEffect } from "react"
import styled from "@emotion/styled"
import LocomotiveScroll from "locomotive-scroll"

const FooterTag = styled.footer`
  text-align: center;

  .page-footer-copyright {
    padding: 180px 0;
  }

  p {
    margin-bottom: 0;
    font-size: var(--sm-font-size);
    line-height: 1.4;
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: var(--lg-font-size);
    }
  }
`
export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const target = new LocomotiveScroll({
      el: footerRef.current,
    })
    console.log(target)

    target.on("call", func => {
      console.log(func)
    })
  }, [])

  return (
    <FooterTag
      className="page-footer"
      id="pageFooter"
      ref={footerRef}
      data-scroll-section
      data-scroll-call="changeBgColor"
    >
      <div className="page-footer-copyright">
        <p
          data-scroll
          data-scroll-speed="2"
          data-scroll-position="bottom"
          data-scroll-direction="horizontal"
        >
          Made by
        </p>
        <p
          data-scroll
          data-scroll-speed="-2"
          data-scroll-position="bottom"
          data-scroll-direction="horizontal"
        >
          @github_account
        </p>
        <p
          data-scroll
          data-scroll-speed="2"
          data-scroll-position="bottom"
          data-scroll-direction="horizontal"
        >
          email@example.com
        </p>
      </div>
    </FooterTag>
  )
}
