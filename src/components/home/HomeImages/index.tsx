import Slider from 'react-slick';
import Image from 'next/image';
import { HomeImagesContainer, HomeImagesImageBox } from './styles';
import useHome from '../useHome';

export default function HomeImages() {
  const { slides } = useHome();
  const slideSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: 'linear',
  };

  return (
    <HomeImagesContainer>
      <HomeImagesImageBox>
        <Slider {...slideSetting}>
          {slides.map((slide, i) => (
            <div key={i}>
              <Image
                src={slide}
                width={1110}
                height={587}
                alt={`Main Image ${i}`}
                priority
              />
            </div>
          ))}
        </Slider>
      </HomeImagesImageBox>
    </HomeImagesContainer>
  );
}
