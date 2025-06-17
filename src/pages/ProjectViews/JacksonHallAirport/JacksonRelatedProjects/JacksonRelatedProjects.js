import RelatedProject from '@components/common/RelatedProject/RelatedProject'
import React from 'react'
import project1Img from "../../../../assets/images/project/Lynch_center.jpg"
import project2Img from "../../../../assets/images/project/airport.jpg";

const JacksonRelatedProjects = () => {
    const relatedProjects = [
        {
            title: 'Idaho Central Credit Union Arena',
            location: "Moscow, Idaho, USA",
            image: project2Img
        },
        {
            title: 'The Nep & MaryEllen Lynch Center',
            location: "Salmon, Idaho USA",
            image: project1Img
        }

    ]
    return (
        <div>
            <RelatedProject
                projects={relatedProjects}
                buttonText="All Projects"
                buttonLink="/projects" />
        </div>
    )
}

export default JacksonRelatedProjects