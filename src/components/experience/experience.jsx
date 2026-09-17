import styles from "./experience.module.css";

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
    Cloud: [
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' }
    ],
    Database: [
        { name: 'MSSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
        { name: 'Pinecone', icon: 'https://th.bing.com/th/id/OIP.dIiAlq1gr59JEXq0qq8sjgHaHa?w=170&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
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

const SkillChip = ({ item }) => (
    <span className={styles.skillChip}>
        <img src={item.icon} alt="" loading="lazy" className={styles.skillIcon} />
        {item.name}
    </span>
);

export const Experience = () => {
    return (
        <section id="experience" className={styles.container}>
            <h2 className={styles.title}>Work Experience</h2>

            <div className={styles.workSection}>
                <h3 className={styles.subheading}>Work Experience</h3>
                <div className={styles.timeline}>
                    {workExperience.map((work) => (
                        <div key={work.role} className={styles.timelineEntry}>
                            <div className={styles.entryHeader}>
                                <h4 className={styles.entryTitle}>{work.role}</h4>
                                <span className={styles.entryDates}>{work.duration}</span>
                            </div>
                            <p className={styles.entryOrg}>{work.company}</p>
                            <p className={styles.entryDesc}>{work.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.skillsSection}>
                <h3 className={styles.subheading}>Skills</h3>
                <div className={styles.skillsGrid}>
                    {Object.entries(techStack).map(([category, items]) => (
                        <div key={category} className={styles.skillCard}>
                            <h4 className={styles.skillGroupTitle}>{category}</h4>
                            <div className={styles.skillChips}>
                                {items.map(item => <SkillChip key={item.name} item={item} />)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
