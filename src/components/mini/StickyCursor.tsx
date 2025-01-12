import { useRef, useState } from "react";

function StickyCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const parentContainer = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);

  return (
    <div className="w-1/2 h-1/2 bg-white rounded-lg" ref={parentContainer}>
      <div
        className="w-8 h-8 rounded-full bg-red-600 shadow-[0px_0px_10px_black]"
        ref={cursor}
      ></div>
    </div>
  );
}
export default StickyCursor;
