import { cn } from "@/app/lib/utils";

interface PropsType {
  children: React.ReactNode;
  className?: string[];
}

function Wrapper({ children, className }: PropsType) {
  return (
    <div
      className={cn(
        "lg:w-2/5 sm:w-1/2 w-4/5 bg-white text-black rounded-lg border border-white p-2",
        className
      )}
    >
      {children}
    </div>
  );
}
export default Wrapper;
