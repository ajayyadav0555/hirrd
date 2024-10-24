import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BarLoader } from 'react-spinners'

const Onboarding = () => {
  const {user,isLoaded}=useUser()
  console.log(user)
  const navigate=useNavigate();
  if(!isLoaded){
    return <BarLoader className='mb-4'  color="#36d7b7"  width="100%" />
  }
  const handleRoleSelection=async(role)=>{
    await user.update({
      unsafeMetadata:{role},
    })
    .then(()=>{ 
      navigate(role==="recruiter"? "/post-job":"/jobs")
    })
    .catch((error)=>{
      console.error("Error updating role",error)
    })
  }
  return (
    <div className='flex flex-col items-center justify-center mt-32'>
      <h2 className='gradient-title font-7xl sm:text-8xl font-extrabold tracking-tighter'> I am ...</h2>
      <div className='mt-16 grid grid-cols-2 gap-4 md:px-40 w-full'>
        <Button className="h-36 text-2xl max-sm:text-sm" variant="blue"
        onClick={()=>handleRoleSelection("candidate")}
        >
          Candidate
        </Button>
        <Button className="h-36 text-2xl max-sm:text-sm " variant="destructive" onClick={()=>handleRoleSelection("recruiter")}>
          Recruiter
        </Button>
      </div>
      </div>
  )
}

export default Onboarding