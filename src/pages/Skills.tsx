import React from "react";
import TitlesTypewriter from "../components/TitlesTypeWriter";

const Skills: React.FC = () => {
  const skillsData = {
    Languages: ["JavaScript", "Java", "TypeScript", "HTML", "CSS"],
    "Frameworks & Libraries": [
      "React",
      "Redux",
      "Next.js",
      "Tailwind",
      "Bootstrap",
      "Ant Design",
      "Express",
      "Spring",
      "Hibernate",
    ],
    Tools: ["Git", "GitHub", "VSCode", "IntelliJ", "Vim", "Postman"],
    Databases: ["MySQL", "MongoDB"],
    Testing: ["JUnit", "Mockito"],
    Other: ["Canva", "Maven", "Tomcat"],
  };

  return (
    <div className='bg-white dark:bg-neutral-900 text-black dark:text-white min-h-screen mt-[-1em]'>
      <article className='inter-regular-text text-justify mx-auto max-w-4xl px-4 sm:px-6 md:px-8 lg:px-10 py-4 w-full'>
        <TitlesTypewriter text='Skills' />

        <div className=''>
          <h2>Languages</h2>
          <div className='flex row space-x-5'>
            <img
              src='https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png'
              alt='HTML'
              title='HTML'
              className='w-24'
            />
            <img
              src='https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png'
              alt='CSS'
              title='CSS'
              className='w-24'
            />
            <img
              src='https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png'
              alt='JavaScript'
              title='JavaScript'
              className='w-24'
            />

            <img
              src='https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png'
              alt='TypeScript'
              title='TypeScript'
              className='w-24'
            />
            <img
              src='https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png'
              alt='Java'
              title='Java'
              className='w-24'
            />
          </div>
        </div>

        <div className=''>
          <h2>Frameworks & Libraries</h2>
          <div className='flex row space-x-5'>
            <img
              src='https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png'
              alt='React'
              title='React'
              className='w-24'
            />
            <img
              src='https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704'
              alt='Next.js'
              title='Next.js'
              className='w-24'
            />
            <img
              src='https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png'
              alt='Tailwind CSS'
              title='Tailwind CSS'
              className='w-24'
            />
            <img
              className='w-24'
              src='https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png'
              alt='Bootstrap'
              title='Bootstrap'
            />
            <img
              className='w-24'
              src='https://user-images.githubusercontent.com/25181517/190887795-99cb0921-e57f-430b-a111-e165deedaa36.png'
              alt='Ant Design'
              title='Ant Design'
            />
          </div>
        </div>

        <div className=''>
          <h2>Backend Technologies</h2>
          <div className='flex row space-x-5'>
            <img
              className='w-24'
              src='https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png'
              alt='Node.js'
              title='Node.js'
            />

            <img
              className='w-24'
              src='https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png'
              alt='Express'
              title='Express'
            />
            <img
              className='w-24'
              src='https://user-images.githubusercontent.com/25181517/117201470-f6d56780-adec-11eb-8f7c-e70e376cfd07.png'
              alt='Spring'
              title='Spring'
            />
            <img
              className='w-24'
              src='https://user-images.githubusercontent.com/25181517/117207493-49665200-adf4-11eb-808e-a9c0fcc2a0a0.png'
              alt='Hibernate'
              title='Hibernate'
            />
          </div>
        </div>

        <div className=''>
          <h2>Databases</h2>
          <div className='flex row space-x-5'>
            <img
              className='w-24'
              src='https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png'
              alt='MySQL'
              title='MySQL'
            />
            <img
              className='w-24'
              src='https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png'
              alt='mongoDB'
              title='mongoDB'
            />
          </div>
        </div>

        <div className=''>
          <h2>Testing</h2>
          <div className='flex row space-x-5'>
            <img
              className='w-24'
              src='https://user-images.githubusercontent.com/25181517/117533873-484d4480-afef-11eb-9fad-67c8605e3592.png'
              alt='JUnit'
              title='JUnit'
            />
            <img
              className='w-24'
              src='https://user-images.githubusercontent.com/25181517/183892181-ad32b69e-3603-418c-b8e7-99e976c2a784.png'
              alt='mocikto'
              title='mocikto'
            />
          </div>
        </div>

        <div className=''>
          <h2>Tools</h2>
          <div className='flex row space-x-5'>
            <img
              className='w-24'
              src='https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png'
              alt='Git'
              title='Git'
            />
            <img
              className='w-24'
              src='https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png'
              alt='GitHub'
              title='GitHub'
            />
            <img
              className='w-24'
              src='https://user-images.githubusercontent.com/25181517/192108889-232b3431-a585-4b36-a62d-9078bd3641d9.png'
              alt='Vim'
              title='Vim'
            />
            <img
              className='w-24'
              src='https://user-images.githubusercontent.com/25181517/192108890-200809d1-439c-4e23-90d3-b090cf9a4eea.png'
              alt='IntelliJ'
              title='IntelliJ'
            />
            <img
              className='w-24'
              src='https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png'
              alt='Visual Studio Code'
              title='Visual Studio Code'
            />
            <img
              className='w-24'
              src='https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png'
              alt='Postman'
              title='Postman'
            />
          </div>
        </div>
        <div className=''>
          <h2>Other</h2>
          <div className='flex row space-x-5'>
            <img
              className='w-24'
              src='https://github-production-user-asset-6210df.s3.amazonaws.com/136815194/253220886-02494c7c-de6a-43a6-9293-6369696842ed.png'
              alt='Canva'
              title='Canva'
            />
            <img
              className='w-24'
              src='https://user-images.githubusercontent.com/25181517/183894676-137319b5-1364-4b6a-ba4f-e9fc94ddc4aa.png'
              alt='Tomcat'
              title='Tomcat'
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Skills;
