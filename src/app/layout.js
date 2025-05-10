import "./globals.css";

export const metadata = {
  title: "Adhiraj's Portfolio",
  description: "Adhiraj Saha's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* import this BEFORE any scripts */}
        <script src="https://unpkg.com/react-scan/dist/auto.global.js"></script>        
        <link rel="icon" type="image/svg+xml" href="/assets/icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
