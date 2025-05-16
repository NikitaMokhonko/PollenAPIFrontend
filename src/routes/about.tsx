import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-screen w-full overflow-y-auto">
      <div className="flex flex-col items-center justify-center mt-[150px] max-w-2xl mx-auto text-center">
        <p>
          This page shows the current birch pollen data for the Stockholm
          region. The data is processed through a Java backend and displayed
          using React. The app is built by using
        </p>
        <br />
        <a
          href="https://api.pollenrapporten.se/"
          target="_blank"
          className="text-blue-500 underline hover:text-blue-700 whitespace-nowrap"
        >
          This external API
        </a>
        <p className="mt-6">
          For any inquiries you can contact me at:{" "}
          <a href="mailto:nikitamokhonko@gmail.com">nikitamokhonko@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
