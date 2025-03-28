import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import { getCurrentUser, getInterviewByUserId } from '@/lib/actions/auth.action'

import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

const page = async() => {
  const user = await getCurrentUser();
const interviews = await getInterviewByUserId(user?.id!);
if(!interviews) return null;
  return (
   <>
   <section className='card-cta'>
    <div className='flex flex-col gap-6 max-w-lg'>
      <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
      <p className='text-lg'>Practice on real interview qustions & get instant feedbacks.</p>
      <Button asChild className='btn-primary max-sm:w-full'>
        <Link href={"/interview"}>Start an Interview</Link>
      </Button>
    </div>
    <Image src="/robot.png" alt='robo' width={400} height={400} className='max-sm:hidden'/>
   </section>
   <section className='flex flex-col gap-6 mt-8'>
    <h2>Your Interviews</h2>
    <div className='interviews-section'>
     {interviews.map((interview)=>(
      <InterviewCard {...interview} key={interview.id}/>
     ))}
    </div>
   </section>
   <section className='flex flex-col gap-6 mt-8'>
    <h2>Take an Interview</h2>
    <div className='interviews-section'>
      <p>There are no interviews available</p>
    </div>
   </section>
   </>
  )
}

export default page