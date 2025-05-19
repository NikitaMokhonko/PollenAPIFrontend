import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import { ResultDisplay } from "@/components/ResultDisplay";
import { Analytics } from "@vercel/analytics/react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <div
        className="h-screen w-full overflow-y-auto bg-cover bg-center"
        style={{ backgroundImage: "url('images/peaks-background.svg')" }}
      >
        <div className="flex flex-col items-center justify-center mt-[150px]">
          <ResultDisplay />
        </div>
      </div>
    </>
  );
}
