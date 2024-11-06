import './globals.css'

export const metadata = {
  title: 'Love You',
  description: 'Best Wishes',
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {children} 
      </body>
    </html>
  )
}
