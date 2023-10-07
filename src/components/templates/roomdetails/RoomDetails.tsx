import { CalendarOutlined, CoffeeOutlined, HomeOutlined, StarOutlined } from "@ant-design/icons";
import { faSnowflake } from "@fortawesome/free-regular-svg-icons";
import { faCar, faKitchenSet, faSwimmingPool, faTelevision, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "components/ui";
import { useSelector } from "react-redux";
import { RootState } from "store";
import styled from "styled-components";

export const RoomDetails = () => {
    const { Room: room } = useSelector((state: RootState) => state.quanLyPhong);
    return (
        <RoomDetailsX>
            <div className="grid grid-cols-3 gap-16">
                <div className="col-span-2">
                    <div className="details_section flex justify-between">
                        <div>
                            <h3 className="details_heading">Toàn bộ căn hộ. Chủ nhà Airbnb</h3>
                            <div className="flex text-14">
                                <span>{room?.khach} khách</span>
                                <div className="dot">.</div>
                                <span>{room?.phongNgu} phòng ngủ</span>
                                <div className="dot">.</div>
                                <span>{room?.giuong} giường</span>
                                <div className="dot">.</div>
                                <span>{room?.phongTam} phòng tắm</span>
                            </div>
                        </div>
                    </div>
                    <div className="details_section">
                        <div className="details_item">
                            <div>
                                <HomeOutlined className="text-2xl inline-block" />
                            </div>
                            <div>
                                <h4 className="text-16 font-500">Toàn bộ nhà</h4>
                                <p className="item_desc">Bạn sẽ có chung cư cao cấp cho riêng mình.</p>
                            </div>
                        </div>
                        <div className="details_item">
                            <div>
                                <StarOutlined className="text-2xl inline-block" />
                            </div>
                            <div>
                                <h4 className="text-16 font-500">Vệ sinh tăng cường</h4>
                                <p className="item_desc">Chủ nhà này đã cam kết thực hiện quy trình vệ sinh tăng cường 5 bước của Airbnb. <span className="font-500 underline text-black cursor-pointer">Hiển thị thêm</span></p>
                            </div>
                        </div>
                        <div className="details_item">
                            <div>
                                <CoffeeOutlined className="text-2xl inline-block" />
                            </div>
                            <div>
                                <h4 className="item_heading">Airbnb là chủ nhà siêu cấp</h4>
                                <p className="item_desc">Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được dánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách</p>
                            </div>
                        </div>
                        <div className="details_item">
                            <div>
                                <CalendarOutlined className="text-2xl inline-block" />
                            </div>
                            <div>
                                <h4 className="item_heading">Miễn phí hủy trong 48 giờ</h4>
                            </div>
                        </div>
                    </div>
                    <div className="details_section">
                        <h3 className="details_heading">Mô tả</h3>
                        <div className="mt-3">{room?.moTa}</div>
                    </div>
                    <div className="details_section">
                        <h3 className="details_heading">Tiện nghi</h3>
                        <div className="amenities grid grid-cols-2">
                            {room?.bep ? (
                                <div className="amenities_item">
                                    <div className="amenities_icon">
                                        <FontAwesomeIcon icon={faKitchenSet} className="text-2xl" />
                                    </div>
                                    <div className="amenities_desc">
                                        <p>Bếp</p>
                                    </div>
                                </div>
                            ) : null}
                            {room?.wifi ? (
                                <div className="amenities_item">
                                    <div className="amenities_icon">
                                        <FontAwesomeIcon icon={faWifi} className="text-2xl" />
                                    </div>
                                    <div className="amenities_desc">
                                        <p>Wifi</p>
                                    </div>
                                </div>
                            ) : null}
                            {room?.tivi ? (
                                <div className="amenities_item">
                                    <div className="amenities_icon">
                                        <FontAwesomeIcon icon={faTelevision} className="text-2xl" />
                                    </div>
                                    <div className="amenities_desc">
                                        <p>TV với truyền hình cáp tiêu chuẩn</p>
                                    </div>
                                </div>
                            ) : null}
                            {room?.doXe ? (
                                <div className="amenities_item">
                                    <div className="amenities_icon">
                                        <FontAwesomeIcon icon={faCar} className="text-2xl" />
                                    </div>
                                    <div className="amenities_desc">
                                        <p>Bãi đỗ xe</p>
                                    </div>
                                </div>
                            ) : null}
                            {room?.dieuHoa ? (
                                <div className="amenities_item">
                                    <div className="amenities_icon">
                                        <FontAwesomeIcon icon={faSnowflake} className="text-2xl" />
                                    </div>
                                    <div className="amenities_desc">
                                        <p>Điều hòa</p>
                                    </div>
                                </div>
                            ) : null}
                            {room?.hoBoi ? (
                                <div className="amenities_item">
                                    <div className="amenities_icon">
                                        <FontAwesomeIcon icon={faSwimmingPool} className="text-2xl" />
                                    </div>
                                    <div className="amenities_desc">
                                        <p>Hồ bơi</p>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <CardX>
                        <Card
                            hoverable
                            title={
                                <>
                                    <div className="flex justify-between">
                                        <div><span>{room.giaTien}</span> / đêm</div>
                                        <div className="flex">
                                            <StarOutlined />
                                            <span>4.83</span>
                                            <span>(18 đánh giá)</span>
                                        </div>
                                    </div>
                                </>
                            }
                        ></Card>
                    </CardX>
                </div>
            </div>
        </RoomDetailsX>
    );
};

export default RoomDetails;

export const RoomDetailsX = styled.div`
  padding-top: 2rem;
  .details_heading {
    font-weight: 500;
    font-size: 1.275rem;
  }
  .details_section {
    border-bottom: 2px solid #e5e7eb;
    padding-bottom: 1.275rem;
    margin-bottom: 1.275rem;
  }
  .details_item {
    display: flex;
    column-gap: .8rem;
    padding-bottom: 1.275rem;
    .item_heading {
        font-size: 1rem;
        font-weight: 500;
    }
    .item_desc {
        font-size: .875rem;
        font-weight: 500;
        color: rgb(113, 113, 113);
    }
  }
  .amenities {
    padding-top: 1rem;
    row-gap: 1.475rem;
    .amenities_item {
        display: flex;
        column-gap: 1rem;
        .amenities_icon {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .amenities_desc {
            display: flex;
            align-items: center;
            width: 16rem;
        }
    }
  }
  .dot {
    text-align: center;
    width: 12px;
    height: 1.125rem;
    font-size: 0.675rem !important;
    font-weight: 500;
  }
`;

export const CardX = styled.div`
    
`
