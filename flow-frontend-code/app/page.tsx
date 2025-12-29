import Image from "next/image";
import MyButton from "./components/MyButton";
import Navbar from "./components/Navbar";
import Graph from "./components/Graph";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className="justify-between mt-10 mx-5 space-x-5 hidden md:flex">
          <div>
            <SideBar />
          </div>
          <div className="flex">
            <Graph />
             <Graph />
              <Graph />
               <Graph />
          </div>
        </div>
      </div>
    </>
  );
}
