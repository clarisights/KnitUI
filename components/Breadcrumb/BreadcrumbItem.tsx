import React, { SFC, ReactNode } from 'react'

export interface BreadcrumbItemProps {
  crumb: string | ReactNode | number,
  href?: string
}


const BreadcrumbItem: SFC<BreadcrumbItemProps> = props => {
  const { crumb } = props
  return (
    <>
      { crumb }
    </>
  )
}

export default BreadcrumbItem
