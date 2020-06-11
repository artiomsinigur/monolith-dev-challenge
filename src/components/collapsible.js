import React, { useState, useRef, useEffect } from "react"
import { gsap } from "gsap/all"
import { isBrowser } from "react-device-detect"
import styled from "@emotion/styled"

const Collapse = styled.button`
  border: none;
  margin-bottom: 0;
  padding: 20px 0;
  border-bottom: 1px solid var(--color-primary);

  & span {
    font-size: var(--base-font-size);
  }

  .Collapse_Plus {
    display: flex;
    justify-content: space-between;
  }

  .Collapse_Content div {
    padding-top: 50px;
    font-size: var(--base-font-size);
    line-height: 1.2;
  }

  @media screen and (min-width: 768px) {
    & {
      padding: 35px 0;
    }

    .Collapse_Content div {
      padding-top: 80px;
    }
  }
`

//! This method is essential to keep the scroll height up to date.
const updateScroll = () => isBrowser && window.scroll.update()

const collapsible = node => {
  const tl = gsap.timeline({
    defaults: {
      duration: 0.35,
      ease: " power1.inOut",
    },
  })

  //! We call this method after every change that impacts the page height.
  const animation = tl
    .call(() => updateScroll())
    .fromTo(
      node,
      { height: 0, willChange: "height" },
      { height: "auto", clearProps: "willChange" }
    )
    .call(() => updateScroll())
    .pause()

  let open = () => animation.play()
  let close = () => animation.reverse(0)

  return { open, close }
}

const Collapsible = ({ children }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
  })

  let body = useRef(null)

  const handleClick = () => {
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
      })
    }
  }

  useEffect(() => {
    if (state.clicked === false) {
      collapsible(body).close()
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      collapsible(body).open()
    }
  }, [state])

  return (
    <Collapse type="button" className="Collapse" onClick={() => handleClick()}>
      <div className="Collapse_Plus">
        <span className="Collapse_title">Collapsible</span>
        <span className="Collapse_icon">+</span>
      </div>
      {children && (
        <div className="Collapse_Content" ref={el => (body = el)}>
          <div>{children}</div>
        </div>
      )}
    </Collapse>
  )
}

export default Collapsible
