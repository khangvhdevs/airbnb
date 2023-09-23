import { Carousel } from "components/ui";
import styled from "styled-components";

export const HomeTemplate = () => {
  return (
    <Home>
      <div className="airbnb_carousel">
        <div className="container">
          <div className="carousel_box">
            <Carousel>
              <div className="carousel_item">
                <img
                  className="carousel_img"
                  src="./images/airbnb_carousel.jpg"
                  alt="airbnb_carousel"
                />
              </div>
            </Carousel>
          </div>
          <div className="carousel_caption">
            <p className="font-mono title">Nhờ có Host, mọi điều đều có thể</p>
          </div>
        </div>
      </div>
      <div className="airbnb_location"></div>
      <div className="airbnb_accom pt-[30px] pb-[70px]">
        <div className="section_container">
          <p className="section_heading">
            Ở bất cứ đâu
          </p>
          <div className="grid grid-cols-4 justify-items-center gap-3 pt-20">
            <div className="accom_item">
              <img className="object-cover rounded-lg w-full h-full cursor-pointer" src="./images/accom_1.png" alt="accom_1" />
              <p className="pt-2 font-600">Toàn bộ nhà</p>
            </div>
            <div className="accom_item">
              <img className="object-cover rounded-lg w-full h-full cursor-pointer" src="./images/accom_2.png" alt="accom_2" />
              <p className="pt-2 font-600">Chỗ ở độc đáo</p>
            </div>
            <div className="accom_item">
              <img className="object-cover rounded-lg w-full h-full cursor-pointer" src="./images/accom_3.png" alt="accom_3" />
              <p className="pt-2 font-600">Trang trại và thiên nhiên</p>
            </div>
            <div className="accom_item">
              <img className="object-cover rounded-lg w-full h-full cursor-pointer" src="./images/accom_4.jpg" alt="accom_4" />
              <p className="pt-2 font-600">Cho phép mang theo thú cưng</p>
            </div>
          </div>
        </div>
      </div>
    </Home>
  );
};

export default HomeTemplate;

const Home = styled.div`
  .airbnb_carousel {
    background: #000;
    padding: 80px 30px 30px 30px;
    .carousel_box {
      margin: auto;
      .carousel_item {
        .carousel_img {
          width: 100%;
          height: 500px;
          object-fit: cover;
        }
      }
    }
    .carousel_caption {
      margin: auto;
      padding-top: 30px;
      .title {
        color: #fff;
        text-align: center;
        font-size: 2rem;
        letter-spacing: -1px;
      }
    }
  }
`;
