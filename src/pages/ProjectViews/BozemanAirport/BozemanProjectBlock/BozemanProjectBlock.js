import ProjectBlock from '@components/common/ProjectBlock/ProjectBlock'
import heroImage from "../../../../assets/images/project/bozemanAirport.jpg";
import React from 'react'

const BozemanProjectBlock = () => {
    const infoData = [
        { label: "Building Type:", value: "Institutional" },
        { label: "Location:", value: "Belgrade, Montana, USA" },
        { label: "Completed:", value: "January 2020" },
        {
            label: "Products:",
            value: ["Custom Beams"],
        },
    ];

    return (
        <div>
            <ProjectBlock
                title="Bozeman Yellowstone International Airport"
                heroImage={heroImage}
                info={infoData}
                leftHeading="How QB Corporation’s Glulam Beams Transformed Bozeman Airport Expansion"
                description="Bozeman Yellowstone International Airport (BZN) is the main entry point to Yellowstone National Park, one of the fastest-growing airports in the United States. BZN underwent a significant terminal expansion project from 2011 to 2020 to accommodate the growing number of passengers and airline services. An essential component of this expansion was the incorporation of glulam beams into the roof structure."
            />
        </div>
    )
}

export default BozemanProjectBlock