import React from "react";
import styled from "styled-components";

function TopicReview() {
  return (
    <TopicDetailContainerReview>
      <TopicDetailContainerReviewTitle>
        <h2>토픽 후기</h2>
      </TopicDetailContainerReviewTitle>
      <TopicDetailContainerReviewContent>
        <TopicDetailContainerReviewWrapper>
          <ReviewBox>
            <ReviewBoxImg src="https://phinf.pstatic.net/contact/20220103_137/1641198955380s7xVd_PNG/%BA%ED%B7%CE%B1%D7_%C7%C1%B7%CE%C7%CA.PNG" />
            <ReviewBoxContent>
              <ReviewBoxContentHeader>
                <ReviewBoxContentHeaderName>
                  캐슬오너
                </ReviewBoxContentHeaderName>
                <ReviewBoxContentHeaderDate>
                  17시간 전
                </ReviewBoxContentHeaderDate>
              </ReviewBoxContentHeader>
              <ReviewBoxContentText>
                기초부터 쉽게 알려줘서 좋았습니다!!!
              </ReviewBoxContentText>
            </ReviewBoxContent>
          </ReviewBox>
          <ReviewBox>
            <ReviewBoxImg src="https://codeit-profile-images.s3.ap-northeast-2.amazonaws.com/default/default_3.jpg" />
            <ReviewBoxContent>
              <ReviewBoxContentHeader>
                <ReviewBoxContentHeaderName>찬으이</ReviewBoxContentHeaderName>
                <ReviewBoxContentHeaderDate>
                  17시간 전
                </ReviewBoxContentHeaderDate>
              </ReviewBoxContentHeader>
              <ReviewBoxContentText>
                좋은 개념 공부였습니다. 비전공자들이 들으면 도움이 될거 같아요
              </ReviewBoxContentText>
            </ReviewBoxContent>
          </ReviewBox>
          <ReviewBox>
            <ReviewBoxImg src="https://codeit-profile-images.s3.ap-northeast-2.amazonaws.com/default/default_2.jpg" />
            <ReviewBoxContent>
              <ReviewBoxContentHeader>
                <ReviewBoxContentHeaderName>오경석</ReviewBoxContentHeaderName>
                <ReviewBoxContentHeaderDate>
                  17시간 전
                </ReviewBoxContentHeaderDate>
              </ReviewBoxContentHeader>
              <ReviewBoxContentText>
                기초부터 쉽게 알려줘서 좋았습니다!!!
              </ReviewBoxContentText>
            </ReviewBoxContent>
          </ReviewBox>
        </TopicDetailContainerReviewWrapper>
        <TopicDetailContainerReviewContentBtn>
          후기 더 보기
        </TopicDetailContainerReviewContentBtn>
      </TopicDetailContainerReviewContent>
    </TopicDetailContainerReview>
  );
}

const TopicDetailContainerReview = styled.div`
  width: 92%;
  max-width: 110rem;
  margin: 0 auto;
`;

const TopicDetailContainerReviewTitle = styled.div`
  margin-bottom: 2rem;
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: -0.51px;
  color: #333236;
`;
const TopicDetailContainerReviewContent = styled.div`
  padding: 2.6rem 2.5rem 3rem 2.8rem;
  text-align: center;
  border-radius: 1.2rem;
  -webkit-box-shadow: 0 5px 16px 0 rgb(0 0 0 / 8%);
  box-shadow: 0 5px 16px 0 rgb(0 0 0 / 8%);
  background-color: #fff;
`;

const TopicDetailContainerReviewWrapper = styled.div`
  margin-bottom: 2.5rem;
`;
const ReviewBox = styled.div`
  position: relative;
  padding: 2.1rem 1.8rem 2rem;
  border-radius: 0.9rem;
  border: 0.05rem solid rgba(151, 151, 151, 0.1);
  background-color: #f8f8fc;
  display: flex;
  margin-top: 1.5rem;

  &:first-child {
    margin-top: 0;
  }
`;

const ReviewBoxImg = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  -webkit-box-shadow: 0 0.5rem 0.8rem 0 rgb(0 0 0 / 21%);
  box-shadow: 0 0.5rem 0.8rem 0 rgb(0 0 0 / 21%);
  border-radius: 50%;
  cursor: pointer;
`;

const ReviewBoxContent = styled.div`
  margin-left: 1.5rem;
  display: flex;
  flex: 1 1;
  align-items: flex-start;
  flex-direction: column;
`;
const ReviewBoxContentHeader = styled.div`
  display: flex;
  align-items: center;
`;
const ReviewBoxContentHeaderName = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: -0.035rem;
  color: #343236;
`;
const ReviewBoxContentHeaderDate = styled.div`
  margin-left: 0.8rem;
  font-size: 1.2rem;
  letter-spacing: -0.03rem;
  color: #a8abb8;
`;
const ReviewBoxContentText = styled.p`
  margin-top: 0.5rem;
  text-align: left;
  font-size: 1.5rem;
  line-height: 1.8;
  letter-spacing: -0.026rem;
  color: #343236;
`;

const TopicDetailContainerReviewContentBtn = styled.div`
  display: inline-block;
  padding: 1rem 3.5rem 0.8rem;
  font-size: 1.7rem;
  font-weight: 500;
  letter-spacing: -0.23px;
  color: #7c00ff;
  border-radius: 32px;
  border: 1.5px solid #7c00ff;
  cursor: pointer;
`;

export default TopicReview;
