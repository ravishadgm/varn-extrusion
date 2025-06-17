import React from "react";
import arenaImage from "../../../assets/images/project/Hotel_Hall.jpg";
import FriesHouseAbout from "./FriesHouseAbout/FriesHouseAbout";
import FriesProjectBlock from "./FriesProjectBlock/FiresProjectBlock";
import FriesRelatedProjects from "./FriesRelatedProject/FriesRelatedProject";
import FriesSwipper from "./FriesSwipper/FriesSwipper";

const FriesHouse = () => {
    const content = [
        {
            text: "The mission was clear: to maximize the commanding views of the breathtaking surrounding mountains, creating an awe-inspiring experience for the residents. From the initial stages, talented architects seamlessly integrated interior and landscape design, ensuring a harmonious blend of functionality and aesthetic appeal. A team of architects crafted custom built-in furniture for the project while collaborating on the landscape design to create a cohesive and visually stunning living environment."
        },
        {
            text: "The primary objective throughout the design process was to maximize the usable area while minimizing the building footprint. The result is a thoughtfully designed space where every square foot is optimized for efficiency. Although the rooms may be compact, our innovative split-level design allows for expansive spatial qualities. Additionally, transparency creates a sense of openness, extending the living spaces outward and embracing the celebrated Japanese technique of ‘engawa,’ which enhances the indoor/outdoor experience."
        },
        {
            text: "Sustainability and durability were critical considerations in the design. Carefully selected locally sourced materials known for their resilience and low maintenance requirements. Furthermore, the design incorporates advanced daylighting strategies, efficient radiant hydronic floor heating, and energy-efficient lighting, surpassing even the most rigorous energy code standards. The design achieved zero roof penetrations, exemplifying our commitment to energy efficiency and preserving the property’s architectural integrity."
        }, {
            text: "Despite the challenges posed by the tight and challenging lot, the design ingeniously maximizes the captivating views of Mount Baldy. Residents can enjoy these picturesque vistas from every level of the interior and the inviting exterior balcony and terrace. The roof design is a testament to architectural innovation – an exquisitely warped hyperbolic paraboloid shape achieved through a series of straight exposed glulam beams. These beams slope in incremental degrees from a central axis, facilitating proper drainage and creating a visual illusion of floating. Transparent glass panels between the glulam beams on the north and south facades allow abundant daylight to fill the space while accentuating the roof’s unique and remarkable form."
        }, {
            text: "The material palette for this exceptional property includes native fir, oak paneling, limestone, local Oakley stone, and patinated copper siding and roof. Each element was carefully selected to showcase its natural beauty, durability, and contribution to the overall aesthetic."
        }
    ];
    return (
        <>
            <FriesProjectBlock />
            <FriesHouseAbout content={content} image={arenaImage} />
            <FriesSwipper />
            <FriesRelatedProjects />
        </>
    );
};

export default FriesHouse;
