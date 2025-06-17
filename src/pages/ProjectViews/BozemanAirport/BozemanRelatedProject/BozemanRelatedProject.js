import RelatedProject from '@components/common/RelatedProject/RelatedProject'
import React from 'react'
import project1Img from "../../../../assets/images/project/UnionArena.jpg"
import project2Img from "../../../../assets/images/project/Lynch_center.jpg";

const BozemanRelatedProjects = () => {
    const relatedProjects = [
        {
            title: "Idaho Central Credit Union Arena",
            location: "Moscow, Idaho, USA",
            image: project1Img,
        },
        {
            title: "The Nep & Mary Ellen Lynch Center",
            location: "Salmon, Idaho, USA",
            image: project2Img,
        }
    ];
    return (
        <div>
            <RelatedProject
                projects={relatedProjects}
                buttonText="All Projects"
                buttonLink="/projects" />
        </div>
    )
}

export default BozemanRelatedProjects