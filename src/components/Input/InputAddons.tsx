import React, { ReactNode } from "react"
import _ from "lodash"

import { IInputProps } from "./types"
import { getIconSize } from "./utils"

import {
  AddonBeforeSpan,
  AddonAfterSpan,
  AddonContainer,
  StyledLabel,
  NotificationContainer,
} from "./styledComponents"

const renderInputAddons = (
  children: React.ReactElement<any>,
  props: IInputProps
) => {
  const {
    addonAfter,
    addonBefore,
    label,
    notification,
    inputSize,
    state,
  } = props
  const customProps = {
    inputSize,
    state,
  }

  let labelDOM: null | ReactNode = null
  let notificationDOM: null | ReactNode = null
  let addonDOM: ReactNode = children

  if (label) {
    labelDOM = label
    if (_.isString(label)) {
      labelDOM = <StyledLabel customProps={customProps}>{label}</StyledLabel>
    }
  }

  if (notification) {
    notificationDOM = notification
    if (_.isString(notification)) {
      notificationDOM = (
        <NotificationContainer customProps={customProps}>
          {notification}
        </NotificationContainer>
      )
    }
  }

  if (addonBefore) {
    addonDOM = (
      <AddonBeforeSpan iconSize={getIconSize(inputSize)}>
        {addonBefore ? (
          <AddonContainer
            css={`
              left: 1rem;
            `}>
            {addonBefore}
          </AddonContainer>
        ) : null}
        {children}
      </AddonBeforeSpan>
    )
  }
  if (addonAfter) {
    addonDOM = (
      <AddonAfterSpan iconSize={getIconSize(inputSize)}>
        {children}
        {addonAfter ? (
          <AddonContainer
            css={`
              right: 1rem;
            `}>
            {addonAfter}
          </AddonContainer>
        ) : null}
      </AddonAfterSpan>
    )
  }
  return (
    <>
      {labelDOM}
      {addonDOM}
      {notificationDOM}
    </>
  )
}

export default renderInputAddons
