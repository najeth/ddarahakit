import React from "react";
import styled from "styled-components";
import axios from "axios";

function TopicDetailHead(props) {
  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:8000/enrollment/" + props.topicData.id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TopicDetailContainerHead className="CODE__1--bg--image">
      <TopicDetailContainerHeadBackImg src="https://www.codeit.kr//static/images/catalog/topicRight--1.png" />
      <TopicDetailContainerHeadWrapper>
        <TopicDetailContainerHeadFirst>
          <TopicDetailContainerHeadFirstIntro>
            코스 <ChevronRight className="fas fa-angle-right" />
            토픽 상세
          </TopicDetailContainerHeadFirstIntro>
          <TopicDetailContainerHeadFirstTitle>
            <h1>{props.topicData.name}</h1>
          </TopicDetailContainerHeadFirstTitle>
          <TopicDetailContainerHeadFirstLanguage>
            {props.topicData.category}
          </TopicDetailContainerHeadFirstLanguage>
          <TopicDetailContainerHeadFirstSummary>
            {props.topicData.description}
          </TopicDetailContainerHeadFirstSummary>
          <TopicDetailContainerHeadFirstProgress>
            <TopicDetailContainerHeadFirstProgressName>
              <span></span>
              진도율
            </TopicDetailContainerHeadFirstProgressName>
            <TopicDetailContainerHeadFirstProgressContent>
              <TopicProgress>
                <TopicProgressBarContainer>
                  <TopicProgressBarBase />
                  <TopicProgressBarIng
                    progress={
                      props.topicData.completion_set &&
                      (props.topicData.completion_set.length /
                        props.topicData.lesson_count) *
                        100
                    }
                  />
                  <TopicProgressBarDevider />
                  <TopicProgressCurrentPoint
                    progress={
                      props.topicData.completion_set &&
                      (props.topicData.completion_set.length /
                        props.topicData.lesson_count) *
                        100
                    }
                  />
                </TopicProgressBarContainer>
                <TopicProgressTextContainer>
                  <TopicProgressStartPoint>
                    {props.topicData.completion_set &&
                      (props.topicData.completion_set.length /
                        props.topicData.lesson_count) *
                        100}
                    % 완료
                  </TopicProgressStartPoint>
                  <TopicProgressEndPoint>
                    {props.topicData.completion_set &&
                      props.topicData.completion_set.length}
                    /{props.topicData.lesson_count} 레슨
                  </TopicProgressEndPoint>
                </TopicProgressTextContainer>
              </TopicProgress>
            </TopicDetailContainerHeadFirstProgressContent>
          </TopicDetailContainerHeadFirstProgress>
        </TopicDetailContainerHeadFirst>
        <TopicDetailContainerHeadSecond>
          <TopicDetailContainerHeadSecondRow>
            <span>포함 코스 : </span>
            {props.topicData.course &&
              props.topicData.course.map((course, index) => (
                <a key={index} href={"/course/" + course.id}>
                  <span>{course.name}</span>
                </a>
              ))}
          </TopicDetailContainerHeadSecondRow>

          {props.topicData.enrollment_set &&
          props.topicData.enrollment_set.indexOf(props.topicData.id) < 0 ? (
            <TopicDetailContainerHeadSecondBtn onClick={onSubmit}>
              {props.topicData.price}
            </TopicDetailContainerHeadSecondBtn>
          ) : (
            <TopicDetailContainerHeadSecondBtn
              onClick={() =>
                (window.location.href =
                  "/lesson/" + props.topicData.chapter_set[0].lesson_set[0].id)
              }
            >
              강의 시작하기
            </TopicDetailContainerHeadSecondBtn>
          )}
        </TopicDetailContainerHeadSecond>
      </TopicDetailContainerHeadWrapper>
    </TopicDetailContainerHead>
  );
}

const TopicDetailContainerHead = styled.div`
  position: relative;
  width: 100vw;
  padding-top: 12rem;
  padding-bottom: 17.8rem;
  background-color: #8a5feb;
  margin-bottom: -11.8rem;
  overflow: hidden;

  @media (min-width: 48em) {
    padding-top: 16rem;
    padding-bottom: 18.3rem;
    margin-bottom: -12.3rem;
  }

  @media (min-width: 62em) {
    padding-top: 8rem;
    padding-bottom: 6.1rem;
    margin-bottom: 0;
  }

  &.CODE__1--bg--image {
    background-image: linear-gradient(313deg, #8a5feb, #6c10fe) !important;
  }
`;

