import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-screen w-full overflow-y-auto">
      <div className="flex flex-col items-center justify-center mt-[150px] max-w-lg mx-auto text-center">
        <p>
          The data is collected from{" "}
          <a
            href="https://api.pollenrapporten.se/"
            target="_blank"
            className="text-blue-500 underline hover:text-blue-700 whitespace-nowrap"
          >
            this external API,
          </a>{" "}
          processed by a Java backend and displayed using React.
        </p>
        <br />
        <p className="mt-6">
          For any inquiries you can contact me at:{" "}
          <a href="mailto:nikitamokhonko@gmail.com">nikitamokhonko@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
