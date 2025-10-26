import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./styles/globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <Sidebar />
          <div style={{ flex: 1 }}>
            <Navbar />
            <main className="main-content">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

