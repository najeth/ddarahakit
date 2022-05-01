import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import axios from "axios";

function SignupMain() {
  const [emailSignup, setEmailSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [agreeAll, setAgreeAll] = useState(false);
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);
  const [errors, setErrors] = useState();

  const handleAllChecked = () => {
    setAgreeAll(!agreeAll);
    setAgree1(!agreeAll);
    setAgree2(!agreeAll);
    setAgree3(!agreeAll);
  };

  const handleChecked = (id) => {
    if (id === 1) {
      setAgree1(!agree1);
      setAgreeAll(!agree1 && agree2 && agree3);
    } else if (id === 2) {
      setAgree2(!agree2);
      setAgreeAll(agree1 && !agree2 && agree3);
    } else if (id === 3) {
      setAgree3(!agree3);
      setAgreeAll(agree1 && agree2 && !agree3);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password1: password1,
      password2: password2,
    };

    // 유효성 검사
    if (password1 !== password2) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");
      return false;
    }

    axios
      .post("http://127.0.0.1:8000/dj_rest_auth/registration/", user)
      .then((response) => {
        console.log(response);
        if (response.data.access_token) {
          localStorage.clear();
          localStorage.setItem("token", response.data.access_token);
          console.log("성공");
          // 사용하려면 App.js에서 /로 라우팅해야 한다
          window.location.replace("/");
        } else {
          setEmail("");
          setPassword1("");
          setPassword2("");
          localStorage.clear();
          setErrors(true);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("아이디 혹은 비밀번호가 일치하지 않습니다");
      });
  };

  return (
    <General>
      <Signup>
        <SignupForm>
          <SignupFormTop>
            <SignupHeader>
              <SignupHeaderLogo
                onClick={() => (window.location.href = "/")}
                src="https://www.codeit.kr/static/images/brand/logo_original@2x.png"
              />
              <p>
                이미 회원이신가요?<Link to="/login">로그인 하기</Link>
              </p>
            </SignupHeader>
          </SignupFormTop>
          {emailSignup ? (
            <SignupFormMiddle>
              <form onSubmit={onSubmit}>
                <InputBase>
                  <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label>이메일</label>
                </InputBase>
                <InputBase>
                  <input
                    id="password1"
                    type="password"
                    value={password1}
                    onChange={(e) => {
                      setPassword1(e.target.value);
                    }}
                  />
                  <label>비밀번호</label>
                </InputBase>
                <InputBase>
                  <input
                    id="password2"
                    type="password"
                    value={password2}
                    onChange={(e) => {
                      setPassword2(e.target.value);
                    }}
                  />
                  <label>비밀번호 확인</label>
                </InputBase>
                <TermsCheckboxes>
                  <CheckboxWithChevronButton onClick={() => handleAllChecked()}>
                    <PrivateSwitchBaseSpan>
                      <PrivateSwitchBaseInput
                        id="agreeAll"
                        type="checkbox"
                        readOnly
                        checked={agreeAll}
                      />
                      <div>
                        {agreeAll ? (
                          <Checked className="fas fa-check checked" />
                        ) : (
                          <></>
                        )}
                      </div>
                    </PrivateSwitchBaseSpan>
                    <label>전체 약관 동의</label>
                  </CheckboxWithChevronButton>
                </TermsCheckboxes>
                <CheckboxWithChevronButton onClick={() => handleChecked(1)}>
                  <PrivateSwitchBaseSpan>
                    <PrivateSwitchBaseInput
                      id="agree1"
                      type="checkbox"
                      readOnly
                      checked={agree1}
                    />
                    <div>
                      {agree1 ? (
                        <Checked className="fas fa-check checked" />
                      ) : (
                        <></>
                      )}
                    </div>
                  </PrivateSwitchBaseSpan>
                  <label>[필수] 코드잇 이용 약관에 동의</label>
                  <button type="button">
                    <RightChevron className="fas fa-chevron-right" />
                  </button>
                </CheckboxWithChevronButton>
                <CheckboxWithChevronButton onClick={() => handleChecked(2)}>
                  <PrivateSwitchBaseSpan>
                    <PrivateSwitchBaseInput
                      id="agree2"
                      type="checkbox"
                      readOnly
                      checked={agree2}
                    />
                    <div>
                      {agree2 ? (
                        <Checked className="fas fa-check checked" />
                      ) : (
                        <></>
                      )}
                    </div>
                  </PrivateSwitchBaseSpan>
                  <label>[필수] 개인정보 수집 및 이용에 동의</label>
                  <button type="button">
                    <RightChevron className="fas fa-chevron-right" />
                  </button>
                </CheckboxWithChevronButton>
                <CheckboxWithChevronButton onClick={() => handleChecked(3)}>
                  <PrivateSwitchBaseSpan>
                    <PrivateSwitchBaseInput
                      id="agree3"
                      type="checkbox"
                      readOnly
                      checked={agree3}
                    />
                    <div>
                      {agree3 ? (
                        <Checked className="fas fa-check checked" />
                      ) : (
                        <></>
                      )}
                    </div>
                  </PrivateSwitchBaseSpan>
                  <label>[선택] 마케팅 정보 수신 및 선택적 개인정보 제공</label>
                  <button type="button">
                    <RightChevron className="fas fa-chevron-right" />
                  </button>
                </CheckboxWithChevronButton>
                <SignupWithEmailBtn type="submit">
                  <span>가입하기</span>
                </SignupWithEmailBtn>
              </form>
            </SignupFormMiddle>
          ) : (
            <SignupFormMiddle>
              <SquareBtn onClick={() => (window.location.href = "#")}>
                <img
                  alt="kakao icon"
                  src="https://www.codeit.kr/static/images/icons/kakao-talk.svg"
                />
                <span>카카오로 가입하기</span>
              </SquareBtn>
              <SquareBtn onClick={() => (window.location.href = "#")}>
                <img
                  alt="naver icon"
                  src="https://www.codeit.kr/static/images/homepage/naver-login.png"
                />
                <span>네이버로 가입하기</span>
              </SquareBtn>
              <SquareBtn onClick={() => setEmailSignup(true)}>
                <img
                  alt="email icon"
                  src="https://www.codeit.kr/static/images/icons/ic-mail.svg"
                />
                <span>이메일로 가입하기</span>
              </SquareBtn>
            </SignupFormMiddle>
          )}
        </SignupForm>
      </Signup>
      <Footer />
    </General>
  );
}

