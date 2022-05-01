import React from "react";
import styled from "styled-components";

function Review() {
  return (
    <CourseDetailContainerReview>
      <ReviewHeader>
        <ReviewHeaderTitle>수강 후기</ReviewHeaderTitle>
        <ReviewHeaderDescription>
          1000여 명의 수강생이 직접 남긴 수강 후기를 살펴보세요.
        </ReviewHeaderDescription>
      </ReviewHeader>
      <ReviewWrapper>
        <ReviewBox>
          <ReviewBoxAvatar>
            <UserAvatarWrapper>
              <UserAvatar>
                <UserAvatarLevel>
                  <UserAvatarLevelImg src="https://codeit-profile-images.s3.ap-northeast-2.amazonaws.com/default/default_1.jpg?1642891413787" />
                  <UserAvatarLabel>
                    <UserAvatarLabelImg src="https://www.codeit.kr/static/images/level/stone.png" />
                  </UserAvatarLabel>
                </UserAvatarLevel>
                <UserAvatarName>이희구</UserAvatarName>
                <UserAvatarRank>STONE</UserAvatarRank>
              </UserAvatar>
            </UserAvatarWrapper>
          </ReviewBoxAvatar>
          <ReviewBoxContent>
            <ReviewBoxContentHeader>
              <h4>컴퓨터 개론</h4>
              <ReviewBoxContentHeaderTime>9시간 전</ReviewBoxContentHeaderTime>
              <ReviewBoxContentHeaderStars>
                <StartRating>
                  <StarIcon className="fas fa-star" />
                  <StarIcon className="fas fa-star" />
                  <StarIcon className="fas fa-star" />
                  <StarIcon className="fas fa-star" />
                  <StarIcon className="far fa-star" />
                </StartRating>
              </ReviewBoxContentHeaderStars>
            </ReviewBoxContentHeader>
            <ReviewBoxContentReview>
              <UserAvatarMobile>
                <UserAvatarWrapper>
                  <UserAvatar>
                    <UserAvatarLevel>
                      <UserAvatarLevelImg src="https://codeit-profile-images.s3.ap-northeast-2.amazonaws.com/default/default_1.jpg?1642891413787" />
                      <UserAvatarLabel>
                        <UserAvatarLabelImg src="https://www.codeit.kr/static/images/level/stone.png" />
                      </UserAvatarLabel>
                    </UserAvatarLevel>
                    <UserAvatarName>이희구</UserAvatarName>
                    <UserAvatarRank>STONE</UserAvatarRank>
                  </UserAvatar>
                </UserAvatarWrapper>
              </UserAvatarMobile>
              <ReviewBoxContentReviewText>
                덕분에 전반적인 컴퓨터 지식에 대해 알 수 있었습니다. 쉽게
                설명해주셔서 감사합니다~
              </ReviewBoxContentReviewText>
            </ReviewBoxContentReview>
          </ReviewBoxContent>
        </ReviewBox>
        <ReviewBox>
          <ReviewBoxAvatar>
            <UserAvatarWrapper>
              <UserAvatar>
                <UserAvatarLevel>
                  <UserAvatarLevelImg src="https://codeit-profile-images.s3.ap-northeast-2.amazonaws.com/default/default_1.jpg?1642891413787" />
                  <UserAvatarLabel>
                    <UserAvatarLabelImg src="https://www.codeit.kr/static/images/level/stone.png" />
                  </UserAvatarLabel>
                </UserAvatarLevel>
                <UserAvatarName>이희구</UserAvatarName>
                <UserAvatarRank>STONE</UserAvatarRank>
              </UserAvatar>
            </UserAvatarWrapper>
          </ReviewBoxAvatar>
          <ReviewBoxContent>
            <ReviewBoxContentHeader>
              <h4>컴퓨터 개론</h4>
              <ReviewBoxContentHeaderTime>9시간 전</ReviewBoxContentHeaderTime>
              <ReviewBoxContentHeaderStars>
                <StartRating>
                  <StarIcon className="fas fa-star" />
                  <StarIcon className="fas fa-star" />
                  <StarIcon className="fas fa-star" />
                  <StarIcon className="fas fa-star" />
                  <StarIcon className="far fa-star" />
                </StartRating>
              </ReviewBoxContentHeaderStars>
            </ReviewBoxContentHeader>
            <ReviewBoxContentReview>
              <UserAvatarMobile>
                <UserAvatarWrapper>
                  <UserAvatar>
                    <UserAvatarLevel>
                      <UserAvatarLevelImg src="https://codeit-profile-images.s3.ap-northeast-2.amazonaws.com/default/default_1.jpg?1642891413787" />
                      <UserAvatarLabel>
                        <UserAvatarLabelImg src="https://www.codeit.kr/static/images/level/stone.png" />
                      </UserAvatarLabel>
                    </UserAvatarLevel>
                    <UserAvatarName>이희구</UserAvatarName>
                    <UserAvatarRank>STONE</UserAvatarRank>
                  </UserAvatar>
                </UserAvatarWrapper>
              </UserAvatarMobile>
              <ReviewBoxContentReviewText>
                덕분에 전반적인 컴퓨터 지식에 대해 알 수 있었습니다. 쉽게
                설명해주셔서 감사합니다~
              </ReviewBoxContentReviewText>
            </ReviewBoxContentReview>
          </ReviewBoxContent>
        </ReviewBox>
      </ReviewWrapper>
      <BtnWrapper>
        <ReviewLink href="/reviews/">
          <LinkText>코스 후기 더 보기</LinkText>
          <LinkImg src="https://www.codeit.kr/static/images/homepage/enter.png" />
          <LinkImgBg />
        </ReviewLink>
      </BtnWrapper>
    </CourseDetailContainerReview>
  );
}

