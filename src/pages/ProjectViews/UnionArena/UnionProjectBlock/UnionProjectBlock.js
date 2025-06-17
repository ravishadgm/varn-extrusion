import ProjectBlock from '@components/common/ProjectBlock/ProjectBlock'
import heroImage from "../../../../assets/images/project/UnionArena.jpg";
import React from 'react'

const UnionProjectBlock = () => {
    const infoData = [
        { label: "Building Type:", value: "Institutional" },
        { label: "Location:", value: "Moscow, Idaho, USA" },
        { label: "Completed:", value: "October 2021" },
        {
            label: "Products:",
            value: ["Custom Beams"],
        },
    ];

    return (
        <div>
            <ProjectBlock
                title="Idaho Central Credit Union Arena"
                heroImage={heroImage}
                info={infoData}
                leftHeading="ICCU Arena: Pioneering the Future of Engineered Wood Venues"
                description="Idaho Central Credit Union (ICCU) Arena, located on the University of Idaho’s Moscow campus, is one of the nation’s first engineered wood venues. This remarkable facility showcases the immense potential of collaboration between the College of Natural Resources and Idaho’s wood industries. QB Corporation, a leading producer of glulam beams in Idaho, played a crucial role in supplying the Arena with custom glulam beams and columns, elevating its structural integrity and sustainability."
            />
        </div>
    )
}

export default UnionProjectBlock