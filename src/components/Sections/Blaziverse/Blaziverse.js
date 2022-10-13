import React from 'react';
import '../../../Assets/css/_blaziverse.scss';
import metablazeToken from '../../../Assets/Images/SVG/Fonts/txt-metablazeToken.svg';
import metablazeToken2 from '../../../Assets/Images/SVG/Fonts/txt-metablazeToken2.png';
import metablazeToken3 from '../../../Assets/Images/SVG/Fonts/txt-metablazeToken3.png';

import metablazeTokenMobile from '../../../Assets/Images/SVG/Fonts/txt-metablazeToken-mobile.svg';
import blaziverseMobile from '../../../Assets/Images/blaziverse-mobile.png';
import blaziverse_rightBlob from '../../../Assets/Images/Blobs/rightBlob-blaziverse.png';
import blaziverse_Grid from '../../../Assets/Images/Grids/grid-blaziverse.png';

class Blaziverse extends React.Component {
    render() {
        return (
            <div className='Blaziverse'>
                <img src={blaziverse_rightBlob} className='blaziverse_rightBlob absElement' alt="" />
                <img src={blaziverse_Grid} className='blaziverse_Grid absElement' alt="" />
                <div className='container '>
                    <div className='blaziverse_box metablazeToken'>
                        <div className='row '>
                            <div className='col-lg-7 col-sm-12 '>
                                <img src={metablazeToken2} className='blaziverse_tittle' alt="" />
                                <img src={metablazeToken3} className='blaziverse_tittle_mobile' alt="" />
                                <p className='blaziverse_paragraph newPara'>
                                    {/* MetaBlaze is a blockchain gaming firm but unlike the rest, MetaBlaze differentiates itself 
                                    with its multifaceted and synergistic ecosystem designed for gamers, and non-gamers alike. 
                                    MetaBlaze merges popular elements of Web 3 technologies to bring a one-of-a-kind ecosystem 
                                    to the crypto space with an impact-focused roadmap. */}
                                    MetaBlaze  is  a  visionary,  rewards-generating  gaming
                                    platform designing an immersive and socially dynamic
                                    play  to  earn  crypto  metaverse  through  compelling
                                    worldbuilding,  NFT  art  and  rich  narratives.  The  first
                                    ever  revolving-rewards-pool:  Play  to  Earn  Bitcoin,
                                    Ethereum, Binance, Solana, more in the Blaziverse dApp.
                                </p>
                                <a href='https://metablazetoken.com/' target='_blank' className='mb_button mb_activeBtn btn_blaziverse'>Visit MetaBlaze</a>
                                {/* <div>
                                    <a href='https://metablazetoken.com/' target='_blank' className='mb_button mb_activeBtn btn_blaziverse'>Visit MetaBlaze</a>
                                </div> */}
                            </div>
                            {/* <div className='col-lg-5 col-sm-12'>
                                <img src={blaziverseMobile} className='blaziverse_mobile' />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blaziverse;