import dynamic from 'next/dynamic';
import SEO from '../components/SEO';
import { openSource } from '../portfolio';
import { GithubUserType } from '../types';
const Navigation = dynamic(() => import('../components/Navigation'));
const Greetings = dynamic(() => import('../containers/Greetings'));
const Skills = dynamic(() => import('../containers/Skills'));
const Education = dynamic(() => import('../containers/Education'));
const Experience = dynamic(() => import('../containers/Experience'));
const Feedbacks = dynamic(() => import('../containers/Feedbacks'));
const Awards = dynamic(() => import('../containers/Awards'));

const GithubProfileCard = dynamic(
  () => import('../components/GithubProfileCard')
);

export default function Home({
  githubProfileData,
}: {
  githubProfileData: GithubUserType;
}) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings githubProfileData={githubProfileData} />
      <Skills />
      <Education />
      <Experience />
      <Awards />
      <Feedbacks />
      {/* {showContactUs ? <Contact /> : null} */}
      <GithubProfileCard {...githubProfileData} />
    </div>
  );
}

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
