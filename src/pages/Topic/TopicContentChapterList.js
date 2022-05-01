import React, { useState } from "react";
import styled from "styled-components";
import TopicChapter from "./TopicChapter";

function TopicContentChapterList(props) {
  return (
    <TopicDetailContainerChapters>
      {props.chapterData &&
        props.chapterData.map((chapter, index) => {
          return (
            <TopicChapter
              key={index}
              index={index + 1}
              tid={props.tid}
              chapter={chapter}
            />
          );
        })}
    </TopicDetailContainerChapters>
  );
}

const TopicDetailContainerChapters = styled.div`
  @media (min-width: 62em) {
    width: 50%;
    order: 1;
  }
`;

export default TopicContentChapterList;
