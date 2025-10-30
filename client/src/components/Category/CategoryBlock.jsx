import React from 'react';
import styles from './Category.module.css';

function CategoryBlock({ title, image, className }) {
    return (
        <article className={`${styles.category_block} ${className}`}>
            <div className={styles.name_box}>
                <h3 className={styles.name_text}>{title}</h3>
            </div>
            <div className={styles.img_box}>
                <img src={image} alt={title} />
            </div>
        </article>
    );
}

export default CategoryBlock;