import React from "react";
import styled from "styled-components";
import TopicContentInfo from "./TopicContentInfo";
import TopicContentChapterList from "./TopicContentChapterList";

function TopicContent(props) {
  return (
    <TopicDetailContainerContent>
      <TopicContentInfo topicData={props.topicData} />
      <TopicContentChapterList
        tid={props.topicData.id}
        chapterData={props.topicData.chapter_set}
      />
    </TopicDetailContainerContent>
  );
}

const TopicDetailContainerContent = styled.div`
  position: relative;
  width: 92%;
  max-width: 110rem;
  margin: 0 auto 7.5rem;

  @media (min-width: 48em) {
    margin-bottom: 12rem;
  }

  @media (min-width: 62em) {
    display: flex;
    justify-content: space-between;
    padding-top: 4.5rem;
    margin-bottom: 9rem;
  }
`;

export default TopicContent;
