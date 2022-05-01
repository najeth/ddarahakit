import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import logo_option from "../../images/brand/logo_option.png";
import logo_default from "../../images/brand/logo_default.png";
import axios from "axios";

function Header(props) {
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setIsAuth(true);
    }
  }, [isHover]);

  const handleLogout = () => {
    let token = localStorage.getItem("token");

    axios
      .post("http://127.0.0.1:8000/dj_rest_auth/logout/", token)
      .then((res) => {
        localStorage.clear();
        // 사용하려면 App.js에서 /로 라우팅해야 한다
        window.location.replace("/");
      });
  };

  return (
    <>
      <GeneralHeader
        isBannerShow={props.isBannerShow}
        isScroll={true}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        <GeneralHeaderWrapper>
          <GeneralHeaderLogo to="/">
            <GeneralHeaderLogoImg src={logo_default} />
          </GeneralHeaderLogo>
          <GeneralHeaderMenu>
            <GeneralHeaderMenuEach
              onClick={() => {
                setIsSearchVisible(!isSearchVisible);
              }}
              isScroll={true}
            >
              수업 탐색
            </GeneralHeaderMenuEach>
            <GeneralHeaderMenuEach
              onClick={() => {
                setIsSearchVisible(!isSearchVisible);
              }}
              isScroll={true}
            >
              커뮤니티
            </GeneralHeaderMenuEach>

            <GeneralHeaderMenuEach
              onClick={() => {
                setIsSearchVisible(!isSearchVisible);
              }}
              isScroll={true}
            >
              수강생 후기
            </GeneralHeaderMenuEach>
            {isAuth ? (
              <HeaderNotificationAndProfile
                onMouseOver={() => setIsShow(true)}
                onMouseOut={() => setIsShow(false)}
              >
                <HeaderNotificationAndProfileProfile>
                  <HeaderNotificationAndProfileProfileTrigger>
                    <HeaderProfile className="profile">
                      <HeaderProfileImg src="https://www.codeit.kr/static/images/profile/default.png" />
                    </HeaderProfile>
                    <HeaderProfileArrowDown className="fas fa-chevron-down"></HeaderProfileArrowDown>
                  </HeaderNotificationAndProfileProfileTrigger>

                  <HeaderNotificationAndProfileProfileContent>
                    <HeaderProfileMenus>
                      <HeaderProfileMenusMenu
                        onClick={() => (window.location.href = "/classroom")}
                      >
                        내 강의실
                      </HeaderProfileMenusMenu>
                      <HeaderProfileMenusMenu
                        onClick={() => (window.location.href = "/mypage")}
                      >
                        계정 관리
                      </HeaderProfileMenusMenu>
                      <HeaderProfileMenusMenu onClick={() => handleLogout()}>
                        로그아웃
                      </HeaderProfileMenusMenu>
                    </HeaderProfileMenus>
                    <HeaderProfileMenusArrowTip />
                  </HeaderNotificationAndProfileProfileContent>
                </HeaderNotificationAndProfileProfile>
              </HeaderNotificationAndProfile>
            ) : (
              <>
                <GeneralHeaderMenuEach isScroll={true}>
                  <Link to="/login">로그인</Link>
                </GeneralHeaderMenuEach>
                <GeneralHeaderSignUpButton isScroll={true}>
                  <Link to="/signup">회원 가입</Link>
                </GeneralHeaderSignUpButton>
              </>
            )}
          </GeneralHeaderMenu>
        </GeneralHeaderWrapper>

        <CourseSearchDropdown className={isSearchVisible ? "" : "closed"}>
          <CourseSearchDropdownBackgroundCloser
            onClick={() => {
              setIsSearchVisible(!isSearchVisible);
            }}
          />
          <CourseSearchDropdownMessageAndButton>
            <p>
              <span>스쿨로 목표</span>를 달성해 보세요
            </p>
            <span>
              <a href="/courses/전체">
                전체 코스 보기
                <ChevronRight className="fas fa-chevron-right" />
              </a>
            </span>
          </CourseSearchDropdownMessageAndButton>
          <CourseSearchDropdownDivisionLine />
          <CourseSearchDropdownSchoolList className="developer">
            <CourseSearchDropdownSchoolListCategory>
              <div></div>
              <p>분야별 보기</p>
            </CourseSearchDropdownSchoolListCategory>
            <ul>
              <li>네트워크</li>
              <li>시스템/인프라</li>
              <li>해킹/보안</li>
              <li>개발</li>
            </ul>
          </CourseSearchDropdownSchoolList>
          <CourseSearchDropdownSchoolList className="job">
            <CourseSearchDropdownSchoolListCategory>
              <div></div>
              <p>프로젝트별 보기</p>
            </CourseSearchDropdownSchoolListCategory>
            <ul>
              <li>컴퓨터 제대로 이해하기</li>
              <li>개발/시작부터 포트폴리오까지</li>
              <li>인프라/나만의 인프라 만들기</li>
              <li>데이터 처리 아키텍처</li>
              <li>해킹으로부터 안전한 서버만들기</li>
            </ul>
          </CourseSearchDropdownSchoolList>
        </CourseSearchDropdown>
      </GeneralHeader>
    </>
  );
}

