import React from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={"mx-32 my-12"}>{children}</body>
    </html>
  );
}
