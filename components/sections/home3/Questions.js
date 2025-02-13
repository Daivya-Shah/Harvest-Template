'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function CommonQuestions() {
    return (
        <section className="common-questions py-20" style={{ paddingTop: '60px', paddingBottom: '60px'}}>
            <div className="container">
                <div className="sec-title tg-heading-subheading animation-style2 text-center mb-10">
                    <h2 className="sec-title__title tg-element-title">
                        Creating and scaling a CPG brand is
                        <br />
                        <span className="text-orange-500">complicated</span>
                    </h2>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <ul className="common-questions__list d-flex justify-content-center flex-wrap">
                            {[
                                { icon: "icon-rocket", text: "What are the initial steps to launch a CPG brand?" },
                                { icon: "icon-ingredients", text: "How do I source a dependable manufacturing partner?" },
                                { icon: "icon-growth", text: "What negotiation strategies work best for low-volume orders?" },
                                { icon: "icon-packaging", text: "How can I obtain certifications for my products?" },
                                { icon: "icon-factory", text: "What customs fees apply to international shipments?" },
                                { icon: "icon-document", text: "What steps are needed to distribute my products in retail stores?" }
                            ].map((item, index) => {
                                const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
                                return (
                                    <motion.li
                                        key={index}
                                        className="floating-box text-center"
                                        ref={ref}
                                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                        transition={{
                                            delay: index * 0.2,
                                            duration: 0.8,
                                            ease: "easeOut",
                                        }}
                                        whileHover={{ scale: 1.3, rotateY: 20, boxShadow: "0px 10px 30px rgba(255, 165, 0, 0.5)" }}
                                    >
                                        <div className="icon">
                                            <span className={item.icon}></span>
                                        </div>
                                        <h2>{item.text}</h2>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}