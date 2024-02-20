import "../Components_scss/Home.scss"
import React, { useRef, useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

/**
 * @since 2024.02.14
 * @author 최정윤
 */

const Home = () => {
  // 왼쪽 배너 세팅
  const leftsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // 자동 재생 활성화
    autoplaySpeed: 6000, // 간격(ms) 설정 (예: 6초 = 6000ms)
  };

  // 베스트 메뉴 세팅
  const bestsettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500
  }

  return (
    <>
      <div className="HomeWrapper">
        {/* 홈 네비바
        @since 2024.02.14
        @author 홍길동 */}
        <div className="HomeNav shadow-md border-t-2 border-gray-200 bg-white">
          {/* 실시간 검색어 */}
          <div className="describeWrapper max-w-7xl mx-auto px-6">
            <div className="describeMyself ">
              <ul className="descriptionList">
                <li><b>1</b>Ambitious</li>
                <li><b>2</b>Promising</li>
                <li><b>3</b>Creative</li>
                <li><b>4</b>ambitious</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 홈 배너
        @since 2024.02.15
        @author 최정윤 */}
        <div className="HomeBannerWrapper max-w-7xl mx-auto px-4">

          {/* 메인 슬라이드 배너 */}
          <div className="HomeBanner">
            <div className="HomeSlider">
              {/* <h2> Single Item</h2> */}
              <Slider {...leftsettings}>
                <div className="HomeSliderItem">
                  {/* <h3>1</h3> */}
                  <img src="img/리바트.png" title="pic"></img>
                  {/* <div className="HomeSliderItemContent">1</div> */}
                </div>
                <div className="HomeSliderItem">
                  <img src="img/리바트.png" title="pic"></img>
                </div>
                <div className="HomeSliderItem">
                <img src="img/리바트.png" title="pic"></img>
                </div>
                <div className="HomeSliderItem">
                <img src="img/리바트.png" title="pic"></img>
                </div>
                <div className="HomeSliderItem">
                <img src="img/리바트.png" title="pic"></img>
                </div>
                <div className="HomeSliderItem">
                <img src="img/리바트.png" title="pic"></img>
                </div>
                <div className="HomeSliderItem">
                <img src="img/리바트.png" title="pic"></img>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/* 홈 카테고리
        @since 2024.02.19
        @author 최정윤 */}
        <div className="Category max-w-7xl mx-auto px-8">
          <div className="CategoryTitle">카테고리</div>
          <div className="CategoryContent">
            <div className="CategoryItemCircle h-25 w-25">
              <img className="Sofa" alt="logo" src="img/소파.png" />
              <div>소파</div>
            </div>
            <div className="CategoryItemCircle h-25 w-25">
              <img className="Table" alt="logo" src="img/식탁.png" />
              <div>식탁</div>
            </div>
            <div className="CategoryItemCircle h-25 w-25">
              <img className="Bed" alt="logo" src="img/침대:매트리스.png" />
              <div>침대/매트리스</div>
            </div>
            <div className="CategoryItemCircle h-25 w-25">
              <img className="Living" alt="logo" src="img/거실장.png" />
              <div>거실장</div>
            </div>
            <div className="CategoryItemCircle h-25 w-25">
              <img className="Closet" alt="logo" src="img/옷장:드레스룸.png" />
              <div>옷장/드레스룸</div>
            </div>
            <div className="CategoryItemCircle h-25 w-25">
              <img className="Boot" alt="logo" src="img/서재.png" />
              <div>서재</div>
            </div>
            <div className="CategoryItemCircle h-25 w-25">
              <img className="Kid" alt="logo" src="img/유아동.png" />
              <div>유아동</div>
            </div>
            <div className="CategoryItemCircle h-25 w-25">
              <img className="Deco" alt="logo" src="img/홈데코.png" />
              <div>홈데코</div>
            </div>
            <div className="CategoryItemCircle h-25 w-25">
              <img className="Elec" alt="logo" src="img/가전.png" />
              <div>가전</div>
            </div>
          </div>
        </div>
        {/* 홈 베스트 상품
        @since 2024.02.19
        @author 최정윤 */}
        <div className="BestProduct max-w-7xl mx-auto px-8">
          <div className="BestTitle">베스트 상품</div>
          <div className="BestContent">
            <div className="BestSlider">
              <Slider {...bestsettings}>
                <div className="BestItem">
                  <img src="img/베스트1.jpeg" title="pic"></img>
                </div>
                <div className="BestItem">
                  <img src="img/베스트2.jpeg" title="pic"></img>
                </div>
                <div className="BestItem">
                  <img src="img/베스트3.jpeg" title="pic"></img>
                </div>
                <div className="BestItem">
                  <img src="img/베스트4.jpeg" title="pic"></img>
                </div>
                <div className="BestItem">
                  <img src="img/베스트5.jpeg" title="pic"></img>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/* 홈 신상품
        @since 2024.02.19
        @author 최정윤 */}
        <div className="NewProduct max-w-7xl mx-auto px-8">
          <div className="NewTitle">이 주의 신상품</div>
          <div className="NewContent">
            <div className="NewSlider">
              <Slider {...bestsettings}>
                <div className="NewItem">
                  <img src="img/신상품1.jpeg" title="pic"></img>
                </div>
                <div className="NewItem">
                  <img src="img/신상품2.jpeg" title="pic"></img>
                </div>
                <div className="NewItem">
                  <img src="img/신상품3.jpeg" title="pic"></img>
                </div>
                <div className="NewItem">
                  <img src="img/신상품4.jpeg" title="pic"></img>
                </div>
                <div className="NewItem">
                  <img src="img/신상품5.jpeg" title="pic"></img>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
