import React from 'react';
import Popup from 'reactjs-popup';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from 'react-player';
import '../../../Assets/css/_metaGoblinGallery.scss';
import metagoblin from '../../../Assets/Images/SVG/Fonts/txt-metagoblin.svg';
import metagoblinMobile from '../../../Assets/Images/SVG/Fonts/txt-metagoblin-mobile.svg';
import goblinLegend from '../../../Assets/Images/Goblins/Goblin-LEGEND.png';
import goblinEpic1 from '../../../Assets/Images/Goblins/Goblin-EPIC-1.png';
import goblinEpic3 from '../../../Assets/Images/Goblins/Goblin-EPIC-3.png';
import goblinMystic1 from '../../../Assets/Images/Goblins/Goblin-MYSTIC-1.png';
import goblinMystic2 from '../../../Assets/Images/Goblins/Goblin-MYSTIC-2.png';
import goblinMystic3 from '../../../Assets/Images/Goblins/Goblin-MYSTIC-3.png';
import discover from '../../../Assets/Images/SVG/Fonts/txt-discover.svg';
import discoverMobile from '../../../Assets/Images/SVG/Fonts/txt-discover-mobile.svg';
import discoverGoblin from '../../../Assets/Images/discoverGoblin.png';
import play from '../../../Assets/Images/SVG/play-icon.svg';
import divideLine from '../../../Assets/Images/SVG/divideLine.svg';
import nftImage1 from "../../../Assets/Images/image1.jpg"
import nftImage2 from "../../../Assets/Images/image2.jpg"
import nftImage3 from "../../../Assets/Images/image3.jpg"
import nftImage4 from "../../../Assets/Images/image4.jpg"
import nftImage5 from "../../../Assets/Images/image5.jpg"
import nftImage6 from "../../../Assets/Images/image6.jpg"
import nftImageFrame1 from "../../../Assets/Images/nftImageFrame1.png"
import nftImageFrame2 from "../../../Assets/Images/nftImageFrame2.png"
import nftImageFrame3 from "../../../Assets/Images/nftImageFrame3.png"
import nftImageFrame4 from "../../../Assets/Images/nftImageFrame4.png"
import nftImageFrame5 from "../../../Assets/Images/nftImageFrame5.png"
import nftImageFrame6 from "../../../Assets/Images/nftImageFrame6.png"
import "./MetaGoblin.css"

const discoverVideo = 'https://www.youtube.com/watch?v=TPtQr-ox01M';

