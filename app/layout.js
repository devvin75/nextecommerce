import "./globals.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import TopNav from "./components/TopNav";

export const metadata = {
  title: "NexteCommerce",
  description: "Ecommerce app using Next.js Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
