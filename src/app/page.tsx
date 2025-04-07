import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Jonathan Yue</h1>
        <div className="flex flex-wrap justify-center gap-4 text-gray-600">
          <a href="mailto:yuejonathan@gmail.com" className="hover:text-blue-600">yuejonathan@gmail.com</a>
          <span>|</span>
          <span>+1 (410) 292-0310</span>
          <span>|</span>
          <a href="https://linkedin.com/in/jonathanyue97" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            linkedin.com/in/jonathanyue97
          </a>
          <span>|</span>
          <a href="https://yonyonjue.itch.io" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            yonyonjue.itch.io
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Experience</h2>
        <div className="space-y-8">
          {/* Goose Party */}
          <div className="border-l-4 border-gray-200 pl-4">
            <h3 className="font-medium text-gray-900">Full-Stack Engineer (Founding) | Goose Party</h3>
            <p className="text-gray-600">2024 - Present</p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
              <li>Developed and launched a web-based party game platform built with Next.js, enabling seamless multiplayer experiences.</li>
              <li>Resolved over a dozen critical front-end and back-end issues tracked through GitHub, enhancing gameplay fluidity, UI responsiveness, and user interaction.</li>
              <li>Implemented major UI improvements, including intuitive event animations, visual feedback systems, and streamlined audio settings, significantly boosting user engagement and retention.</li>
              <li>Added essential quality-of-life features such as pause functionality, tooltips for better usability, and clear visual indicators for game states, improving overall user experience metrics.</li>
              <li>Collaborated closely with the product team, iteratively addressing feedback to quickly integrate improvements, resulting in smoother gameplay and increased customer satisfaction.</li>
            </ul>
          </div>

          {/* Human Mode */}
          <div className="border-l-4 border-gray-200 pl-4">
            <h3 className="font-medium text-gray-900">Game Developer | Human Mode</h3>
            <p className="text-gray-600">2021 - 2022</p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
              <li>Led the creation of three interactive VR game experiences using the Massive Loop VR SDK, which increased participation in the Massive Loop platform 40%.</li>
              <li>Spearheaded end-to-end feature development for the Massive Loop SDK.</li>
              <li>Increased the efficiency of new world creation by 25% in the Massive Loop developer community which also improved new user experience.</li>
            </ul>
          </div>

          {/* Global Properties */}
          <div className="border-l-4 border-gray-200 pl-4">
            <h3 className="font-medium text-gray-900">Technical Manager | Global Properties LTD</h3>
            <p className="text-gray-600">Toronto, Canada • 2020 - 2021</p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
              <li>Re-platformed outdated systems to newly implemented cloud-based platform, boosting clerical accuracy by 50%.</li>
              <li>Collaborated with management to design data tools, which reduced task completion time by 30%.</li>
            </ul>
          </div>

          {/* Cologne Game Lab */}
          <div className="border-l-4 border-gray-200 pl-4">
            <h3 className="font-medium text-gray-900">Gameplay Programmer | Cologne Game Lab</h3>
            <p className="text-gray-600">Cologne, Germany • 2019</p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
              <li>Led the development of "World of Materials" (Welt Der Werkstoffe), an experimental educational game, which won the Best Serious Game award at the 2021 German Computer Games Awards.</li>
              <li>Coordinated with a cross-functional team of six to create 10 levels of in-depth puzzles covering material science exam material.</li>
              <li>Created systems including Navigation, Dialogue, and Player interaction with object-oriented design which accelerated puzzle design by 50% by allowing designers to create puzzles without coding.</li>
            </ul>
          </div>

          {/* Worms in the Sky */}
          <div className="border-l-4 border-gray-200 pl-4">
            <h3 className="font-medium text-gray-900">Developer | Worms in the Sky</h3>
            <p className="text-gray-600">Showcase • 2018</p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
              <li>Created a 3D boss fighter game in Unity over three months, applying self-taught concepts such as state-machines, behavior trees, animation, and rigging.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Education</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-gray-200 pl-4">
            <h3 className="font-medium text-gray-900">Tufts University</h3>
            <p className="text-gray-600">M.S. in Computer Science (Machine Learning) • Boston, MA • 2022-2024</p>
          </div>
          <div className="border-l-4 border-gray-200 pl-4">
            <h3 className="font-medium text-gray-900">Washington University in St. Louis</h3>
            <p className="text-gray-600">B.S. in Computer Science • St. Louis, MO • 2015-2019 (CS GPA: 3.62)</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Languages</h3>
            <p className="text-gray-600">Proficient in C#, React, C++, Python, Lua, Java</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Frameworks & Skills</h3>
            <p className="text-gray-600">Machine Learning (Reinforcement, Deep Neural Networks), Networking, AI Behavior, VR Development</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Developer Tools</h3>
            <p className="text-gray-600">Visual Studio Code, SVN, Git, Eclipse, XCode, Unity, MongoDB</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Design Tools</h3>
            <p className="text-gray-600">Figma, Photoshop, InDesign, Illustrator</p>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Design</h3>
            <p className="text-gray-600">7+ years of amateur design experience for print and web UI/UX design</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Leadership</h3>
            <p className="text-gray-600">Eagle Scout (Troop 711), ex-President Wash. U. Hip Hop Union</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Dance</h3>
            <p className="text-gray-600">Breakdance (Top 8 National Collegiate Breaking 2023 & 2024), Hip-Hop/All Styles (led dance team to 3rd place finish at Prelude New England dance competition)</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Other Interests</h3>
            <p className="text-gray-600">Virtual Reality, Gaming, Sports</p>
          </div>
        </div>
      </section>
    </div>
  );
}
