import { RAMS } from "@/data/satkucards";
import RamCards from "./RamCards";
import { useRef } from "react";
function ForeFront() {
  const refContainer = useRef<HTMLDivElement | null>(null);
  // console.log(motion);
  return (
    <div
      ref={refContainer}
      className="fixed w-full top-0 left-0 h-screen z-5 flex  gap-4 p-4 "
    >
      {RAMS.map((ram) => {
        return (
          <RamCards key={ram.description} {...ram} reference={refContainer} />
        );
      })}
    </div>
  );
}
export default ForeFront;
