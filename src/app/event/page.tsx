import {Carousel} from "../../components/Carousel/index";


const EventPage = () => {

    return (
        <div className="px-10 mt-36">
            <div className="relative block text-white text-center">
                <div className="flex flex-row justify-center m-0 p-0 gap-x-10 uppercase">
                    <h1 className="text-6xl sm:text-9xl lg:text-[20rem] font-bold tracking-widest m-0 leading-none">Neues</h1>
                    <h1
                        className="text-6xl linear-text sm:text-9xl lg:text-[20rem] font-bold tracking-widest m-0 leading-none"

                    >
                        Event
                    </h1>
                </div>
            </div>

            <div className="my-32 text-white tracking-wider w-[100%] m-auto lg:w-[75%]">
                <p className="text-5xl font-bold mb-4 uppercase linear-text">Details</p>
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
    )
}

export default EventPage;