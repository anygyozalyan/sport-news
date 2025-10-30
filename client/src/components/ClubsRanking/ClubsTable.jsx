import ClubRow from './ClubRow';
import styles from './ClubsRanking.module.css';

function ClubsTable({ clubs }) {
    return (
        <div className={styles.club_rankings}>
            <h2 className={styles.section_title}>Clubs Ranking</h2>
            <div className={styles.table_container}>
                <table className={styles.ranking_table}>
                    <thead>
                        <tr>
                            <th>Club</th>
                            <th className={styles.gray_elem}>#</th>
                            <th>GP</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>F</th>
                            <th>A</th>
                            <th>GD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clubs.map((club, index) => (
                            <ClubRow key={index} number={index + 1} club={club} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ClubsTable;