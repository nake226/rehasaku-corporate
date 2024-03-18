import { SectionTitle } from "../../common/SectionTitle";
import { ServiceCard } from "../../common/ServiceCard";

export const Service = () => {
  return (
    <div className="p-20 sm:px-8 flex justify-center items-start sm:flex-col gap-x-24 sm:gap-y-8">
      <div className="w-96 sm:w-auto">
        <SectionTitle
          title={<span className="font-bold">SERVICE</span>}
          subTitle="事業紹介"
          iconSummitPosition="tl"
          contentsAlign="start"
        />
        <p className="text-paragraph leading-paragraph mt-6">
          リハサクは
          <span className="font-bold">医療機関向け事業・治療院向け事業</span>
          の二つを通じて社会にある課題と向き合い、より豊かな社会を目指すための取り組みを行っています。
        </p>
      </div>
      <div className="grid gap-y-8 sm:w-full">
        <ServiceCard
          width="w-[624px]"
          height="h-[280px]"
          pcBgImg="bg-top-medical-pc"
          spBgImg="sm:bg-top-medical-sp"
          url="/service"
          labelText="医療機関向け"
          serviceName="REHASAKU Medical"
          serviceContents={["運動療法クラウドシステム"]}
        />
        <ServiceCard
          width="w-[624px]"
          height="h-[280px]"
          pcBgImg="bg-top-cloud-pc"
          spBgImg="sm:bg-top-cloud-sp"
          url="/service/posture"
          labelText="治療院向け"
          serviceName="REHASAKU Cloud "
          serviceContents={["運動指導支援ツール", "AI姿勢分析"]}
        />
      </div>
    </div>
  );
};
