import {Header} from "../components/Header/index";
import {AboutUs} from "../components/pages/home/index";
import {SearchEnd} from "../components/pages/home/SearchEnd/index";
import {Divider, DividerButton} from "../components/Divider/index";
import {InstagramFollow} from "../components/Provider/Instagram/Follow";
import {ScrollIndicator} from "../components/ScrollIndicator/index";

export default function Home() {
  return (
    <div>
        <ScrollIndicator />

      <Header />

      <AboutUs />

      <Divider >
        <DividerButton title={"Mehr erfahren"} link={"#!"} />
      </Divider>

      <SearchEnd />

        <InstagramFollow />
    </div>
  );
}
