import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import axios from "axios";

function LoginMain() {
  const [pwChange, setPwChange] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://127.0.0.1:8000/dj_rest_auth/login/", user)
      .then((response) => {
        if (response.data.access_token) {
          localStorage.clear();
          localStorage.setItem("token", response.data.access_token);

          // 사용하려면 App.js에서 /로 라우팅해야 한다
          window.location.replace("/");
        } else {
          setEmail("");
          setPassword("");
          localStorage.clear();
          setErrors(true);
        }
      })
      .catch((err) => {
        console.clear();
        alert("아이디 또는 비밀번호가 일치하지 않습니다");
        setEmail("");
        setPassword("");
      });
  };
  return (
    <General>
      <Login>
        <LoginForm>
          <LoginFormTop>
            <LoginHeader>
              <LoginHeaderLogo
                onClick={() => (window.location.href = "/")}
                src="https://www.codeit.kr/static/images/brand/logo_original@2x.png"
              />
              <p>
                회원이 아니신가요?<Link to="/signup">회원가입 하기</Link>
              </p>
            </LoginHeader>
          </LoginFormTop>
          <LoginFormMiddle>
            <form onSubmit={onSubmit} autoComplete="off">
              <TitleText>이메일</TitleText>
              <InteractiveInput>
                <input
                  id="email"
                  type="text"
                  placeholder="이메일을 입력해 주세요."
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <Message></Message>
              </InteractiveInput>
              <TitleText>비밀번호</TitleText>
              <InteractiveInput>
                <input
                  id="password1"
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <Message></Message>
              </InteractiveInput>

              <SubmitBtnWrapper>
                <ButtonGeneral type="submit">
                  <span>로그인 하기</span>
                </ButtonGeneral>
              </SubmitBtnWrapper>
            </form>
            <OauthWrapper>
              <p>SNS 간편 로그인</p>
              <OauthCircle className="naver">
                <OauthImg className="naver" />
              </OauthCircle>
              <OauthCircle className="google">
                <OauthImg className="google" />
              </OauthCircle>
              <OauthCircle className="facebook">
                <OauthImg className="facebook" />
              </OauthCircle>
              <OauthCircle className="kakao">
                <OauthImg className="kakao" />
              </OauthCircle>
            </OauthWrapper>
          </LoginFormMiddle>
          <LoginFormBottom>
            <FindPassword
              onClick={() => {
                setPwChange(true);
              }}
            >
              비밀번호 찾기
            </FindPassword>
          </LoginFormBottom>
        </LoginForm>
      </Login>

      <Footer />

      {pwChange ? (
        <Modal>
          <ModalBackground
            onClick={() => {
              setPwChange(!pwChange);
            }}
            tabIndex="-1"
          >
            <ModalCenterWrapper>
              <ModalIconPositionTop>
                <ModalCloseBtn
                  onClick={() => {
                    setPwChange(false);
                  }}
                  src="https://www.codeit.kr/static/images/popup/closeBtn.png"
                />
                <ModalContents>
                  <ModalContentsIconTop src="https://www.codeit.kr/static/images/popup/icon__lock.png" />
                  <ModalContentsTitle>
                    <p>
                      <ModalChangePWTitle>
                        비밀번호 재설정하기
                      </ModalChangePWTitle>
                    </p>
                  </ModalContentsTitle>
                  <ModalContentsBody>
                    <ModalChangePWDescription>
                      이메일로 비밀번호 재설정 링크를 보내드려요.
                    </ModalChangePWDescription>
                    <ModalChangePWInput
                      autoComplete="off"
                      placeholder="가입시 등록한 이메일을 입력해 주세요."
                    />
                  </ModalContentsBody>
                </ModalContents>
                <ModalBtns>
                  <ModalBtnsEach>
                    <span>메일로 보내기</span>
                  </ModalBtnsEach>
                </ModalBtns>
              </ModalIconPositionTop>
            </ModalCenterWrapper>
          </ModalBackground>
        </Modal>
      ) : (
        <></>
      )}
    </General>
  );
}
const ModalBtnsEach = styled.div`
  padding: 1.2rem 2.5rem 1.1rem;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: -0.25px;
  border-radius: 0.6rem;
  cursor: pointer;
  margin: auto;
  color: #fff;
  background-image: linear-gradient(294deg, #8400ff, #a25df4);
`;
const ModalBtns = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  margin-top: 2.5rem;
`;

const ModalChangePWInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  max-width: 34.6rem;
  padding-left: 0.5rem;
  padding-bottom: 1.1rem;
  border: none;
  border-bottom: 0.1rem solid #a9abb7;
  font-size: 1.5rem;
  font-weight: 500;

  &:focus {
    border-bottom: 0.1rem solid #8f00ff;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  @media (min-width: 48em) {
    font-size: 1.6rem;
  }
`;
const ModalChangePWDescription = styled.p`
  margin-bottom: 2.8rem;
  font-size: 1.4rem;
  line-height: 1.43;
  letter-spacing: -0.25px;
  color: #5d5f67;
`;
const ModalContentsBody = styled.div`
  flex: 1 1;
  max-height: calc(80vh - 104px);
  overflow-y: auto;
`;