const CourseDetailContainerReview = styled.div`
  width: 92%;
  max-width: 110rem;
  margin: 0 auto 7rem;

  @media (min-width: 48em) {
    margin-bottom: 13rem;
  }
`;

const ReviewHeader = styled.div`
  padding-left: 1rem;
  margin-bottom: 2.3rem;

  @media (min-width: 48em) {
    padding-left: 1.5rem;
    margin-bottom: 3rem;
  }
`;

const ReviewHeaderTitle = styled.div`
  margin-bottom: 0.8rem;
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: -0.51px;
  color: #333236;

  @media (min-width: 48em) {
    margin-bottom: 1.2rem;
  }
`;
const ReviewHeaderDescription = styled.div`
  font-size: 1.4rem;
  line-height: 1.43;
  letter-spacing: -0.32px;
  color: #a9abb7;

  @media (min-width: 48em) {
    font-size: 1.6rem;
    letter-spacing: -0.37px;
    color: #333236;
  }
`;

const ReviewWrapper = styled.div``;
const ReviewBox = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  width: 100%;
  padding: 2.3rem 2rem 3rem;
  min-height: 18rem;
  border-radius: 1rem;
  -webkit-box-shadow: 0 0.5rem 1.6rem 0 rgb(0 0 0 / 8%);
  box-shadow: 0 0.5rem 1.6rem 0 rgb(0 0 0 / 8%);
  background-color: #fff;
  @media (min-width: 48em) {
    padding: 3.05rem 3rem 3.5rem 3.5rem;
    margin-top: 1.6rem;
  }
`;
const ReviewBoxAvatar = styled.div`
  display: none;
  justify-content: center;
  @media (min-width: 48em) {
    display: flex;
  }
`;

const UserAvatarMobile = styled.div`
  margin-right: 1.8rem;
  display: flex;
  align-items: flex-start;
  @media (min-width: 48em) {
    display: none;
  }
`;
const UserAvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const UserAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8rem;
  @media (min-width: 48em) {
    width: 5.5rem;
  }
`;
const UserAvatarLevel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserAvatarLevelImg = styled.img`
  object-fit: cover;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  -webkit-box-shadow: 0 0.5rem 0.8rem 0 rgb(0 0 0 / 15%);
  box-shadow: 0 0.5rem 0.8rem 0 rgb(0 0 0 / 15%);
  @media (min-width: 48em) {
    width: 5.5rem;
    height: 5.5rem;
  }
`;