const HeaderProfileMenusMenu = styled.a`
  line-height: normal;
  position: relative;
  display: inline-block;
  width: 13.3rem;
  height: 5rem;
  padding-top: 1.8rem;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;
  color: #333236;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  &:hover {
    color: #8f00ff;
    &:after {
      height: 2.8rem;
    }
  }
  &:not(:last-child) {
    border-bottom: 0.1rem solid #f1f3fb;
  }
  &:after {
    display: block;
    content: "";
    width: 0.2rem;
    height: 0;
    background-color: #8f00ff;
    position: absolute;
    top: 50%;
    left: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
`;
const HeaderProfileMenus = styled.ul`
  line-height: normal;
  position: absolute;
  right: -0.7rem;
  top: 2.8em;
  -webkit-box-shadow: 0 0 0.7rem 0 rgb(132 143 161 / 13%);
  box-shadow: 0 0 0.7rem 0 rgb(132 143 161 / 13%);
  background: #fff;
  border-radius: 0.4rem;
  overflow: hidden;
  z-index: 35;

  @media (min-width: 48em) {
    top: 180%;
    right: 0;
  }

  @media (min-width: 62em) {
    top: 102%;
    right: -20%;
  }
`;

const HeaderProfileMenusArrowTip = styled.span`
  line-height: normal;
  display: block;
  position: absolute;
  top: 2.5em;
  right: 0.5rem;
  width: 1rem;
  height: 1rem;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  z-index: 34;
  background: #fff;
  -webkit-box-shadow: -0.1rem -0.1rem 0.1rem 0 rgb(132 143 161 / 13%);
  box-shadow: -0.1rem -0.1rem 0.1rem 0 rgb(132 143 161 / 13%);

  @media (min-width: 48em) {
    top: calc(180% - 0.5rem);
    right: 1.1rem;
  }

  @media (min-width: 62em) {
    top: calc(102% - 0.5rem);
    right: 0.1rem;
  }
`;

const HeaderNotificationAndProfileProfileContent = styled.div``;

const HeaderProfileImg = styled.img`
  line-height: normal;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  @media (min-width: 62em) {
    opacity: 1;
  }
`;

const HeaderProfileArrowDown = styled.i`
  margin-left: 1rem;
`;

const HeaderProfile = styled.div`
  line-height: normal;
  position: relative;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  background-image: url(/static/images/icons/optionBtn--dark.png);
  background-size: contain;
  background-position: 50%;

  @media (min-width: 48em) {
    width: 3.2rem;
    height: 3.2rem;
  }

  @media (min-width: 62em) {
    width: 4.5rem;
    height: 4.5rem;
    background: none;
    opacity: 1;
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    opacity: 0.2;

    @media (min-width: 62em) {
      border: 0.05rem solid #b9bcc8;
    }
  }
`;

const HeaderNotificationAndProfileProfileTrigger = styled.div`
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  cursor: pointer;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
`;

const HeaderNotificationAndProfileProfile = styled.div`
  position: relative;
  display: inline-block;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;

  ${HeaderNotificationAndProfileProfileContent} {
    display: none;
  }

  &:hover {
    ${HeaderNotificationAndProfileProfileContent} {
      display: block;
    }
  }
`;

const HeaderNotificationAndProfile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 4.5rem 0 3.9rem;
  margin-left: 3rem;
`;

const GeneralHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5.5rem;
  z-index: 90;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  background-color: #fff;

  ${(props) =>
    props.isBannerShow &&
    css`
      margin-top: 55px;
    `}

  @media (min-width: 48em) {
    height: 6.5rem;
  }

  ${(props) =>
    props.isScroll &&
    css`
      background-color: #fff;
    `}
`;

const GeneralHeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 134rem;
  margin: auto;
`;

const GeneralHeaderLogo = styled(Link)`
  height: 6.5rem;
  display: inline-block;
  padding: 1.6rem 0 1.8rem 2.8rem;
  vertical-align: middle;
  cursor: pointer;
  @media (min-width: 48em) {
    height: 6.5rem;
    padding: 2.04rem 0 2.1rem 3rem;
  }
  @media (min-width: 62em) {
    padding: 2rem 0 2.1rem 4.5rem;
  }
`;

const GeneralHeaderLogoImg = styled.img`
  width: 25rem;
  height: 2.5rem;
  @media (min-width: 48em) {
    width: 26rem;
    height: 2.6rem;
  }
  @media (min-width: 62em) {
    width: 28rem;
    height: 2.8rem;
  }
`;

const GeneralHeaderMenu = styled.div`
  visibility: hidden;
  display: none;
  float: right;
  line-height: 6.5rem;
  height: 6.5rem;
  @media (min-width: 48em) {
    visibility: visible;
  }

  @media (min-width: 62em) {
    visibility: visible;
    display: flex;
  }
