import { cn } from "@/lib/utils";

type HTMLLogoProps = {
  className: string;
};

const HTMLLogo = ({ className }: HTMLLogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("aspect-square w-[1rem]", className)}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M4.136 3.012h15.729l-1.431 16.15l-6.451 1.826l-6.414-1.826zm5.266 7.302l-.173-2.035l7.533.002l.173-1.963l-9.87-.002l.522 5.998h6.835l-.243 2.566l-2.179.602l-2.214-.605l-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08l.558-6.111H9.402z"
      />
    </svg>
  );
};

export default HTMLLogo;
