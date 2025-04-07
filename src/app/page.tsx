import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Interests from '@/components/Interests';

export default function Home() {
  const skills = [
    {
      title: "Languages",
      description: "Proficient in C#, React, C++, Python, Lua, Java"
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
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-2">Jonathan Yue</h1>
        <div className="flex flex-wrap justify-center gap-4 text-secondary-text">
          <a href="mailto:yuejonathan@gmail.com" className="hover:text-accent">yuejonathan@gmail.com</a>
          <span>|</span>
          {/* <span>+1 (410) 292-0310</span> */}
          <span>|</span>
          <a href="https://linkedin.com/in/jonathanyue97" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            linkedin.com/in/jonathanyue97
          </a>
          <span>|</span>
          <a href="https://yonyonjue.itch.io" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            yonyonjue.itch.io
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-6">Experience</h2>
        <div className="space-y-8">
          <WorkExperience
            title="Full-Stack Engineer (Founding)"
            company="Goose Party"
            period="2024 - Present"
            achievements={[
              "Developed and launched a web-based party game platform built with Next.js, enabling seamless multiplayer experiences.",
              "Resolved over a dozen critical front-end and back-end issues tracked through GitHub, enhancing gameplay fluidity, UI responsiveness, and user interaction.",
              "Implemented major UI improvements, including intuitive event animations, visual feedback systems, and streamlined audio settings, significantly boosting user engagement and retention.",
              "Added essential quality-of-life features such as pause functionality, tooltips for better usability, and clear visual indicators for game states, improving overall user experience metrics.",
              "Collaborated closely with the product team, iteratively addressing feedback to quickly integrate improvements, resulting in smoother gameplay and increased customer satisfaction."
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
              "Led the development of &quot;World of Materials&quot; (Welt Der Werkstoffe), an experimental educational game, which won the Best Serious Game award at the 2021 German Computer Games Awards.",
              "Coordinated with a cross-functional team of six to create 10 levels of in-depth puzzles covering material science exam material.",
              "Created systems including Navigation, Dialogue, and Player interaction with object-oriented design which accelerated puzzle design by 50% by allowing designers to create puzzles without coding."
            ]}
          />

          <WorkExperience
            title="Developer"
            company="Worms in the Sky"
            period="2018"
            location="Showcase"
            achievements={[
              "Created a 3D boss fighter game in Unity over three months, applying self-taught concepts such as state-machines, behavior trees, animation, and rigging."
            ]}
          />
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-6">Education</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-gray-200 pl-4">
            <h3 className="font-medium text-foreground">Tufts University</h3>
            <p className="text-secondary-text">M.S. in Computer Science (Machine Learning) • Boston, MA • 2022-2024</p>
          </div>
          <div className="border-l-4 border-gray-200 pl-4">
            <h3 className="font-medium text-foreground">Washington University in St. Louis</h3>
            <p className="text-secondary-text">B.S. in Computer Science • St. Louis, MO • 2015-2019 (CS GPA: 3.62)</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Skills key={index} title={skill.title} description={skill.description} />
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-6">Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <Interests key={index} title={interest.title} description={interest.description} />
          ))}
        </div>
      </section>
    </div>
  );
}
