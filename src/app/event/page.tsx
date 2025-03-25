import {Carousel} from "../../components/Carousel/index";
import {Header} from "../../components/Header/index";
import PreviewImage from "../../assets/ACK-Background-2.jpg";
import PreviewImage2 from "../../assets/Age 2 Startscreen.png";
import PreviewImage3 from "../../assets/ACK-Background-3.jpg";

const previews = [PreviewImage, PreviewImage2, PreviewImage3];

const EventPage = () => {

    return (
        <div>
            <Header previews={previews} noText />

            <div className="px-10 mt-36 max-w-[1280px] mx-auto">
                <div className="relative block text-white text-center">
                    <div className="flex flex-row justify-center m-0 p-0 gap-x-10 uppercase">
                        <h1 className="text-2xl sm:text-3xl lg:text-[10rem] font-bold tracking-widest m-0 leading-none">Neues</h1>
                        <h1
                            className="text-2xl linear-text sm:text-3xl lg:text-[10rem] font-bold tracking-widest m-0 leading-none"
                        >
                            Event
                        </h1>
                    </div>
                </div>

                <div className="my-32 text-white tracking-wider w-[100%] m-auto lg:w-[75%]">
                    <p className="text-2xl lg:text-5xl font-bold mb-4 uppercase linear-text">Details</p>
                    <p className="text-lg mb-10">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>

                    <p className="text-lg mb-10">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                </div>

                <div className="sm:mx-10 lg:mx-20">
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

export default EventPage;