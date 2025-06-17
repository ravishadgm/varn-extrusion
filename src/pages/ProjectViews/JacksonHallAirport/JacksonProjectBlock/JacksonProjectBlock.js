import ProjectBlock from '@components/common/ProjectBlock/ProjectBlock'
import heroImage from "../../../../assets/images/project/airport.jpg";
import React from 'react'

const JacksonProjectBlock = () => {
    const infoData = [
        { label: "Building Type:", value: "Jackson Hole Airport" },
        { label: "Location:", value: "Jackson Hole, Wyoming, USA" },
        { label: "Completed:", value: "January 2015" },
        {
            label: "Products:",
            value: ["Custom Beams"],
        },
    ];

    return (
        <div>
            <ProjectBlock
                title="Jackson Hole Airport"
                heroImage={heroImage}
                info={infoData}
                leftHeading="Western Wyoming traditions and mountain-town architecture"
                description="The three-phase expansion and renovation, which began in 2009, nearly doubled the size of the aviation hub—the only one in a national park—to approximately 116,000 square feet. The design team was determined to stay true to western Wyoming traditions and mountain-town architecture—while simultaneously obliging the 18-foot height restriction imposed by the park."
            />
        </div>
    )
}

export default JacksonProjectBlock