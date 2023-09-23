import { Carousel as CarouselAirBnB, CarouselProps as CarouselPropsAirBnB } from 'antd'

type CarouselProps = CarouselPropsAirBnB & {}

export const Carousel = (props: CarouselProps) => {
    return <CarouselAirBnB {...props} />
}

export default Carousel