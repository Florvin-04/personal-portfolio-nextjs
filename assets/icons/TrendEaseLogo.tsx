import { cn } from "@/lib/utils";

// trend ease in my capstone project in kodego
type TrendEaseLogoProps = {
  className: string;
};

const TrendEaseLogo = ({ className }: Partial<TrendEaseLogoProps>) => {
  return (
    <svg
      className={cn("aspect-square w-[1rem]", className)}
      viewBox="0 0 368 359"
      // fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_333_5919)">
        <path
          d="M360.132 228.421L207.039 89.6921C205.322 88.1311 203.431 86.8161 201.455 85.6721V63.2411H199.996C198.987 60.1601 196.555 57.5641 192.309 56.5881C182.819 54.4051 172.352 51.2861 165.885 43.5461C162.76 39.8021 161.79 34.8691 163.123 32.2691C170.698 17.5001 192.724 22.0011 205.375 27.4651C218.85 33.2901 230.596 13.6461 217.001 7.77309C193.522 -2.36891 155.325 -6.93591 142.685 21.9831C132.924 44.3031 147.663 61.5191 166.407 71.2851V85.4981C164.308 86.6871 162.294 88.0381 160.471 89.6861L7.40403 228.421C-5.45497 240.076 -1.13797 249.522 17.045 249.522H89.829V237.218V224.926H47.895L177.01 107.92C178.67 106.413 181.135 105.551 183.765 105.551C186.399 105.551 188.864 106.412 190.524 107.92L319.636 224.926H276.869V237.218V249.522H350.482C368.664 249.522 372.982 240.076 360.132 228.421Z"
          fill="currentColor"
          fillRule="evenodd"
          // fill="#222222"
        />
        <path
          d="M102.127 224.926V237.218V249.522V358.305L140.663 346.631L140.306 273.048C140.276 266.263 145.756 260.714 152.544 260.691C152.562 260.691 152.586 260.691 152.604 260.691C159.368 260.691 164.872 266.156 164.902 272.929L165.223 339.192L264.572 309.101V249.516V237.212V224.92V199.97H102.127V224.926Z"
          // fill="#222222"
          fill="currentColor"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_333_5919">
          <rect width="368" height="359" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TrendEaseLogo;
