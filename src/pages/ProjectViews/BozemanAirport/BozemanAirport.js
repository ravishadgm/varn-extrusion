import React from "react";
import BozemanAirportAbout from "./BozemanAirportAbout/BozemanAirportAbout";
import arenaImage from "../../../assets/images/project/BZ_Airport.jpeg"
import BozemanProjectBlock from "./BozemanProjectBlock/BozemanProjectBlock";
import BozemanRelatedProjects from "./BozemanRelatedProject/BozemanRelatedProject";
import BozemanSwipper from "./BozemanSwipper/BozemanSwipper";

const BozemanAirport = () => {


    const content = [
        {
            text: "QB Corporation, a distinguished manufacturer of glulam beams, took pride in being involved in the terminal expansion project. QB Corporation supplied custom and stock glulam beams for the project, ensuring they met the specified requirements and project deadlines. Including glulam beams enhanced the terminal’s design and functionality, resulting in a spacious and welcoming environment for passengers. Moreover, the glulam beams added a natural and warm aesthetic, reflecting the airport’s connection to Yellowstone National Park and the surrounding landscape."
        }
    ]



    return (
        <>
            <BozemanProjectBlock />
            <BozemanAirportAbout content={content} image={arenaImage} />
            <BozemanSwipper />
            <BozemanRelatedProjects />
        </>
    );
};

export default BozemanAirport;
