import React from 'react';
import '../../Assets/css/_home.scss';
import {Header, Footer, MetaGoblinGallery, Discover, VideoSlider, Subscribe, Blaziverse} from '../../components';

const Home = () => {
  return (
    <div className="Home-page">
      <Header />
      <MetaGoblinGallery />
      <Discover />
      <VideoSlider />
      <Subscribe />
      <Blaziverse />
      <Footer />
    </div>
  );
}

export default Home;