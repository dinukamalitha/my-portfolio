import { getImageUrl } from "../../utils.js";
import styles from "./about.module.css";
import { useState } from "react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';

export const About = () => {
    const [activeSection, setActiveSection] = useState('Education');

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
            id: 'quiz',
            title: 'Quiz Club - St: Aloysius College, Galle',
            icon: <SchoolIcon sx={{ fontSize: 20, color: 'var(--color-primary)' }} />,
            duration: '(2012 - 2017)',
            position: 'Secretary - 2016'
        },
        {
            id: 'quiz',
            title: 'Quiz Club - Richmond College, Galle',
            icon: <SchoolIcon sx={{ fontSize: 20, color: 'var(--color-primary)' }} />,
            duration: '(2018 - 2020)',
            position: 'Treasurer - 2020'
        },
        {
            id: 'french',
            title: 'French Language Society - Richmond College, Galle    ',
            icon: <SchoolIcon sx={{ fontSize: 20, color: 'var(--color-primary)' }} />,
            duration: '(2018 - 2020)',
            position: 'Secretary'
        }
    ];

    const techStack = {
        Frontend: [
            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
            { name: 'NextJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
            { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
            { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
            { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
            { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },

        ],
        Backend: [
            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
            { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
            { name: 'SpringBoot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
            { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
            { name: 'NestJs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg' },
        ],
        Database: [
            { name: 'MSSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
            { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
            { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
            { name: 'Pinecone', icon: 'https://th.bing.com/th/id/OIP.dIiAlq1gr59JEXq0qq8sjgHaHa?w=170&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
        ],
        Cloud: [
            { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
            { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' }
        ],
        Programming: [
            { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
            { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
            { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
        ],
        Miscellaneous: [
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
            { name: 'Github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
            { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
            { name: 'ClickUp', icon: 'https://cdn.simpleicons.org/clickup' },
        ]
    };

    const workExperience = [
        {
            role: 'Software Developer',
            company: 'AIESEC International',
            duration: 'Feb 2025 - Jul 2026',
            description: 'Contributed to the development of internal software development projects - MEXA, Polaris in development, project management, architecture designing...'
        },
        {
            role: 'Software Engineer Intern',
            company: 'SI Dynamics Pvt. Ltd.',
            duration: 'May 2025 - Oct 2025',
            description: 'Contributed to the full stack software development process of multiple projects including EDOTCO, HIMS etc...'
        }
    ];

    const TechCard = ({ item }) => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '10px', width: '80px', textAlign: 'center' }}>
            <div style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: '10px', padding: '8px', border: '1px solid rgba(124, 58, 237, 0.2)', transition: 'all 0.2s ease', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'} onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.2)'}>
                <img src={item.icon} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <span style={{ fontSize: '12px', fontWeight: '500', color: 'var(--color-text)' }}>{item.name}</span>
        </div>
    );

    const ClubCard = ({ item }) => (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                borderRadius: '8px',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid rgba(124, 58, 237, 0.2)',
                transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)';
                e.currentTarget.style.backgroundColor = 'rgba(124, 58, 237, 0.05)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.2)';
                e.currentTarget.style.backgroundColor = 'var(--color-surface)';
            }}
        >
            <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '6px',
                backgroundColor: 'rgba(124, 58, 237, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
            }}>
                {item.icon}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h5 style={{ fontSize: '15px', margin: 0, fontWeight: '500', lineHeight: '1.3' }}>
                    {item.title} <span style={{ opacity: 0.8, fontSize: '13px', fontWeight: '400' }}>- {item.duration}</span>
                </h5>
                <span style={{ fontSize: '13px', color: 'var(--color-text)', opacity: 0.9, marginTop: '2px' }}>
                    {item.position}
                </span>
            </div>
        </div>
    );

    return (
        <section id="about" className={styles.container}>
            <h2 className={styles.title}>About Me</h2>

            <div className={styles.section1}>
                <div className={styles.column1}>
                    <img
                        src={getImageUrl("profile.png")}
                        alt="Dinuka Malitha"
                        className={styles.aboutImg}
                    />
                </div>
                <div className={styles.column2}>
                    <div className={styles.aboutItem}>
                        <div style={{ width: '100%', marginBottom: '35px', padding: '0 20px' }}>
                            <ul style={{ listStylePosition: 'inside', fontSize: '17px', lineHeight: '1.8', color: 'var(--color-text)' }}>
                                <li>
                                    Final Year IT & Management Undergraduate at the University of Moratuwa
                                </li>
                                <li style={{ marginTop: '10px' }}>
                                    A Full Stack Software Developer
                                </li>
                            </ul>
                        </div>
                        <div className={styles.aboutItems}>
                            <h2
                                className={activeSection === 'Education' ? styles.activeTab : ''}
                                onClick={() => setActiveSection('Education')}
                            >
                                Educational Background
                            </h2>
                            <h2
                                className={activeSection === 'Certificates' ? styles.activeTab : ''}
                                onClick={() => setActiveSection('Certificates')}
                            >
                                Licenses & Certificates
                            </h2>
                        </div>
                        <div className={styles.aboutItemsContent}>
                            {activeSection === 'Education' && (
                                <div>
                                    <ul className={styles.listContent}>
                                        <li>
                                            <div>
                                                <h4>University Of Moratuwa</h4>
                                                <p>BSc. (Hons.) in Information Technology & Management</p>
                                                <p>2022 - 2026 | GPA - 3.70</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4>Richmond College - Galle</h4>
                                                <p>GCE. Advanced Level</p>
                                                <p>2018 - 2020 | 3A's in Arts Stream</p>
                                                <div style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'var(--color-primary)' }}>
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
                            {activeSection === 'Certificates' && (
                                <div>
                                    <ul className={styles.listContent}>
                                        <li>
                                            <div>
                                                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    Pearson's Assured Diploma in Software Engineering
                                                    <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', display: 'flex', transition: 'color 0.2s ease', '&:hover': { color: 'var(--color-accent)' } }} title="View Proof">
                                                        <OpenInNewIcon sx={{ fontSize: 18 }} />
                                                    </a>
                                                </h4>
                                                <p>Esoft Metro Campus</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    DELF A2
                                                    <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', display: 'flex', transition: 'color 0.2s ease', '&:hover': { color: 'var(--color-accent)' } }} title="View Proof">
                                                        <OpenInNewIcon sx={{ fontSize: 18 }} />
                                                    </a>
                                                </h4>
                                                <p>Alliance Francais de Matara</p>
                                                <p>2020</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    DELF B1
                                                    <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', display: 'flex', transition: 'color 0.2s ease', '&:hover': { color: 'var(--color-accent)' } }} title="View Proof">
                                                        <OpenInNewIcon sx={{ fontSize: 18 }} />
                                                    </a>
                                                </h4>
                                                <p>Alliance Francais de Matara</p>
                                                <p>2021</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.section2}>
                <div className={styles.sec2Column}>
                    <h3>Tech Stack</h3>
                    <ul className={styles.listContent} style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '10px' }}>
                        {Object.entries(techStack).map(([category, items]) => (
                            <li key={category}>
                                <div>
                                    <h4 style={{ marginBottom: '12px' }}>{category}</h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                        {items.map(item => <TechCard key={item.name} item={item} />)}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    <div className={styles.sec2Column} style={{ flex: 'none' }}>
                        <h3>Work Experience</h3>
                        <ul className={styles.listContent} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
                            {workExperience.map((work, index) => (
                                <li key={index}>
                                    <div style={{ backgroundColor: 'var(--color-surface)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(124, 58, 237, 0.2)' }}>
                                        <h4 style={{ marginBottom: '5px', color: 'var(--color-primary)' }}>{work.role}</h4>
                                        <p style={{ fontWeight: '600', marginBottom: '5px' }}>{work.company}</p>
                                        <p style={{ fontSize: '13px', opacity: 0.8, marginBottom: '10px' }}>{work.duration}</p>
                                        <p style={{ fontSize: '14px', lineHeight: '1.5' }}>{work.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.sec2Column} style={{ flex: 'none' }}>
                        <h3>Extra Curricular Activities</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                            {[...universityClubs, ...schoolClubs].map(item => <ClubCard key={item.id} item={item} />)}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}