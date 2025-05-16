import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import { fetchPollenCount } from "@/utilities/fetcher";
import { ResultDisplay } from "@/components/ResultDisplay";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <ResultDisplay />
    </>
  );
}
