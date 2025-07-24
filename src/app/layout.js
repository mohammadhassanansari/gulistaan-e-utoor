import "./globals.css";


import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link 
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Manrope:wght@600;800&family=Inter:wght@400;700&display=swap" 
            rel="stylesheet" 
          />
          <style>{`
            html {
              font-family: 'Manrope', 'Inter', sans-serif;
              background: linear-gradient(120deg,#ede9fd,#ecfdf5 60%,#f5f5fa 100%);
              color: #20202a;
            }
            h1, h2, h3, h4, h5 {
              font-family: 'Playfair Display', serif;
            }
          `}</style>
        </head>
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
