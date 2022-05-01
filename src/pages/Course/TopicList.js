import React, { useState, useEffect } from "react";
import styled from "styled-components";

function TopicList(props) {
  const [mQuery, setMQuery] = useState(
    window.matchMedia("screen and (min-width:62em)") ? true : false
  );

  const screenChange = (event) => {
    const matches = event.matches;
    setMQuery(matches);
  };

  useEffect(() => {
    let mql = window.matchMedia("screen and (min-width:62em)");
    mql.addEventListener("change", screenChange);
    return () => mql.removeEventListener("change", screenChange);
  }, []);

  return (
    <CourseDetailContainerTopics>
      <CourseDetailContainerTopicsIntroduction>
        <h3>토픽 구성</h3>
      </CourseDetailContainerTopicsIntroduction>
      <CourseDetailContainerTopicsTopicsContainer>
        {mQuery
          ? props.topicData &&
            props.topicData.map((topic, index) => {
              return (
                <CoursesContentTopicEachRow key={topic.id}>
                  <CoursesContentTopicEachProgressWrapper>
                    <ProgressCircle>
                      <ProgressCircleSvg width="70" height="70">
                        <ProgressCircleCircle
                          stroke="#dde0ea"
                          strokeWidth="4"
                          strokeDasharray="169.64600329384882 169.64600329384882"
                          fill="transparent"
                          r="27"
                          cx="35"
                          cy="35"
                        />
                      </ProgressCircleSvg>
                      <ProgressCircleSvg width="70" height="70">
                        <ProgressCircleCircle
                          stroke="#7c00ff"
                          strokeWidth="4"
                          strokeDasharray="169.64600329384882 169.64600329384882"
                          fill="transparent"
                          r="27"
                          cx="35"
                          cy="35"
                        />
                      </ProgressCircleSvg>
                    </ProgressCircle>
                    <CoursesContentTopicEachProgressWrapperNum>
                      <CoursesContentTopicEachProgressWrapperTxt className="unlogged">
                        {index + 1}
                      </CoursesContentTopicEachProgressWrapperTxt>
                    </CoursesContentTopicEachProgressWrapperNum>
                  </CoursesContentTopicEachProgressWrapper>
                  <CatalogTopic
                    onClick={() =>
                      (window.location.href = "/topic/" + topic.id)
                    }
                  >
                    <CatalogTopicContent>
                      <CatalogTopicContentBackground />
                      <CatalogTopicContentStatus className="default completed CODE__1--bg--image">
                        <CatalogTopicContentStatusWrapper>
                          <CatalogTopicContentStatusWrapperIcon src="https://www.codeit.kr/static/images/catalog/topicRight--1.png" />
                        </CatalogTopicContentStatusWrapper>
                      </CatalogTopicContentStatus>
                      <CatalogTopicContentWrapper>
                        <div>
                          <CatalogTopicContentLanguage className="CODE__1--color">
                            {topic.category}
                          </CatalogTopicContentLanguage>
                          <CatalogTopicContentTitle>
                            <a>{topic.name}</a>
                          </CatalogTopicContentTitle>
                          <CatalogTopicContentSummary>
                            <a>{topic.description}</a>
                          </CatalogTopicContentSummary>
                        </div>
                        <CatalogTopicContentFooter>
                          <CatalogTopicContentFooterLeft>
                            {topic.chapters}
                          </CatalogTopicContentFooterLeft>
                          <CatalogTopicContentFooterRight>
                            <img
                              alt="term"
                              src="	https://www.codeit.kr/static/images/catalog/term-gray.png"
                            />
                            <CatalogTopicContentFooterRightTerm>
                              {topic.duration}
                            </CatalogTopicContentFooterRightTerm>
                          </CatalogTopicContentFooterRight>
                        </CatalogTopicContentFooter>
                      </CatalogTopicContentWrapper>
                    </CatalogTopicContent>
                  </CatalogTopic>
                </CoursesContentTopicEachRow>
              );
            })
          : props.topicData.map((topic, index) => {
              return (
                <CatalogTopic key={topic.id}>
                  <CatalogTopicContent>
                    <CatalogTopicContentBackground />
                    <CatalogTopicContentStatus className="CODE__1--bg--image">
                      <CatalogTopicContentStatusWrapper>
                        <CatalogTopicContentStatusWrapperIcon src="https://www.codeit.kr/static/images/catalog/topicRight--1.png" />
                      </CatalogTopicContentStatusWrapper>
                    </CatalogTopicContentStatus>
                    <CatalogTopicContentWrapper>
                      <div>
                        <CatalogTopicContentLanguage className="CODE__1--color">
                          {topic.category}
                        </CatalogTopicContentLanguage>
                        <CatalogTopicContentTitle>
                          <a>{topic.title}</a>
                        </CatalogTopicContentTitle>
                        <CatalogTopicContentSummary>
                          <a>{topic.description}</a>
                        </CatalogTopicContentSummary>
                      </div>
                      <CatalogTopicContentFooter>
                        <CatalogTopicContentFooterLeft>
                          {topic.chapters}
                        </CatalogTopicContentFooterLeft>
                        <CatalogTopicContentFooterRight>
                          <img
                            alt="term"
                            src="	https://www.codeit.kr/static/images/catalog/term-gray.png"
                          />
                          <CatalogTopicContentFooterRightTerm>
                            {topic.duration}
                          </CatalogTopicContentFooterRightTerm>
                        </CatalogTopicContentFooterRight>
                      </CatalogTopicContentFooter>
                    </CatalogTopicContentWrapper>
                  </CatalogTopicContent>
                </CatalogTopic>
              );
            })}
        {}
      </CourseDetailContainerTopicsTopicsContainer>
    </CourseDetailContainerTopics>
  );
}
const CatalogTopicContentFooterRightTerm = styled.span`
  padding-top: 0.2rem;
`;
const CatalogTopicContentFooterRight = styled.div`
  display: flex;
  margin-top: auto;
  font-size: 1.4rem;
  font-weight: 500;
  color: #333236;

  img {
    width: 2rem;
    height: 2rem;
    margin-right: 0.4rem;
  }
`;
const CatalogTopicContentFooterLeft = styled.div`
  padding: 0.2rem 0.7rem 0;
  font-size: 1.5rem;
  font-weight: 500;
  color: #a9abb7;
  border-radius: 0.3rem;
  background-color: rgba(221, 224, 234, 0.37);
`;
const CatalogTopicContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;
const CatalogTopicContentSummary = styled.p`
  font-size: 1.4rem;
  line-height: 1.43;
  color: #a9abb7;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;

  media (min-width: 48em) {
    line-clamp: 3;
    -webkit-line-clamp: 3;
  }
`;
const CatalogTopicContentTitle = styled.p`
  margin-bottom: 2rem;
  font-size: 1.9rem;
  font-weight: 500;
  letter-spacing: -0.44px;
  color: #333236;
  word-break: keep-all;
`;
const CatalogTopicContentLanguage = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  &.CODE__1--color {
    color: #7c00ff !important;
  }
