import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  ),
});
