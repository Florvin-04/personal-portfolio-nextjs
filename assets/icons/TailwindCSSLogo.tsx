import { cn } from "@/lib/utils";

type TailwindCSSLogoProps = {
  className: string;
};

const TailwindCSSLogo = ({ className }: TailwindCSSLogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("aspect-square w-[1rem]", className)}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4a3.23 3.23 0 0 1 3.5-1.49a4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4a3.2 3.2 0 0 1-3.5 1.51m-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4a3.23 3.23 0 0 1-3.5 1.49a4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4a3.2 3.2 0 0 1 3.5-1.51"
      />
    </svg>
  );
};

export default TailwindCSSLogo;
