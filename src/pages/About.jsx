import { Link } from 'react-router-dom'
import IntroLists from '../components/introLists'
import Meet_team from '../components/Meet_team'
import mainIntroData from '../data/main_intro.json'
import meet_the_team from '../data/meet_the_team.json'

function About() {

  return (
    <div className='aboutPage'>
      <IntroLists listings1={mainIntroData}/>
      <Meet_team listings={meet_the_team}/>
      {/* <Link to="/about" className="Explore">Explore MST</Link> */}
    </div>
  )
}

export default About
