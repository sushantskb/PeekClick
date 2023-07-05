import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider"
import Content from "./Content";
import Works from "./Works"
function App() {
    return (
        <>
            <Navbar />
            <Slider />
            <Content />
            <Works
                mainImage="https://source.unsplash.com/700x350/?city"
                img="https://img.people-group.com/images/Leadership/anupam-mittal.jpg"
                name="Anupam Mital"
                tittle="Beatiful Lights"
                details="There's something about city lights that make them so captivating and romantic.    Maybe it's because they remind us of all the
                possibilities that exist in the world, or maybe it's because they're just so darn pretty to look at. No matter what the reason is, there's no denying that city lights are some of the most beautiful things in the world."
                desc="Founder OF Shaadi.com"
            />
            <Works 
                mainImage="https://source.unsplash.com/700x350/?sea"
                img="https://media.istockphoto.com/id/1196172395/photo/in-the-photo-studio-with-professional-equipment-portrait-of-the-famous-photographer-holding.jpg?s=170667a&w=0&k=20&c=ntBkxRuMM3gI17PYu3c9WOTCycnqyL7GD-RqZF2uENM="
                name="Jhon Barams"
                tittle="Beautiful Sea"
                details="Our love is as deep as the ocean.” “If you want to know how much I love you, count all the waves in the sea.” “As the ocean is never full of water, so is the heart never full of love.” “I love you more than there are grains of sand on the beach, fish in the sea, and waves in the ocean."
                desc="Student at IITM"
            />
        </>
    );
}

export default App;