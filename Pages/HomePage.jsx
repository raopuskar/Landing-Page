import Hero from '../src/components/Hero'
import HomeCard from '../src/components/HomeCard'
import Card from '../src/components/Card'
import JobListing from '../src/components/JobListing'
import  ViewAllJobs from '../src/components/ViewAllJobs'


const HomePage = () => {
  return (
    <>
    <Hero/>
    <HomeCard/>
    <JobListing isHome={true}/>
    <ViewAllJobs />

    </>
  )
}

export default HomePage