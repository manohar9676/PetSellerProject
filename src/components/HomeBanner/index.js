import React from "react";
import { Link } from "react-router-dom";
import "./HomeBanner.css";

function HomeBanner() {
    return (
        <section className="home-banner-container">
            <div className="home-banner-container-detail">
                <div className="home-banner-main">
                    <div className="home-banner-left">
                        <div className="home-banner-left-detail">
                            <h1 className="home-banner-left-title">
                                Hay Looking for Pet?
                            </h1>
                            <p className="home-banner-left-content">
                                You are in right platform!
                            </p>
                        </div>
                        <div className="home-banner-left-button">
                            <Link to="/">Begin</Link>
                        </div>
                    </div>
                    <div className="home-banner-right">
                        <img
                            src="/assets/images/home/background-right.png"
                            alt="PetCare banner"
                        />
                    </div>
                </div>
                <div className="home-banner-main-second">
                    <div className="home-banner-left">
                        <img
                            src="/assets/images/home/dogHat.png"
                            alt="PetCare banner"
                        />
                    </div>
                    <div className="home-banner-center">
                        <div className="home-banner-center-detail">
                            <h1 className="home-banner-center-title">
                                Are you looking for a better dog breed?
                            </h1>
                            <p className="home-banner-center-content">
                                Please look at what we have offering
                            </p>
                            <Link to="/">Begin</Link>
                        </div>
                    </div>
                    <div className="home-banner-right">
                        <img
                            src="/assets/images/home/catBallNew.png"
                            alt="PetCare banner"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeBanner;
