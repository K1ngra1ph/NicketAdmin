import "./global.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export const metadata = {
  title: "Nicket Admin Panel",
  description: "Crypto-style dashboard for admin management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="flex bg-black text-white">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
