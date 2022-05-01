import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";
import styled from "styled-components";
import TopicDetailHead from "./TopicDetailHead";
import TopicContent from "./TopicContent";
import TopicReview from "./TopicReview";
import Loading from "../../components/Loading/Loading";
import NProgress from "react-nprogress";
import axios from "axios";

function TopicMain() {
  const [topicData, setTopicData] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      NProgress.start();
      setLoading(true);
      try {
        let response;
        localStorage.getItem("token") !== null
          ? (response = await axios.get(
              "http://127.0.0.1:8000/topic/" + params.id,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            ))
          : (response = await axios.get(
              "http://localhost:8000/topic/" + params.id
            ));

        setTopicData(response.data.result);
      } catch (e) {
        localStorage.clear();
        let response = await axios.get(
          "http://localhost:8000/topic/" + params.id
        );
        setTopicData(response.data.result);

        console.log(e);
      }

      NProgress.done();
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  // 아직 값이 설정되지 않았을 때
  if (!topicData) {
    return null;
  }

  return (
    <General>
      <Header />
      <GeneralContent>
        <TopicDetailContainer>
          <TopicDetailHead topicData={topicData} />
          <TopicContent topicData={topicData} />
          <TopicReview />
        </TopicDetailContainer>
      </GeneralContent>
      <Footer />
      <GoToTop />
    </General>
  );
}

const General = styled.div`
  position: relative;
  padding-top: 5.5rem;
  @media (min-width: 48em) {
    padding-top: 6.5rem;
  }
`;
const GeneralContent = styled.div`
  display: block;
  min-height: 83vh;
  position: relative;
`;

const TopicDetailContainer = styled.div`
  width: 100%;
  padding-bottom: 7.5rem;

  @media (min-width: 48em) {
    padding-bottom: 12rem;
  }

  @media (min-width: 62em) {
    padding-bottom: 9rem;
  }
`;

export default TopicMain;
