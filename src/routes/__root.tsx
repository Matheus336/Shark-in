import { HeaderProfile } from "@/pages/feed/header";
import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";

const RootLayout = () => {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/";

  return (
    <div className="flex flex-col overflow-hidden bg-background flex-1">
      {isLoginRoute ? null : <HeaderProfile />}
      <main
        className={`flex-1 ${isLoginRoute ? "" : "mt-20 flex flex-col overflow-hidden"}`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export const Route = createRootRoute({ component: RootLayout });
