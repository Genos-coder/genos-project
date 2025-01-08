import { RAMS } from "@/data/satkucards";
import RamCards from "./RamCards";
function ForeFront() {
  return (
    <div className="fixed w-full top-0 left-0 h-screen z-5 flex  gap-4 p-4 ">
      {RAMS.map((ram) => {
        return <RamCards {...ram} />;
      })}
    </div>
  );
}
export default ForeFront;
