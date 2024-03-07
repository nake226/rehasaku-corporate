import Link from "next/link";

type Props = {
  label: string;
  url: string;
};

export const HeaderLink = ({ label, url }: Props) => {
  return (
    <Link className="text-[15px] leading-[22px] font-bold" href={url}>
      {label}
    </Link>
  );
};
