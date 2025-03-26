import { Outlet } from "react-router";
import { Header } from "./Header/Header";

export function Layout() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>© 2025 Dolarcito</p>
      </footer>
    </div>
  );
}
