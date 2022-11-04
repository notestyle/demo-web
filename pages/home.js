import Container from "../components/container";
import SideBar from "../components/sideBar";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-pink-300">
      <div className=" w-[80%] h-[70vh] rounded-xl border-white border-2 flex overflow-hidden">
        <SideBar />
        <Container />
      </div>
    </div>
  );
}