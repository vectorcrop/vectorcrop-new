
import { Html, Head, Main, NextScript } from 'next/document'
import './globals.css'

export const metadata = {
  title: 'VectorCrop',
  description: 'Software Development Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"  />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&display=swap" rel="stylesheet"/>
</head>
      <body>{children}</body>
    </html>
  )
}
