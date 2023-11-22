// import Image from "next/image";

import Image from "next/image";

type IconProps = {
  className?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export function ButtonIcon({
  className,
  src,
  alt,
  width = 20,
  height = 20,
}: IconProps) {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    ></Image>
  );
}
