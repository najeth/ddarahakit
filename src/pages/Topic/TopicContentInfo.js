import React from "react";
import styled from "styled-components";

function TopicContentInfo(props) {
  return (
    <TopicDetailContainerInfoBoxContainer>
      <TopicDetailContainerInfoBox>
        <TopicDetailContainerInfoBoxTop>
          <VideoPlayer>
            <VideoPlayerWrapper></VideoPlayerWrapper>
          </VideoPlayer>
        </TopicDetailContainerInfoBoxTop>
        <TopicDetailContainerInfoBoxBottom>
          <TopicDetailContainerInfoBoxBottomDescription>
            <TopicDetailContainerInfoBoxBottomDescriptionTitle>
              <span> </span>
              <h3>토픽 소개</h3>
            </TopicDetailContainerInfoBoxBottomDescriptionTitle>
            <TopicDetailContainerInfoBoxBottomDescriptionText>
              <QuillViewer>{props.topicData.detail}</QuillViewer>
            </TopicDetailContainerInfoBoxBottomDescriptionText>
          </TopicDetailContainerInfoBoxBottomDescription>
          <TopicDetailContainerInfoBoxBottomLine></TopicDetailContainerInfoBoxBottomLine>
          <TopicDetailContainerInfoBoxBottomLessons>
            <TopicDetailContainerInfoBoxBottomLessonsEach>
              <LessonTypeImgWrapper>
                <LessonTypeImg src="https://www.codeit.kr//static/images/catalog/lessonType--VIDEO--black.png" />
              </LessonTypeImgWrapper>
              영상 12
            </TopicDetailContainerInfoBoxBottomLessonsEach>
            <TopicDetailContainerInfoBoxBottomLessonsEach>
              <LessonTypeImgWrapper>
                <LessonTypeImg src="https://www.codeit.kr//static/images/catalog/lessonType--NOTE--black.png" />
              </LessonTypeImgWrapper>
              노트 0
            </TopicDetailContainerInfoBoxBottomLessonsEach>
            <TopicDetailContainerInfoBoxBottomLessonsEach>
              <LessonTypeImgWrapper>
                <LessonTypeImg src="https://www.codeit.kr//static/images/catalog/lessonType--EXERCISE--black.png" />
              </LessonTypeImgWrapper>
              실습 4
            </TopicDetailContainerInfoBoxBottomLessonsEach>
            <TopicDetailContainerInfoBoxBottomLessonsEach>
              <LessonTypeImgWrapper>
                <LessonTypeImg src="https://www.codeit.kr//static/images/catalog/lessonType--QUIZ--black.png" />
              </LessonTypeImgWrapper>
              퀴즈 1
            </TopicDetailContainerInfoBoxBottomLessonsEach>
          </TopicDetailContainerInfoBoxBottomLessons>
        </TopicDetailContainerInfoBoxBottom>
      </TopicDetailContainerInfoBox>
    </TopicDetailContainerInfoBoxContainer>
  );
}

const TopicDetailContainerInfoBoxContainer = styled.div`
  @media (min-width: 62em) {
    order: 2;
    position: relative;
    width: 45%;
    min-width: 40rem;
  }
`;

const TopicDetailContainerInfoBox = styled.div`
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  width: 100%;
  margin-bottom: 7.5rem;
  top: initial;

  @media (min-width: 48em) {
    margin-bottom: 6rem;
  }

  @media (min-width: 62em) {
    position: -webkit-sticky;
    position: sticky;
    margin-bottom: 0;
    top: 16.5rem;
  }
`;

const TopicDetailContainerInfoBoxTop = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  border-radius: 0.6rem;
  background-color: #d8d8d8;
  cursor: pointer;
  overflow: hidden;
`;

const VideoPlayer = styled.div`
  position: relative;
  width: 100%;
  padding: 56.25% 0 0;
`;

const VideoPlayerWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const TopicDetailContainerInfoBoxBottom = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 3rem 2.8rem 4rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 10px 9px 27px 0 rgb(27 16 93 / 6%);
  box-shadow: 10px 9px 27px 0 rgb(27 16 93 / 6%);
  background-color: #fff;

  @media (min-width: 48em) {
    flex-direction: column;
    padding: 4rem 3rem;
  }
  @media (min-width: 62em) {
    padding: 3.5rem 3rem;
  }
`;

const TopicDetailContainerInfoBoxBottomDescription = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 48em) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const TopicDetailContainerInfoBoxBottomDescriptionTitle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 1.1rem;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: -0.32px;
  color: #736f79;

  span {
    position: absolute;
    left: -1.5rem;
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background-color: #dde0ea;
  }
`;
const TopicDetailContainerInfoBoxBottomDescriptionText = styled.div`
  font-size: 1.5rem;
  line-height: 1.73;
  letter-spacing: -0.35px;
  color: #050505;
`;

const QuillViewer = styled.div`
  line-height: 2.8rem;
  p {
    white-space: pre-wrap;
    line-height: 1.7;
    letter-spacing: -0.3px;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;

    @media (min-width: 48em) {
      letter-spacing: -0.34px;
    }
  }
`;

const TopicDetailContainerInfoBoxBottomLine = styled.div`
  height: 1px;
  margin-top: 3.4rem;
  margin-bottom: 3.4rem;
  background-color: #979797;

  @media (min-width: 48em) {
    margin-top: 3.9rem;
  }

  @media (min-width: 62em) {
    margin-top: 3.4rem;
    margin-bottom: 3.9rem;
  }
`;

const TopicDetailContainerInfoBoxBottomLessons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;

  @media (min-width: 48em) {
    justify-content: center;
    padding-left: 0;
    padding-right: 0;
  }
  @media (min-width: 62em) {
    justify-content: space-between;
  }
`;

const TopicDetailContainerInfoBoxBottomLessonsEach = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1.4rem;
  font-weight: 500;
  color: #333236;

  @media (min-width: 48em) {
    flex-direction: row;
    padding-left: 1.1rem;
    padding-right: 1.1rem;
  }

  @media (min-width: 62em) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const LessonTypeImgWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  background-color: #f1f1f1;
  padding: 0.7rem;
  border-radius: 0.8rem;
  margin-bottom: 0.8rem;

  @media (min-width: 48em) {
    margin-right: 1.2rem;
    margin-bottom: 0;
  }
`;

const LessonTypeImg = styled.img`
  width: 1.7rem;
`;
export default TopicContentInfo;
