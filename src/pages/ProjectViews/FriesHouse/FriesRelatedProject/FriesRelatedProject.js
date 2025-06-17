import RelatedProject from '@components/common/RelatedProject/RelatedProject'
import React from 'react'
import project1Img from "../../../../assets/images/project/Timber_House.jpg"
import project2Img from "../../../../assets/images/project/kanzan-house.jpg";

const FriesRelatedProjects = () => {
    const relatedProjects = [
        {
            title: 'Timber House',
            location: "Brooklyn, New york, USA",
            image: project1Img
        },
        {
            title: 'Kanzan House',
            location: "Blaine Country,Idaho, USA",
            image: project2Img
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

export default FriesRelatedProjects