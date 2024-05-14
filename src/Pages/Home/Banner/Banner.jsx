import autoPlay from 'embla-carousel-autoplay'
import { Carousel } from 'keep-react'

const Banner = () => {
    return (
        <div>
            <div className="flex flex-col gap-5 lg:flex-row">
                <div className="basis-4/5 rounded-xl border border-dashed p-10">
                    <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
                        <Carousel.Slides>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Carousel.Item key={index}>
                                    <div className="flex items-center justify-center rounded-xl border border-metal-100 bg-primary-25 p-20">
                                        <h1 className="text-heading-1 font-medium text-metal-900">{index + 1}</h1>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel.Slides>
                        <Carousel.Control>
                            <Carousel.Buttons>
                                <Carousel.PrevButton />
                                <Carousel.NextButton />
                            </Carousel.Buttons>
                            <Carousel.Indicators />
                        </Carousel.Control>
                    </Carousel>
                </div>





                <div className="flex basis-1/5 flex-col gap-y-5">
                    <div className="rounded-xl border border-dashed p-10">1</div>
                    <div className="rounded-xl border border-dashed p-10">2</div>
                </div>



            </div>
        </div>
    );
};

export default Banner;