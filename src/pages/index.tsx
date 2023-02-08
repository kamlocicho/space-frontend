import Navbar from "@/components/Navbar/Navbar"
import Sidebar from "@/components/Sidebar/Sidebar"
import Image from "next/image"

export default function Home() {
  return (
    <div className="custom-grid">
      <Sidebar />

      <div className="h-full flex flex-col justify-between bg-image">
        <Navbar />
        <div className="w-1/2 pl-40 bg-image2">
          <h1 className="text-start font-bold text-7xl">Adventure Together</h1>
          <p className="text-start text-lg opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Placerat id potenti faucibus nec, rhoncus, vulputate vitae.
            Dictum rutrum ut cras nullam porta id dolor arcu, quis.
          </p>
        </div>
        <div className="bottom-bg w-full flex flex-row justify-around items-center">
          <Image src="/static/rectangle3.png" alt="Rectangle 3" width={324} height={255} />

          <div className="max-w-xs">
            <h2 className="font-bold text-2xl">Exploration</h2>
            <p className="break-all">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Placerat id potenti faucibus nec, rhoncus, vulputate
            </p>
          </div>

          <div className="max-w-xs">
            <h2 className="font-bold text-2xl">Footprint</h2>
            <p className="break-all">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
