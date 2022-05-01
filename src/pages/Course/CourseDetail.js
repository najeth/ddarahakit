import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";
import styled from "styled-components";
import CourseInfomation from "./CourseInfomation";
import Faq from "./Faq";
import Review from "./Review";

function CourseDetail() {
  return (
    <General>
      <Header />
      <GeneralContent>
        <CourseDetailContainer>
          <CourseInfomation />
          <Review />
          <Faq />
        </CourseDetailContainer>
      </GeneralContent>
      <Footer />
      <GoToTop />
    </General>
  );
}

const General = styled.div`
  position: relative;
  padding-top: 5.5rem;
  @media (min-width: 48em) {
    padding-top: 6.5rem;
  }
`;
const GeneralContent = styled.div`
  display: block;
  min-height: 83vh;
  position: relative;
`;

const CourseDetailContainer = styled.div`
  width: 100%;
  padding-top: 10rem;
  padding-bottom: 15rem;
  background-size: auto 76rem;
  background-repeat: no-repeat;
  background-position: top;
  background-image: url(https://www.codeit.kr/static/images/course/bg__seqId--11.png);
  @media (min-width: 48em) {
    padding-top: 13.5rem;
    padding-bottom: 20rem;
  }
  @media (min-width: 62em) {
    padding-top: 17rem;
    background-size: calc(100% + 65rem);
  }
  @media (min-width: 75em) {
    background-size: calc(100% + 35rem);
  }
`;
export default CourseDetail;
