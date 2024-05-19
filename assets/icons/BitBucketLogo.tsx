import { cn } from "@/lib/utils";
type BitBucketLogo = {
  className: string;
};

const BitBucketLogo = ({ className }: BitBucketLogo) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      className={cn("aspect-square w-[1rem]", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2 32A16 16 0 0 0 6 47.8a26.35 26.35 0 0 0 .2 2.8l67.9 412.1a21.77 21.77 0 0 0 21.3 18.2h325.7a16 16 0 0 0 16-13.4L505 50.7a16 16 0 0 0-13.2-18.3 24.58 24.58 0 0 0-2.8-.2L22.2 32zm285.9 297.8h-104l-28.1-147h157.3l-25.2 147z"></path>
    </svg>
  );
};

export default BitBucketLogo;
