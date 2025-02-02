import React, { useEffect } from "react";
import "./Introduction.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Collapse, Text } from "@nextui-org/react";

function Introduction() {
    const boxLeftVariant = {
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, x: -100 },
    };

    const boxRightVariant = {
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, x: 200 },
    };

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);
    var imageIndex = 0;
    ImageSlider();

    function ImageSlider() {
        var introInfo = document.getElementsByClassName("intro-active");
        var imageEvent = document.getElementsByClassName("image-active");
        var contentActivity = document.getElementsByClassName("content-active");

        var i;

        for (i = 0; i < imageEvent.length; i++) {
            imageEvent[i].style.display = "none";
            contentActivity[i].style.display = "none";
        }

        imageIndex++;
        if (imageIndex > imageEvent.length) {
            imageIndex = 1;
        }

        for (i = 0; i < introInfo.length; i++) {
            introInfo[i].className = introInfo[i].className.replace(
                " active-intro",
                ""
            );
        }

        for (i = 0; i < imageEvent.length; i++) {
            imageEvent[imageIndex - 1].style.display = "block";
            contentActivity[imageIndex - 1].style.display = "block";
            break;
        }

        for (i = 0; i < introInfo.length; i++) {
            introInfo[imageIndex - 1].className += " active-intro";
            break;
        }

        setTimeout(ImageSlider, 2000);
    }
    return (
        <section className="introduction-container">
            <div className="introduction-container-detail">
                {/* <div className="introduction-main">
                    <motion.div
                        className="introduction-left"
                        ref={ref}
                        variants={boxLeftVariant}
                        initial="hidden"
                        animate={control}
                    >
                        <h2>Giới thiệu về PetCare</h2>
                        <p>
                            PetCare là một dịch vụ chuyên về thú cưng. Mọi khó
                            khăn của bạn đối với thú cưng sẽ đáp ứng một cách
                            đầy đủ tại PetCare
                        </p>
                        <div className="introduction-left-detail intro-active fade">
                            <h4>Sản phẩm đa dạng</h4>
                            <p className="content-active">
                                Thức ăn dành cho thú cưng luôn có ở chúng tôi
                            </p>
                        </div>
                        <div className="introduction-left-detail intro-active fade">
                            <h4>Nhân viên nhiệt tình</h4>
                            <p className="content-active">
                                Nhân viên tại PetCare đồng hành cùng khách hàng
                            </p>
                        </div>
                        <div className="introduction-left-detail intro-active fade">
                            <h4>Bài viết đầy đủ</h4>
                            <p className="content-active">
                                Bài viết về PetCare luôn được cập nhật liên tục
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="introduction-right"
                        ref={ref}
                        variants={boxRightVariant}
                        initial="hidden"
                        animate={control}
                    >
                        <img
                            src="/assets/images/home/Vector.png"
                            alt="Vector"
                        />
                        <div className="introduction-right-image">
                            <div className="image-active">
                                <img
                                    src="/assets/images/home/petfood.webp"
                                    alt="petfood"
                                />
                            </div>
                            <div className="image-active">
                                <img
                                    src="/assets/images/home/petfood.webp"
                                    alt="petfood"
                                />
                            </div>
                            <div className="image-active">
                                <img
                                    src="/assets/images/home/petfood.webp"
                                    alt="petfood"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="introduction-main-second">
                    <div className="introduction-main-title-second">
                        <h4>Giới thiệu</h4>
                        <hr />
                    </div>
                    <div className="introduction-main-detail-second">
                        <div className="introduction-main-left-second">
                            <div className="introduction-main-content-second">
                                <p>
                                    PetCare là một dịch vụ chuyên về thú cưng.
                                    Mọi khó khăn của bạn đối với thú cưng sẽ đáp
                                    ứng một cách đầy đủ tại PetCare
                                </p>
                            </div>
                            <div className="introduction-main-content-collapse">
                                <Collapse.Group>
                                    <Collapse title="Sản phẩm đa dạng">
                                        <Text>
                                            Thức ăn của thú cưng luôn có ở chúng
                                            tôi
                                        </Text>
                                    </Collapse>
                                    <Collapse title="Nhân viên nhiệt tình">
                                        <Text>
                                            Nhân viên tại PetCare đồng hành cùng
                                            khách hàng
                                        </Text>
                                    </Collapse>
                                    <Collapse title="Bài viết đầy đủ">
                                        <Text>
                                            Bài viết về PetCare luôn được cập
                                            nhật liên tục
                                        </Text>
                                    </Collapse>
                                </Collapse.Group>
                            </div>
                        </div>
                        <div className="introduction-main-content-right">
                            <img
                                src="/assets/images/home/intro-pet.png"
                                alt="Giới thiệu"
                            />
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
export default Introduction;