const ModalChangePWTitle = styled.p`
  margin-bottom: 0.8rem;
  font-size: 1.7rem;
  font-weight: 500;
  color: #343236;
`;
const ModalContentsTitle = styled.div`
  display: flex;
  flex: none;
  align-items: center;
  margin-bottom: 1.1rem;

  p {
    margin-top: 0.2rem;
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.3px;
    color: #343236;
  }
`;

const ModalContentsIconTop = styled.img`
  width: 3.8rem;
  height: 3.8rem;
  margin: 0 auto 1.2rem;
`;

const ModalContents = styled.div`
  font-size: 1.4rem;
  line-height: 1.57;
  letter-spacing: -0.25px;
  color: #69666d;
  flex: 1 1;
  display: flex;
  flex-direction: column;
`;

const ModalCloseBtn = styled.img`
  position: absolute;
  top: -1.2rem;
  right: -1.2rem;
  width: 4.2rem;
  height: 4.2rem;
  cursor: pointer;
`;

const ModalGeneral = styled.div`
  position: relative;
  min-width: 34.5rem;
  width: -webkit-max-content;
  width: max-content;
  max-width: 94vw;
  max-height: 80vh;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border-radius: 1.6rem;
  -webkit-box-shadow: 0 0.8rem 1.6rem 0 rgb(0 0 0 / 12%);
  box-shadow: 0 0.8rem 1.6rem 0 rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;

  @media (min-width: 48em) {
    min-width: 39.5rem;
  }
`;

const ModalHasTitle = styled(ModalGeneral)`
  padding: 3.3rem 2.8rem 2.5rem;

  @media (min-width: 48em) {
    padding: 3.3rem 3.2rem 2.5rem;
  }
`;

const ModalIconPositionTop = styled(ModalHasTitle)`
  padding-top: 2.7rem;
  padding-bottom: 3rem;
  text-align: center;

  ${ModalContentsTitle} {
    justify-content: center;
  }
`;

const ModalCenterWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;
const ModalBackground = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  outline: none;

  ${ModalGeneral} {
    padding: 2.2rem 4rem 3rem;
  }

  @media (min-width: 48em) {
    ${ModalGeneral} {
      width: 42.3rem;
      padding-left: 6.7rem;
      padding-right: 6.7rem;
    }
  }

  ${ModalContentsTitle} {
    margin-bottom: 0;
  }
`;
const Modal = styled.div``;

const FindPassword = styled.button``;
const LoginFormBottom = styled.div`
  min-width: 31.4rem;
  max-width: 40.1rem;

  ${FindPassword} {
    display: block;
    margin: 2.1rem 0.7rem 0 auto;
    border: none;
    font-size: 1.3rem;
    font-weight: 500;
    color: #a9abb7;
    text-decoration: underline;
    bottom: 1rem;
  }

  @media (min-width: 48em) {
    width: 40.1rem;
    ${FindPassword} {
      margin: 2rem 0.5rem 0 auto;
      font-size: 1.4rem;
    }
  }
`;
const OauthImg = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-size: cover;

  @media (min-width: 48em) {
    width: 2.8rem;
    height: 2.8rem;
  }

  &.naver {
    background-image: url(https://www.codeit.kr/static/images/homepage/naver-login.png);
  }
  &.google {
    background-image: url(https://www.codeit.kr/static/images/homepage/google-login.png);
  }
  &.facebook {
    background-image: url(https://www.codeit.kr/static/images/homepage/facebook-login.png);
  }
  &.kakao {
    background-image: url(https://www.codeit.kr/static/images/icons/kakao-talk.svg);
  }
`;

const OauthCircle = styled.a`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 2.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border: 0.1rem solid transparent;

  @media (min-width: 48em) {
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
  }

  &.naver {
    background-color: #ebf8f1;
  }
  &.google {
    background-color: #fff3f2;
  }
  &.facebook {
    background-color: #eaeffd;
  }
  &.kakao {
    background-color: #fdf3d6;
  }

  &:not(:nth-child(2)) {
    margin-left: 1.5rem;
  }
`;
const OauthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.7rem;
  margin-top: 3rem;

  > p {
    font-size: 1.3rem;
    color: #69666d;
    font-weight: 500;
    margin-right: 2rem;
    flex: 1 1;
    text-align: left;
  }

  @media (min-width: 48em) {
    padding: 0 0.5rem;
    margin-top: 3.3rem;
    > p {
      font-size: 1.5rem;
      margin-right: 3.5rem;
    }
  }
