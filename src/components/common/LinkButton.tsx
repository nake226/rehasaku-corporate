import Image from "next/image";
import Link from "next/link";

type Props = {
  label: string;
  url: string;
};

export const LinkButton = ({ label, url }: Props) => {
  return (
    <Link
      className="relative grid place-items-center rounded-full text-caption leading-caption text-white bg-blue w-64 h-12"
      href={url}
    >
      {label}
      <Image
        className="absolute right-6 top-0 bottom-1 my-auto"
        src="/images/common/icon-arrow-right.svg"
        width={22}
        height={7}
        alt=""
      />
    </Link>
  );
};
