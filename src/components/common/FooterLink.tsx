import Link from "next/link";

type Props = {
  label: string;
  url: string;
};

export const FooterLink = ({ label, url }: Props) => {
  return (
    <Link className="text-small" href={url}>
      {label}
    </Link>
  );
};
