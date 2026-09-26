import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Agro Gyaani | भारतीय किसानों का डिजिटल कृषि साथी",
    template: "%s | Agro Gyaani",
  },
  description:
    "फसल सलाह, मंडी भाव, मौसम, बीज और सरकारी योजनाओं की जानकारी भारतीय किसानों के लिए आसान हिंदी में।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}