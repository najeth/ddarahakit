import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Filter from "./Filter";
import { anime } from "react-anime";

function CourseCard(props) {
  const params = useParams();
  const [search, setSearch] = useState("");
  const [school, setSchool] = useState("");
  const [media, setMedia] = useState(true);

  const difficulty_cnt = (index) => {
    if (props.courseData[index].difficulty === "입문") {
      return (
        <>
          <div className={props.courseData[index].theme + " filled"}></div>
          <div />
          <div />
          <div />
        </>
      );
    } else if (props.courseData[index].difficulty === "초급") {
      return (
        <>
          <div className={props.courseData[index].theme + " filled"} />
          <div className={props.courseData[index].theme + " filled"} />
          <div />
          <div />
        </>
      );
    } else if (props.courseData[index].difficulty === "중급") {
      return (
        <>
          <div className={props.courseData[index].theme + " filled"} />
          <div className={props.courseData[index].theme + " filled"} />
          <div className={props.courseData[index].theme + " filled"} />
          <div />
        </>
      );
    } else if (props.courseData[index].difficulty === "고급") {
      return (
        <>
          <div className={props.courseData[index].theme + " filled"} />
          <div className={props.courseData[index].theme + " filled"} />
          <div className={props.courseData[index].theme + " filled"} />
          <div className={props.courseData[index].theme + " filled"} />
        </>
      );
    }
  };

  useEffect(() => {
    const fadeIn = anime({
      targets: ".CourseCard",
      translateY: [10, 0],
      opacity: [0, 1],
      delay: function (target, index) {
        return index * 80 + 80;
      },
      duration: 800,
    });

    fadeIn.play();

    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 90em)").matches === true) {
        setMedia(true);
      } else {
        setMedia(false);
      }
    });
  }, [search, media, params]);

  return (
    <CourseCardContainer>
      <Filter school={school} setSearch={setSearch} />

      <CourseCardList>
        <CourseCardListWrapper>
          {props.courseData.map((course, index) => {
            let included = false;

            if (included || params.school === "전체") {
              if (course.name.toLowerCase().indexOf(search) !== -1) {
                return (
                  <CourseCardBox
                    onClick={() =>
                      (window.location.href = "/course/" + course.id)
                    }
                    key={course.id}
                  >
                    <CourseCardBoxWrapper className="CourseCard">
                      <CourseCardHeader>
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/ad4U2ypXQ9c"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                        <CourseCardHeaderCategory className={course.theme}>
                          {course.category}
                        </CourseCardHeaderCategory>
                      </CourseCardHeader>
                      <CourseCardMiddle>
                        <CourseCardImageContainer>
                          <CourseCardImageWrapper>
                            <CourseCardImage
                              src={course.course_imageurl}
                              alt="course icon"
                            />
                          </CourseCardImageWrapper>
                        </CourseCardImageContainer>
                        <CourseCardContentsWrapper>
                          <CourseCardTitle>
                            <CourseCardTitleName>
                              {course.name}
                            </CourseCardTitleName>
                            <CourseCardTitleDuration>
                              <img
                                src="https://www.codeit.kr/static/images/catalog/catalog-card/calender.svg"
                                alt="calender icon"
                              />
                              {course.duration}
                            </CourseCardTitleDuration>
                          </CourseCardTitle>
                          <CourseCardContents>
                            {course.description}
                          </CourseCardContents>
                        </CourseCardContentsWrapper>
                      </CourseCardMiddle>

                      <CourseCardFooter>
                        <CourseCardDifficultyBar>
                          {difficulty_cnt(index)}
                        </CourseCardDifficultyBar>
                        <CourseCardDifficultyText>
                          {course.difficulty}
                        </CourseCardDifficultyText>
                      </CourseCardFooter>
                    </CourseCardBoxWrapper>
                  </CourseCardBox>
                );
              }
            }
          })}
        </CourseCardListWrapper>
      </CourseCardList>
    </CourseCardContainer>
  );
}

//컴포넌트 밖에 선언
CourseCard.defaultProps = {
  courseData: {},
};

const NoCourseExists = styled.div`
  -webkit-font-smoothing: antialiased;
  flex: 3 1 100%;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.022rem;
  color: #333236;
  padding: 3rem 1.6rem;
  text-align: center;

  img {
    padding: 3.5rem 0 2rem;
  }

  @media (min-width: 30em) {
    font-size: 1.7rem;

    img {
      padding-top: 7rem;
    }
  }

  media (min-width: 75em) {
    img {
      padding-top: 8rem;
    }
  }
`;

