import React from "react";
import HomeSlider from "./HomeSlider";

function Banner() {
    return (
        <>
            <section className="banner">
                <div className="owl-carousel owl-carousel1 owl-theme">
                    <HomeSlider/>
                </div>
            </section>
        </>
    )
} export default Banner;