const TopicDetailContainerHeadBackImg = styled.img`
  position: absolute;
  top: -7%;
  left: -15%;
  width: 70%;
  max-width: 55rem;
  mix-blend-mode: multiply;

  @media (min-width: 48em) {
    top: -15%;
  }
  @media (min-width: 62em) {
    top: -17%;
    left: -8%;
  }
`;

const TopicDetailContainerHeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 93%;
  max-width: 110rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 48em) {
    width: 80%;
  }

  @media (min-width: 62em) {
    flex-direction: row;
  }
`;
const TopicDetailContainerHeadFirst = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8% 4rem;
  z-index: 1;

  @media (min-width: 48em) {
    padding: 0 2rem 5.5rem;
  }

  @media (min-width: 62em) {
    width: 65%;
    padding: 1rem 10rem 0 0;
  }
`;
const TopicDetailContainerHeadFirstIntro = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  line-height: 1.36;
  color: #fff;
  @media (min-width: 48em) {
    font-size: 1.6rem;
    line-height: 1.42;
    letter-spacing: -0.26px;
  }
`;

const ChevronRight = styled.i`
  margin-left: 0.2em;
  margin-right: 0.36em;
  width: 0.54em;
  padding-bottom: 0.1em;
  overflow: visible;
`;

const TopicDetailContainerHeadFirstTitle = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.21;
  letter-spacing: -0.19px;
  color: #fff;
  margin-bottom: 1.5rem;
  word-break: keep-all;
  @media (min-width: 48em) {
    font-size: 3.2rem;
    line-height: 1.06;
    letter-spacing: -0.22px;
  }
`;
const TopicDetailContainerHeadFirstLanguage = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin-bottom: 3.2rem;
  padding: 0 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  font-size: 1.7rem;
  font-weight: 500;
  letter-spacing: -0.39px;
  color: #7c00ff;
  line-height: 1;
  &.CODE__1--color {
    color: #7c00ff !important;
  }
`;
const TopicDetailContainerHeadFirstSummary = styled.div`
  margin-bottom: 3.2rem;
  font-weight: 500;
  color: #fff;
  font-size: 1.5rem;
  line-height: 1.6;
  letter-spacing: -0.2px;

  @media (min-width: 48em) {
    font-size: 1.7rem;
    line-height: 1.53;
    letter-spacing: -0.12px;
  }
`;

const TopicDetailContainerHeadFirstProgress = styled.div`
  margin-top: auto;
`;

const TopicDetailContainerHeadFirstProgressName = styled.div`
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: -0.32px;
  color: #fff;

  span {
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 100%;
    padding-bottom: 0.2rem;
    margin-right: 1.1rem;
    background-color: #fff;
  }
`;
const TopicDetailContainerHeadFirstProgressContent = styled.div``;
const TopicProgress = styled.div`
  width: 100%;
  margin: 0 auto;
  font-size: 1rem;
  color: #868686;
`;

const TopicProgressBarContainer = styled.div`
  position: relative;
  height: 0.6rem;
  margin-top: 0.5rem;
  > * {
    position: absolute;
  }
`;
const TopicProgressBar = styled.div`
  top: 0;
  left: 0;
  height: 0.6rem;
`;
const TopicProgressBarBase = styled(TopicProgressBar)`
  width: 100%;
  opacity: 0.6;
  background-color: #d5d9e5;
`;
const TopicProgressBarIng = styled(TopicProgressBar)`
  width: ${(props) => `${props.progress}%`};
  box-shadow: 0 0.2rem 2rem 0 rgba(51, 204, 204, 0.29) !important;
  background-image: linear-gradient(
    277deg,
    rgba(38, 204, 217, 0.94),
    rgba(0, 204, 255, 0.76)
  ) !important;
