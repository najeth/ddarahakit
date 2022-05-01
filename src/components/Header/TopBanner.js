import React from "react";
import styled from "styled-components";

function TopBanner(props) {
  return (
    <>
      {props.isBannerShow && (
        <TopBannerMain>
          <TopBannerContainer>
            <TopBannerWrapper>
              <TopBannerContent>
                <TopBannerContentText>
                  <p>올해 더는 없을, 무제한 멤버십 마지막 할인</p>
                </TopBannerContentText>
                <TopBannerContentButton>
                  <p>최저가에 구매하기 &gt;&gt;</p>
                </TopBannerContentButton>
              </TopBannerContent>
              <TopBannerClose
                onClick={() => {
                  props.setIsBannerShow(!props.isBannerShow);
                }}
              >
                <TopBannerCloseIcon className="fa fa-times fa-2x" />
              </TopBannerClose>
            </TopBannerWrapper>
          </TopBannerContainer>
        </TopBannerMain>
      )}
    </>
  );
}

const TopBannerMain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 90;
`;

const TopBannerContainer = styled.div`
  flex: 1 1;
  display: flex;
  align-items: center;
  background-color: #2f1353;
  min-height: 5.5rem;
  @media screen and (min-width: 48em) {
    padding: 0 3rem;
  }
`;

const TopBannerWrapper = styled.div`
  flex: 1 1;
  height: 100%;
  max-width: 118rem;
  margin: 0 auto;
  color: #fff;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const TopBannerContent = styled.div`
  flex: 1 1;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5rem 0 0.5rem 3rem;
  @media screen and (min-width: 48em) {
    justify-content: center;
    padding: 0.5rem 0;
  }
`;

const TopBannerContentText = styled.div`
  margin: 0.5rem 2rem 0.5rem 0;
  font-size: 1.6rem;
  color: #fff;
  @media screen and (min-width: 48em) {
    margin: 0 2.5rem 0 0;
  }
`;
const TopBannerContentButton = styled.button`
  padding: 0.7rem 1.5rem 0.5rem;
  margin: 0.5rem 0;
  font-weight: 500;
  text-decoration: none;
  border-radius: 7px;
  -webkit-box-shadow: 4px 5px 4px 0 rgb(0 0 0 / 17%);
  box-shadow: 4px 5px 4px 0 rgb(0 0 0 / 17%);
  background-color: #6500c3;
`;

const TopBannerClose = styled.button`
  flex: none;
  padding: 1rem;
  margin: 1rem 1rem 0 0;
  align-self: flex-start;
  @media screen and (min-width: 48em) {
    margin: 0;
    align-self: auto;
  }
`;

const TopBannerCloseIcon = styled.i`
  color: white;
`;

export default TopBanner;
