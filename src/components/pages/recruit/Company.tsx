import Link from "next/link";
import Image from "next/image";
import { SectionTitle } from "../../common/SectionTitle";

export const Company = () => {
  return (
    <div className="grid place-items-center gap-y-10 py-20 sm:px-4 sm:py-16 bg-lightBlue">
      <SectionTitle
        title={
          <span className="font-bold">
            COMPANY
            <br className="md:hidden" /> SLIDE DECK
          </span>
        }
        subTitle="採用デック"
        iconSummitPosition="tr"
      />
      <Link className="text-small" href={""}>
        <Image
          className="sm:w-full sm:h-auto"
          priority={true}
          src="/images/recruit/company.png"
          width={810}
          height={456}
          alt="採用デック スライド"
        />
      </Link>
    </div>
  );
};