const SignupWithEmailBtn = styled.button`
  width: 100%;
  margin-top: 3.8rem;
  font-size: 1.7rem;
  position: relative;
  padding: 16px 62px 11px;
  border: none;
  border-radius: 11px;
  box-shadow: rgb(143 0 255 / 13%) 0px 8px 16px 0px;
  background-image: linear-gradient(
    283deg,
    rgb(113, 10, 210),
    rgb(142, 67, 230)
  );
  color: rgb(255, 255, 255);

  > * {
    position: relative;
    display: inline-block;
    transform: translateY(-0.6rem);
    transition: all 0.1s ease-in-out 0s;
  }

  &:before {
    position: absolute;
    top: -0.6rem;
    left: 0px;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 11px;
    background-image: linear-gradient(
      277deg,
      rgb(132, 0, 255),
      rgb(162, 93, 244)
    );
    content: "";
    transition: all 0.1s ease-in-out 0s;
  }
`;

const RightChevron = styled.i`
  color: rgb(170, 171, 183);
  width: 7;
  height: 7;
`;
const CheckboxWithChevronButton = styled.div`
  display: flex;
  align-items: flex-start;
  padding-left: 1.4rem;
  margin-top: 2rem;

  label {
    cursor: pointer;
    margin-left: 1.2rem;
    font-size: 1.4rem;
    letter-spacing: -0.02rem;
    color: #333236;
    word-break: keep-all;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    min-width: 1.5rem;
    height: 1.5rem;
    margin-left: auto;
    margin-right: 0.5rem;
    border-radius: 50%;
    background-color: #f9f9fb;
  }
`;

