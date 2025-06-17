import ProjectBlock from '@components/common/ProjectBlock/ProjectBlock'
import heroImage from "../../../../assets/images/project/kanzan-house.jpg";
import React from 'react'

const KanzanProjectBlock = () => {
    const infoData = [
        { label: "Building Type:", value: "Residential" },
        { label: "Location:", value: "Blaine County, Idaho, USA" },
        { label: "Completed:", value: "January 2020" },
        {
            label: "Products:",
            value: ["Custom Beams", "Stock Beams"],
        },
    ];


    return (
        <div>
            <ProjectBlock
                title="Kanzan House"
                heroImage={heroImage}
                info={infoData}
                leftHeading="Experience the sheer brilliance of KANZAN HOUSE"
                description="KANZAN HOUSE is a true architectural marvel that pushes the boundaries of design and structural innovation. With QB Corporation’s superior glulam beams and Architect Jack Smith’s visionary truss system, this custom home captivates with its dramatic views, open interior spaces, and unparalleled beauty. Discover the limitless possibilities and exceptional craftsmanship that define KANZAN HOUSE, a testament to the artistry and ingenuity of QB Corporation and Architect Jack Smith."
            />
        </div>
    )
}

export default KanzanProjectBlock