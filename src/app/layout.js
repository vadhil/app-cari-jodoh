import "./globals.css";
import { Inter, Paytone_One, Nunito_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// const payton = Paytone_One({ subsets: ["latin"] });
const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Pencarian Jodoh",
  description: "aplikasi pencarian jodoh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