const Checked = styled.i`
  width: 100%;
  height: 100%;
  color: white;
  &.checked {
    background-color: rgb(143, 0, 255);
  }
`;

const PrivateSwitchBaseInput = styled.input`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  margin: 0px;
  padding: 0px;
  z-index: 1;
`;

const PrivateSwitchBaseSpan = styled.span`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.6);
  padding: 0px;
  div {
    width: 18px;
    height: 18px;
    border-radius: 3px;
    border: 1px solid rgb(170, 171, 183);
  }
`;

const TermsCheckboxes = styled.div`
  margin-top: 2rem;
  height: 5.5rem;
  padding-top: 0.01rem;
  border-radius: 0.7rem;
  background-color: #f9f9fb;

  label {
    cursor: pointer;
    margin-left: 1.2rem;
    font-size: 1.6rem;
    letter-spacing: -0.04rem;
    color: #333236;
  }
`;

const InputBase = styled.div`
  position: relative;
  flex-direction: column;
  background-color: rgb(255, 255, 255);

  input {
    width: 100%;
    height: 55px;
    padding: 17px 20px;
    border-radius: 8px;
    border: 1px solid #dde0ea;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 16px;
    text-overflow: ellipsis;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    color: #333236;

    &:focus {
      border: 1px solid #8f00ff;
      outline: none;
      + label {
        transform: translate(21px, -7px) scale(1);
        transition: all 0.2s ease-in-out 0s;
        color: rgb(143, 0, 255);
        font-size: 13px;
        padding-right: 5px;
        padding-left: 5px;
        margin-left: -5px;
        cursor: unset;
      }
    }
    &:not([value=""]) {
      + label {
        transform: translate(21px, -7px) scale(1);
        transition: all 0.2s ease-in-out 0s;
        color: rgb(143, 0, 255);
        font-size: 13px;
        padding-right: 5px;
        padding-left: 5px;
        margin-left: -5px;
        cursor: unset;
      }
    }
  }
  label {
    position: absolute;
    display: block;
    background-color: inherit;
    transform-origin: left top;
    border-radius: 5px;
    top: 0px;
    left: 0px;
    transform: translate(21px, 18px) scale(1);
    transition: all 0.2s ease-in-out 0s;
    color: rgb(106, 102, 110);
    font-size: 16px;
    padding-right: 5px;
    padding-left: unset;
    margin-left: unset;
    cursor: unset;
  }

  &:not(first-child) {
    margin-top: 1.8rem;
  }
`;

const SquareBtn = styled.button`
  display: flex;
  align-items: center;
  width: 32.5rem;
  height: 5.5rem;
  border: 0.1rem solid #dde0ea;
  border-radius: 0.8rem;
  justify-content: center;
  margin: 0 auto;
  @media (min-width: 48em) {
    width: 35rem;
  }

  img {
    width: 2.2rem;
    height: 2.2rem;
    margin-bottom: 0.1rem;
  }

  span {
    margin-left: 1.5rem;
    letter-spacing: -0.04rem;
    font-size: 1.6rem;
    color: #333236;
  }

  &:nth-child(n + 1) {
    margin-top: 1.5rem;
  }
`;

const SignupFormMiddle = styled.div`
  width: 100%;
  max-width: 40.1rem;
`;

const SignupHeaderLogo = styled.img`
  width: 18.3rem;
  height: 5.2rem;
  cursor: pointer;
  @media (min-width: 48em) {
    width: 20.3rem;
    height: 5.8rem;
  }
`;

const SignupHeader = styled.div`
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
      text-decoration: none;
      margin-left: 0.7rem;
    }
  }
`;

const SignupFormTop = styled.div``;

const SignupForm = styled.div`
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
  }
`;
const Signup = styled.div`
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

export default SignupMain;