const MetaGoblinGallery = () => {
  const settingsGallery = {
    infinite: true,
    autoplay: true,
    speed: 750,
    autoplaySpeed: 3500,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <div className='MetaGoblinGallery-Section'>
      <div className='MetablazeGallery'>
        <div className='metaGoblin_gallery metaGoblinGallery-bg'>
          <div className='container'>
            <img src={metagoblin} className='metaGoblin_nftGalelry' />
            <img src={metagoblinMobile} className='metaGoblin_nftGalelryMobile' />
          </div>
          <div className='row_cards'>
            {/* <a href="https://nftpresale.metablazetoken.com/login" target='_blank' className='mb_button mb_activeBtn home_mb_button'>Mint MetaGoblin NFT</a> */}
            {/* <a href="https://nftpresale.metablazetoken.com/login" target='_blank' className='mb_button mb_activeBtn home_mb_button'>NFT PRESALE Minting October 15th</a> */}
            <li className='headerMintBtn newMintBtn'>
              <a href="https://nftpresale.metablazetoken.com/login" target='_blank' >
                <span>NFT PRESALE</span>
                <br />
                <span>Minting October 15th</span>
              </a>
            </li>
            <div className='metaGoblin_cards'>
              <Slider {...settingsGallery}>
                <Popup trigger={<img src={nftImageFrame1} className='imgWidth' />} position="center center">
                  {close => (
                    <div className='popup_custom'>
                      <span className='popup_tittle'>MYSTICAL KING</span><br /><br />
                      <span className='tittle_table'>APPAREL:</span> CYBERKING CLOAK<br />
                      <span className='tittle_table'>BACKGROUND:</span> GOO GREEN<br />
                      <span className='tittle_table'>BODY:</span>TRANSFORMATIVE<br />
                      <span className='tittle_table'>EARS:</span> KING CURVED<br />
                      <span className='tittle_table'>EYEGLASSES:</span> INTERNAL <br />
                      <span className='tittle_table'>EYES:</span> METAMORPHIC <br />
                      <span className='tittle_table'>HAIR/HAT:</span> CYBER CROWN<br />
                      <span className='tittle_table'>HAND:</span> RADIOACTIVE RINGS <br />
                      <span className='tittle_table'>MOUTH:</span> KING DOME
                      <a className="close" onClick={close}>
                        &times;
                      </a>
                    </div>
                  )}
                </Popup>
                <Popup trigger={<img src={nftImageFrame2} className='middleGoblin' />} position="center center">
                  {close => (
                    <div className='popup_custom'>
                      <span className='popup_tittle'>LEGENDARY</span><br /><br />
                      <span className='tittle_table'>APPAREL:</span> CYBER PACK <br />
                      <span className='tittle_table'>BACKGROUND:</span> MEGENTA-BLUE<br />
                      <span className='tittle_table'>BODY:</span>CYBERNETIC VEINS <br />
                      <span className='tittle_table'>EARS:</span> ELONGATED POINTS<br />
                      <span className='tittle_table'>EYEGLASSES:</span> CRYSTAL VISION GOGGLES <br />
                      <span className='tittle_table'>EYES:</span> META BLUE <br />
                      <span className='tittle_table'>HAIR/HAT:</span> HORNS <br />
                      <span className='tittle_table'>HAND:</span>CYBERNETIC BLACK <br />
                      <span className='tittle_table'>HEAD:</span> FLESH <br />
                      <span className='tittle_table'>MOUTH:</span>FANGS<br/>

                      <a className="close" onClick={close}>
                        &times;
                      </a>
                    </div>
                  )}
                </Popup>
                <Popup trigger={<img src={nftImageFrame3} className='imgWidth' />} position="center center">
                  {close => (
                    <div className='popup_custom'>
                      <span className='popup_tittle'>LEGENDARY</span><br /><br />
                      <span className='tittle_table'>APPAREL:</span> TRI CYBER PACK<br />
                      <span className='tittle_table'>BACKGROUND:</span>MAGENTA-DARK <br />
                      <span className='tittle_table'>BODY:</span> MECHANICAL<br />
                      <span className='tittle_table'>EARS:</span> OVAL<br />
                      <span className='tittle_table'>EYEGLASSES: </span> LASER UNIFRAME<br />
                      <span className='tittle_table'>EYES:</span>MULTI-FUNCTION<br />
                      <span className='tittle_table'>HAIR/HAT:</span> CYBUN<br />
                      <span className='tittle_table'>HAND:</span> SPES INFUSED <br />
                      <span className='tittle_table'>HEAD:</span> FLESH<br />
                      <span className='tittle_table'>MOUTH:</span> MASKED
                      <a className="close" onClick={close}>
                        &times;
                      </a>
                    </div>
                  )}
                </Popup>
                <Popup trigger={<img src={nftImageFrame4} className='middleGoblin' />} position="center center">
                  {close => (
                    <div className='popup_custom'>
                      <span className='popup_tittle'>EPIC</span><br /><br />
                      <span className='tittle_table'>APPAREL:</span> JETPACK<br />
                      <span className='tittle_table'>BACKGROUND:</span> CRYPTOGLYPHICS <br />
                      <span className='tittle_table'>BODY:</span>  BIOMECHANICAL <br />
                      <span className='tittle_table'>EARS:</span>ARCHED <br />
                      <span className='tittle_table'>EYEGLASSES:</span> CYFOCUS<br />
                      <span className='tittle_table'>EYES:</span> ENHANCEMENT<br />
                      <span className='tittle_table'>HAIR/HAT:</span>SPIKE <br />
                      <span className='tittle_table'>HAND:</span> RADIOACTIVE SKULL <br />
                      <span className='tittle_table'>HEAD:</span> FLESH <br />
                      <span className='tittle_table'>MOUTH:</span> FANG SMIRK
                      <a className="close" onClick={close}>
                        &times;
                      </a>
                    </div>
                  )}
                </Popup>
                <Popup trigger={<img src={nftImageFrame5} className='imgWidth' />} position="center center">
                  {close => (
                    <div className='popup_custom'>
                      <span className='popup_tittle'>MYSTICAL</span><br /><br />
                      <span className='tittle_table'>APPAREL:</span> GOB ARMOR <br />
                      <span className='tittle_table'>BACKGROUND:</span> GOO GREEN <br />
                      <span className='tittle_table'>BODY:</span> CYBER GREEN<br />
                      <span className='tittle_table'>EARS:</span> CYBERNETIC <br />
                      <span className='tittle_table'>EYEGLASSES</span> 5D <br />
                      <span className='tittle_table'>EYES:</span> DUAL DIMENSIONAL <br />
                      <span className='tittle_table'>HAIR/HAT:</span> HORNS <br />
                      <span className='tittle_table'>HAND:</span>  TATTED  <br />
                      <span className='tittle_table'>HEAD:</span> FLESH <br />
                      <span className='tittle_table'>MOUTH:</span> DOWN FANG
                      <a className="close" onClick={close}>
                        &times;
                      </a>
                    </div>
                  )}
                </Popup>
                <Popup trigger={<img src={nftImageFrame6} className='middleGoblin' />} position="center center">
                  {close => (
                    <div className='popup_custom'>
                      <span className='popup_tittle'>MYSTICAL</span><br /><br />
                      <span className='tittle_table'>APPAREL:</span> SKINZ<br />
                      <span className='tittle_table'>BACKGROUND:</span> GALACTIC BLUE <br />
                      <span className='tittle_table'>BODY:</span>GOO GREEN <br />
                      <span className='tittle_table'>EARS:</span> ELONGATED POINTS <br />
                      <span className='tittle_table'>EYEGLASSES:</span> CYBER PATCH <br />
                      <span className='tittle_table'>EYES:</span> DUAL X RAY <br />
                      <span className='tittle_table'>HAIR/HAT:</span> MOHAWK <br />
                      <span className='tittle_table'>HAND:</span>MINING GLOVE<br />
                      <span className='tittle_table'>HEAD:</span> FLESH <br />
                      <span className='tittle_table'>MOUTH:</span> ARCHED
                      <a className="close" onClick={close}>
                        &times;
                      </a>
                    </div>
                  )}
                </Popup>
              </Slider>
            </div>
          </div>
        </div>
        <div className='discoverMetaGoblin'>
          <div className='row'>
            <img src={discoverGoblin} className='left_discoverGoblin' />
            <div className='col-lg-12'>
              <img src={discover} className='discover_txt' />
              <img src={discoverMobile} className='discover_txtMobile' />
              <p className='discoverParagraph'>
                In the year 2126, after centuries of unrest, the age of technological singularity led to civil war
                amongst factions of cybernetic armies.
                {/* The use of nuclear weaponry led to a cataclysmic
                explosion devastating Galaxia Blue, home to mystical planets of all known cybernetic species.
                Planet Glozark, home to the MetaGoblin race, survived the galactic explosion but suffered total
                destruction of their Terranzinite supply, a highly coveted radioactive blue crystal. Time was
                limited, and with their cybernetic powers and advanced  consciousness rapidly diminishing, the entire MetaGoblin population was at risk of going extinct. */}
              </p>
              {/* <div className='buttonVideo'>
                <Popup trigger={<button className='mb_button mb_activeBtn btn_video'><img src={play} />MetaGoblin Story</button>} position="center center">
                  <div className='metaGoblinStory_video'>
                    <ReactPlayer url={discoverVideo} playing controls className='video' />
                  </div>
                </Popup>
              </div> */}
              <div className='videoWrapper'>
                <div className='metaGoblinStory_video'>
                  <ReactPlayer url={discoverVideo} playing controls className='video' />
                </div>
                <p className='discoverParagraph'>All  MetaBlaze  products,  be  it  the  games,  the  NFT  characters,
                  the  artwork,  and/or  the  experiences,  follow  a  narrative  of
                  most  epic  proportions  –  the  storytelling  of  the  peoples  of
                  Galaxia  Blue  –  a  distant  and  mysterious  place  marked  with
                  heroism,  villainy,  adventure,  technology,  war,  love,  humor,
                  violence, kindness, and most importantly, Hope (SPES).
                </p>
              </div>
              <div className='buttonVideo'>
                {/* <Popup trigger={<button className='mb_button mb_activeBtn btn_video'><img src={play} />MetaGoblin Story</button>} position="center center" /> */}
              </div>

            </div>
            <img src={discoverGoblin} className='right_discoverGoblin' />
          </div>
        </div>
      </div>
      <img src={divideLine} className='divideLineMG' alt="DivideLine" />
    </div>
  );
}

export default MetaGoblinGallery;