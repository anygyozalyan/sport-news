import styles from './ClubsRanking.module.css';
import RecentNews from './RecentNews';
import ClubsTable from './ClubsTable';

import taekwondo from '../../assets/images/taekwondo.png';
import ball from '../../assets/images/ball.png';
import cricket from '../../assets/images/cricket.png';
import Mcity from '../../assets/clubs/Mcity.png';
import Liverpool from '../../assets/clubs/Liverpool.png';
import Chelsea from '../../assets/clubs/Chelsea.png';
import Tottenham from '../../assets/clubs/Tottenham.png';
import Arsenal from '../../assets/clubs/Arsenal.png';
import Manchester from '../../assets/clubs/Manchester.png';

function ClubsRanking() {
    const newsData = [
        { img: taekwondo, tag: '#Polls: 87 - 12 July 2025', title: 'Italy 2025 Taekwondo Championships' },
        { img: ball, tag: '#Golf: Toni - 20 July 2025', title: 'Open Championship Royal Liverpool Golf' },
        { img: cricket, tag: '#Cricket: Toni - 27 July 2025', title: 'Ireland Tour of England Test 2023' }
    ];

    const clubsData = [
        { name: 'Manchester City', logo: Mcity, GP: 38, W: 29, D: 6, L: 3, F: 99, A: 26, GD: '+73' },
        { name: 'Liverpool', logo: Liverpool, GP: 38, W: 28, D: 8, L: 2, F: 94, A: 26, GD: '+68' },
        { name: 'Chelsea', logo: Chelsea, GP: 38, W: 21, D: 11, L: 6, F: 76, A: 33, GD: '+43' },
        { name: 'Tottenham Hotspur', logo: Tottenham, GP: 38, W: 22, D: 5, L: 11, F: 69, A: 40, GD: '+29' },
        { name: 'Arsenal', logo: Arsenal, GP: 38, W: 22, D: 3, L: 13, F: 61, A: 48, GD: '+13' },
        { name: 'Manchester United', logo: Manchester, GP: 38, W: 16, D: 10, L: 12, F: 57, A: 57, GD: '0' },
    ];

    return (
        <section className={styles.clubranking_section}>
            <div className={styles.container}>
                <RecentNews news={newsData} />
                <ClubsTable clubs={clubsData} />
            </div>
        </section>
    );
}

export default ClubsRanking;