`;

const GeneralHeaderMenuEach = styled.div`
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  margin-left: 3.3rem;
  color: #333236;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  &:hover {
    color: #6500c3;
  }

  &:first-child {
    margin-left: 0;
  }

  @media (min-width: 62em) {
    padding: 0 1.3rem;
    margin-left: 3.6rem;
  }

  ${(props) =>
    props.isScroll &&
    css`
      color: #333236;
    `}
`;

const GeneralHeaderSignUpButton = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 0.8rem 2.3rem 0.7rem 2.4rem;
  margin: auto;
  line-height: normal;
  border-radius: 2rem;
  border: 0.15rem solid white;
  vertical-align: middle;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  margin-right: 3rem;
  margin-left: 3.3rem;
  &:hover {
    border: 0.15rem solid #8f00ff;
    color: white;
    background-color: #8f00ff;
  }

  ${(props) =>
    props.isScroll &&
    css`
      border: 0.15rem solid #8f00ff;
      color: #7c00ff;
    `}
`;

const CourseSearchDropdown = styled.div`
  position: absolute;
  top: 6.5rem;
  left: 0;
  width: 100%;
  -webkit-box-shadow: 0 6px 6px 0 rgb(0 0 0 / 9%);
  box-shadow: 0 6px 6px 0 rgb(0 0 0 / 9%);
  border-top: 1px solid #dde0ea;
  background-color: rgba(249, 252, 253, 0.98);
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 4.2rem 1rem 4.2rem 0;
  -webkit-animation: openCourseSearchDropdown 0.3s ease-in-out;
  animation: openCourseSearchDropdown 0.3s ease-in-out;
  outline: none;

  &.closed {
    display: none;
  }
  @keyframes openCourseSearchDropdown {
    0% {
      opacity: 0;
      max-height: 0;
    }
    50% {
      opacity: 0;
      max-height: 5rem;
    }
    to {
      opacity: 1;
      max-height: 28.5rem;
    }
  }
`;

const CourseSearchDropdownBackgroundCloser = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 6.4rem;
  left: 0;
  z-index: -1;
  background-color: transparent;
`;

const ChevronRight = styled.i`
  margin-left: 0.5em;
  margin-right: 0.36em;
  overflow: visible;
`;
const CourseSearchDropdownMessageAndButton = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  span {
    font-weight: 500;
    color: #6500c3;
  }

  a {
    display: inline-flex;
    font-weight: 500;
    color: #6500c3;
    border: 1px solid #6500c3;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    -webkit-transition: 0.25s ease;
    transition: 0.25s ease;

    > ${ChevronRight} {
      transform: scaleX(1.2);
    }

    &:hover {
      background-color: #6500c3;
      color: #fff;

      > ${ChevronRight} {
        animation: chevronBounce 0.5s ease-in-out infinite alternate;
      }
    }
  }
  @media (min-width: 48em) {
    margin-right: 4.6rem;
    p {
      font-size: 2.2rem;
    }

    a {
      font-size: 1.5rem;
      padding: 1.2rem 2.4rem 1rem 2.6rem;
      border-radius: 2.1rem;
      margin-top: 3.2rem;
    }
  }
  @media (min-width: 62em) {
    margin-right: 9.7rem;

    p {
      font-size: 2.7rem;
    }

    a {
      font-size: 1.6rem;
      padding: 1.2rem 2.2rem 1rem 2.5rem;
      border-radius: 2.1rem;
      margin-top: 3.2rem;
    }
  }

  @keyframes chevronBounce {
    0% {
      transform: scaleX(1.2) translateX(0);
    }
    to {
      transform: scaleX(1.15) translateX(0.3rem);
    }
  }
`;

const CourseSearchDropdownDivisionLine = styled.div`
  flex: none;
  width: 0.1rem;
  background-color: #dde0ea;
`;

const CourseSearchDropdownSchoolList = styled.div`
  align-self: flex-start;

  li {
    margin: 2rem 0 0 0.2rem;
    color: #69666d;
    cursor: pointer;

    @media (min-width: 48em) {
      font-size: 1.4rem;
    }
    @media (min-width: 62em) {
      font-size: 1.5rem;
    }

    &:hover {
      color: #6500c3;
      font-weight: 500;
    }
  }

  &.developer {
    @media (min-width: 48em) {
      margin-left: 5.5rem;
    }
    media (min-width: 62em) {
      margin-left: 9rem;
    }
  }

  &.job {
    @media (min-width: 48em) {
      margin-left: 7.6rem;
    }
    media (min-width: 62em) {
      margin-left: 11rem;
    }
  }
`;

const CourseSearchDropdownSchoolListCategory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    width: 0.4rem;
    height: 0.4rem;
    background-color: #e0b4fa;
    border-radius: 0.2rem;
    margin-right: 0.5rem;
  }
  p {
    font-weight: 500;
    color: #c982f2;

    @media (min-width: 48em) {
      font-size: 1.2rem;
    }

    @media (min-width: 62em) {
      font-size: 1.3rem;
    }
  }
`;

export default Header;
