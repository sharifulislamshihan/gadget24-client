import autoPlay from 'embla-carousel-autoplay'
import { Carousel } from 'keep-react'

const Banner = () => {
    return (
        <div className="flex flex-col gap-5 lg:flex-row">
            <div className="basis-4/5 rounded-xl">
                <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
                    <Carousel.Slides>

                        <Carousel.Item>
                            <div>
                                <img src="https://res.cloudinary.com/drdgi9qdu/image/upload/v1723299979/Banner-1_npxxp7.png" alt="" />
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="flex items-center justify-center rounded-xl border border-metal-100 bg-primary-25">
                                <img src="https://res.cloudinary.com/drdgi9qdu/image/upload/v1723300066/Banner-2_asdhoi.jpg" alt="" />
                            </div>
                        </Carousel.Item>

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





            <div className="flex lg:basis-1/5 flex-row lg:flex-col gap-x-2 lg:gap-y-5 mt-12 mx-5">


                <div className="rounded-xl">
                    <img src="https://res.cloudinary.com/drdgi9qdu/image/upload/v1723300066/Banner-2_asdhoi.jpg" alt="" />
                </div>

                <div className="rounded-xl hidden lg:block">
                    <img src="https://res.cloudinary.com/drdgi9qdu/image/upload/v1723299979/Banner-1_npxxp7.png" alt="" />
                </div>

                <div className="rounded-xl">
                    <img src="https://res.cloudinary.com/drdgi9qdu/image/upload/v1723300066/Banner-2_asdhoi.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;