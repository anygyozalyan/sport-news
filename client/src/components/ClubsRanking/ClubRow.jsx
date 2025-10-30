import styles from './ClubsRanking.module.css';

function ClubRow({ number, club }) {
    return (
        <tr>
            <td className={styles.number}>{number}</td>
            <td className={styles.club_cell}>
                <img src={club.logo} alt={club.name} className={styles.club_logo} />
                {club.name}
            </td>
            <td>{club.GP}</td>
            <td>{club.W}</td>
            <td>{club.D}</td>
            <td>{club.L}</td>
            <td>{club.F}</td>
            <td>{club.A}</td>
            <td>{club.GD}</td>
        </tr>
    );
}

export default ClubRow;