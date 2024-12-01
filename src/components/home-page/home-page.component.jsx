import React from "react";

import './home-page.component.scss';

import dragonImage from '../../images/tulpagotchi-images/Dragon/Basic/Basic_Baby/Basic_Baby_Cyan_Pink.png';
import gryphonImage from '../../images/tulpagotchi-images/Gryphon/Mottled/Mottled_Baby/Mottled_Baby_Green_Red.png';
import krakenImage from '../../images/tulpagotchi-images/Kraken/Striped/Striped_Baby/Striped_Baby_Black_White.png';
import cthulhuImage from '../../images/tulpagotchi-images/Cthulhu/Mottled/Mottled_Baby/Mottled_Baby_Pink_Purple.png';
import phoenixImage from '../../images/tulpagotchi-images/Phoenix/Striped/Striped_Baby/Striped_Baby_Red_Yellow.png';

function HomePage() {
    return (
        <div>
            <h1>What is Tulpagotchi</h1>
            <div id="what-is-it">
                <p>A <strong>tulpa</strong> a being or thought-form that is created through intense concentration and spiritual practice, and is often in the form of a human. A <strong>tamagotchi</strong> is a handheld digital pet. A <strong>tulpagotchi</strong> therefore is a digital being created from your imagination. Ours take the form of dragons, gryphons, krakens, cthulhus, and phoenixes.</p>
                <div id='image-container'>
                    <img src={dragonImage} alt="dragon image" className="home-page-image"/>
                    <img src={gryphonImage} alt="gryphon image" className="home-page-image"/>
                    <img src={krakenImage} alt="kraken image" className="home-page-image"/>
                    <img src={cthulhuImage} alt="cthulhu image" className="home-page-image"/>
                    <img src={phoenixImage} alt="phoenix image" className="home-page-image"/>
                </div>
            </div>
            <h1>How It Works</h1>
            <div id="how-it-works">
                <p>Starting off with two randomly generated dragons, you can grow your collection until you have all the colors and patterns</p>
            </div>
        </div>
    )
}

export default HomePage;