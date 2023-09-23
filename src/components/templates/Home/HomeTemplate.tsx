import { Carousel } from "components/ui";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { getLocationPaginationThunk } from "store/quanLyViTri/thunk";
import styled from "styled-components";

export const HomeTemplate = () => {
  const dispatch = useAppDispatch();
  const { LocationPagination } = useSelector((state: RootState) => state.quanLyViTri)
  useEffect(() => {
    dispatch(getLocationPaginationThunk({ pageIndex: 1, pageSize: 8, keyword: null }))
  }, [])
  console.log("🚀 ~ file: HomeTemplate.tsx:9 ~ HomeTemplate ~ LocationPagination:", LocationPagination)
  return (
    <Home>
      {/* Carousel */}
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
      {/* Location */}
      <div className="airbnb_location pt-40">
        <div className="section_container">
          <h3 className="section_heading">
            Khám phá những điểm đến gần đây
          </h3>
          <div className="location_box grid grid-cols-4 gap-y-15 pt-20">
            {LocationPagination?.data.map(vitri => (
              <div className="location_card">
                <img className="card_img" src={vitri.hinhAnh} alt={vitri.tenViTri} />
                <div className="card_content">
                  <span className="card_title">{vitri.tinhThanh}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Accommodation */}
      <div className="airbnb_accom pt-40 pb-70">
        <div className="section_container">
          <h3 className="section_heading">
            Ở bất cứ đâu
          </h3>
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
  .location_card {
    display: flex;
    .card_img {
      width: 60px;
      height: 60px;
      border-radius: 10px;
    }
    .card_content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 16px;
    }
    .card_title {
      font-size: .9rem;
      font-weight: 500;
    }
  }
`;