`;

const Message = styled.p``;

const ButtonGeneral = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.3rem 2.8rem;
  font-size: 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 1.2rem;
  outline: transparent;
  -webkit-box-shadow: 0 0.5rem 1.5rem 0 rgb(0 0 0 / 10%);
  box-shadow: 0 0.5rem 1.5rem 0 rgb(0 0 0 / 10%);
  cursor: pointer;

  &:before {
    -webkit-transition: top 0.1s ease-out;
    transition: top 0.1s ease-out;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: -0.6rem;
    left: 0;
    border-radius: 1.2rem;
    content: "";
  }

  * {
    position: relative;
    z-index: 2;
    -webkit-transform: translateY(-0.4rem);
    transform: translateY(-0.4rem);
  }

  span {
    -webkit-transition: transform 0.1s ease-out;
    transition: transform 0.1s ease-out;
    display: inline-block;
    -webkit-transform: translateY(-0.3em);
    transform: translateY(-0.3em);
  }
`;

const SubmitBtnWrapper = styled.div`
  position: relative;

  ${ButtonGeneral} {
    margin-top: 1.6rem;
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
    border-radius: 1.2rem;
    outline: none;
    width: 100%;
    padding-top: 1.4rem;
    padding-bottom: 1.3rem;
    -webkit-box-shadow: 0 0.8rem 1.6rem 0 rgb(143 0 255 / 13%);
    box-shadow: 0 0.8rem 1.6rem 0 rgb(143 0 255 / 13%);
    background-image: linear-gradient(276deg, #710ad2, #8e43e6);

    &:before {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 1.2rem;
      background-image: linear-gradient(273deg, #8400ff, #a25df4);
      content: "";
    }

    > span {
      -webkit-transform: translateY(-0.4em);
      transform: translateY(-0.4em);
    }
  }

  @media (min-width: 48em) {
    ${ButtonGeneral} {
      width: 40.1rem;
      border-radius: 1.1rem;

      &:before {
        border-radius: 1.1rem;
      }
    }
  }
`;
const InteractiveInput = styled.div`
  position: relative;

  > input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    border-bottom: 0.1rem solid #dde0ea;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    outline: transparent;
    width: 100%;
    height: 3.9rem;
    color: #343236;
    font-size: 1.5rem;
    padding-left: 0.4rem;
  }

  @media (min-width: 48em) {
    > input {
      font-size: 1.6rem;
      padding-left: 0.5rem;
    }
  }

  ${Message} {
    font-size: 1.1rem;
    color: #ff0064;
    text-align: right;
    height: 1.5rem;
    margin-top: 0.5rem;
  }

  @media (min-width: 48em) {
    ${Message} {
      font-size: 1.2rem;
    }
  }
`;
const TitleText = styled.p``;

const LoginFormMiddle = styled.div`
  width: 100%;
  max-width: 40.1rem;
`;

const LoginHeaderLogo = styled.img`
  width: 18.3rem;
  height: 5.2rem;
  cursor: pointer;
  @media (min-width: 48em) {
    width: 20.3rem;
    height: 5.8rem;
  }
`;

const LoginHeader = styled.div`
  margin-bottom: 3.4rem;

  > p {
    font-size: 1.3rem;
    font-weight: 500;
    margin-top: 1.35rem;
    color: #69666d;

    @media (min-width: 48em) {
      font-size: 1.4rem;
      margin-top: 1.8rem;
    }

    > a {
      color: #8f00ff;
      text-decoration: underline;
      margin-left: 0.7rem;
    }
  }
`;

const LoginFormTop = styled.div``;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 108.2rem;
  margin: 0 auto;
  text-align: center;
  background-color: #fff;
  border-radius: 1.5rem;
  width: 100%;
  padding: 0 3rem;

  @media (min-width: 48em) {
    width: 88%;
    padding: 4rem 12.3rem 16.1rem;

    ${TitleText} {
      font-size: 1.6rem;
      margin-left: 0.5rem;
    }
  }

  ${TitleText} {
    text-align: left;
    color: #d9b6f5;
    font-size: 1.5rem;
    margin-left: 0.4rem;
    margin-top: 0.4rem;
  }
`;
const Login = styled.div`
  position: relative;
  padding: 4.4rem 0 15rem;
  background-color: #fff;

  @media (min-width: 48em) {
    padding: 5.5rem 0 15.5rem;
  }

  @media (min-width: 62em) {
    padding: 8.9rem 0;
  }
`;

const General = styled.div`
  display: block;
  min-height: 83vh;
  position: relative;
`;

export default LoginMain;
