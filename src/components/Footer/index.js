import React, { useEffect } from "react";
import "./Footer.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Footer() {
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
        <section className="footer-container">
            <div className="footer-container-first">
                <motion.div
                    className="footer-container-detail"
                    ref={ref}
                    variants={boxVariant}
                    animate={control}
                    initial="closed"
                >
                    <div className="footer-container-items">
                        <div className="footer-logo-container">
                            <div className="footer-logo">
                                <img
                                    src="/assets/images/logo_new.png"
                                    alt="logo"
                                    className="footer-logo-main"
                                />
                            </div>
                            <div className="footer-slogan">
                                <span>
                                "Dogs may not be our whole life, but they make our lives whole." – Roger Caras
                                </span>
                            </div>
                            <div className="footer-social">
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        icon="akar-icons:facebook-fill"
                                        className="footer-social-icon"
                                    />
                                </a>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        icon="akar-icons:instagram-fill"
                                        className="footer-social-icon"
                                    />
                                </a>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        icon="akar-icons:twitter-fill"
                                        className="footer-social-icon"
                                    />
                                </a>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        icon="akar-icons:youtube-fill"
                                        className="footer-social-icon"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="footer-link">
                            <h4>Link</h4>
                            <div className="footer-link-detail">
                                <Link to="/">About</Link>
                                {/* <Link to="/product">Sản phẩm</Link>
                                <Link to="/service">Dịch vụ</Link>
                                <Link to="/blog">Blog</Link>
                                <Link to="/about">Về chúng tôi</Link> */}
                            </div>
                        </div>
                        <div className="footer-working-hour">
                            <h4>Working hours</h4>
                            <div className="footer-working-hour-banner">
                                <div className="footer-working-time">
                                    <span>Mon - Sat</span>
                                    <span>Morning - 9AM</span>
                                </div>
                                <div className="footer-working-time">
                                    <span>Evening - 6pm</span>
                                </div>
                                {/* <div className="footer-working-time">
                                    <span>CN</span>
                                    <span>Đóng cửa</span>
                                </div> */}
                            </div>
                        </div>
                        <div className="footer-communication">
                            <h4>Contact information</h4>
                            <div className="footer-communication-address">
                                <Icon
                                    icon="carbon:location-filled"
                                    className="footer-communication-icon"
                                />
                                <p>
                                   Hyderabad, Telangana, India - 500033
                                </p>
                            </div>
                            <div className="footer-communication-phone">
                                <Icon
                                    icon="ant-design:phone-filled"
                                    className="footer-communication-icon"
                                />
                                <p>Call: 0123456789</p>
                            </div>
                        </div>
                        <div className="footer-link">
                            <h4>Furthermore</h4>
                            <div className="footer-link-detail">
                                <Link to="/policy">
                                    Terms & Policies
                                </Link>
                                {/* <Link to="/hiring">Tuyển dụng</Link>
                                <Link to="/gallery">Hình ảnh & Video</Link>
                                <Link to="/customer">Hình ảnh khách hàng</Link> */}

                            </div>
                        </div>
                    </div>
                </motion.div>
                <hr />
                <div className="footer-copyright">
                    <div className="footer-copyright-main">
                        <span>Copyright belongs to PetCare</span>
                    </div>
                    <div className="footer-copyright-sub">
                        <p>
                            &#169; {new Date().getFullYear()} All rights
                            reserved
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-container-second">
                <div className="footer-container-items">
                    <div className="footer-link">
                        <h4>Link</h4>
                        <div className="footer-link-detail">
                            <Link to="/">About</Link>
                            {/* <Link to="/product">Sản phẩm</Link>
                            <Link to="/service">Dịch vụ</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/about">Về chúng tôi</Link> */}
                        </div>
                    </div>
                    <div className="footer-working-hour">
                        <h4>Working Hours</h4>
                        <div className="footer-working-hour-banner">
                            <div className="footer-working-time">
                                <span>Mon - Sat</span>
                                <span>Morning - 9AM</span>
                            </div>
                            <div className="footer-working-time">
                                <span>Evening - 6PM</span>
                                {/* <span>7h30 - 20h00</span> */}
                            </div>
                            {/* <div className="footer-working-time">
                                <span>CN</span>
                                <span>Đóng cửa</span>
                            </div> */}
                        </div>
                    </div>
                    <div className="footer-communication">
                        <h4>Contact information</h4>
                        <div className="footer-communication-address">
                            <Icon
                                icon="carbon:location-filled"
                                className="footer-communication-icon"
                            />
                            <p>
                            Hyderabad, Telangana, India - 500033
                            </p>
                        </div>
                        <div className="footer-communication-phone">
                            <Icon
                                icon="ant-design:phone-filled"
                                className="footer-communication-icon"
                            />
                            <p>Call: 0123456789</p>
                        </div>
                    </div>
                    <div className="footer-link">
                        <h4>Furthermore</h4>
                        <div className="footer-link-detail">
                            <Link to="/policy">Terms & Policies</Link>
                            {/* <Link to="/hiring">Tuyển dụng</Link>
                            <Link to="/gallery">Hình ảnh & Video</Link>
                            <Link to="/customer">Hình ảnh khách hàng</Link> */}

                        </div>
                    </div>
                </div>
                <div className="footer-logo-second">
                    <div className="footer-logo">
                        <img
                            src="/assets/images/logo_new.png"
                            alt="logo"
                            className="footer-logo-main"
                        />
                    </div>
                    <div className="footer-copyright">
                        Copyright &#169; {new Date().getFullYear()} PetCare,
                        Inc. All rights reserved
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
