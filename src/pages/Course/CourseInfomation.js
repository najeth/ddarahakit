import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TopicList from "./TopicList";
import Loading from "../../components/Loading/Loading";
import NProgress from "react-nprogress";
import axios from "axios";

function CourseInfomation() {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const params = useParams();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setIsAuth(true);
    }

    const fetchData = async () => {
      NProgress.start();
      setLoading(true);
      try {
        let response;
        isAuth
          ? (response = await axios.get(
              "http://127.0.0.1:8000/course/" + params.id,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            ))
          : (response = await axios.get(
              "http://127.0.0.1:8000/course/" + params.id
            ));

        setCourseData(response.data.result);
      } catch (e) {
        console.log(e);
      }

      NProgress.done();
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  // 아직 값이 설정되지 않았을 때
  if (!courseData) {
    return null;
  }

  return (
    <CourseInfoWrapper>
      <CourseInfoHead>
        <CourseInfoHeadIntro>
          코스 상세
          <CourseInfoHeadRightArrow className="fas fa-chevron-right" />
        </CourseInfoHeadIntro>
        <CourseInfoHeadTitle>
          <h1>{courseData.name}</h1>
        </CourseInfoHeadTitle>
        <CourseInfoHeadSummary>{courseData.description}</CourseInfoHeadSummary>
        <CourseInfoHeadXp>
          <CourseInfoHeadXpText>
            <span>코스 진행률</span>
            <span>0%</span>
          </CourseInfoHeadXpText>
          <CourseInfoHeadXpWrapper>
            <CourseInfoHeadXpWrapperBar />
          </CourseInfoHeadXpWrapper>
        </CourseInfoHeadXp>
        <CourseInfoHeadVideo>
          <CourseInfoHeadVideoIcon src="https://www.codeit.kr/static/images/catalog/play-code--8.png" />
          <CourseInfoHeadVideoBtn>영상으로 알아보기</CourseInfoHeadVideoBtn>
        </CourseInfoHeadVideo>
      </CourseInfoHead>
      <CourseInfoBoxContainer>
        <CourseInfoBox>
          <CourseInfoBoxWrapper>
            <CourseInfoBoxLanguage>
              <CourseInfoBoxLanguageWrapper>
                {courseData.category}
              </CourseInfoBoxLanguageWrapper>
            </CourseInfoBoxLanguage>
            <CourseInfoBoxTop>
              <CourseInfoBoxTopRow>
                <CourseInfoBoxTopRowTitle>
                  <h4>수업 상세</h4>
                </CourseInfoBoxTopRowTitle>
                <CourseInfoBoxTopRowText>
                  <CourseInfoBoxTopRowTextViewer>
                    <p>{courseData.detail}</p>
                  </CourseInfoBoxTopRowTextViewer>
                </CourseInfoBoxTopRowText>
              </CourseInfoBoxTopRow>
              <CourseInfoBoxTopRow>
                <CourseInfoBoxTopRowTitle>
                  <h4>선수 코스</h4>
                </CourseInfoBoxTopRowTitle>
                <CourseInfoBoxTopRowText>
                  <CourseInfoBoxTopRowTextViewer>
                    <p>없음</p>
                  </CourseInfoBoxTopRowTextViewer>
                </CourseInfoBoxTopRowText>
              </CourseInfoBoxTopRow>
            </CourseInfoBoxTop>
            <CourseInfoBoxBottom>
              <CourseInfoBoxLessonInfo>
                <CourseInfoBoxLessonInfoEach>
                  <LessonTypeImgWrapper>
                    <LessonTypeImg src="https://www.codeit.kr/static/images/catalog/lessonType--VIDEO--black.png" />
                  </LessonTypeImgWrapper>
                  영상 56
                </CourseInfoBoxLessonInfoEach>
                <CourseInfoBoxLessonInfoEach>
                  <LessonTypeImgWrapper>
                    <LessonTypeImg src="https://www.codeit.kr/static/images/catalog/lessonType--NOTE--black.png" />
                  </LessonTypeImgWrapper>
                  노트 14
                </CourseInfoBoxLessonInfoEach>
                <CourseInfoBoxLessonInfoEach>
                  <LessonTypeImgWrapper>
                    <LessonTypeImg src="https://www.codeit.kr/static/images/catalog/lessonType--EXERCISE--black.png" />
                  </LessonTypeImgWrapper>
                  실습 4
                </CourseInfoBoxLessonInfoEach>
                <CourseInfoBoxLessonInfoEach>
                  <LessonTypeImgWrapper>
                    <LessonTypeImg src="https://www.codeit.kr/static/images/catalog/lessonType--EXERCISE--black.png" />
                  </LessonTypeImgWrapper>
                  퀴즈 15
                </CourseInfoBoxLessonInfoEach>
              </CourseInfoBoxLessonInfo>
              <CourseInfoBoxBtnWrapper>
                <CourseInfoBoxBtn>무료로 시작하기</CourseInfoBoxBtn>
              </CourseInfoBoxBtnWrapper>
            </CourseInfoBoxBottom>
          </CourseInfoBoxWrapper>
        </CourseInfoBox>
      </CourseInfoBoxContainer>
      <TopicList topicData={courseData.topic_set} />
    </CourseInfoWrapper>
  );
}

