'use client'

import React, { PropsWithChildren } from 'react'
import GlobalNavigationHeader from '~/components/global/GlobalNavHeader'
import MUIProvider from '~/components/base/MUIProvider'

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <html lang="en" key="root">
      <head>
        <title>LE for Business</title>
      </head>
      <body>
        <MUIProvider>
          {children}
        </MUIProvider>
      </body>
    </html>
  )
}
