import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
const CarouselSplide = () => {
  return (
    <Splide
      options={{
        rewind: true,
        perPage: 3,
        perMove: 1,
        autoplay: true,
        interval: 3000,
        gap: 20,
        lazyLoad: "nearby",
        padding: {
          right: 10,
          left: 10
        }
      }}
      onMoved={(splide, newIndex) => {
        console.log("moved", newIndex);
      }}
    >
      <SplideSlide>
        <Image src={Card} alt="Picture of the author" />
      </SplideSlide>
      <SplideSlide>
        <Image src={Card} alt="Picture of the author" />
      </SplideSlide>
      <SplideSlide>
        <Image src={Card} alt="Picture of the author" />
      </SplideSlide>
      <SplideSlide>
        <Image src={Card} alt="Picture of the author" />
      </SplideSlide>
      <SplideSlide>
        <Image src={Card} alt="Picture of the author" />
      </SplideSlide>
      <SplideSlide>
        <Image src={Card} alt="Picture of the author" />
      </SplideSlide>
    </Splide>
  );
};

export default CarouselSplide;
