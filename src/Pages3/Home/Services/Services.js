import React from "react";
import styles from "./Services.module.scss";
import Images from '../../../assets3/images/index';

const Services = () => {

    const services = [
        "PRODUCTS",
        "HAWESVILLE, KY",
        "SEBREE, KY",
        "MT. HOLLY, SC",
        "GRUNDARTANGI, ICELAND",
        "VLISSINGEN, NETHERLANDS",
        "JAMALCO, JAMAICA",
    ];

    return (

        <div className={styles.container}>
            <div className={styles.right}>
                <div className={styles.card} >
                    <h3>Products & Plans</h3>
                    <p>
                        Companies around the globe are using aluminum to make products safer, lighter, more fuel efficient and more recyclable.
                    </p>
                    <p>
                        At Century Aluminum, our teams apply knowledge, experience and best practices to find solutions and develop processes to meet growing market demand. This focus on continuous improvement is motivated by our commitment to deliver consistent, high-quality products to our customers.
                    </p>
                    <button>Learn More</button>
                </div>

            </div>
            <div className={styles.left}>
                <div className={styles.sidebar}>
                    {services.map((service, idx) => (
                        <div key={idx} className={styles.menuItem}>
                            {service}
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default Services;
