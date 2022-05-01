import { createGlobalStyle } from "styled-components";
import SpoqaHanSansNeoRegular from "./SpoqaHanSansNeo-Regular.woff";
import SpoqaHanSansNeoMedium from "./SpoqaHanSansNeo-Medium.woff";
import SpoqaHanSansNeoBold from "./SpoqaHanSansNeo-Bold.woff";

export default createGlobalStyle`
  @font-face {
    font-family: SpoqaHanSansNeo;
    src: url(${SpoqaHanSansNeoRegular}) format("woff");
    font-style: normal;
  }
  
  @font-face {
    font-family: SpoqaHanSansNeo;
    src: url(${SpoqaHanSansNeoMedium}) format("woff");
    font-weight: 500;
    font-style: normal;
  }
  
  @font-face {
    font-family: SpoqaHanSansNeo;
    src: url(${SpoqaHanSansNeoBold}) format("woff");
    font-weight: 600;
    font-style: normal;
  }
`;
