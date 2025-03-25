import {Header} from "../components/Header/index";
import {AboutUs} from "../components/pages/home/index";
import {SearchEnd} from "../components/pages/home/SearchEnd/index";
import {InstagramFollow} from "../components/Provider/Instagram/Follow";

export default function Home() {
  return (
    <div>
      <Header />

        <div className="max-w-[1280px] mx-auto">
            <AboutUs />

            <SearchEnd />

            <InstagramFollow />
        </div>
    </div>
  );
}
