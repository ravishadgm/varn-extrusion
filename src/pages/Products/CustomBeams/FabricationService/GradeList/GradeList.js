import React from 'react';
import styles from './GradeList.module.scss';

const gradeData = [
    {
        title: 'Framing Grade',
        items: [
            'Lightly sanded.',
            'No patching or filling.',
            'Ideal for beams hidden in walls.'
        ]
    },
    {
        title: 'Industrial',
        items: [
            'Sanded finish with square edges.',
            'No patching or filling.'
        ]
    },
    {
        title: 'Architectural',
        items: [
            'Sanded finish with eased edges.',
            'Voids over ¾” are filled.'
        ]
    },
    {
        title: 'Stain Grade',
        items: [
            'Sanded finish with eased edges.',
            'No patching or filling.',
            'Ideal for when the stain is to be applied.',
        ]
    },
    {
        title: 'Premium',
        items: [
            'Sanded down with fine sandpaper for a smoother surface with eased edges.',
            'All voids are filled.',
        ]
    },
    {
        title: 'Hand Select Premium',
        items: [
            'Lumber is graded for tight knots to minimize larger knots in the beam’s appearance.',
            'Sanded down with fine sandpaper for a smoother surface with eased edges.',
            'All voids are filled.'
        ]
    },
    {
        title: 'Hand Select Stain Grade',
        items: [
            'Lumber is graded for tight knots to minimize larger knots in the appearance of a beam.',
            'Sanded down with fine sandpaper for a smoother surface with eased edges.',
            'Ideal for when a stain is to be applied.'
        ]
    },

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
