import React from "react"
import styled, { keyframes } from "styled-components"

interface IIconLoader {
  size?: string
  strokeWidth?: number
  fill?: string
}

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
`

const SVG = styled.svg`
  animation: ${rotate} 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  padding: 0.2rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`

const Path = styled.circle`
  stroke-dasharray: 100, 200;
  stroke-dashoffset: 0;
  animation: ${dash} 1.5s ease-in-out infinite;
  stroke-linecap: round;
  stroke: ${({ stroke, theme }) =>
    stroke || theme.knitui.chromaPalette.Neutral90};
`

const LoaderWrapper = styled.div<IIconLoader>`
  position: relative;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

const IconLoader = (props: IIconLoader) => {
  const { size = "1.8rem", strokeWidth = 4, fill } = props
  return (
    <LoaderWrapper size={size}>
      <SVG viewBox="25 25 50 50">
        <Path
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth={strokeWidth}
          stroke={fill}
        />
      </SVG>
    </LoaderWrapper>
  )
}

export default IconLoader
