import { Outlet } from "react-router";
import { Header } from "./Header/Header";
import "../index.css";

export function Layout() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] ">
      <Header />
      <Outlet />
      <footer className="bg-gray-900 p-4 text-center">
        <p>© 2025 Dolarcito</p>
      </footer>
    </div>
  );
}
