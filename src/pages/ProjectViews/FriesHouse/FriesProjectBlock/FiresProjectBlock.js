import ProjectBlock from '@components/common/ProjectBlock/ProjectBlock'
import heroImage from "../../../../assets/images/project/FriesHouse.jpg";
import React from 'react'

const FriesProjectBlock = () => {
    const infoData = [
        { label: "Building Type:", value: "Residential" },
        { label: "Location:", value: "Ketchum, Idaho, USA" },
        { label: "Completed:", value: "January 2018" },
        {
            label: "Products:",
            value: ["Custom Beams"],
        },
    ];

    return (
        <div>
            <ProjectBlock
                title="The Fries House"
                heroImage={heroImage}
                info={infoData}
                leftHeading="QB Corporation is proud to be part of a remarkable architectural masterpiece"
                description="This stunning 1,800 sq. ft. custom home complemented by a spacious 625 sq. ft. two-car garage was situated near downtown Ketchum, Idaho, and was meticulously designed to meet the client’s specific requirements. These included a luxurious master suite, separate his and her offices, guest accommodations, and a two-car garage—all on a highly restricted and limited lot."

            />
        </div>
    )
}

export default FriesProjectBlock