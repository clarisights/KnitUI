import React from "react"
import styled, { keyframes } from "styled-components"
import { BaseComponentProps } from "../../common/types"

type heightType = "small" | "medium" | "large"

export interface IShimmerProps extends BaseComponentProps {
  /** This is a placeholder description */
  height?: heightType
}

const shim = keyframes`
from {
  left: -110%;
}
to {
  left: 110%;
}
`

function getHeight(height: heightType): number {
  switch (height) {
    case "large":
      return 3.2
    case "medium":
      return 2.8
    default:
      return 2
  }
}

const ShimmerContainer: any = styled.div<{
  customProps: { height: heightType }
}>`
  width: 100%;
  height: ${({ customProps }) => `${getHeight(customProps.height)}rem`};
  background: ${({ theme }) => theme.knitui.chromaPalette.Neutral10};
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`

const ShimmerElement = styled.div`
  width: 50%;
  max-width: 35rem;
  background: rgba(204, 204, 204, 0.3);
  height: 100%;
  border-radius: 4px;
  box-shadow: 0px 14px 64px rgba(0, 0, 0, 0.3);
  animation: ${shim} 2000ms cubic-bezier(0.5, 0, 0, 1) infinite;
  position: absolute;
`

export default function Shimmer({
  height = "small",
  className,
  style,
}: IShimmerProps) {
  return (
    <ShimmerContainer
      className={className}
      style={style}
      customProps={{ height }}>
      <ShimmerElement />
    </ShimmerContainer>
  )
}