const CourseInfoWrapper = styled.div`
  width: 100%;
  padding: 0 4%;
  overflow: hidden;
  max-width: 110rem;
  margin: 0 auto 5rem;

  @media (min-width: 48em) {
    margin-bottom: 10rem;
  }
  @media (min-width: 62em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 13rem;
    overflow: visible;
    overflow: initial;
  }
`;

const CourseInfoHead = styled.div`
  width: 100%;
  max-width: calc(45rem + 10%);
  padding: 0 5%;
  word-break: keep-all;
  margin-bottom: 7.6rem;

  @media (min-width: 48em) {
    max-width: calc(45rem + 14%);
    padding: 0 7%;
    margin-bottom: 9.6rem;
  }
  @media (min-width: 62em) {
    padding-top: 3rem;
    margin-bottom: 28rem;
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;

const CourseInfoHeadIntro = styled.div`
  font-size: 1.4rem;
  line-height: 1.36;
  color: #fff;
  @media (min-width: 48em) {
    font-size: 1.7rem;
    line-height: 1.42;
    letter-spacing: -0.26px;
  }
`;

const CourseInfoHeadRightArrow = styled.i`
  margin-left: 0.2em;
  margin-right: 0.36em;
  width: 0.54em;
  padding-bottom: 0.1em;
  overflow: visible;
`;

const CourseInfoHeadTitle = styled.div`
  margin-bottom: 2rem;
  font-size: 2.8rem;
  line-height: 1.36;
  letter-spacing: -0.19px;
  font-weight: 500;
  color: #fff;
  @media (min-width: 48em) {
    margin-bottom: 1rem;
    font-size: 3.8rem;
    line-height: 1.42;
    letter-spacing: -0.26px;
  }
`;

const CourseInfoHeadSummary = styled.div`
  font-size: 1.5rem;
  line-height: 1.6;
  letter-spacing: -0.28px;
  margin-bottom: 2.8rem;
  font-weight: 500;
  color: #fff;
  word-break: keep-all;
  @media (min-width: 48em) {
    margin-bottom: 2.5rem;
    font-size: 1.7rem;
    line-height: 1.53;
    letter-spacing: -0.32px;
  }
`;
const CourseInfoHeadXp = styled.div`
  width: 100%;
  margin-bottom: 2.5rem;
  @media (min-width: 48em) {
    margin-bottom: 5rem;
  }
`;

const CourseInfoHeadXpText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  color: #fff;
  font-size: 1.3rem;
`;

const CourseInfoHeadXpWrapper = styled.div`
  flex-grow: 1;
  height: 1.2rem;
  border-radius: 1.5rem;
  border: 0.1rem solid #dde0ea;
  padding: 0.1rem;
`;
const CourseInfoHeadXpWrapperBar = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  background-color: #fff;
`;

const CourseInfoHeadVideo = styled.span`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: -0.4px;
  color: #fff;
`;

const CourseInfoHeadVideoIcon = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  margin-right: 1.5rem;
  cursor: pointer;
  @media (min-width: 48em) {
    width: 7.6rem;
    height: 7.6rem;
  }
`;

const CourseInfoHeadVideoBtn = styled.u`
  cursor: pointer;
  margin-bottom: 0.9rem;
`;

const CourseInfoBoxContainer = styled.div`
  margin-bottom: 7.5rem;
  @media (min-width: 48em) {
    margin-bottom: 12rem;
  }

  @media (min-width: 62em) {
    padding-right: 4rem;
    margin-bottom: 0;
    grid-column: 1/2;
    grid-row: 1/3;
  }
`;

const CourseInfoBox = styled.div`
  width: 100%;
  z-index: 1;
  display: inline-block;
  border-radius: 0.5rem;
  -webkit-box-shadow: 1rem 0.9rem 2.7rem 0 rgb(54 16 93 / 10%);
  box-shadow: 1rem 0.9rem 2.7rem 0 rgb(54 16 93 / 10%);
  background-color: #fff;
  @media (min-width: 48em) {
    top: 10rem;
  }
  @media (min-width: 62em) {
    position: -webkit-sticky;
    position: sticky;
    top: 15.5rem;
    right: 0;
    max-width: 47.2rem;
  }
`;

