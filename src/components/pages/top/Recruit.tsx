import { SectionTitle } from "../../common/SectionTitle";
import { LinkButton } from "../../common/LinkButton";

export const Recruit = () => {
  return (
    <div className="p-20 sm:px-8 bg-lightBlue sm:bg-top-recruit-sp bg-contain bg-no-repeat">
      <div className="grid gap-y-6 md:max-w-[1120px] md:mx-auto md:bg-top-recruit-pc bg-right bg-contain bg-no-repeat">
        <SectionTitle
          title={<span className="font-bold">RECRUIT</span>}
          subTitle="採用情報"
          iconSummitPosition="tl"
          contentsAlign="start"
        />
        <p className="text-paragraph leading-paragraph md:w-[693px]">
          リハサクでは、ヘルスケアに関わる全ての人を幸せにするため、共に挑戦していく仲間を募集しています。0→1、1→10を経験しながら一緒に会社の文化を醸成していくまたとない機会なので、少しでも興味があればまずはお気軽にご連絡ください。
        </p>
        <div className="sm:grid sm:place-items-center">
          <LinkButton label="採用情報" url="/recruit" />
        </div>
      </div>
    </div>
  );
};
