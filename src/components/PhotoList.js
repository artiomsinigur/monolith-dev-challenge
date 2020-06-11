import React from "react"
import styled from "@emotion/styled"
import useUnsplash from "../hooks/useUnsplash"
import PhotoItem from "./PhotoItem"
import MarqueeText from "../components/MarqueeText"
import Racket from "../components/Rocket"
import ErrorBoundary from "./ErrorBoundaries"

const PhotoListTag = styled.div`
  position: relative;
  height: 1100px;

  @media screen and (min-width: 768px) {
    & {
      height: 1900px;
    }
  }
`

function PhotoList() {
  const photos = useUnsplash()

  return (
    <div className="gallery" id="fixedOnGallery" data-scroll-section>
      <MarqueeText>Marquee Text Marquee Text</MarqueeText>
      <Racket />
      <PhotoListTag className="photo-list">
        {/* {photos.map(photo => (
          <PhotoItem key={photo.id} {...photo} />
        ))} */}
        <PhotoItem
          {...photos[0]}
          data-scroll
          data-scroll-speed="4"
          data-scroll-delay="0.08"
        />
        <PhotoItem
          {...photos[1]}
          data-scroll
          data-scroll-speed="3"
          data-scroll-delay="0.08"
        />
        <PhotoItem
          {...photos[2]}
          data-scroll
          data-scroll-speed="2"
          data-scroll-delay="0.08"
        />
        <PhotoItem
          {...photos[3]}
          data-scroll
          data-scroll-speed="1"
          data-scroll-delay="0.08"
        />
      </PhotoListTag>
    </div>
  )
}

export default function PhotoListWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <PhotoList {...props} />
    </ErrorBoundary>
  )
}
