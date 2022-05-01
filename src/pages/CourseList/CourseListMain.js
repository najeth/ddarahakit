import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";
import CourseList from "./CourseList";
import styled, { css } from "styled-components";
import TopBanner from "../../components/Header/TopBanner";

function CourseListMain() {
  const [isBannerShow, setIsBannerShow] = useState(true);

  return (
    <>
      {isBannerShow ? (
        <TopBanner
          isBannerShow={isBannerShow}
          setIsBannerShow={setIsBannerShow}
        />
      ) : (
        <></>
      )}
      <General isBannerShow={isBannerShow}>
        <Header isBannerShow={isBannerShow} />
        <CourseList />
        <Footer />
        <GoToTop />
      </General>
    </>
  );
}

const General = styled.div`
  position: relative;
  padding-top: 5.5rem;

  ${(props) =>
    props.isBannerShow &&
    css`
      margin-top: 55px;
    `}

  @media (min-width: 48em) {
    padding-top: 6.5rem;
  }
`;

export default CourseListMain;
