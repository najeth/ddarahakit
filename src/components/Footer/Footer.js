import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <GeneralFooter>
      <GeneralFooterContent>
        <GeneralFooterContentLinks>
          <GeneralFooterContentTerms>
            따라하면서 배우는 IT 소개
          </GeneralFooterContentTerms>
          <GeneralFooterContentTerms>
            사용자 이용 약관
          </GeneralFooterContentTerms>
          <GeneralFooterContentTerms>
            개인정보 취급방침
          </GeneralFooterContentTerms>
          <GeneralFooterContentTerms>자주 묻는 질문</GeneralFooterContentTerms>
          <GeneralFooterContentTerms>
            오프라인 교육문의
          </GeneralFooterContentTerms>
        </GeneralFooterContentLinks>
        <GeneralFooterContentIcons>
          <GeneralFooterContentIconEach>
            <GeneralFooterContentIconFa className="fab fa-youtube" />
          </GeneralFooterContentIconEach>
          <GeneralFooterContentIconEach>
            <GeneralFooterContentIconFa className="fab fa-instagram" />
          </GeneralFooterContentIconEach>
          <GeneralFooterContentIconEach>
            <GeneralFooterContentIconFa className="fab fa-facebook-square" />
          </GeneralFooterContentIconEach>
        </GeneralFooterContentIcons>
        <GeneralFooterContentText>
          <GeneralFooterContentTextEach>
            <GeneralFooterContentTextHead>
              (주) 따라하면서 배우는 IT
            </GeneralFooterContentTextHead>
            <GeneralFooterContentTextBody></GeneralFooterContentTextBody>
            <GeneralFooterContentTextDivider>|</GeneralFooterContentTextDivider>
          </GeneralFooterContentTextEach>
          <GeneralFooterContentTextEach>
            <GeneralFooterContentTextHead>대표</GeneralFooterContentTextHead>
            <GeneralFooterContentTextBody>심준보</GeneralFooterContentTextBody>
            <GeneralFooterContentTextDivider>|</GeneralFooterContentTextDivider>
          </GeneralFooterContentTextEach>
          <GeneralFooterContentTextEach>
            <GeneralFooterContentTextHead>
              개인정보보호책임자
            </GeneralFooterContentTextHead>
            <GeneralFooterContentTextBody>심준보</GeneralFooterContentTextBody>
            <GeneralFooterContentTextDivider>|</GeneralFooterContentTextDivider>
          </GeneralFooterContentTextEach>
          <GeneralFooterContentTextEach>
            <GeneralFooterContentTextHead>
              대표 번호
            </GeneralFooterContentTextHead>
            <GeneralFooterContentTextBody>
              010-7745-6981
            </GeneralFooterContentTextBody>
            <GeneralFooterContentTextDivider>|</GeneralFooterContentTextDivider>
          </GeneralFooterContentTextEach>
          <GeneralFooterContentTextEach>
            <GeneralFooterContentTextHead>
              사업자 번호
            </GeneralFooterContentTextHead>
            <GeneralFooterContentTextBody>
              123-456-789
            </GeneralFooterContentTextBody>
            <GeneralFooterContentTextDivider>|</GeneralFooterContentTextDivider>
          </GeneralFooterContentTextEach>
          <GeneralFooterContentTextEach>
            <GeneralFooterContentTextHead>
              통신판매업
            </GeneralFooterContentTextHead>
            <GeneralFooterContentTextBody>
              제 2019-서울중구-1034 호
            </GeneralFooterContentTextBody>
            <GeneralFooterContentTextDivider>|</GeneralFooterContentTextDivider>
          </GeneralFooterContentTextEach>
          <GeneralFooterContentTextEach>
            <GeneralFooterContentTextHead>주소</GeneralFooterContentTextHead>
            <GeneralFooterContentTextBody>
              서울시 은평구 수색로22나길 27 지하
            </GeneralFooterContentTextBody>
          </GeneralFooterContentTextEach>
        </GeneralFooterContentText>
      </GeneralFooterContent>
    </GeneralFooter>
  );
}

const GeneralFooter = styled.div`
  width: 100%;
  background: transparent;
  border-top: 0.1rem solid #dde0ea;
  padding: 3rem 3.3rem;
`;

const GeneralFooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  max-width: 100rem;
  margin: 0 auto;
`;

const GeneralFooterContentLinks = styled.div`
  flex: 1 1;
  display: flex;
  align-items: baseline;
`;

const GeneralFooterContentTerms = styled.span`
  cursor: pointer;
  line-height: 1.8;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: -0.03rem;
  color: #4f4d51;
  &: not(: last-child) {
    margin-right: 2.5rem;
  }
`;

const GeneralFooterContentIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  order: 3;
  padding-top: 1.5rem;
  @media (min-width: 48em) {
    padding-top: 2rem;
  }
  @media (min-width: 62em) {
    order: unset;
    padding-top: 0.8rem;
    margin: 0 0 -1.1rem;
    justify-content: flex-start;
  }
`;

const GeneralFooterContentIconEach = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  opacity: 0.83;
  background-color: #a9abb7;
  border-radius: 100%;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  margin-left: 0.325rem;
  margin-right: 0.325rem;
  cursor: pointer;
  vertical-align: middle;

  &:hover {
    background-color: #7c00ff;
  }
  @media (min-width: 48em) {
    width: 3.6rem;
    height: 3.6rem;
    margin: 0 0.5rem;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

const GeneralFooterContentIconFa = styled.i`
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const GeneralFooterContentText = styled.div`
  display: flex;
  flex: 1 1 100%;
  min-width: 100%;
  flex-wrap: wrap;
  max-width: 53rem;
  order: 2;
  justify-content: center;
  margin: 0;
  padding: 1.5rem 0 0;
  @media (min-width: 48em) {
    padding: 1.6rem 0 0;
    height: 100%;
    margin: 0;
  }
  @media (min-width: 62em) {
    padding: 0.2rem 0 0;
    order: unset;
    justify-content: flex-start;
  }
`;

const GeneralFooterContentTextHead = styled.span`
  font-weight: 700;
  margin-right: 0.6rem;
`;

const GeneralFooterContentTextBody = styled.span``;

const GeneralFooterContentTextDivider = styled.span`
  margin: 0 0.6rem;
`;

const GeneralFooterContentTextEach = styled.div`
  line-height: 1.8;
  margin-bottom: 0.7rem;
  font-size: 1.1rem;
  color: #a9abb7;
  display: contents;

  @media (min-width: 48em) {
    margin-bottom: 0;
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    &:nth-child(4) {
      ${GeneralFooterContentTextDivider} {
        display: none;
      }
    }

    &:nth-child(4)::after {
      content: "";
      width: 100%;
    }
  }
`;

export default Footer;
