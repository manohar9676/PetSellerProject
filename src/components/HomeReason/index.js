import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import "./HomeReason.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function HomeReason() {
    const boxVariant = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
            },
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
            },
        },
    };

    const control = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            control.start("open");
        } else {
            control.start("closed");
        }
    }, [control, inView]);
    return (
        <section className="home-reason-container">
            <div className="home-reason-container-detail">
                <h2 className="home-reason-title">
                Why should you buy from us?
                </h2>
                <div className="home-reason-main">
                    <div className="home-reason-left">
                        <img src="/assets/images/home/why.jpg" alt="Reason" />
                    </div>
                    <motion.div
                        className="home-reason-right"
                        ref={ref}
                        variants={boxVariant}
                        animate={control}
                        initial="closed"
                    >
                        <div className="home-reason-right-space">
                            <div className="home-reason-right-detail">
                                <Icon
                                    icon="ant-design:customer-service-filled"
                                    className="home-reason-icon-reason"
                                />
                                <div className="home-reason-right-content">
                                    <h3 className="home-reason-right-title">
                                    Healthy and Well-Cared-For Dogs
                                    </h3>
                                    <p>
                                    Every dog in our store is raised with love, proper care, and under the guidance of experienced veterinarians. We ensure they receive vaccinations, regular health checkups, and a happy environment.
                                    </p>
                                </div>
                            </div>
                            <div className="home-reason-right-detail">
                                <Icon
                                    icon="bi:file-earmark-post"
                                    className="home-reason-icon-reason"
                                />
                                <div className="home-reason-right-content">
                                    <h3 className="home-reason-right-title">
                                    Wide Range of Purebred and Mixed Breeds                                    </h3>
                                    <p>
                                    We offer a variety of dog breeds to suit every home and lifestyle, with a guarantee of authenticity and transparency about each breed's temperament, characteristics, and care needs.
                                    </p>
                                </div>
                            </div>
                            <div className="home-reason-right-detail">
                                <Icon
                                    icon="entypo:price-tag"
                                    className="home-reason-icon-reason"
                                />
                                <div className="home-reason-right-content">
                                    <h3 className="home-reason-right-title">
                                    Lifetime Support and Guidance                                    </h3>
                                    <p>
                                    Our commitment doesn't end with the sale. We provide lifetime support to help you raise a happy and healthy pet. From advice on training to guidance on nutrition, we’re here for you every step of the way.
                                    </p>
                                </div>
                            </div>
                          
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="home-reason-container-detail-second">
                <div className="home-reason-title-second">
                    <h4>Why should you buy from us?</h4>
                    <hr />
                </div>
                <div className="home-reason-content-second">
                    <div className="home-reason-content-detail-second">
                        <Icon
                            icon="ant-design:customer-service-filled"
                            className="home-reason-icon-reason"
                        />
                        <div className="home-reason-right-content">
                            <h4 className="home-reason-right-title">
                            Ethically Bred and Sourced Dogs
                            </h4>
                            <p>
                            We prioritize ethical practices, working only with responsible breeders who uphold the highest standards of animal welfare.
                            </p>
                        </div>
                    </div>
                    <div className="home-reason-content-detail-second">
                        <Icon
                            icon="bi:file-earmark-post"
                            className="home-reason-icon-reason"
                        />
                        <div className="home-reason-right-content">
                            <h4 className="home-reason-right-title">
                            Personalized Matchmaking Service
                            </h4>
                            <p>
                            We help you find the perfect companion based on your preferences, lifestyle, and experience with dogs, ensuring a seamless fit for your family.
                            </p>
                        </div>
                    </div>
                    <div className="home-reason-content-detail-second">
                        <Icon
                            icon="entypo:price-tag"
                            className="home-reason-icon-reason"
                        />
                        <div className="home-reason-right-content">
                            <h4 className="home-reason-right-title">
                            Comprehensive Starter Kit
                            </h4>
                            <p>
                            Every dog comes with a starter kit that includes essential items like food, a collar, a toy, and care guidelines to help you transition smoothly into pet ownership.
                            </p>
                        </div>
                    </div>
                    <div className="home-reason-content-detail-second">
                        <Icon
                            icon="uiw:global"
                            className="home-reason-icon-reason"
                        />
                        <div className="home-reason-right-content">
                            <h4 className="home-reason-right-title">
                            Flexible Purchase Plans and Delivery Options
                            </h4>
                            <p>
                            We offer flexible payment plans and the option to deliver your furry friend safely to your doorstep, ensuring convenience and peace of mind.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeReason;
