import { SectionTitle } from "../../common/SectionTitle";

export const Office = () => {
  return (
    <div className="grid gap-y-20 pt-20 sm:px-8 sm:py-16">
      <SectionTitle
        title={<span className="font-bold">OUR OFFICE</span>}
        subTitle="オフィス風景"
        iconSummitPosition="tl"
        subTitleCustomClassName="text-gray font-bold"
      />
    </div>
  );
};
