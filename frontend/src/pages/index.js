import TopSelection from "@/components/TopSelection";
import AuthorMessage from "@/components/AuthorMessage";
import AboutSection from "@/components/AboutSection";
import CooksImagesSection from "@/components/CooksImagesSection";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <div className="">
      <Layout>
        <TopSelection/>
      <AuthorMessage/>
      <AboutSection/>
      <CooksImagesSection/>
      </Layout>
    </div>

  );
}
