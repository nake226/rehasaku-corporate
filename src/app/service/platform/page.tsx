import { PageTitle } from "@/components/common/PageTitle";
import { SectionTitle } from "@/components/common/SectionTitle";
import Image from "next/image";
import { ChildPage } from "@/components/templates/ChildPage";
import { LinkButton } from "@/components/common/LinkButton";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export default function PlatformPage() {
  return (
    <ChildPage>
      <PageTitle
        title="TREATMENT CENTERS"
        subTitle="治療院向け事業"
        triangleIconSummitPosition="bl"
      />
      <Breadcrumb
        pages={[
          { label: "事業紹介", url: "/service" },
          { label: "治療院向け事業", url: "/service/platform" },
        ]}
      />
      <div className="w-fit m-auto py-20 sm:py-16 sm:px-8">
        <SectionTitle
          title={<span className="font-bold">REHASAKU</span>}
          subTitle="運動指導支援ツール"
          iconSummitPosition="tl"
          contentsAlign="start"
        />
        <div className="flex sm:flex-col justify-center items-start md:gap-x-12 sm:gap-y-8 mt-8">
          <div className="md:w-[400px] sm:order-2">
            <p className="text-paragraph leading-paragraph">
              REHASAKUは治療院で働くセラピストの運動指導業務をサポートする「運動指導支援ツール」です。院内での運動指導のみならず、院外でのセルフケアのサポート機会を創出し、患者満足度向上および再診率向上に寄与します。
            </p>
            <div className="sm:grid sm:place-items-center mt-12">
              <LinkButton
                label="詳細はこちら"
                url="https://rehasaku.net/lp/8"
                isOuterLink={true}
              />
            </div>
          </div>
          <Image
            className="sm:w-64 sm:m-auto sm:order-1"
            priority={true}
            src="/images/service/treatment01.jpg"
            width={514}
            height={304}
            alt="運動指導支援ツール"
          />
        </div>
      </div>
      <div className="w-fit m-auto py-20 sm:py-16 sm:px-8">
        <SectionTitle
          title={
            <span className="font-bold">
              REHASAKU
              <br className="md:hidden" />
              POSTURE
            </span>
          }
          subTitle="AI姿勢分析"
          iconSummitPosition="tl"
          contentsAlign="start"
        />
        <div className="flex sm:flex-col justify-center items-start md:gap-x-12 sm:gap-y-8 mt-8">
          <div className="md:w-[400px] sm:order-2">
            <p className="text-paragraph leading-paragraph">
              REHASAKU
              Postureはセラピストの姿勢評価をサポートする「AI姿勢分析」です。前額面・矢状面の２方向からの撮影を元に、骨格ポイントを自動検出し、患者さんの姿勢パターンを見える化します。また、運動指導支援ツールとの連携で、姿勢改善に最適なエクササイズをアプリへ処方することができ、患者さんの主体的なリハビリへの参加を手助けします。
            </p>
            <div className="sm:grid sm:place-items-center mt-12">
              <LinkButton
                label="詳細はこちら"
                url="https://rehasaku.net/rehasaku-posture"
                isOuterLink={true}
              />
            </div>
          </div>
          <Image
            className="sm:w-64 sm:m-auto sm:order-1"
            priority={true}
            src="/images/service/treatment02.jpg"
            width={514}
            height={304}
            alt="運動指導支援ツール"
          />
        </div>
      </div>
    </ChildPage>
  );
}
