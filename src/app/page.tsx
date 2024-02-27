import MainCardSec from "@/components/common/MainCardSec/MainCardSec";
import RelatedCardsSec from "@/components/common/RelatedCardsSec/RelatedCardsSec";
import Breadcrumbs from "@/components/common/UI/Breadcrumbs/Breadcrumbs";
import NewsLetter from "@/components/common/UI/NewsLetter/NewsLetter";
import TopHeading from "@/components/common/UI/TopHeading/TopHeading";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <TopHeading />
      <Breadcrumbs />
      <MainCardSec />
      <RelatedCardsSec />
      <NewsLetter />
    </main>
  );
}
