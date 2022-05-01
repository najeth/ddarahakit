import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function TopicChapter(props) {
  const [isSectionOpen, setIsSectionOpen] = useState(true);
  const getLesson = async (lid) => {
    try {
      let response;
      localStorage.getItem("token") !== null
        ? (response = await axios.get(
            "http://127.0.0.1:8000/lesson/" + props.tid + "/" + lid,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          ))
        : console.log("로그인 필요");

      console.log(response.data.result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TopicDetailContainerChapter
      className={
        isSectionOpen ? "CODE__1--bg--image sectionOpen" : "CODE__1--bg--image"
      }
    >
      <TopicDetailContainerChapterWrapper>
        <TopicDetailContainerChapterSection
          onClick={() => {
            setIsSectionOpen(!isSectionOpen);
          }}
          className="CODE__1--bg--image"
        >
          <TopicDetailContainerChapterSectionIndex className="white">
            {props.index > 9 ? props.index : "0" + props.index}
          </TopicDetailContainerChapterSectionIndex>
          <TopicDetailContainerChapterSectionTitleBox>
            <h2> {props.chapter.name}</h2>
            <TopicDetailContainerChapterSectionIcon
              isSectionOpen={isSectionOpen}
              className={isSectionOpen ? "fa fa-minus" : "fa fa-plus"}
            />
          </TopicDetailContainerChapterSectionTitleBox>
        </TopicDetailContainerChapterSection>
      </TopicDetailContainerChapterWrapper>
      <TopicDetailContainerChapterChildren>
        <TopicDetailContainerChapterListWrapper>
          {props.chapter.lesson_set &&
            props.chapter.lesson_set.map((lesson, index) => {
              return (
                <TopicDetailContainerChapterLesson
                  key={index}
                  //className={lesson.locked ? "locked" : ""}
                >
                  <TopicDetailContainerChapterLessonA
                    onClick={() => {
                      getLesson(lesson.id);
                    }}
                  >
                    <LessonTypeImgDiv className="CODE__1--bg--image">
                      <LessonTypeImg src="https://www.codeit.kr/static/images/catalog/lessonType--VIDEO--white.png" />
                    </LessonTypeImgDiv>
                    <TopicDetailContainerChapterLessonTitle>
                      <h3>{lesson.name}</h3>
                    </TopicDetailContainerChapterLessonTitle>
                  </TopicDetailContainerChapterLessonA>
                  {/* {lesson.locked ? (
                    <TopicDetailContainerChapterLessonLock className="fas fa-lock" />
                  ) : (
                    ""
                  )} */}
                </TopicDetailContainerChapterLesson>
              );
            })}
        </TopicDetailContainerChapterListWrapper>
      </TopicDetailContainerChapterChildren>
      <TopicDetailContainerChapterEndLine />
    </TopicDetailContainerChapter>
  );
}

const TopicDetailContainerChapterSection = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5.8rem;
  background-color: #dde0ea;
  border-radius: 0.9rem;

  &.CODE__1--bg--image {
    background-image: linear-gradient(313deg, #8a5feb, #6c10fe) !important;
  }
`;

const TopicDetailContainerChapterSectionTitleBox = styled.div`
  color: #333236;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 100%;
  padding-left: 2.5rem;
  padding-right: 2rem;
  background-color: #fff;
  border-radius: 0.7rem;
  font-weight: 500;
`;

const TopicDetailContainerChapterListWrapper = styled.div`
  position: relative;
  display: none;
  padding-top: 2.3rem;
  padding-bottom: 3rem;
  background-color: #fff;
  -webkit-box-shadow: 0 0.4rem 1.3rem 0 rgb(0 0 0 / 8%);
  box-shadow: 0 0.4rem 1.3rem 0 rgb(0 0 0 / 8%);
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;

  &:before {
    position: absolute;
    top: -3rem;
    left: 1.4rem;
    display: inline-block;
    width: 0.2rem;
    height: 100%;
    background-color: #f1f1f1;
    content: "";
  }
`;

const TopicDetailContainerChapter = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
  &.sectionOpen {
    ${TopicDetailContainerChapterSection} {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    ${TopicDetailContainerChapterSectionTitleBox} {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    ${TopicDetailContainerChapterListWrapper} {
      display: block;
    }
  }
`;

const TopicDetailContainerChapterWrapper = styled.b`
  display: block;
  position: relative;
  height: 5.8rem;
  cursor: pointer;
`;

const TopicDetailContainerChapterEndLine = styled.span``;

const TopicDetailContainerChapterSectionIndex = styled.span`
  width: 6.3rem;
  flex-shrink: 0;
  font-size: 1.7rem;
  font-weight: 500;
  text-align: center;
  letter-spacing: -0.39px;
  color: #333236;

  &.white {
    color: #fff;
  }
`;

const TopicDetailContainerChapterSectionIcon = styled.i`
  width: 1.9rem;
  height: 1.9rem;
  color: #6c10fe;
`;

const LessonTypeImgDiv = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  background-color: #f1f1f1;
  padding: 0.7rem;
  border-radius: 0.8rem;
`;
const TopicDetailContainerChapterLessonTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.35px;
  color: #333236;
`;
const TopicDetailContainerChapterChildren = styled.ul``;
const TopicDetailContainerChapterLesson = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  margin-left: 3rem;
  margin-right: 1.5rem;
  -webkit-box-shadow: 0 0.4rem 1.3rem 0 rgb(0 0 0 / 8%);
  box-shadow: 0 0.4rem 1.3rem 0 rgb(0 0 0 / 8%);
  border-radius: 0.7rem;
  background-color: #fff;
  cursor: pointer;

  &.locked {
    position: relative;
    background-color: #f4f5f9;
    -webkit-box-shadow: none;
    box-shadow: none;

    ${TopicDetailContainerChapterLessonTitle} {
      color: #a9abb7;
    }
  }

  ${LessonTypeImgDiv} {
    margin-right: 1.5rem;

    &.CODE__1--bg--image {
      background-image: linear-gradient(313deg, #8a5feb, #6c10fe) !important;
    }
  }
`;

const TopicDetailContainerChapterLessonA = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.1rem 1rem;
`;

const TopicDetailContainerChapterLessonLock = styled.i`
  color: #a9abb7;
  position: absolute;
  top: 50%;
  right: 1.5rem;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  content: "";
`;

const LessonTypeImg = styled.img`
  width: 1.7rem;
`;

export default TopicChapter;
