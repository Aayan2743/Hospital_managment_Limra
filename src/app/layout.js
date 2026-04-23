import "./globals.css";

export const metadata = {
  title: "Hospital App",
  description: "Hospital Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
