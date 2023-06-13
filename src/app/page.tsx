import { HomeGraphic1 } from "@/components/Svg";

export default function Home() {
  return (
    <div className="flex place-content-between items-center w-11/12 mx-auto mt-20">
      <div className="w-6/12">
        <h1 className="text-5xl font-heading">
          Democratizing Data.<br />Shaping AI.
        </h1>
        <p className="text-3xl mt-8">Infrastructure for curating and accessing high quality datasets.</p>
      </div>
      <div><HomeGraphic1 /></div>
    </div>
  )
}

