import { getImageUrl } from "../../utils.js";
import styles from "./about.module.css";
import { useState } from "react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';

export const About = () => {
    const [activeSection, setActiveSection] = useState('Education');
    const [modalData, setModalData] = useState(null);

    const universityClubs = [
        {
            id: 'aiesec-uom',
            title: 'AIESEC in University of Moratuwa',
            icon: <AccountBalanceIcon sx={{ fontSize: 20, color: 'var(--color-primary)' }} />,
            hierarchy: ["Member"]
        },
        {
            id: 'aiesec-sl',
            title: 'AIESEC in Sri Lanka',
            icon: <AccountBalanceIcon sx={{ fontSize: 20, color: 'var(--color-primary)' }} />,
            hierarchy: ["Member"]
        },
        {
            id: 'mhc',
            title: 'Mora Hiking Club',
            icon: <AccountBalanceIcon sx={{ fontSize: 20, color: 'var(--color-primary)' }} />,
            hierarchy: ["Member"]
        },
        {
            id: 'ieee',
            title: 'IEEE Student Branch of University of Moratuwa',
            icon: <AccountBalanceIcon sx={{ fontSize: 20, color: 'var(--color-primary)' }} />,
            hierarchy: ["Member"]
        },
        {
            id: 'rotaract',
            title: 'Rotaract Club of University of Moratuwa',
            icon: <AccountBalanceIcon sx={{ fontSize: 20, color: 'var(--color-primary)' }} />,
            hierarchy: ["Member"]
        }
    ];

    const schoolClubs = [
        {
            id: 'quiz',
            title: 'Quiz Club',
            icon: <SchoolIcon sx={{ fontSize: 20, color: 'var(--color-primary)' }} />,
            hierarchy: ["Member"]
        },
        {
            id: 'french',
            title: 'French Language Society',
            icon: <SchoolIcon sx={{ fontSize: 20, color: 'var(--color-primary)' }} />,
            hierarchy: ["Member"]
        }
    ];

    const ClubCard = ({ item }) => (
        <div
            onClick={() => setModalData(item)}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                borderRadius: '8px',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid rgba(124, 58, 237, 0.2)',
                cursor: 'pointer',
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
            <h5 style={{ fontSize: '15px', margin: 0, fontWeight: '500', lineHeight: '1.3' }}>{item.title}</h5>
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
                    <h3>Extra Curricular Activities</h3>
                    <ul className={styles.listContent}>
                        <li>
                            <div>
                                <h4 style={{ marginBottom: '15px' }}>University Level</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {universityClubs.map(item => <ClubCard key={item.id} item={item} />)}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h4 style={{ marginBottom: '15px', marginTop: '10px' }}>School Level</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {schoolClubs.map(item => <ClubCard key={item.id} item={item} />)}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.sec2Column}>
                    <h3>Hobbies & Interests</h3>
                    <ul className={styles.listContent} style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '10px' }}>
                        <li>
                            <div>
                                <h4 style={{ marginBottom: '12px' }}>Sports</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {['Cricket', 'Badminton', 'Athletics'].map((item) => (
                                        <span key={item} style={{ padding: '6px 14px', backgroundColor: 'rgba(124, 58, 237, 0.08)', color: 'var(--color-primary)', borderRadius: '20px', fontSize: '14px', fontWeight: '500', border: '1px solid rgba(124, 58, 237, 0.2)' }}>{item}</span>
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h4 style={{ marginBottom: '12px' }}>Hobbies</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {['Watching movies & TV Series', 'Listening to Music', 'Hiking'].map((item) => (
                                        <span key={item} style={{ padding: '6px 14px', backgroundColor: 'rgba(124, 58, 237, 0.08)', color: 'var(--color-primary)', borderRadius: '20px', fontSize: '14px', fontWeight: '500', border: '1px solid rgba(124, 58, 237, 0.2)' }}>{item}</span>
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h4 style={{ marginBottom: '12px' }}>Role Models</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {['Steve Jobs', 'Mark Zuckerberg', 'Kumar Sangakkara'].map((item) => (
                                        <span key={item} style={{ padding: '6px 14px', backgroundColor: 'rgba(124, 58, 237, 0.08)', color: 'var(--color-primary)', borderRadius: '20px', fontSize: '14px', fontWeight: '500', border: '1px solid rgba(124, 58, 237, 0.2)' }}>{item}</span>
                                    ))}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <Dialog
                open={Boolean(modalData)}
                onClose={() => setModalData(null)}
                PaperProps={{
                    style: {
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-text)',
                        borderRadius: '16px',
                        minWidth: '350px',
                        padding: '10px'
                    }
                }}
            >
                {modalData && (
                    <>
                        <DialogTitle sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', paddingBottom: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', lineHeight: 1.3, fontSize: '18px' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '8px',
                                    backgroundColor: 'rgba(124, 58, 237, 0.08)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    {modalData.icon}
                                </div>
                                <span>{modalData.title}</span>
                            </div>
                            <IconButton onClick={() => setModalData(null)} sx={{ color: 'var(--color-text)', padding: '4px' }}>
                                <CloseIcon />
                            </IconButton>
                        </DialogTitle>
                        <DialogContent>
                            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px', listStyleType: 'disc' }}>
                                {modalData.hierarchy.map((point, index) => (
                                    <li key={index} style={{ lineHeight: '1.5', fontSize: '15px' }}>{point}</li>
                                ))}
                            </ul>
                        </DialogContent>
                    </>
                )}
            </Dialog>
        </section>
    );
}