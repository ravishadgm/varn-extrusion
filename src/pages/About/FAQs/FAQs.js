import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import styles from './FAQs.module.scss';

const FAQs = () => {
    const faqs = [
        {
            count: "01",
            question: "What makes Varn Extrusion Pvt. Ltd. a leader in aluminium profile manufacturing?",
            answer:
                "Weʼre proud to be Indiaʼs pioneers in manufacturing ultra-slim aluminium profiles as thin as 0.3mm (Wall Thickness)— a mark of precision, innovation, and engineering finesse. When others followed, we were already leading.",
        },
        {
            count: "02",
            question: "What fabrication services does Varn Extrusion offer in-house?",
            answer:
                "Varn Extrusion provides in-house precision cutting, punching, and drilling to ensure flawless fabrication, maintain tight tolerances, and enable faster delivery of aluminium profiles.",
        },
        {
            count: "03",
            question: "What facilities and machinery does Varn Extrusion operate with?",
            answer:
                "We Operate with two advanced Furnace systems - Melting furnace & Holding furnace. Each have a capacity of 5-MT enabling efficient billet production through in-house hot-top casting facility.We maintain an extensive range of 1000+ moulds, allowing customization and precision for various requirements.",
        },
        {
            count: "04",
            question: "What makes Varn Extrusion Pvt. Ltd. a reliable manufacturing partner?",
            answer:
                "We live by our word. With streamlined operations and on-time logistics, we deliver what you need, when you need it — no excuses.",
        },
        {
            count: "05",
            question: "What are the ethical values followed by Varn Extrusion Pvt. Ltd.?",
            answer:
                "Varn Extrusion Pvt. Ltd. is guided by a strong set of ethical values that shape its operations and corporate culture. These include quality and integrity, environmental responsibility, fair labor practices and workplace safety, ethical sourcing, honesty in business, and innovation carried out with a sense of responsibility. ",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.detailPage}>
            <div className={styles.sectionHeader}>

                <button className={styles.tag}>Frequently Asked Questions</button>
                <span className={styles.subText}></span>
            </div>

            <div className={styles.accordionWrapper}>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`${styles.accordionItem} ${openIndex === index ? styles.open : ''}`}
                    >
                        <button className={styles.accordionToggle} onClick={() => toggleAccordion(index)}>
                            <div className={styles.toggleLeft}>
                                <span className={styles.count}>{faq.count}</span>
                                <span className={styles.question}>{faq.question}</span>
                            </div>
                            <span className={styles.icon}>
                                {openIndex === index ? <FiMinus size={24} /> : <FiPlus size={24} />}
                            </span>
                        </button>
                        <div className={`${styles.accordionContent} ${openIndex === index ? styles.expanded : ''}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
