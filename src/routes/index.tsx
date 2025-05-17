import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import { fetchPollenCount } from "@/utilities/fetcher";
import { ResultDisplay } from "@/components/ResultDisplay";
import { Header } from "@/components/Header";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <div
        className="h-screen w-full overflow-y-auto bg-cover bg-center"
        style={{ backgroundImage: "url('public/images/background.svg')" }}
      >
        <div className="flex flex-col items-center justify-center mt-[150px]">
          <ResultDisplay />
        </div>
      </div>
    </>
  );
}
