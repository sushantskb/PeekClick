import React from "react";
import Navbar from "./Navbar"
import Slider from "./Slider"
import Content from "./Content";
import Works from "./Works"
import Footer from "./Footer";
function App() {
    return (
        <>
            <Navbar />
            <Slider />
            <Content />
            <div>
                <h1 className="tittle">Works</h1>
            </div>
            <Works
                mainImage="https://source.unsplash.com/700x350/?citylight"
                img="https://img.people-group.com/images/Leadership/anupam-mittal.jpg"
                name="Anupam Mital"
                tittle="Beatiful Lights"
                details="There's something about city lights that make them so captivating and romantic.    Maybe it's because they remind us of all the
                possibilities that exist in the world, or maybe it's because they're just so darn pretty to look at. No matter what the reason is, there's no denying that city lights are some of the most beautiful things in the world."
                desc="Founder OF Shaadi.com"
            />
            <Works 
                mainImage="https://source.unsplash.com/700x350/?sea"
                img="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515135672-shutterstock_284581649.jpg"
                name="Shasha Grey"
                tittle="Beautiful Sea"
                details="Our love is as deep as the ocean.” “If you want to know how much I love you, count all the waves in the sea.” “As the ocean is never full of water, so is the heart never full of love.” “I love you more than there are grains of sand on the beach, fish in the sea, and waves in the ocean."
                desc="Student at IITM"
            />
            <Works 
                mainImage="https://source.unsplash.com/700x350/?universe"
                img="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80"
                name="Steve Harington"
                tittle="Universe Explorer"
                details="The universe is nearly 14 billion years old, our solar system is 4.6 billion years old, life on Earth has existed for maybe 3.8 billion years, and humans have been around for only a few hundred thousand years. In other words, the universe has existed roughly 56,000 times longer than our species has."
                desc="Student at NASA"
            />
            <Footer />
        </>
    );
}

export default App;