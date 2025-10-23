import React from 'react'
export default function Experience(){
  const jobs = [
    {title: 'Civil Engineer – Roads & Highways Designer', company: 'Department of Public Works and Highways (DPWH)', date: 'Jan 2023 – Present'},
    {title: 'Graphic Designer', company: '', date: 'June 2024 – Dec 2024'},
    {title: 'Site Engineer', company: 'Metro Gear Construction Corp.', date: 'Dec 2020 – Dec 2022'},
  ]
  return (
    <section id="experience" className="px-6 py-10">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center sm:text-left">Work Experience</h2>
      <div className="space-y-4">
        {jobs.map((job, i) => (
          <div key={i} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <h3 className="font-bold text-lg">{job.title}</h3>
            <p className="text-gray-600">{job.company} {job.company ? ' | ' : ''}{job.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
