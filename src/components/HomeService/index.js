import React, { useEffect } from "react";
import "./HomeService.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function HomeService() {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 },
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
    return (
        <section className="home-service-container">
          <motion.div
    className="home-service-container-detail"
    ref={ref}
    // variants={boxVariant}
    // initial="hidden"
    // animate={control}
>
    <h2>The breeds we have</h2>
    <div className="home-service-main">
        {[
            {
                src: "/assets/images/home/labradoodle.jpg",
                alt: "labradoodle",
                name: "Labradoodle",
                cost: "₹60,000 - ₹1,00,000",
            },
            {
                src: "/assets/images/home/Bernedoodle.jpg",
                alt: "Bernedoodle",
                name: "Bernedoodle",
                cost: "₹35,000 - ₹70,000",
            },
            {
                src: "/assets/images/home/Goldendoodle.jpg",
                alt: "Goldendoodle",
                name: "Goldendoodle",
                cost: "₹35,000 - ₹50,000",
            },
            {
                src: "/assets/images/home/pembroke-welsh-corgi.jpg",
                alt: "pembroke-welsh-corgi",
                name: "pembroke-welsh-corgi",
                cost: "₹30,000 - 1,00,000",
            },
            {
                src: "/assets/images/home/Affenpinscher-2.jpg",
                alt: "Affenpinscher",
                name: "Affenpinscher",
                cost: "₹70,000 - ₹1,00,000",
            },
            {
                src: "/assets/images/home/American-Staffordshire-Terrier.jpg",
                alt: "American-Staffordshire-Terrier",
                name: "American-Staffordshire-Terrier",
                cost: "₹35,000 - ₹85,000",
            },
            {
                src: "/assets/images/home/labradoodle.jpg",
                alt: "labradoodle",
                name: "Labradoodle",
                cost: "₹60,000 - ₹1,00,000",
            },
            {
                src: "/assets/images/home/Bernedoodle.jpg",
                alt: "Bernedoodle",
                name: "Bernedoodle",
                cost: "₹35,000 - ₹70,000",
            },
            {
                src: "/assets/images/home/Goldendoodle.jpg",
                alt: "Goldendoodle",
                name: "Goldendoodle",
                cost: "₹35,000 - ₹50,000",
            },
            {
                src: "/assets/images/home/pembroke-welsh-corgi.jpg",
                alt: "pembroke-welsh-corgi",
                name: "pembroke-welsh-corgi",
                cost: "₹30,000 - 1,00,000",
            },
            {
                src: "/assets/images/home/Affenpinscher-2.jpg",
                alt: "Affenpinscher",
                name: "Affenpinscher",
                cost: "₹70,000 - ₹1,00,000",
            },
            {
                src: "/assets/images/home/American-Staffordshire-Terrier.jpg",
                alt: "American-Staffordshire-Terrier",
                name: "American-Staffordshire-Terrier",
                cost: "₹35,000 - ₹85,000",
            },
            {
                src: "/assets/images/home/labradoodle.jpg",
                alt: "labradoodle",
                name: "Labradoodle",
                cost: "₹60,000 - ₹1,00,000",
            },
            {
                src: "/assets/images/home/Bernedoodle.jpg",
                alt: "Bernedoodle",
                name: "Bernedoodle",
                cost: "₹35,000 - ₹70,000",
            },
            {
                src: "/assets/images/home/Goldendoodle.jpg",
                alt: "Goldendoodle",
                name: "Goldendoodle",
                cost: "₹35,000 - ₹50,000",
            },
            {
                src: "/assets/images/home/pembroke-welsh-corgi.jpg",
                alt: "pembroke-welsh-corgi",
                name: "pembroke-welsh-corgi",
                cost: "₹30,000 - 1,00,000",
            },
            {
                src: "/assets/images/home/Affenpinscher-2.jpg",
                alt: "Affenpinscher",
                name: "Affenpinscher",
                cost: "₹70,000 - ₹1,00,000",
            },
            {
                src: "/assets/images/home/American-Staffordshire-Terrier.jpg",
                alt: "American-Staffordshire-Terrier",
                name: "American-Staffordshire-Terrier",
                cost: "₹35,000 - ₹85,000",
            },
            {
                src: "/assets/images/home/labradoodle.jpg",
                alt: "labradoodle",
                name: "Labradoodle",
                cost: "₹60,000 - ₹1,00,000",
            },
            {
                src: "/assets/images/home/Bernedoodle.jpg",
                alt: "Bernedoodle",
                name: "Bernedoodle",
                cost: "₹35,000 - ₹70,000",
            },
            {
                src: "/assets/images/home/Goldendoodle.jpg",
                alt: "Goldendoodle",
                name: "Goldendoodle",
                cost: "₹35,000 - ₹50,000",
            },
            {
                src: "/assets/images/home/pembroke-welsh-corgi.jpg",
                alt: "pembroke-welsh-corgi",
                name: "pembroke-welsh-corgi",
                cost: "₹30,000 - 1,00,000",
            },
            {
                src: "/assets/images/home/Affenpinscher-2.jpg",
                alt: "Affenpinscher",
                name: "Affenpinscher",
                cost: "₹70,000 - ₹1,00,000",
            },
            {
                src: "/assets/images/home/American-Staffordshire-Terrier.jpg",
                alt: "American-Staffordshire-Terrier",
                name: "American-Staffordshire-Terrier",
                cost: "₹35,000 - ₹85,000",
            },
        ].map((item, index) => (
            <div className="card" style={{ width: "35rem", margin: "1rem" }} key={index}>
                <img className="card-img-top" src={item.src} alt={item.alt} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Cost: {item.cost}</p>
                 
                </div>
            </div>
        ))}
    </div>
</motion.div>


            {/* <div className="home-service-container-detail-second">
                <div className="home-service-title-second">
                    <h4>Các loại dịch vụ</h4>
                    <hr />
                </div>
                <div className="home-service-main-second">
                    <div className="home-service-main-second-detail">
                        <div className="home-service-main-second-detail-content">
                            <img
                                src="/assets/images/home/cattialong.png"
                                alt="Cắt tỉa lông"
                            />
                            <h5>Cắt tỉa lông</h5>
                        </div>
                    </div>
                    <div className="home-service-main-second-detail">
                        <div className="home-service-main-second-detail-content">
                            <img
                                src="/assets/images/home/chamsocsuckhoe.png"
                                alt="Chăm sóc sức khỏe"
                            />
                            <h5>Chăm sóc sức khỏe</h5>
                        </div>
                    </div>
                    <div className="home-service-main-second-detail">
                        <div className="home-service-main-second-detail-content">
                            <img
                                src="/assets/images/home/thucandinhduong.png"
                                alt="Thức ăn dinh dưỡng"
                            />
                            <h5>Thức ăn dinh dưỡng</h5>
                        </div>
                    </div>
                    <div className="home-service-main-second-detail">
                        <div className="home-service-main-second-detail-content">
                            <img
                                src="/assets/images/home/huanluyen.png"
                                alt="Huấn luyện"
                            />
                            <h5>Huấn luyện</h5>
                        </div>
                    </div>
                    <div className="home-service-main-second-detail">
                        <div className="home-service-main-second-detail-content">
                            <img
                                src="/assets/images/home/tamrua.png"
                                alt="Tắm rửa"
                            />
                            <h5>Tắm rửa</h5>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    );
}

export default HomeService;
