import React from 'react';
import styles from './Category.module.css';
import CategoryBlock from './CategoryBlock';

import football from '../../assets/images/football.png';
import basketball from '../../assets/images/basketball.png';
import tennis from '../../assets/images/tennis.png';
import car from '../../assets/images/car.png';

const categories = [
    { id: 1, title: 'FOOTBALL', image: football, className: `${styles.block_a}` },
    { id: 2, title: 'BASKETBALL', image: basketball, className: `${styles.block_b} ${styles.image_first}` },
    { id: 3, title: 'CAR SPORT', image: car, className: `${styles.block_c}` },
    { id: 4, title: 'TABLE TENNIS', image: tennis, className: `${styles.block_d} ${styles.image_first}` },
];

function Category() {
    return (
        <section id='category' className={styles.category_section}>
            <p className={styles.category_title}>Category</p>

            <div className={styles.category_container}>
                {categories.map(({ id, title, image, className }) => (
                    <CategoryBlock key={id} title={title} image={image} className={className} />
                ))}
            </div>
        </section>
    );
}

export default Category;