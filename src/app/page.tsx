import {Header} from "../components/Header/index";
import {AboutUs} from "../components/pages/home/index";
import {SearchEnd} from "../components/pages/home/SearchEnd/index";
import {InstagramFollow} from "../components/Provider/Instagram/Follow";
import PreviewImage from "../assets/index-bg-1.webp";
import PreviewImage2 from "../assets/index-bg-2.webp";
import PreviewImage3 from "../assets/index-bg-3.webp";
import PreviewImage4 from "../assets/index-bg-4.webp";
import PreviewImage5 from "../assets/index-bg-5.webp";
import PreviewImage6 from "../assets/index-bg-6.webp";
import PreviewImage7 from "../assets/index-bg-7.webp";
import PreviewImage8 from "../assets/index-bg-8.webp";

const previews = [PreviewImage, PreviewImage2, PreviewImage3, PreviewImage4, PreviewImage5, PreviewImage6, PreviewImage7, PreviewImage8];

export default function Home() {
  return (
    <div>
      <Header previews={previews} />

        <div className="max-w-[1280px] mx-auto">
            <AboutUs />

            <SearchEnd />

            <InstagramFollow />
        </div>
    </div>
  );
}
