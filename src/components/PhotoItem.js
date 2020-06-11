import React from "react"
import styled from "@emotion/styled"

const PhotoItemTag = styled.div`
  position: absolute;
  width: 240px;
  height: 325px;

  &:nth-of-type(1) {
    left: 0;
  }
  &:nth-of-type(2) {
    right: 0;
    top: calc(325px - 90px);
  }
  &:nth-of-type(3) {
    left: 0;
    top: calc(325px + 145px);
  }
  &:nth-of-type(4) {
    top: calc(325px + 325px + 145px - 90px);
    right: 0;
  }

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    filter: contrast(95%) brightness(0.95);
  }

  @media screen and (min-width: 768px) {
    width: 560px;
    height: 760px;
    padding: 0 15px;

    &:nth-of-type(1) {
      top: 0;
    }
    &:nth-of-type(2) {
      top: 170px;
    }
    &:nth-of-type(3) {
      top: calc(760px + 60px);
    }
    &:nth-of-type(4) {
      top: calc(760px + 170px + 60px);
    }
  }
`

export default function PhotoItem(props) {
  return (
    <PhotoItemTag className="photo-item" {...props}>
      <img src={props.regular} alt={props.alt} />
    </PhotoItemTag>
  )
}
