/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
function Photos() {
    return (
        <div>
            <Navbar />
            <section className="section">
                <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div class="relative mx-auto max-w-7xl">
                        <div class="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
                            <Card
                                img="https://source.unsplash.com/700x350/?citylight"
                                tittle="Beautiful Lights"
                                name="Anupam Mital"
                                desc="There's something about city lights that make them so captivating and romantic.    Maybe it's because they remind us of all the
                                possibilities that exist in the world, or maybe it's because they're just so darn pretty to look at."
                                image="https://img.people-group.com/images/Leadership/anupam-mittal.jpg
                                "
                            />

                            <Card 
                                img="https://source.unsplash.com/700x350/?sea"
                                tittle="Beautiful Sea"
                                name="Shasha Grey"
                                desc="Our love is as deep as the ocean.” “If you want to know how much I love you, count all the waves in the sea.” “As the ocean is never full of water, so is the heart never full of love.” “I love you more than there are grains of sand on the beach, fish in the sea, and waves in the ocean."
                                image="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515135672-shutterstock_284581649.jpg"
                            />

                            <Card 
                                img="https://source.unsplash.com/700x350/?universe"
                                tittle="Universe Explorer"
                                name="Steve Harington"
                                desc="The universe is nearly 14 billion years old, our solar system is 4.6 billion years old, life on Earth has existed for maybe 3.8 billion years, and humans have been around for only a few hundred thousand years. In other words, the universe has existed roughly 56,000 times longer than our species has."
                                image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80"
                            />
                        </div>
                    </div>
                </div>
                <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div class="relative mx-auto max-w-7xl">
                        <div class="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
                            <Card
                                img="https://source.unsplash.com/700x350/?mount"
                                tittle="Beautiful Mountains"
                                name="Sourya Vashisth"
                                desc="The mountains are an extraordinary environment of biological diversity, cultural diversity and linguistic diversity. Standing firmly vertical, the mountains defy the gravity of the Earth and peek out from the sky. Mountains in every aspect of their uniqueness seem completely different from this world."
                                image="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                            />

                            <Card 
                                img="https://source.unsplash.com/700x350/?birds"
                                tittle="Beautiful Birds"
                                name="Sr Su Sa"
                                desc="Birds' bodies are covered with a light, tough layer of feathers and they have very light skeletons. Instead of teeth, they have hornlike beaks, or bills. Birds hatch from eggs, and many species build nests where their eggs and young can develop in safety. Only about 40 bird species cannot fly."
                                image="https://static.vecteezy.com/system/resources/thumbnails/022/189/839/small/flirty-random-pose-of-an-indian-girl-image-generative-ai-photo.jpg"
                            />

                            <Card 
                                img="https://source.unsplash.com/700x350/?wildlife"
                                tittle="Wild Life"
                                name="Devraj Latte"
                                desc="Wildlife means undomesticated animal species. All living things which are neither human nor domesticated, especially mammals, birds, and fishes, are known as wildlife. But in its strictest sense, it includes uncultivated mammals, reptiles, birds and fishes etc. which are generally hunted"
                                image="https://t3.ftcdn.net/jpg/04/63/22/18/360_F_463221858_50KkvfxxovUaMNlilCmUxrOnTqSpzAlP.jpg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    );
}

export default Photos;