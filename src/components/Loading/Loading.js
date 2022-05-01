import React from "react";
import styled from "styled-components";

function Loading() {
  return (
    <CommonLoader>
      <CommonLoaderContent>
        <CommonLoaderContentLoader>
          <CommonLoaderContentLoaderSymbol className="first" />
          <CommonLoaderContentLoaderSymbol className="second" />
          <CommonLoaderContentLoaderSymbol className="third" />
        </CommonLoaderContentLoader>
        <CommonLoaderContentTitle>로딩 중</CommonLoaderContentTitle>
      </CommonLoaderContent>
    </CommonLoader>
  );
}
const CommonLoaderContentTitle = styled.span`
  font-size: 1.7rem;
  font-weight: 500;
  letter-spacing: -0.043rem;
  color: #333236;
  margin-top: 2.5rem;
`;
const CommonLoaderContentLoaderSymbol = styled.span`
  border-radius: 50%;
  display: block;
  width: 1rem;
  height: 1rem;
  background-color: #8f00ff;

  &:nth-child(n + 2):nth-child(-n + 3) {
    margin-left: 1.5rem;
  }

  &.first {
    animation: load 1s 1s infinite;
    animation-delay: 0s;
  }
  &.second {
    animation: load 1s 1s infinite;
    animation-delay: 0.2s;
  }
  &.third {
    animation: load 1s 1s infinite;
    animation-delay: 0.4s;
  }
  @keyframes load {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(0.7rem);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const CommonLoaderContentLoader = styled.div`
  margin-top: 1.7rem;
  display: flex;
`;
const CommonLoaderContent = styled.div`
  width: 14rem;
  height: 14rem;
  border-radius: 3.9rem;
  background-color: #fff;
  box-shadow: 0 1.2rem 6.4rem 0 rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CommonLoader = styled.div`
  z-index: 150;
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(15, 15, 15, 0.74);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Loading;
