import "./globals.css";

export const metadata = {
  title: "Adhiraj's Portfolio",
  description: "Adhiraj Saha's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/icon.png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
