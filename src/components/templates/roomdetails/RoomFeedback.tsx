import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Modal, Progress } from "components/ui";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import styled from "styled-components";
import { convertCommentDate } from "utils/convertCommentDate";

export const RoomFeedback = () => {
  const {
    CommentsByRoomIdList: comments,
    RateAverage: rateAverage,
    FeedbackSum: feedbackSum,
  } = useSelector((state: RootState) => state.quanLyBinhLuan);
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState(false);
  return (
    <>
      <RoomFeedbackX>
        <RateHeader>
          <div>
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div>
            {rateAverage} · {feedbackSum} đánh giá
          </div>
        </RateHeader>
        <div className="grid grid-cols-2">
          {comments?.map((comment, index) => {
            if (index < 4) {
              return (
                <CommentBox key={comment.id}>
                  <div className="comment_header">
                    <div className="cmt_avatar">
                      <Avatar src={comment.avatar} />
                    </div>
                    <div className="cmt_user">
                      <span className="cmt_username">
                        {comment.tenNguoiBinhLuan}
                      </span>
                      <span className="cmt_date">
                        {convertCommentDate(comment.ngayBinhLuan)}
                      </span>
                    </div>
                  </div>
                  <div className="comment_content">
                    <p>{comment.noiDung}</p>
                  </div>
                </CommentBox>
              );
            }
          })}
        </div>
        <div className="flex items-start gap-10">
          {comments.length > 4 ? (
            <Button
              style={{
                color: "black",
              }}
              size="large"
              colorBorder="#000"
              colorPrimaryBgHover="gray"
              textHoverBg="gray"
              onClick={() => setOpen(true)}
              primaryShadow="rgba(0, 0, 0, 0.88)"
            >
              Hiển thị tất cả {comments.length} đánh giá
            </Button>
          ) : null}
          <Button
            size="large"
            type="primary"
            danger
            onClick={() => {
              setFeedback(true);
            }}
          >
            Đánh giá
          </Button>
        </div>
      </RoomFeedbackX>
      <ShowFeedbackModal
        open={open}
        onCancel={() => setOpen(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        centered={true}
        width={1000}
        paddingContentHorizontal={0}
      >
        <div className="modal_container">
          <div className="modal_left">
            <div className="modal_section">
              <div>
                <h2>
                  <ModalHeading>
                    <div>
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div>
                      {rateAverage} · {comments?.length} đánh giá
                    </div>
                  </ModalHeading>
                </h2>
              </div>
            </div>
            <div className="flex gap-4">
              <Progress
                percent={rateAverage * 5}
                showInfo={false}
                strokeColor={"black"}
              />{" "}
              {rateAverage}
            </div>
          </div>
          <div className="modal_right">
            {comments.map((comment) => {
              return (
                <CommentBox key={comment.id}>
                  <div className="comment_header">
                    <div className="cmt_avatar">
                      <Avatar src={comment.avatar} />
                    </div>
                    <div className="cmt_user">
                      <span className="cmt_username">
                        {comment.tenNguoiBinhLuan}
                      </span>
                      <span className="cmt_date">
                        {convertCommentDate(comment.ngayBinhLuan)}
                      </span>
                    </div>
                  </div>
                  <div className="comment_content">
                    <p>{comment.noiDung}</p>
                  </div>
                </CommentBox>
              );
            })}
          </div>
        </div>
      </ShowFeedbackModal>
      <FeedbackModal
        open={feedback}
        onCancel={() => setFeedback(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        paddingContentHorizontal={0}
      ></FeedbackModal>
    </>
  );
};

export default RoomFeedback;

const RoomFeedbackX = styled.div`
  padding-bottom: 48px;
`;
const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  padding: 0 8px 0 8px;
  .comment_header {
    display: flex;
    column-gap: 1rem;
    margin-bottom: 1rem;
    .cmt_avatar {
      display: flex;
      align-items: center;
    }
    .cmt_user {
      display: flex;
      flex-direction: column;
      .cmt_username {
        font-size: 1em;
        font-weight: 500;
      }
      .cmt_date {
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: #717171;
      }
    }
  }
  .comment_content {
    line-height: 24px;
  }
`;
const ModalHeading = styled.div`
  font-size: 2rem;
  line-height: 2.25rem;

  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;
  font-weight: 700;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding-top: 2px;
  margin-top: -2px;
`;
const RateHeader = styled.div`
  margin-bottom: 32px;
  font-weight: 500;
  font-size: 1.275rem;
  display: flex;
  gap: 12px;
`;
const ShowFeedbackModal = styled(Modal)`
  .modal_container {
    padding-top: 3rem;
    margin-right: -24px;
    margin-bottom: -20px;
    display: flex;
    .modal_left,
    .modal_right {
      padding-left: 8px;
      padding-right: 8px;
    }
    .modal_left {
      width: 33.3333%;
      margin-right: 8.33333%;
    }
    .modal_right {
      width: 58.3333%;
      overflow: auto;
      height: 75vh;
    }
  }
  .modal_section {
    padding-bottom: 16px !important;
    margin-left: -24px !important;
    margin-right: -24px !important;
    padding-left: 24px !important;
    padding-right: 24px !important;
    position: sticky !important;
    top: 0px !important;
  }
`;
const FeedbackModal = styled(Modal)``;
