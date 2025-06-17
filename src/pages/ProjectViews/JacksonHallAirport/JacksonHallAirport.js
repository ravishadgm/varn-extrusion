import React from "react";
import JacksonSwipper from "./JacksonSwipper/JacksonSwipper";
import JacksonRelatedProjects from "./JacksonRelatedProjects/JacksonRelatedProjects";
import JacksonProjectBlock from "./JacksonProjectBlock/JacksonProjectBlock";


const JacksonHallAirport = () => {
    return (
        <>
            <JacksonProjectBlock />
            <JacksonSwipper />
            <JacksonRelatedProjects />
        </>
    );
};

export default JacksonHallAirport;