const UserAvatarLabel = styled.span`
  cursor: pointer;
  display: none;
  position: absolute;
  z-index: 3;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  background-color: #fff;
  top: 72%;
  padding: 0.1rem;
  -webkit-box-shadow: 0 0.3rem 0.5rem 0 rgb(146 144 142 / 22%);
  box-shadow: 0 0.3rem 0.5rem 0 rgb(146 144 142 / 22%);

  @media (min-width: 48em) {
    display: flex;
  }
`;

const UserAvatarLabelImg = styled.img`
  width: 100%;
  height: 100%;
`;

const UserAvatarName = styled.span`
  margin-top: 0.7rem;
  display: block;
  letter-spacing: -0.03rem;
  white-space: nowrap;
  color: #333236;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: normal;

  @media (min-width: 48em) {
    white-space: nowrap;
    margin-top: 1.9rem;
  }
`;

const UserAvatarRank = styled.span`
  display: block;
  width: -webkit-max-content;
  width: max-content;
  margin-top: 0.1rem;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  color: #aeaeae;
`;

const ReviewBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  line-height: 1.6;
  @media (min-width: 48em) {
    padding-left: 3.5rem;
  }
`;
const ReviewBoxContentHeader = styled.div`
  display: flex;
  align-items: center;
`;
const ReviewBoxContentHeaderTime = styled.span`
  display: none;
  @media (min-width: 48em) {
    display: flex;
    align-items: center;
    margin-left: 2rem;
    font-size: 1.2rem;
    color: #a9abb7;
  }
`;
const ReviewBoxContentHeaderStars = styled.div`
  margin-left: auto;
  display: flex;
  margin-bottom: 0.5rem;
`;

const StartRating = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

const StarIcon = styled.i`
  color: #ffbf00;
  margin: 0px 3px 0px 3px;
`;

const ReviewBoxContentReview = styled.div`
  display: flex;
  flex: 1 1;
  margin-top: 1.8rem;
  @media (min-width: 48em) {
    margin-top: 2rem;
  }
`;

const ReviewBoxContentReviewText = styled.div`
  padding-right: 2rem;
  white-space: pre-wrap;
  font-size: 1.4rem;
  line-height: 1.6;
  letter-spacing: -0.03rem;
  color: #333236;
  font-family: inherit;
  media (min-width: 48em) {
    font-size: 1.5rem;
  }
`;

const BtnWrapper = styled.div`
  margin-top: 6.25rem;
  text-align: center;
`;

const LinkText = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
  color: #333236;
  vertical-align: middle;
  @media (min-width: 48em) {
    font-size: 2rem;
  }
`;
const LinkImg = styled.img`
  width: 2rem;
  margin-left: 1.5rem;
  @media (min-width: 48em) {
    width: 2.5rem;
    margin-left: 1.2rem;
    margin-top: -0.2rem;
  }
  @media (min-width: 62em) {
    margin-left: 1.7rem;
  }
`;
const LinkImgBg = styled.span`
  position: absolute;
  top: 50%;
  right: 1rem;
  -webkit-transform: translate(50%, -50%);
  transform: translate(50%, -50%);
  width: 3.5rem;
  height: 3.5rem;
  background-color: #7c00ff;
  border-radius: 3.75rem;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  z-index: -1;
  cursor: pointer;

  &.CODE__5--bg--color {
    background-color: #3cc !important;
  }

  @media (min-width: 48em) {
    width: 4.8rem;
    height: 4.8rem;
  }

  @media (min-width: 62em) {
    right: 1.2rem;
  }
`;
const ReviewLink = styled.a`
  position: relative;

  &:hover {
    ${LinkImgBg} {
      -webkit-transform: translate(50%, -50%) scale(1.25);
      transform: translate(50%, -50%) scale(1.25);
    }
  }
`;
export default Review;
