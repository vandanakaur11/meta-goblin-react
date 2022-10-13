import React from 'react';
import Popup from 'reactjs-popup';
import '../../../Assets/css/_discover.scss';
import king from '../../../Assets/Images/SVG/Fonts/txt-king.svg';
import legend from '../../../Assets/Images/SVG/Fonts/txt-legend.svg';
import epic from '../../../Assets/Images/SVG/Fonts/txt-epic.svg';
import mystical from '../../../Assets/Images/SVG/Fonts/txt-mystical.svg';
import goblinKing from '../../../Assets/Images/Goblins/Discover/Goblin-KING-Discover.png';
import goblinLegend from '../../../Assets/Images/Goblins/Discover/Goblin-LEGEND-Discover.png';
import goblinEpic from '../../../Assets/Images/Goblins/Discover/Goblin-EPIC-Discover.png';
import goblinMystical from '../../../Assets/Images/Goblins/Discover/Goblin-MYSTICAL-Discover.png';
import rightCracked from '../../../Assets/Images/Decors/cracked-line-1.png';
import leftCracked from '../../../Assets/Images/Decors/cracked-line-2.png';
import neonLine from '../../../Assets/Images/Decors/neon-line.png';
import discover_leftBlob from '../../../Assets/Images/Blobs/leftBlob.png';
import discover_rightBlob from '../../../Assets/Images/Blobs/rightBlob.png';
import discoverGrid from '../../../Assets/Images/Grids/grid-discover.png';
import coins from '../../../Assets/Images/SVG/coins.svg';
import Lottie from "react-lottie";
import animationData from '../../../Assets/Lottie/discover-lottie.json';
import ReactPlayer from 'react-player';
import metgoblinKing from "../../../Assets/Images/king.jpg"
import metagoblinlegend from "../../../Assets/Images/Legend.jpg"
import metagoblinEpic from "../../../Assets/Images/Epic .jpg"
import metagoblinMystical from "../../../Assets/Images/Mystical .jpg"
import "./Discover.css"
import Timer from '../../Timer/Timer';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const rewardsVideo = "https://www.youtube.com/embed/-LP8j7g2RJY";

