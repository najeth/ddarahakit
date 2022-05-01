import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

function ClassRoomContents() {
  const [enrollmentData, setEnrollmentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        localStorage.getItem("token") !== null
          ? (response = await axios.get(
              "http://localhost:8000/enrollment/cnt",
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            ))
          : (response = await axios.get(
              "http://localhost:8000/enrollment/cnt"
            ));

        setEnrollmentData(response.data.result);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <ClassRoomContentsMain>
      <ClassRoomTemplate>
        <ClassRoomLeft>
          <ClassRoomLeftWrapper>
            <UserInfo>
              <UserInfoEmail>wnsqh12@nate.com</UserInfoEmail>
              <UserInfoPhone>010-7745-6981</UserInfoPhone>
              <UserInfoUpdate>수정하기</UserInfoUpdate>
            </UserInfo>
            <UserInfoMyClass>
              <UserInfoMyClassWrapper>
                <UserInfoClassIcon src="https://online.spartacodingclub.kr/static/media/ic_mycourses.8921fdfc.svg" />
                <UserInfoMyClassLabel>내가 수강한 강의</UserInfoMyClassLabel>
              </UserInfoMyClassWrapper>
              <UserInfoSummary>
                <UserInfoSummaryText>
                  {enrollmentData.enrollment_count} 개
                </UserInfoSummaryText>
              </UserInfoSummary>
            </UserInfoMyClass>
            <UserMenu>
              <UserInfoSummary>
                <UserMenuText>내 포인트</UserMenuText>
              </UserInfoSummary>
              <UserInfoSummary>
                <UserInfoSummaryText>20,000 원</UserInfoSummaryText>
              </UserInfoSummary>
            </UserMenu>
            <UserMenu>
              <UserInfoSummary>
                <UserMenuText>내 쿠폰</UserMenuText>
              </UserInfoSummary>
              <UserInfoSummary>
                <UserInfoSummaryText>0 장</UserInfoSummaryText>
              </UserInfoSummary>
            </UserMenu>
          </ClassRoomLeftWrapper>
        </ClassRoomLeft>
        <ClassRoomRight>
          <ClassRoomRightContainer>
            <MyClassTop>
              <MyClassTopMenu className="active">
                수강 중 강의 {enrollmentData.enrollment_count}
              </MyClassTopMenu>
              <MyClassTopMenu>완료 강의 2</MyClassTopMenu>
            </MyClassTop>
          </ClassRoomRightContainer>
        </ClassRoomRight>
      </ClassRoomTemplate>
    </ClassRoomContentsMain>
  );
}

const MyClassTopMenu = styled.div`
  cursor: pointer;
  margin-right: 30px;
  font-size: 14px;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -0.42px;
  text-align: left;
  color: gray;
  position: relative;

  &.active {
    color: black;
    font-weight: 500;
  }
  &.active:before {
    position: absolute;
    bottom: -5px;
    height: 2px;
    width: 100%;
    background-color: #000;
    content: "";
    margin-left: 0;
  }
`;
const MyClassTop = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin: 20px 0;
  position: relative;

  &:before {
    position: absolute;
    bottom: -5px;
    height: 1px;
    width: 100%;
    background-color: #dee2e6;
    content: "";
    margin-left: -20px;
  }
`;
const ClassRoomRightContainer = styled.div``;

const ClassRoomRight = styled.div`
  flex: 7 1;
  padding: 2.5rem 2rem 7rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 0.5rem 1.6rem 0 rgb(0 0 0 / 8%);
  margin: 1rem 0 0 0;
  @media (min-width: 48em) {
    padding: 3.5rem 3.2rem 10rem;
  }

  @media (min-width: 62em) {
    padding: 0 7rem 0 6.5rem;
    width: 70%;
    margin: 0 0 0 1rem;
  }
`;

const UserMenuText = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.96px;
  text-align: left;
  color: #212529;
`;
const UserMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  cursor: pointer;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 1px solid #dee2e6;
  border-top: none;
`;

const UserInfoSummaryText = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -1.08px;
  text-align: left;
  margin-left: 1rem;
  color: #e8344e;
`;

const UserInfoSummary = styled.div`
  display: flex;
  align-items: center;
`;

const UserInfoMyClassLabel = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -1.08px;
  text-align: left;
  color: #212529;
`;

const UserInfoClassIcon = styled.img`
  width: 36.3px;
  height: 26px;
  object-fit: contain;
  margin-bottom: 15px;
`;

const UserInfoMyClassWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserInfoMyClass = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  cursor: pointer;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 1px solid #dee2e6;
  border-top: none;
  align-items: flex-end;
`;

const UserInfoUpdate = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.84px;
  text-decoration: underline;
  cursor: pointer;
  color: #212529;
  padding-top: 25px;
  text-align: left;
  margin-bottom: 14px;
`;

const UserInfoPhone = styled.div`
  font-size: 16px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.48px;
  text-align: left;
  color: #495057;
  margin-bottom: 14px;
`;

const UserInfoEmail = styled.div`
  font-size: 16px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.48px;
  text-align: left;
  color: #495057;
  margin-bottom: 14px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 27px 23px 13px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  flex-direction: column;
`;

const ClassRoomLeftWrapper = styled.div`
  width: 100%;
`;
const ClassRoomLeft = styled.div`
  display: flex;
  flex: 3 1;
  align-items: center;
  padding: 0 2.3rem;
  border-bottom: 0.1rem solid #e0e0e0;
  overflow: auto;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 0.5rem 1.6rem 0 rgb(0 0 0 / 8%);
  flex-direction: column;

  @media (min-width: 62em) {
    padding: 0 3rem;
  }
`;

const ClassRoomTemplate = styled.div`
  display: flex;
  flex-direction: column;
  width: 91%;
  margin: 2rem auto 15rem;
  max-width: 46rem;
  min-height: 70rem;

  @media (min-width: 48em) {
    max-width: 120rem;
    margin: 3.4rem auto 17rem;
  }

  @media (min-width: 62em) {
    flex-direction: row;
    margin: 4.2rem auto 29.2rem;
    padding: 5.5rem 0 10rem;
  }
`;

const ClassRoomContentsMain = styled.div`
  display: block;
  min-height: 83vh;
  position: relative;
`;
export default ClassRoomContents;
