import {getImageUrl} from "../../utils.js";
import styles from "./about.module.css";
import {useState} from "react";

export const About = () => {
    const [activeSection, setActiveSection] = useState('Education');

    return (
        <section id="about" className={styles.container}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about.jpg")}
                    alt=""
                    className={styles.aboutImg}
                />
                <div className={styles.aboutItem}>
                    <div className={styles.aboutItems}>
                        <h2 onClick={() => setActiveSection('Education')}>Education</h2>
                        <h2 onClick={() => setActiveSection('Interests')}>Interests</h2>
                    </div>
                    <div className={styles.aboutItemsContent}>
                        {activeSection === 'Education' && (
                            <div>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    gap: '20px',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <li>
                                        <div>
                                            <h4>University Of Moratuwa</h4>
                                            <p>BSc. (Hons.) in Information Technology & Management</p>
                                            <p>2022 - 2026</p>
                                            <p>GPA - 3.70</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h4>Esoft Metro Campus</h4>
                                            <p>Pearson's Assured Diploma in Software Engineering</p>
                                            <p>2020 - 2021</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h4>Alliance Francais de Matara</h4>
                                            <p>DELF A2 & B1</p>
                                            <p>2020 - 2021</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h4>Richmond College - Galle</h4>
                                            <p>GCE. Advanced Level</p>
                                            <p>2018 - 2020</p>
                                            <p>3A's in Arts Stream</p>
                                            <div style={{display: 'flex', gap: '10px'}}>
                                                <span>District Rank: 5</span>
                                                <span>Island Rank: 12</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h4>St. Aloysius' College - Galle</h4>
                                            <p>GCE. Ordinary Level</p>
                                            <p>2007 - 2017</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        )}
                        {activeSection === 'Interests' && (
                            <div>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    gap: '20px',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <li>
                                        <div>
                                            <h4>Sports</h4>
                                            <p>Cricket</p>
                                            <p>Badminton</p>
                                            <p>Athletics</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h4>Hobbies</h4>
                                            <p>Watching movies & TV Series</p>
                                            <p>Listening to Music</p>
                                            <p>Exploring History</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h4>Roles Models</h4>
                                            <p>Steve Jobs</p>
                                            <p>Mark Zuckerberg</p>
                                            <p>Kumar Sangakkara</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
}