class Discover extends React.Component {
    render() {
        return (
            <div className='Discover'>
                <img src={rightCracked} className='right_cracked absElement' />
                <img src={leftCracked} className='left_cracked absElement' />
                <img src={neonLine} className='neonLine absElement' />
                <img src={discover_leftBlob} className='discover_leftBlob absElement' />
                <img src={discover_rightBlob} className='discover_rightBlob absElement' />
                <img src={discoverGrid} className='discover_grid absElement' />
                <div className='container'>
                    {/* <div className='discoverLottie'>
                        <Lottie
                            options={defaultOptions}
                            title="dsicover-metablaze"
                        />
                    </div> */}
                    {/* <div style={{marginBottom:"240px",}}>
                        <ReactPlayer url={rewardsVideo} controls className='video' />
                    </div> */}
                    <div className='vid'>
                        {/* <video width="100%" height="" poster={vidImage} controls> */}
                        <iframe width="100%" height="100%" src={rewardsVideo} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        {/* </video> */}
                        {/* <ReactPlayer url={rewardsVideo} playing controls className='video' /> */}
                    </div>
                    <Timer />
                    <div className='row tst'>
                        <div className='col-lg-6'>

                            <div className='discover_box '>
                                <img src={king} className='discover_tittle'></img>
                                <img src={metgoblinKing} className='discover_goblin'></img>
                                <p className='description_txt'>
                                    Oftentimes referred to as “The Three”, each MetaGoblin King represents one of the MetaGoblin
                                    classes.  The Mystical MetaGoblin King is Klep-Tu. The Epic MetaGoblin King is Fieragort, and
                                    the Legendary MetaGoblin King is Goblorn.  All Kings display equal prowess in the form of
                                    SPES Petal attunement, and all Kings may perform the same actions of the ...
                                </p>
                                <Popup trigger={<button className='btn_seeMore'>See more</button>} position="center center">
                                    {close => (
                                        <div className='popup_custom'>
                                            <span className='popup_tittle'>KING</span><br /><br />
                                            Oftentimes referred to as “The Three”, each MetaGoblin King represents one of the MetaGoblin
                                            classes.  The Mystical MetaGoblin King is Klep-Tu. The Epic MetaGoblin King is Fieragort, and
                                            the Legendary MetaGoblin King is Goblorn.  All Kings display equal prowess in the form of
                                            SPES Petal attunement, and all Kings may perform the same actions of the MetaGoblin classes
                                            they preside over – though Kings do have the highest chance of achieving superior outcomes
                                            when crafting
                                            <a href='https://drive.google.com/file/d/1OxhIVvQOj9wnONUSbwcSQx2DbDyR_Pu-/view' target='_blank' className='hyperlink_lp'> See full utility list here </a>
                                            <a className="close" onClick={close}>
                                                &times;
                                            </a>
                                        </div>
                                    )}
                                </Popup>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='discover_box newBox'>
                                <img src={legend} className='discover_tittle'></img>
                                <img src={metagoblinlegend} className='discover_goblin'></img>
                                <p className='description_txt'>
                                    Only 100 MetaGoblins hold the title of Legendary, having earned the most prestigious moniker
                                    by performing beyond admirably in MetaGoblin society.  All 100 Legendary MetaGoblins
                                    volunteered to travel to the SES Moon – a mission motivated by desperation and a sheer will to
                                    save the MetaGoblin society from extinction.  Like all MetaGoblins ...
                                </p>
                                <Popup trigger={<button className='btn_seeMore'>See more</button>} position="center center">
                                    {close => (
                                        <div className='popup_custom'>
                                            <span className='popup_tittle'>LEGEND</span><br /><br />
                                            Only 100 MetaGoblins hold the title of Legendary, having earned the most prestigious moniker
                                            by performing beyond admirably in MetaGoblin society.  All 100 Legendary MetaGoblins
                                            volunteered to travel to the SES Moon – a mission motivated by desperation and a sheer will to
                                            save the MetaGoblin society from extinction.  Like all MetaGoblins, Legendary MetaGoblins can
                                            command lesser Goblins, can achieve even greater success when crafting items, and are even
                                            more attuned with the SPES flower than the Epic and Mystical MetaGoblins.
                                            <a href='https://drive.google.com/file/d/1OxhIVvQOj9wnONUSbwcSQx2DbDyR_Pu-/view' target='_blank' className='hyperlink_lp'> See full utility list here </a>
                                            <a className="close" onClick={close}>
                                                &times;
                                            </a>
                                        </div>
                                    )}
                                </Popup>
                            </div>
                        </div>
                    </div>
                    <div className='row tst'>
                        <div className='col-lg-6'>
                            <div className='discover_box newBox'>
                                <img src={epic} className='discover_tittle'></img>
                                <img src={metagoblinEpic} className='discover_goblin'></img>
                                <p className='description_txt'>
                                    1,000 MetaGoblins were given the title of Epic.  Epic MetaGoblins are more likely to craft higher
                                    quality items, and display a stronger alignment with the SPES Flower and its numerous
                                    capabilities.  Epic MetaGoblins achieved their title by displaying exceptional character,
                                    leadership skills, and discipline.  An Epic MetaGoblin is able to work longer and ...
                                </p>
                                <Popup trigger={<button className='btn_seeMore'>See more</button>} position="center center">
                                    {close => (
                                        <div className='popup_custom'>
                                            <span className='popup_tittle'>EPIC</span><br /><br />
                                            1,000 MetaGoblins were given the title of Epic.  Epic MetaGoblins are more likely to craft higher
                                            quality items, and display a stronger alignment with the SPES Flower and its numerous
                                            capabilities.  Epic MetaGoblins achieved their title by displaying exceptional character,
                                            leadership skills, and discipline.  An Epic MetaGoblin is able to work longer and harder before
                                            requiring rest.  Like all MetaGoblins, Epics can lead teams of lesser Goblins in mines and other
                                            instances, and can upgrade their team
                                            <a href='https://drive.google.com/file/d/1OxhIVvQOj9wnONUSbwcSQx2DbDyR_Pu-/view' target='_blank' className='hyperlink_lp'> See full utility list here </a>
                                            <a className="close" onClick={close}>
                                                &times;
                                            </a>
                                        </div>
                                    )}
                                </Popup>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='discover_box newBox'>
                                <img src={mystical} className='discover_tittle'></img>
                                <img src={metagoblinMystical} className='discover_goblin'></img>
                                <p className='description_txt'>
                                    The 8,897 Mystical MetaGoblins are the backbone of MetaGoblin society.  All MetaGoblins are
                                    natural crafters – with the Mystical MetaGoblins serving as the largest population of elite crafters
                                    on Planet Glozark.  Like all MetaGoblins, Mysticals are able to manage lesser Goblins under
                                    their employ to assist them in their endeavors.  While under ...
                                </p>
                                <Popup trigger={<button className='btn_seeMore'>See more</button>} position="center center">
                                    {close => (
                                        <div className='popup_custom'>
                                            <span className='popup_tittle'>MYSTICAL</span><br /><br />
                                            The 8,897 Mystical MetaGoblins are the backbone of MetaGoblin society.  All MetaGoblins are
                                            natural crafters – with the Mystical MetaGoblins serving as the largest population of elite crafters
                                            on Planet Glozark.  Like all MetaGoblins, Mysticals are able to manage lesser Goblins under
                                            their employ to assist them in their endeavors.  While under their employ, Goblins may be
                                            upgraded to perform additional functions on behalf of their MetaGoblin leader.   It is no small
                                            honor to be given the title of ‘Mystical’, and all MetaGoblins who don it do so with immense
                                            pride
                                            <a href='https://drive.google.com/file/d/1OxhIVvQOj9wnONUSbwcSQx2DbDyR_Pu-/view' target='_blank' className='hyperlink_lp'> See full utility list here </a>
                                            <a className="close" onClick={close}>
                                                &times;
                                            </a>
                                        </div>
                                    )}
                                </Popup>
                            </div>
                        </div>
                    </div>
                    <img src={coins} className='coins' />
                </div>
            </div>
        );
    }
}

export default Discover;