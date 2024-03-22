import React, { useEffect, useState } from "react";
import axios from "axios";
import Content from "./Content";
import Fade from "react-reveal/Fade";
import "../../../styles/contents/contentCard.css";

const ContentCard = () => {
  const [content, setContent] = useState({ title: "", src: "" }); // 영화 데이터를 저장할 상태

  useEffect(() => {
    axios
      .get("http://localhost:8080/ContentsPopup?contentId=1") // 서버로부터 데이터를 받아오는 URL
      .then((response) => {
        // 성공적으로 데이터를 받아왔을 때의 처리
        const ContentData = response.data; // 여기서는 response.data가 영화 데이터를 포함하고 있다고 가정
        setContent({ title: ContentData.title, src: ContentData.src }); // 받아온 데이터로 movie 상태를 업데이트
      })
      .catch((error) => {
        // 데이터를 받아오는 중 에러가 발생했을 때의 처리
        console.error("There was an error!", error);
      });
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 단 한 번만 실행되도록 함

  return (
    <div>
      <h3 className="video-title">비디오| 다른컨텐츠</h3>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3 mb-10 movie-container">
        <Fade bottom delay={300}>
          <Content
            name={content.title}
            src={content.imgUrl}
            className="movie-left"
          />
        </Fade>
        <Fade bottom delay={300}>
          <Content
            name={content.title}
            src={content.imgUrl}          />
        </Fade>
        <Fade bottom delay={300}>
          <Content
            name={content.title}
            src={content.imgUrl}          />
        </Fade>
        <Fade bottom delay={300}>
          <Content
            name={content.title}
            src={content.imgUrl}          />
        </Fade>
        <Fade bottom delay={500}>
          <Content
            name={content.title}
            src={content.imgUrl}          />
        </Fade>
      </div>
    </div>
  );
};

export default ContentCard;