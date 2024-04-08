import React from "react";
import "./home.css";
import Assessment from "../../components/assessment/assessment";
import Banner from "../../components/banner/banner";
import Carousel from "../../components/carousel/carousel";
import Quiz from "../../components/quiz/quiz";
import Quizcard from "../../components/quizcard/quizcard";
import Preloaded from "../../components/preloaded/preloaded";
import Evaluation from "../../components/evaluation/evaluation";
import Exsystem from "../../components/exsystem/exsystem";
import Organisation from "../../components/organisation/organisation";
import Reviews from "../../components/reviews/reviews";
import Onlinetest from "../../components/onlinetest/onlinetest";
import Footer from "../../components/footer/footer";
import Quicklinks from "../../components/quicklinks/quicklinks";

const Home = () => {
  return (
    <div>
      <Assessment />
      <Banner />
      <Carousel />
      <Quiz />
      <Quizcard />
      <Preloaded />
      <Evaluation />
      <Exsystem />
      <Organisation />
      <Reviews />
      <Onlinetest />
      <Footer />
      <Quicklinks />
    </div>
  );
};

export default Home;