const CourseInfoBoxWrapper = styled.div`
  position: relative;
  padding: 3.1rem 4.3rem 2.7rem;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 48em) {
    flex-direction: column;
    padding: 8.2rem 4.3rem 4.2rem;
  }

  &:after {
    position: absolute;
    right: -2%;
    top: 2%;
    display: inline-block;
    width: 4rem;
    height: 96%;
    background-color: #333236;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    opacity: 0.79;
    -webkit-box-shadow: 1rem 0.9rem 2.7rem s0 rgba(54, 16, 93, 0.1);
    box-shadow: 1rem 0.9rem 2.7rem s0 rgba(54, 16, 93, 0.1);
    background-color: #fff;
    content: "";
  }
`;

const CourseInfoBoxLanguage = styled.div`
  position: absolute;
  left: -1.2rem;
  top: 1.8rem;
  @media (min-width: 48em) {
    top: 2.8rem;
  }
`;
const CourseInfoBoxLanguageWrapper = styled.div`
  position: relative;
  padding: 1rem 1.5rem;
  font-size: 1.7rem;
  font-weight: 500;
  letter-spacing: -0.39px;
  text-align: center;
  color: #fff;
  border-radius: 0.2rem;
  -webkit-box-shadow: 0 0.6rem 1rem 0 rgb(70 70 70 / 20%);
  box-shadow: 0 0.6rem 1rem 0 rgb(70 70 70 / 20%);
  background-color: #664cff !important;

  &:after {
    position: absolute;
    top: -0.5rem;
    left: 0.2rem;
    width: 1rem;
    height: 0.52rem;
    content: "";
    background-image: linear-gradient(154deg, transparent 50%, #5a07b1 0);
  }
`;
const CourseInfoBoxTop = styled.div`
  margin-top: 3.5rem;
  @media (min-width: 48em) {
    margin-top: 0;
  }
`;

const CourseInfoBoxTopRow = styled.div`
  margin-bottom: 2.8rem;
`;
const CourseInfoBoxTopRowTitle = styled.div`
  position: relative;
  margin-bottom: 1.1rem;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: -0.32px;
  color: #736f79;
  margin-left: 0.7rem;
  &:after {
    position: absolute;
    left: -1.8rem;
    top: 0.3rem;
    width: 0.7rem;
    height: 0.7rem;
    background-color: #dde0ea;
    border-radius: 0.35rem;
    content: "";
  }
`;
const CourseInfoBoxTopRowText = styled.div`
  font-size: 1.4rem;
  line-height: 1.73;
  letter-spacing: -0.35px;
  color: #050505;
`;
const CourseInfoBoxTopRowTextViewer = styled.div`
  line-height: 2.8rem;

  p {
    white-space: pre-wrap;
    line-height: 1.7;
    letter-spacing: -0.3px;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    font-size: 1.4rem;
    line-height: 1.7;

    @media (min-width: 48em) {
      letter-spacing: -0.34px;
    }
  }
`;

const CourseInfoBoxBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3.4rem;
  text-align: center;
  border-bottom: 0.03rem solid #979797;

  @media (min-width: 48em) {
    padding-top: 2.52rem;
    padding-bottom: 0;
    border-top: 0.03rem solid #979797;
    border-bottom: none;
  }
`;

const CourseInfoBoxLessonInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 2.7rem;

  @media (min-width: 48em) {
    margin-top: 0;
    justify-content: center;
  }
  @media (min-width: 62em) {
    justify-content: space-between;
  }
`;
const CourseInfoBoxLessonInfoEach = styled.span`
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
    margin-right: 0.8rem;
    margin-bottom: 0;
  }
`;

const LessonTypeImg = styled.img`
  width: 1.7rem;
`;

const CourseInfoBoxBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CourseInfoBoxBtn = styled.button`
  width: 50%;
  min-width: 20rem;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  font-size: 1.7rem;
  font-weight: 500;
  color: #fff;
  border-radius: 2.2rem;
  cursor: pointer;
  -webkit-transition: 0.2s ease-in;
  transition: 0.2s ease-in;
  -webkit-box-shadow: 0 2px 20px 0 rgba(0, 208, 206, 0.18) !important;
  box-shadow: 0 2px 20px 0 rgba(0, 208, 206, 0.18) !important;
  background-image: linear-gradient(277deg, #f5c431, #ef9e56) !important;

  @media (min-width: 62em) {
    width: 80%;
  }
`;

export default CourseInfomation;
