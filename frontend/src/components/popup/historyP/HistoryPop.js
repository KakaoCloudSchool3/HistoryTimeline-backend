import History from './HistoryPoPComponent/History';
import HistoryCom from './HistoryPoPComponent/HistoryCom';
import Movie from './HistoryPoPComponent/Movie';
import MovieCom from './HistoryPoPComponent/MovieCom';
import "./HistoryPop.css"



const movies = [
  {
    title: "서울의 봄 (2023)",
    imageUrl: "https://img.movist.com/?img=/x00/05/96/41_p1.jpg"
  },
  {
    title: "남산의 부장들 (2020)",
    imageUrl: "https://img.movist.com/?img=/x00/05/24/83_p1.jpg"
  },
  {
    title: "택시운전사 (2017)",
    imageUrl: "https://img.movist.com/?img=/x00/04/81/75_p1.jpg"
  },
  {
    title: "1987 (2017)",
    imageUrl: "https://img.movist.com/?img=/x00/04/93/47_p1.jpg"
  }
];

const historyData = {
  imageUrl:[ "https://upload.wikimedia.org/wikipedia/ko/2/2a/12%C2%B712_%EA%B5%B0%EC%82%AC%EB%B0%98%EB%9E%80_%EC%A3%BC%EB%8F%99%EC%9E%90.jpeg",
  "https://i.namu.wiki/i/NrK0Z6DvGlyTXZzKa0J3toa9RbIZT04NsEVrBuQQowX4lhxymXipGWk6K_4rcySbebwqtPQ7KDxagY4jk0clOw.webp","https://lh3.googleusercontent.com/proxy/vbQsFy9rzVZRCoMUWyuh6TywCNxOQEra1I5OTtpxs--2MFik1uHEFERMLl39zUboJcfZFuG0EUGjJAB0vcCBQkeV5UZpNCegSl1ZeKF5CqRfzdvWzlxH_SgN"],
  
  title : "12.12 사태",
  
  content: [

      "1979년 10.26 사건 이후 새벽 4시 김재규가 체포된 후 국방부 회의실에서 각료들은 서둘러 비상조치를 내렸다. 신현확은 대통령이 서거했고 그 범인은 김재규였다는 것을 알리며, 국가적 위기 상황에 국가원수직이 비어있으면 안 된다고 말했다. 그러면서 법에 의하면 대통령 유고 시 국무총리가 승계하도록 돼 있으니, 지금부터 최규하 국무총리가 대통령 권한대행이 되어야 한다고 주장했다. 이 제안을 받아들여 최규하 국무총리가 대통령 권한대행이 되었고, 박정희 대통령 시해로 인한 계엄의 선포로 인해 정승화 육군참모총장이 계엄사령관으로 임명되어 대통령 권한대행과 함께 정국을 이끌게 되었다.",
      "그 와중에 대통령 권한대행이 된 최규하는 철저한 원칙론자로, 정치에 휘말리기 싫어서 권력이 자신에게 집중되는 것을 스스로 막았다.[33] 실제로 권한대행 당시에 정승화가 계엄사의 업무를 어떻게 해야 하냐고 물어보자, 지금은 전국 계엄이 아니라 부분 계엄이니 자신한테 보고하지 말고 국방부 장관에게 보고하라 할 정도로 정치에 무관심했다. 이로 인해 계엄사령부 합동수사본부장으로 임명되어 10.26 사태 수사를 총괄하게 된 국군보안사령관 전두환이 군부의 실력자로 부상하게 된다.[34] 그리고 계엄사령관 정승화 입장에서 전두환은 곧 숙청해야 할 대상이 되었다.",
      "최규하는 이 때 결정적인 실수를 되는데, 권한 대행 수락 당시 지금 이 순간부터 제주도를 제외한 전국에 비상계엄을 선포하겠다.라고 부분계엄을 선언 해버린다. 이 조치는 사실상 최규하 스스로 대통령 권한대행으로서의 군 통제권을 포기한다는 뜻이었다. 왜냐하면 당시 계엄법 9조에 의하면 전국을 계엄지역으로 선포하는 경우에는 대통령이 지휘감독을 하게 되지만 그 이외에는 국방부 장관이 지휘감독을 하기 때문이다. 원래 최규하는 정치에 휘말리기를 싫어했기에 정치적 부담감이 크다고 판단하여 제주도를 제외하고 계엄을 선포해버렸다. 이 때문에 계엄령 이후 '계엄사령부'가 유일한 권력의 중심이 되었고 계엄사령부 합동수사본부장으로 10.26 수사 총책을 맡은 전두환이 더더욱 권력의 핵심으로 부각됐다. 거기에 국방부 장관이었던 노재현은 그릇이 부족하고 전두환과 각별했기에, 훗날 정승화와 전두환이 권력투쟁을 벌일 때도 전두환을 두둔하기에 바빴다.",
      "1979년 10.26 사건 이후 새벽 4시 김재규가 체포된 후 국방부 회의실에서 각료들은 서둘러 비상조치를 내렸다. 신현확은 대통령이 서거했고 그 범인은 김재규였다는 것을 알리며, 국가적 위기 상황에 국가원수직이 비어있으면 안 된다고 말했다. 그러면서 법에 의하면 대통령 유고 시 국무총리가 승계하도록 돼 있으니, 지금부터 최규하 국무총리가 대통령 권한대행이 되어야 한다고 주장했다. 이 제안을 받아들여 최규하 국무총리가 대통령 권한대행이 되었고, 박정희 대통령 시해로 인한 계엄의 선포로 인해 정승화 육군참모총장이 계엄사령관으로 임명되어 대통령 권한대행과 함께 정국을 이끌게 되었다.",
      "그 와중에 대통령 권한대행이 된 최규하는 철저한 원칙론자로, 정치에 휘말리기 싫어서 권력이 자신에게 집중되는 것을 스스로 막았다.[33] 실제로 권한대행 당시에 정승화가 계엄사의 업무를 어떻게 해야 하냐고 물어보자, 지금은 전국 계엄이 아니라 부분 계엄이니 자신한테 보고하지 말고 국방부 장관에게 보고하라 할 정도로 정치에 무관심했다. 이로 인해 계엄사령부 합동수사본부장으로 임명되어 10.26 사태 수사를 총괄하게 된 국군보안사령관 전두환이 군부의 실력자로 부상하게 된다.[34] 그리고 계엄사령관 정승화 입장에서 전두환은 곧 숙청해야 할 대상이 되었다.",
      "최규하는 이 때 결정적인 실수를 되는데, 권한 대행 수락 당시 지금 이 순간부터 제주도를 제외한 전국에 비상계엄을 선포하겠다.라고 부분계엄을 선언 해버린다. 이 조치는 사실상 최규하 스스로 대통령 권한대행으로서의 군 통제권을 포기한다는 뜻이었다. 왜냐하면 당시 계엄법 9조에 의하면 전국을 계엄지역으로 선포하는 경우에는 대통령이 지휘감독을 하게 되지만 그 이외에는 국방부 장관이 지휘감독을 하기 때문이다. 원래 최규하는 정치에 휘말리기를 싫어했기에 정치적 부담감이 크다고 판단하여 제주도를 제외하고 계엄을 선포해버렸다. 이 때문에 계엄령 이후 '계엄사령부'가 유일한 권력의 중심이 되었고 계엄사령부 합동수사본부장으로 10.26 수사 총책을 맡은 전두환이 더더욱 권력의 핵심으로 부각됐다. 거기에 국방부 장관이었던 노재현은 그릇이 부족하고 전두환과 각별했기에, 훗날 정승화와 전두환이 권력투쟁을 벌일 때도 전두환을 두둔하기에 바빴다."
    ]

};

function HistoryPop() {
  return (
    <div className="HistoryPop">
      <div className="history-container">
        <HistoryCom imageUrl={historyData.imageUrl} title={historyData.title} content={historyData.content} />
      </div>
     
      <div className="movie-container">
        <MovieCom movies={movies} />
      </div>
    </div>
  );
}

export default HistoryPop;
