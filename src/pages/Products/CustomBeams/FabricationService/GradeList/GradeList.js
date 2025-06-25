import React from 'react';
import styles from './GradeList.module.scss';

const gradeData = [
    {
        title: 'Mill Finish',
        items: [
            'Raw aluminium from press.',
            'Matte look with lines.',
            'Used for internal or hidden use.'
        ]
    },
    {
        title: 'Brushed Finish',
        items: [
            'SUniform brushed texture.',
            'Industrial appearance.'
        ]
    },
    {
        title: 'Anodized Finish',
        items: [
            'Treated for corrosion resistance.',
            'Available in silver, bronze, black.'
        ]
    },
    {
        title: 'Powder Coated Finish',
        items: [
            'Colored powder baked on surface.',
            'Durable, UV-resistant.',
            'Best for decorative exteriors.',
        ]
    },
    {
        title: 'Premium Polished Finish',
        items: [
            'High-gloss polished surface.',
            'Buffed for mirror finish.',
        ]
    },
    {
        title: 'Custom Finish',
        items: [
            'Made to customer specs.',
            'Includes dual colors or textures.',
            'For precise functional needs.'
        ]
    },
    // {
    //     title: 'Hand Select Stain Grade',
    //     items: [
    //         'Lumber is graded for tight knots to minimize larger knots in the appearance of a beam.',
    //         'Sanded down with fine sandpaper for a smoother surface with eased edges.',
    //         'Ideal for when a stain is to be applied.'
    //     ]
    // },

];

const GradesList = () => {
    return (
        <div className={styles.grades}>
            {gradeData.map((grade, index) => (
                <div key={index} className={styles.grade}>
                    <strong>{grade.title}</strong>
                    <ul>
                        {grade.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default GradesList;
