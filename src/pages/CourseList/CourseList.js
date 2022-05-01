import React, { useEffect, useState } from "react";
import SchoolList from "./SchoolList";
import CourseCard from "./CourseCard";
import styled from "styled-components";
import Loading from "../../components/Loading/Loading";
import NProgress from "react-nprogress";
import axios from "axios";

function CourseList() {
  const [courseData, setCourseData] = useState([]);
  const [schoolData, setSchoolData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setIsAuth(true);
    }

    const fetchData = async () => {
      NProgress.start();
      setLoading(true);
      try {
        //let response1;
        //response1 = await axios.get("http://127.0.0.1:8000/school/list");
        //setSchoolData(response1.data.result);

        let response2;
        isAuth
          ? (response2 = await axios.get("http://127.0.0.1:8080/course", {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }))
          : (response2 = await axios.get("http://127.0.0.1:8080/course"));
        console.log(response2.data.result);
        setCourseData(response2.data.result);
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
  if (!schoolData || !courseData) {
    return null;
  }

  //<SchoolList schoolData={schoolData} />
  //<CourseCard schoolData={schoolData} courseData={courseData} />

  return (
    <GeneralContent>
      <CourseContainer>
        <CourseWrapper>
          <CourseCard courseData={courseData} />
        </CourseWrapper>
      </CourseContainer>
    </GeneralContent>
  );
}

const GeneralContent = styled.div`
  display: block;
  min-height: 83vh;
  position: relative;
`;

const CourseContainer = styled.div`
  -webkit-font-smoothing: antialiased;
  min-height: calc(100vh - 6.5rem - 9.8rem);
  display: flex;
  flex-direction: column;
  background-color: #f9f8fb;
  -webkit-box-shadow: inset 0 0.2rem 0.4rem 0 rgb(0 0 0 / 5%);
  box-shadow: inset 0 0.2rem 0.4rem 0 rgb(0 0 0 / 5%);
`;
const CourseWrapper = styled.div`
  display: flex;
  flex: 1 1;
  justify-content: stretch;
  width: 100%;
  max-width: 134rem;
  margin: auto;
  flex-direction: column;
  background-color: #fff;
  padding-top: 2.4rem;

  @media (min-width: 75em) {
    flex-direction: row;
    padding-top: 6rem;
    background-color: unset;
  }

  @media (min-width: 75em) and (max-width: 90em) {
    max-width: 107.2rem;
  }

  @media (min-width: 90em) {
    max-width: 144.9rem;
  }

  @media (max-width: 30em) {
    padding-top: 0;
  }
`;
export default CourseList;
