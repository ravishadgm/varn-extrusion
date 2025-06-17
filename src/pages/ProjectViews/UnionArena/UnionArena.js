import React from "react";
import UnionArenaAbout from "./UnionArenaAbout/UnionArenaAbout";
import arenaImage from "../../../assets/images/project/Constructure.jpg";
import UnionArenaBenefit from "./UnionArenaBenefit/UnionArenaBenefit";
import UnionRelatedProjects from "./UnionRelatedProjects/UnionRelatedProjects";
import UnionProjectBlock from "./UnionProjectBlock/UnionProjectBlock";
import UnionArenaPagination from "./UnionArenaPagination/UnionArenaPagination";

const UnionArena = () => {
    const content = [
        {
            heading: "The Innovative Design of ICCU Arena",
            text: "Spanning an impressive 67,000 square feet, ICCU Arena boasts a capacity of over 4,000 spectators and offers state-of-the-art amenities. The Arena is designed to be a multipurpose space, but its pioneering use of engineered wood truly sets this facility apart."
        },
        {
            heading: "Engineered Wood: A Sustainable Solution",
            text: "Engineered wood has emerged as a sustainable alternative to traditional construction materials: steel and concrete. It is made by bonding layers of timber together, resulting in stronger and more versatile beams and columns. QB Corporation, renowned for its production of glulam beams, was instrumental in the creation of ICCU Arena."
        },
        {
            heading: "Collaboration with the College of Natural Resources",
            text: "The success of ICCU Arena can be attributed to the collaboration between QB Corporation and the College of Natural Resources at the University of Idaho. QB Corporation helped bring timber products from within the Moscow, Idaho region, capitalizing on abundant high-quality wood. In some cases, the University’s Experimental Forest, a living laboratory for sustainable forestry practices, provided timber for the construction of the Arena."
        }
    ];

    return (
        <>
            <UnionProjectBlock />
            <UnionArenaAbout content={content} image={arenaImage} />
            <UnionArenaBenefit />
            <UnionArenaPagination />
            <UnionRelatedProjects />
        </>
    );
};

export default UnionArena;
