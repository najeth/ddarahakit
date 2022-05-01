import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

function SchoolList(props) {
  const params = useParams();

  return (
    <>
      <CourseListContainer>
        <Tabs>
          <TabsAbout>
            <TabsAboutTitle>수업 탐색</TabsAboutTitle>
            <TabsAboutContent>
              다양한 코스로 목표를 달성해 보세요
            </TabsAboutContent>
          </TabsAbout>
          <TabsButton>
            <TabsButtonWrapper>
              {props.schoolData.map((school) => {
                return (
                  <TabButtonWrapper key={school.id}>
                    <TabButton
                      to={"/courses/" + school.name.split(" ")[0]}
                      className={
                        school.name.split(" ")[0] === params.school
                          ? school.theme + " selected"
                          : school.theme
                      }
                    >
                      <TabButtonCircle />
                      <TabButtonTitle>{school.name}</TabButtonTitle>
                      <TabButtonCount
                        className={
                          school.name.split(" ")[0] === params.school
                            ? school.theme + " selected"
                            : school.theme
                        }
                      >
                        {school.course_count}
                      </TabButtonCount>
                    </TabButton>
                  </TabButtonWrapper>
                );
              })}
            </TabsButtonWrapper>
          </TabsButton>
        </Tabs>
      </CourseListContainer>
    </>
  );
}

const CourseListContainer = styled.div`
  flex: none;
`;
const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  @media (min-width: 75em) {
    background-color: unset;
  }
`;
const TabsButton = styled.div`
  width: 100%;
  overflow-x: auto;
`;

// 버튼에 셀렉티드, 테마 추가
const TabButton = styled(Link)`
  position: relative;
  display: inline-flex;
  height: 6.4rem;
  justify-content: stretch;
  align-items: center;
  align-content: center;
  padding: 0 1.5rem 0 2.2rem;
  border-radius: 1.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #76737b;
  width: unset;
  flex: none;
  margin: 0 1.5rem 0 0;

  @media (min-width: 30em) {
    background-color: #f3f1f7;
    color: #69666d;
    &.selected {
      &.purple {
        background-image: linear-gradient(294deg, #8400ff, #a25df4);
        color: #fff;
        -webkit-box-shadow: 0 6px 11px 0 rgb(101 0 195 / 14%);
        box-shadow: 0 6px 11px 0 rgb(101 0 195 / 14%);
      }

      &.purple_bright {
        background-image: linear-gradient(294deg, #ae1de9, #c256ee);
        color: #fff;
        -webkit-box-shadow: 0 6px 11px 0 rgb(166 0 195 / 14%);
        box-shadow: 0 6px 11px 0 rgb(166 0 195 / 14%);
      }

      &.blue {
        background-image: linear-gradient(294deg, #2468dd, #2c76f7);
        color: #fff;
        -webkit-box-shadow: 0 6px 11px 0 rgb(44 110 226 / 37%);
        box-shadow: 0 6px 11px 0 rgb(44 110 226 / 37%);
      }
    }
  }

  @media (min-width: 75em) {
    width: 22.1rem;
    margin: 0 1.5rem 2rem;
  }
`;

const TabsButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: -webkit-max-content;
  width: max-content;
  overflow: visible;

  @media (min-width: 30em) and (max-width: 75em) {
    padding-bottom: 2rem;
  }

  @media (min-width: 75em) {
    flex-direction: column;
  }
`;

const TabButtonWrapper = styled.div`
  &:first-child > ${TabButton} {
    margin-left: 2.8rem;
  }
  &:last-child > ${TabButton} {
    margin-right: 2.8rem;
  }

  @media (min-width: 75em) {
    flex-direction: column;
    &:first-child > ${TabButton} {
      margin: 0 1.5rem 2rem;
    }
    &:last-child > ${TabButton} {
      margin: 0 1.5rem 2rem;
    }
  }
`;

const TabButtonCircle = styled.div`
  position: absolute;
  bottom: 2.3rem;
  left: -2rem;
  display: none;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 100%;
  background-color: #a9abb7;

  @media (max-width: 30em) {
    display: inline-block;
  }
`;

const TabButtonTitle = styled.span`
  flex: 1 1;
  text-align: left;
  padding-right: 1.5rem;
  @media (max-width: 30em) {
    padding-right: 0.3rem;
  }
`;

const TabButtonCount = styled.span`
  flex: none;
  background-color: #d4d4d4;
  border-radius: 0.9rem;
  width: 3.8rem;
  height: 3.2rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  @media (min-width: 30em) {
    &.selected {
      &.purple {
        background-color: #6d04cd;
      }

      &.purple_bright {
        background-color: #8f16c0;
      }

      &.blue {
        background-color: #1854be;
      }
    }
  }

  @media (max-width: 30em) {
    padding: 0;
    background-color: transparent;
    width: unset;
    height: unset;
    display: inline;
  }
`;

const TabsAbout = styled.div`
  @media (min-width: 75em) {
    display: none;
  }
  @media (max-width: 75em) {
    padding: 2.5rem 3.4rem 4rem;
  }
  @media (max-width: 30em) {
    padding: 1.5rem 3rem;
  }
`;

const TabsAboutTitle = styled.div`
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: -0.036rem;
`;

const TabsAboutContent = styled.div`
  margin-top: 1.5rem;
  font-size: 1.7rem;
  letter-spacing: -0.036rem;
  color: #69666d;

  @media (max-width: 30em) {
    display: none;
  }
`;

export default SchoolList;