`;
const CatalogTopicContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 3rem 3.5rem 3.7rem 2.5rem;
  -webkit-box-shadow: 0 50px -30px 0 rgba(0, 0, 0, 0.07);
  box-shadow: 0 50px -30px 0 rgba(0, 0, 0, 0.07);
  z-index: 1;
  cursor: pointer;
`;
const CatalogTopicContentStatusWrapperIcon = styled.img`
  position: absolute;
  right: 0.7rem;
  top: 0.7rem;
  width: 5.8rem;
  height: 5.8rem;
  mix-blend-mode: multiply;
`;
const CatalogTopicContentStatusWrapper = styled.div`
  position: relative;
`;

const CatalogTopicContentStatus = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.7rem;
  width: 24rem;
  height: 23.9rem;
  border-radius: 0.8rem;
  -webkit-box-shadow: 0 0 13px 0 rgb(0 0 0 / 16%);
  box-shadow: 0 0 13px 0 rgb(0 0 0 / 16%);
  -webkit-transition: 0.3s;
  transition: 0.3s;

  &.default {
    background-image: linear-gradient(302deg, #dde0ea 92%, #dde0ea);
  }
  &.CODE__1--bg--image {
    background-image: linear-gradient(313deg, #8a5feb, #6c10fe) !important;
  }
`;

const CatalogTopicContent = styled.div`
  &:hover {
    ${CatalogTopicContentStatus} {
      right: -1rem;
    }
  }
`;

const CatalogTopicContentBackground = styled.div`
  &:before {
    content: "";
    width: 100%;
    height: 17rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    -webkit-box-shadow: 1rem 0.6rem 1.6rem 0 rgb(0 0 0 / 10%);
    box-shadow: 1rem 0.6rem 1.6rem 0 rgb(0 0 0 / 10%);
    z-index: 1;
  }
  &:after {
    content: "";
    width: 100%;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    border-top-left-radius: 0.8rem;
    border-top-color: #fff;
    border-left-color: #fff;
    border-bottom: 8rem solid #fff;
    border-right: 8rem solid transparent;
    z-index: 1;
  }
`;

const CatalogTopic = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
  margin-bottom: 2.7rem;

  @media (min-width: 48em) {
    width: 47.3%;
    margin-bottom: 3.7rem;
  }

  @media (min-width: 62em) {
    width: 31.2%;
    margin-right: 3.2%;
  }
`;

const CoursesContentTopicEachProgressWrapperTxt = styled.span`
  display: flex;
  color: #dde0ea;
  margin-bottom: 0.3rem;

  &.unlogged {
    color: #333236;
  }
`;
const CoursesContentTopicEachProgressWrapperNum = styled.span`
  font-family: Noto Sans KR, sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 7rem;
  font-size: 2.9rem;
  font-weight: 800;
  letter-spacing: -0.67px;
  color: #333236;

  &.default {
    color: #dde0ea;
  }
`;

const ProgressCircleCircle = styled.circle`
  stroke-dasharray: 169.646, 169.646;
`;
const ProgressCircleSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
`;
const ProgressCircle = styled.div`
  position: relative;
`;
const CoursesContentTopicEachProgressWrapper = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  margin-right: 3.6rem;
`;
const CoursesContentTopicEachRow = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 5rem;

  ${CatalogTopic} {
    margin-bottom: 0;
  }
`;
const CourseDetailContainerTopicsTopicsContainer = styled.div`
  ${CatalogTopic} {
    margin: 0 0 2.7rem;
  }
  @media (min-width: 48em) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${CatalogTopic} {
      width: 47%;
      margin: 0 0 5.2rem;
    }
  }
  @media (min-width: 62em) {
    display: block;
    flex-wrap: nowrap;
    justify-content: normal;
    ${CatalogTopic} {
      width: 34rem;
      margin: 0;
    }
  }
`;

const CourseDetailContainerTopicsIntroduction = styled.div`
  margin-left: 0.8rem;
  margin-bottom: 1.6rem;
  > h3 {
    margin-bottom: 0.8rem;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: -0.46px;
    color: #333236;
  }
  @media (min-width: 48em) {
    margin-left: 1.8rem;
    margin-bottom: 2.5rem;
    > h3 {
      margin-bottom: 1rem;
      font-size: 2.2rem;
      letter-spacing: -0.51px;
      content: "토픽 구성ㅋㅋㅋㅋㅋㅋㅋㅋ";
    }
  }
  @media (min-width: 62em) {
    > h3 {
      margin-right: 15rem;
      margin-bottom: 1rem;
      font-size: 1.8rem;
      text-align: right;
      content: "토픽 구성";
    }
  }
`;
const CourseDetailContainerTopics = styled.div`
  @media (min-width: 62em) {
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;
export default TopicList;