const CourseCardContainer = styled.div`
  flex: 1 1;
  background-color: #f9f8fb;
  border-top: 0.1rem solid #eeecf2;
  padding: 0 2.2rem 16rem;
  margin-left: 0;

  @media (min-width: 48em) {
    border-top: none;
  }
  @media (min-width: 75em) {
    margin-left: 2.6rem;
    padding: 0 1.5rem 16rem;
    width: 82.8rem;
    flex: none;
  }
  @media (min-width: 90em) {
    padding: 0 2.5rem 16rem;
    width: 116.3rem;
  }
`;

const CourseCardList = styled.div``;
const CourseCardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const CourseCardBoxWrapper = styled.div`
  position: relative;
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  border-radius: 2.1rem;
  overflow: hidden;
  background-color: #fff;
  -webkit-box-shadow: 0 5px 26px 0 rgb(138 124 153 / 22%);
  box-shadow: 0 5px 26px 0 rgb(138 124 153 / 22%);
  cursor: pointer;

  @media (max-width: 30em) {
    border-radius: 1.4rem;
  }
`;
const CourseCardHeader = styled.div`
  height: 0;
  z-index: 0;
  position: relative;
  padding: 0 1rem 56%;
  text-align: right;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  @media (max-width: 30em) {
    padding: 0 0.8rem 56%;
  }
`;

const CourseCardHeaderObjet1 = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  -webkit-transform-origin: left;
  transform-origin: left;

  @media (min-width: 30em) {
    -webkit-transition: -webkit-transform 0.75s ease-in-out;
    transition: -webkit-transform 0.75s ease-in-out;
    transition: transform 0.75s ease-in-out;
    transition: transform 0.75s ease-in-out, -webkit-transform 0.75s ease-in-out;
  }

  @media (max-width: 30em) {
    -webkit-transform: scale(2, 3) translateX(-65%);
    transform: scale(2, 3) translateX(-65%);
  }
`;
const CourseCardHeaderObjet2 = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  -webkit-transform-origin: left;
  transform-origin: left;

  @media (min-width: 30em) {
    -webkit-transition: -webkit-transform 0.625s ease-in-out;
    transition: -webkit-transform 0.625s ease-in-out;
    transition: transform 0.625s ease-in-out;
    transition: transform 0.625s ease-in-out,
      -webkit-transform 0.625s ease-in-out;
  }
  @media (max-width: 30em) {
    -webkit-transform: scale(1.6, 3) translateX(-50%);
    transform: scale(1.6, 3) translateX(-50%);
  }
`;
const CourseCardHeaderObjet3 = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  -webkit-transform-origin: left;
  transform-origin: left;

  @media (min-width: 30em) {
    -webkit-transition: -webkit-transform 0.5s ease-in-out;
    transition: -webkit-transform 0.5s ease-in-out;
    transition: transform 0.5s ease-in-out;
    transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;
  }
  @media (max-width: 30em) {
    -webkit-transform: scale(2.5, 4) translateX(-65%) translateY(20%);
    transform: scale(2.5, 4) translateX(-65%) translateY(20%);
  }
`;

const CourseCardHeaderCategory = styled.div`
  padding: 0.5rem 1.2rem;
  display: inline-flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 2rem;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  float: right;

  &.purple {
    background-color: #6227c1;
  }
  &.purple_bright {
    background-color: #ac2bdf;
  }
  &.blue {
    background-color: #2c6cdc;
  }
`;

const CourseCardHeaderClip1 = styled.img`
  position: absolute;
  left: 0;
  bottom: -0.1rem;
  height: 33.33%;
`;
const CourseCardHeaderClip2 = styled.img`
  position: absolute;
  right: 0;
  bottom: -0.1rem;
  height: 67%;
`;

const CourseCardMiddle = styled.div`
  position: relative;
  cursor: pointer;
  margin: 0 12px;
  flex: auto;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
`;

const CourseCardContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CourseCardImageContainer = styled.div`
  position: relative;
  margin: auto;
  text-align: right;
  padding-left: 1.8rem;
  @media (max-width: 30em) {
    display: none;
  }
`;

const CourseCardImage = styled.img``;

const CourseCardImageWrapper = styled.div`
  z-index: 30;
  left: 2.6rem;
  top: -3.1rem;
  -webkit-transform-origin: left;
  transform-origin: left;
  width: 6rem;
  height: 6rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 7px 0 rgb(0 0 0 / 11%);
  box-shadow: 0 2px 7px 0 rgb(0 0 0 / 11%);
  border: 1px solid #dde0ea;
  overflow: hidden;

  ${CourseCardImage} {
    width: 100%;
  }
