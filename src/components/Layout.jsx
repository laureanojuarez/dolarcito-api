import { Outlet } from "react-router";
import { Header } from "./Header/Header";
import "../index.css";

export function Layout() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <main className="w-full flex justify-center">
        <Outlet />
      </main>
      <footer className="bg-gray-900 p-4 text-center">
        <p>© 2025 Dolarcito</p>
      </footer>
    </div>
  );
}
