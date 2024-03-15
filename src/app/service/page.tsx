import { PageTitle } from "@/components/common/PageTitle";
import { ServiceCard } from "@/components/common/ServiceCard";
import { ChildPage } from "@/components/templates/ChildPage";

export default function ServicePage() {
  return (
    <ChildPage>
      <PageTitle
        title="SERVICE"
        subTitle="事業紹介"
        triangleIconSummitPosition="tl"
      />
      <div className="grid gap-y-10 sm:gap-y-8 p-20 sm:px-8 sm:py-16">
        <p className="text-paragraph leading-paragraph md:text-center">
          リハサクは
          <span className="font-bold">医療機関向け事業・治療院向け事業</span>
          の二つを通じて社会にある課題と向き合い、
          <br className="sm:hidden" />
          より豊かな社会を目指すための取り組みを行っています。
        </p>
        <div className="grid place-items-center gap-y-8">
          <ServiceCard
            width="w-[800px]"
            height="h-[418px] sm:h-[280px]"
            pcBgImg="bg-top-medical-pc"
            spBgImg="sm:bg-top-medical-sp"
            url=""
            labelText="医療機関向け"
            serviceName="REHASAKU Medical"
            serviceContents={["運動療法クラウドシステム"]}
          />
          <ServiceCard
            width="w-[800px]"
            height="h-[418px] sm:h-[280px]"
            pcBgImg="bg-top-cloud-pc"
            spBgImg="sm:bg-top-cloud-sp"
            url=""
            labelText="治療院向け"
            serviceName="REHASAKU Cloud "
            serviceContents={["運動指導支援ツール", "AI姿勢分析"]}
          />
        </div>
      </div>
    </ChildPage>
  );
}