`;
const TopicProgressBarDevider = styled(TopicProgressBar)`
  width: 90%;
  background-image: repeating-linear-gradient(
    90deg,
    transparent,
    transparent calc(11.1111111111% - 0.12rem),
    #fff calc(11.1111111111% - 0.12rem),
    #fff 11.1111111111%
  );
`;

const TopicProgressCurrentPoint = styled.div`
  top: 50%;
  left: ${(props) => `${props.progress}%`};
  width: 1.3rem;
  height: 1.3rem;
  border: 0.2rem solid #fff;
  border-radius: 1.3rem;
  background-color: #3cc;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  &.CODE__1--btn {
    -webkit-box-shadow: 0 0.2rem 2rem 0 rgba(51, 204, 204, 0.29) !important;
    box-shadow: 0 0.2rem 2rem 0 rgba(51, 204, 204, 0.29) !important;
    background-image: linear-gradient(
      277deg,
      rgba(38, 204, 217, 0.94),
      rgba(0, 204, 255, 0.76)
    ) !important;
  }
`;

const TopicProgressTextContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 0.7rem;
`;

const TopicProgressStartPoint = styled.div`
  float: left;
  display: block;
  margin: 0;
  color: #dde0ea;
  font-size: 1.2rem;
`;

const TopicProgressEndPoint = styled.div`
  float: right;
  display: block;
  margin: 0;
  color: #dde0ea;
  font-size: 1.2rem;
`;

const TopicDetailContainerHeadSecond = styled.div`
  position: relative;
  display: flex;
  padding: 3rem 8% 0;
  flex-direction: column;
  border-top: 0.3px solid #fff;

  @media (min-width: 48em) {
    padding: 5rem 2rem 0;
  }

  @media (min-width: 62em) {
    padding: 2.3rem 0 0 4.7rem;
    width: 35%;
    border-top: initial;
    border-left: 0.3px solid #fff;
  }
`;

const TopicDetailContainerHeadSecondRow = styled.div`
  margin-bottom: 0.7rem;
  font-size: 1.5rem;
  line-height: 1.33;
  letter-spacing: -0.35px;
  color: #fff;
  > span {
    display: block;
    font-weight: 500;
  }
  a {
    display: block;
    margin-left: 2rem;
  }
`;
const TopicDetailContainerHeadSecondInstructors = styled.div`
  margin-top: 3.2rem;

  @media (min-width: 48em) {
    position: absolute;
    right: 0;
    top: 5rem;
    margin-top: 0;
  }

  @media (min-width: 62em) {
    position: static;
    margin-top: 4rem;
    margin-bottom: 3.7rem;
  }
`;

const TopicDetailContainerHeadSecondInstructorsTitle = styled.div`
  display: block;
  margin-bottom: 1.7rem;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.35px;
  color: #fff;
`;
const TopicDetailContainerHeadSecondInstructorsWrapper = styled.div`
  display: flex;
`;

const TopicDetailContainerHeadSecondBtn = styled.button`
  order: -1;
  width: 100%;
  max-width: 30.5rem;
  margin: 0 auto 4rem;
  font-size: 1.7rem;
  font-weight: 500;
  letter-spacing: -0.39px;
  color: #fff;
  text-align: center;
  border-radius: 2.2rem;
  -webkit-box-shadow: 0 0.2rem 2rem 0 rgb(0 208 206 / 18%);
  box-shadow: 0 0.2rem 2rem 0 rgb(0 208 206 / 18%);
  background-color: #1ee4c7;
  cursor: pointer;
  height: 4.4rem;
  padding-top: 0.2rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  &.CODE__1--btn {
    -webkit-box-shadow: 0 0.2rem 2rem 0 rgba(51, 204, 204, 0.29) !important;
    box-shadow: 0 0.2rem 2rem 0 rgba(51, 204, 204, 0.29) !important;
    background-image: linear-gradient(
      277deg,
      rgba(38, 204, 217, 0.94),
      rgba(0, 204, 255, 0.76)
    ) !important;
  }

  @media (min-width: 48em) {
    order: 0;
    margin: 5rem 0 0;
  }
  @media (min-width: 62em) {
    margin-top: auto;
  }
`;

export default TopicDetailHead;