`;

const CourseCardTitle = styled.div`
  padding: 1.8rem 3rem 0 3rem;
  word-break: keep-all;
  @media (max-width: 30em) {
    padding: 1.2rem 1.6rem 0;
    flex: 1 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (min-width: 62em) {
    padding: 1.8rem 3rem 0;
  }
`;

const CourseCardTitleName = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: #343236;
`;
const CourseCardTitleDuration = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: #a9abb7;
  padding: 1rem 0;
  > img {
    width: 1.4rem;
    margin: 0 0.5rem 0.2rem 0.1rem;
  }
`;

const CourseCardContents = styled.div`
  font-size: 14px;
  line-height: 1.64;
  color: #333236;
  padding: 0 3rem;
  margin-bottom: 2.7rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  @media (max-width: 30em) {
    display: none;
  }
`;
const CourseCardFooter = styled.div`
  border-top: 1px solid #dde0ea;
  padding: 1.3rem 0 1.5rem;
  margin: 0 3rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;

  @media (max-width: 30em) {
    padding: 1.2rem 0 1.5rem;
    margin: 0 1.6rem;
    align-items: flex-end;
  }
`;
const CourseCardDifficultyBar = styled.div`
  margin-top: 0.4rem;

  > div {
    display: inline-block;
    margin: 0 0.1rem;
    width: 0.3rem;
    border-radius: 0.1rem;
    background-color: #d8d8d8;

    &.filled {
      &.purple {
        background-color: #8f00ff;
      }
      &.purple_bright {
        background-color: #c3f;
      }
      &.blue {
        background-color: #2a74f2;
      }
    }

    &:first-child {
      height: 0.5rem;
    }
    &:nth-child(2) {
      height: 0.8rem;
    }
    &:nth-child(3) {
      height: 1.1rem;
    }
    &:nth-child(4) {
      height: 1.4rem;
    }
  }

  @media (max-width: 30em) {
    order: 2;
    margin-left: 0.6rem;
    margin-top: 0;

    &:first-child {
      height: 0.5rem;
    }
    &:nth-child(2) {
      height: 0.7rem;
    }
    &:nth-child(3) {
      height: 0.9rem;
    }
    &:nth-child(4) {
      height: 1.1rem;
    }
  }
`;

const CourseCardDifficultyText = styled.div`
  font-size: 1.4rem;
  color: #69666d;
  margin-left: 0.7rem;
  @media (max-width: 30em) {
    order: 1;
    margin-left: 0;
    font-size: 1.2rem;
  }
`;

const CourseCardBox = styled.div`
  flex: 1 1;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  max-width: 100%;
  margin-right: 0;

  &:hover {
    ${CourseCardImageWrapper} {
      animation-duration: 2s;
      animation-name: bounce;
      animation-timing-function: ease-in-out;
    }

    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(-5%);
      }
      50% {
        transform: translateY(0);
      }
      75% {
        transform: translateY(-5%);
      }
      to {
        transform: translateY(0);
      }
    }
  }

  @media (min-width: 23.4375em) {
    min-width: calc(50% - 0.5rem);
    max-width: calc(50% - 0.5rem);
    margin-right: 1rem;
  }

  @media (min-width: 30em) {
    min-width: 100%;
    max-width: 100%;
    margin-right: 0;

    &:hover {
      ${CourseCardHeaderObjet1} {
        transform: scaleX(1.1);
      }

      ${CourseCardHeaderObjet2} {
        transform: scaleX(1.125);
      }

      ${CourseCardHeaderObjet3} {
        transform: scaleX(1.15);
      }
    }
  }

  @media (min-width: 48em) {
    min-width: calc(50% - 1rem);
    max-width: calc(50% - 1rem);
    margin-right: 2rem;
  }

  @media (min-width: 62em) {
    margin-right: 3rem;
  }

  @media (min-width: 62em) and (max-width: 1199px) {
    min-width: calc(50% - 1.5rem);
    max-width: calc(50% - 1.5rem);
  }

  @media (min-width: 75em) {
    flex: none;
    min-width: 38.3rem;
    max-width: 38.3rem;
    margin-bottom: 4.5rem;
  }

  @media (min-width: 48em) and (max-width: 90em) {
    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (min-width: 90em) {
    flex: none;
    min-width: 35.1rem;
    max-width: 35.1rem;
    margin-bottom: 4.5rem;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (max-width: 30em) {
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
`;

export default CourseCard;
