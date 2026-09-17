import { getImageUrl } from "../../utils.js";
import styles from "./about.module.css";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';

export const About = () => {
    const universityClubs = [
        {
            id: 'aiesec-uom',
            title: 'AIESEC in University of Moratuwa',
            icon: <AccountBalanceIcon sx={{ fontSize: 20, color: 'var(--color-primary)' }} />,
            duration: '(2022 - 2025)',
            position: 'Local Committee Vice President - Term 24.25'
        },
        {
            id: 'mhc',
            title: 'Mora Hiking Club',
            icon: <AccountBalanceIcon sx={{ fontSize: 20, color: 'var(--color-primary)' }} />,
            duration: '(2022 - 2026)',
            position: 'Health & Safety Committe Member - 2025'
        },
        {
            id: 'ieee',
            title: 'IEEE Student Branch of University of Moratuwa',
            icon: <AccountBalanceIcon sx={{ fontSize: 20, color: 'var(--color-primary)' }} />,
            duration: '(2022 - 2023)',
            position: 'Member'
        },
        {
            id: 'rotaract',
            title: 'Rotaract Club of University of Moratuwa',
            icon: <AccountBalanceIcon sx={{ fontSize: 20, color: 'var(--color-primary)' }} />,
            duration: '(2022 - 2023)',
            position: 'Member'
        }
    ];

    const schoolClubs = [
        {
            id: 'quiz-sac',
            title: 'Quiz Club - St: Aloysius College, Galle',
            icon: <SchoolIcon sx={{ fontSize: 20, color: 'var(--color-primary)' }} />,
            duration: '(2012 - 2017)',
            position: 'Secretary - 2016'
        },
        {
            id: 'quiz-rcg',
            title: 'Quiz Club - Richmond College, Galle',
            icon: <SchoolIcon sx={{ fontSize: 20, color: 'var(--color-primary)' }} />,
            duration: '(2018 - 2020)',
            position: 'Treasurer - 2020'
        },
        {
            id: 'french',
            title: 'French Language Society - Richmond College, Galle',
            icon: <SchoolIcon sx={{ fontSize: 20, color: 'var(--color-primary)' }} />,
            duration: '(2018 - 2020)',
            position: 'Secretary'
        }
    ];

    const ClubCard = ({ item }) => (
        <div className={styles.clubCard}>
            <div className={styles.clubIcon}>{item.icon}</div>
            <div>
                <h5 className={styles.clubTitle}>
                    {item.title} <span className={styles.clubDuration}>- {item.duration}</span>
                </h5>
                <span className={styles.clubPosition}>{item.position}</span>
            </div>
        </div>
    );

    return (
        <section id="about" className={styles.container}>
            <h2 className={styles.title}>About Me</h2>

            <div className={styles.profileHeader}>
                <img
                    src={getImageUrl("profile.png")}
                    alt="Dinuka Malitha"
                    className={styles.avatar}
                />
                <div className={styles.profileIntro}>
                    <h3 className={styles.name}>Dinuka Malitha</h3>
                    <p className={styles.role}>Full Stack Software Developer</p>
                    <p className={styles.bio}>
                        Final Year IT &amp; Management Undergraduate at the University of Moratuwa.
                    </p>
                </div>
            </div>

            <div className={styles.body}>
                <div className={styles.subsection}>
                    <h3 className={styles.subheading}>Education</h3>
                    <ul className={styles.listContent}>
                        <li>
                            <div className={styles.entryCard}>
                                <h4>University Of Moratuwa</h4>
                                <p>BSc. (Hons.) in Information Technology & Management</p>
                                <p>2022 - 2026 | GPA - 3.70</p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.entryCard}>
                                <h4>Richmond College - Galle</h4>
                                <p>GCE. Advanced Level</p>
                                <p>2018 - 2020 | 3A's in Arts Stream</p>
                                <div className={styles.rankRow}>
                                    <span>District Rank: 5</span>
                                    <span>Island Rank: 12</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.entryCard}>
                                <h4>St. Aloysius' College - Galle</h4>
                                <p>GCE. Ordinary Level</p>
                                <p>2007 - 2017</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={styles.subsection}>
                    <h3 className={styles.subheading}>Licenses &amp; Certificates</h3>
                    <ul className={styles.listContent}>
                        <li>
                            <div className={styles.entryCard}>
                                <h4 className={styles.certTitle}>
                                    Pearson's Assured Diploma in Software Engineering
                                    <a href="#" target="_blank" rel="noopener noreferrer" className={styles.certLink} title="View Proof">
                                        <OpenInNewIcon sx={{ fontSize: 18 }} />
                                    </a>
                                </h4>
                                <p>Esoft Metro Campus</p>
                                <p>2021</p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.entryCard}>
                                <h4 className={styles.certTitle}>
                                    DELF A2
                                    <a href="#" target="_blank" rel="noopener noreferrer" className={styles.certLink} title="View Proof">
                                        <OpenInNewIcon sx={{ fontSize: 18 }} />
                                    </a>
                                </h4>
                                <p>Alliance Francais de Matara</p>
                                <p>2020</p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.entryCard}>
                                <h4 className={styles.certTitle}>
                                    DELF B1
                                    <a href="#" target="_blank" rel="noopener noreferrer" className={styles.certLink} title="View Proof">
                                        <OpenInNewIcon sx={{ fontSize: 18 }} />
                                    </a>
                                </h4>
                                <p>Alliance Francais de Matara</p>
                                <p>2021</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={`${styles.subsection} ${styles.fullWidth}`}>
                    <h3 className={styles.subheading}>Extra Curricular Activities</h3>
                    <div className={styles.clubGrid}>
                        {[...universityClubs, ...schoolClubs].map(item => <ClubCard key={item.title} item={item} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}
