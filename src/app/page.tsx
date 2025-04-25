import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Interests from '@/components/Interests';
import Link from 'next/link';

export default function Home() {
  const skills = [
    {
      title: "Languages",
      description: "React, Next.js, JavaScript, TypeScript, C#, C++, Python, Lua, Java"
    },
    {
      title: "Frameworks & Skills",
      description: "Machine Learning (Reinforcement, Deep Neural Networks), Networking, AI Behavior, VR Development"
    },
    {
      title: "Developer Tools",
      description: "Visual Studio Code, SVN, Git, Eclipse, XCode, Unity, MongoDB"
    },
    {
      title: "Design Tools",
      description: "Figma, Photoshop, InDesign, Illustrator"
    }
  ];

  const interests = [
    {
      title: "Design",
      description: "7+ years of amateur design experience for print and web UI/UX design"
    },
    {
      title: "Leadership",
      description: "Eagle Scout (Troop 711), ex-President Wash. U. Hip Hop Union"
    },
    {
      title: "Dance",
      description: "Breakdance (Top 8 National Collegiate Breaking 2023 & 2024), Hip-Hop/All Styles (led dance team to 3rd place finish at Prelude New England dance competition)"
    },
    {
      title: "Other Interests",
      description: "Virtual Reality, Gaming, Sports"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-8 md:py-16 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">Jonathan Yue</span>
        </h1>
        <p className="text-xl text-secondary-text mb-6 max-w-2xl mx-auto">
          Full Stack Developer & Game Engineer with expertise in interactive experiences and machine learning
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-secondary-text">
          <SocialLink href="mailto:yuejonathan@gmail.com" text="yuejonathan@gmail.com" />
          <span className="hidden md:inline text-border">|</span>
          <SocialLink href="https://linkedin.com/in/jonathanyue97" text="LinkedIn" />
          <span className="hidden md:inline text-border">|</span>
          <SocialLink href="https://yonyonjue.itch.io" text="itch.io" />
        </div>
      </section>

      {/* Experience Section */}
      <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <SectionHeader title="Experience" />
        <div className="space-y-6">
          <WorkExperience
            title="Full-Stack Engineer (Founding)"
            company="Goose Party"
            period="2024 - Present"
            achievements={[
              "Developed and launched a web-based party game platform with Next.js, enabling seamless multiplayer experiences and resolving over a dozen critical front-end and back-end issues.",
              "Implemented major UI improvements including intuitive animations, visual feedback systems, and streamlined audio settings, significantly boosting user engagement and retention.",
              "Added essential quality-of-life features and collaborated closely with the product team to integrate improvements, resulting in smoother gameplay and increased customer satisfaction."
            ]}
          />

          <WorkExperience
            title="Game Developer"
            company="Human Mode"
            period="2021 - 2022"
            achievements={[
              "Led the creation of three interactive VR game experiences using the Massive Loop VR SDK, which increased participation in the Massive Loop platform 40%.",
              "Spearheaded end-to-end feature development for the Massive Loop SDK.",
              "Increased the efficiency of new world creation by 25% in the Massive Loop developer community which also improved new user experience."
            ]}
          />

          <WorkExperience
            title="Technical Manager"
            company="Global Properties LTD"
            period="2020 - 2021"
            location="Toronto, Canada"
            achievements={[
              "Re-platformed outdated systems to newly implemented cloud-based platform, boosting clerical accuracy by 50%.",
              "Collaborated with management to design data tools, which reduced task completion time by 30%."
            ]}
          />

          <WorkExperience
            title="Gameplay Programmer"
            company="Cologne Game Lab"
            period="2019"
            location="Cologne, Germany"
            achievements={[
              "Led the development of World of Materials (Welt Der Werkstoffe), an experimental educational game, which won the Best Serious Game award at the 2021 German Computer Games Awards.",
              "Coordinated with a cross-functional team of six to create 10 levels of in-depth puzzles covering material science exam material.",
              "Created systems including Navigation, Dialogue, and Player interaction with object-oriented design which accelerated puzzle design by 50% by allowing designers to create puzzles without coding."
            ]}
          />
        </div>
      </section>

      {/* Education Section */}
      <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <SectionHeader title="Education" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-card-bg/30 hover:bg-card-bg/60 rounded-lg border border-border transition-all duration-300 shadow-sm hover:shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-1">Tufts University</h3>
            <p className="text-accent font-medium mb-2">M.S. in Computer Science</p>
            <p className="text-secondary-text">Boston, MA • 2022-2024</p>
            <div className="mt-3 text-sm bg-highlight/20 inline-block px-3 py-1 rounded-full">
              Machine Learning Specialization
            </div>
          </div>
          <div className="p-6 bg-card-bg/30 hover:bg-card-bg/60 rounded-lg border border-border transition-all duration-300 shadow-sm hover:shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-1">Washington University in St. Louis</h3>
            <p className="text-accent font-medium mb-2">B.S. in Computer Science</p>
            <p className="text-secondary-text">St. Louis, MO • 2015-2019</p>
            <div className="mt-3 text-sm bg-highlight/20 inline-block px-3 py-1 rounded-full">
              CS GPA: 3.62
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <SectionHeader title="Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Skills key={index} title={skill.title} description={skill.description} />
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <SectionHeader title="Interests" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <Interests key={index} title={interest.title} description={interest.description} />
          ))}
        </div>
      </section>
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="mb-6 flex items-center">
      <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      <div className="ml-4 flex-grow h-px bg-border"></div>
    </div>
  );
};

interface SocialLinkProps {
  href: string;
  text: string;
}

const SocialLink = ({ href, text }: SocialLinkProps) => {
  return (
    <a 
      href={href} 
      target={href.startsWith('mailto') ? undefined : '_blank'} 
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-1 text-secondary-text hover:text-accent transition-colors duration-300"
    >
      <span>{text}</span>
    </a>
  );
};
