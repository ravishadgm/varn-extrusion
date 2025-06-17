import React from "react";
import heroImage from "../../../assets/images/project/kanzan-house.jpg";
import ProjectBlock from "@components/common/ProjectBlock/ProjectBlock";
import arenaImage from "../../../assets/images/project/Arena_Hall.jpg";
import KanzanHouseAbout from "./KanzanHouseAbout/KanzanHouseAbout";
import RelatedProject from "@components/common/RelatedProject/RelatedProject";
import project1Img from "../../../assets/images/project/Timber_House.jpg"
import project2Img from "../../../assets/images/project/FriesHouse.jpg"
import KanzanSwipper from "./KanzanSwipper/KanjanSwipper";
import KanzanRelatedProjects from "./KanzanRelatedProject/KanzanRelatedProject";
import KanzanProjectBlock from "./KanzanProjectBlock/KanzanProjectBlock";
// import KanzanPagination from "./KanzanPagiantion/KanjanPagination";

const KanzanHouse = () => {

    const content = [
        {
            heading: "Architectural Marvel of KANZAN HOUSE with QB Corporation’s Glulam Beams",
            text: [
                "The KANZAN HOUSE is a custom home featuring expansive glazing and a unique truss system designed by Architect Jack Smith. QB Corporation’s high-quality glulam beams bring this structural innovation to life, providing stunning views, column-free interior spaces, and unmatched design possibilities.",
                "The KANZAN HOUSE redefines architectural excellence’s boundaries, boasting Bald Mountain’s panoramic views through its expansive glazing. This remarkable custom home showcases the ingenuity of Architect Jack Smith and QB Corporation’s cutting-edge glulam beams. With its striking design, column-free interiors, and exceptional structural innovation, KANZAN HOUSE stands as a testament to the limitless possibilities of the Smith-modified Vierendeel truss system."
            ]
        },
        {
            heading: "Unveiling the Smith-Modified Vierendeel Truss System:",
            text: "At the heart of KANZAN HOUSE lies the revolutionary Smith-modified Vierendeel truss system. Smith’s visionary approach involves a unique bolt arrangement that reinforces each joint in the laminated wood beams. By utilizing shear forces and optimizing the layering of the beams, this ingenious truss system allows for remarkable spans, unparalleled strength, and awe-inspiring structural integrity. Notably, this innovative design surpasses the capabilities of conventional truss systems, making it a genuinely indeterminate structure that defies current computer analysis techniques."
        },
        {
            heading: "QB Corporation’s Glulam Beams – The Epitome of Craftsmanship",
            text: "Based in Salmon, Idaho, QB Corporation proudly supplies the exceptional glulam beams that bring KANZAN HOUSE to life. These locally sourced and processed beams, crafted with utmost precision, showcase QB Corporation’s commitment to quality and excellence. QB Corporation offers a wide range of depths, widths, lengths, textures, and finishes, ensuring that every project receives the perfect beam solution. Moreover, QB Corporation’s CNC fabrication expertise further enhances their glulam beams’ versatility and customization options."
        },
        {
            heading: "Form Meets Function – The Artistry of KANZAN HOUSE",
            text: "One cannot help but be captivated by the graphic lines created by KANZAN HOUSE’s wood beams. The harmonious integration of form and function is evident throughout the home’s truss system, exemplifying Architect Jack Smith’s visionary approach. QB Corporation’s collaboration with Smith allows for the realization of this artistic vision, showcasing the incredible possibilities that arise from combining innovative design and exceptional craftsmanship."
        }
    ];



    return (
        <>
            <KanzanProjectBlock />
            <KanzanHouseAbout content={content} image={arenaImage} />
            <KanzanSwipper />
            <KanzanRelatedProjects />
        </>
    );
};

export default KanzanHouse;
