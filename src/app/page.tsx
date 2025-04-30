import {Header} from "../components/Header/index";
import {AboutUs} from "../components/pages/home/index";
import {SearchEnd} from "../components/pages/home/SearchEnd/index";
import {InstagramFollow} from "../components/Provider/Instagram/Follow";
import PreviewImage from "../assets/index-bg-1.webp";
import PreviewImage2 from "../assets/index-bg-2.webp";
import PreviewImage3 from "../assets/index-bg-3.webp";
import PreviewImage4 from "../assets/index-bg-4.webp";
import PreviewImage5 from "../assets/index-bg-5.webp";

const previews = [PreviewImage, PreviewImage2, PreviewImage3, PreviewImage4, PreviewImage5];

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
