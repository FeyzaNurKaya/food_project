import Header from "@/components/Header";
import TopSelection from "@/components/TopSelection";
import AuthorMessage from "@/components/AuthorMessage";
import AboutSection from "@/components/AboutSection";
import CooksImagesSection from "@/components/CooksImagesSection";
import MailSection from "@/components/MailSection";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <TopSelection/>
      <AuthorMessage/>
      <AboutSection/>
      <CooksImagesSection/>
      <MailSection/>
    </div>

  );
}
