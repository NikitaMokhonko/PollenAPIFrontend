import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      className="h-screen w-full overflow-y-auto bg-cover bg-center"
      style={{ backgroundImage: "url('public/images/about-background.svg')" }}
    >
      <div className="h-screen w-full overflow-y-auto">
        <div className="border-2 border-black rounded-3xl p-10 bg-white flex flex-col items-center justify-center mt-[300px] max-w-xl mx-auto text-center">
          <p>
            This website shows the current birch pollen data for the Stockholm
            region. <br />
            <br />
            <br />
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
            For any inquiries contact me at:{" "}
            <a href="mailto:nikitamokhonko@gmail.com">
              nikitamokhonko@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
