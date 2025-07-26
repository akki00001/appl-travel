import React from 'react';

const WeAreHiring = () => {
  const jobs = [
    {
      title: 'Frontend Developer',
      location: 'Remote',
      description: 'We are looking for a skilled React developer to join our team.',
      applyLink: 'mailto:hr@astirpassage.com?subject=Frontend Developer Application',
    },
    {
      title: 'Backend Developer',
      location: 'Remote',
      description: 'Seeking an experienced Node.js developer for backend services.',
      applyLink: 'mailto:hr@astirpassage.com?subject=Backend Developer Application',
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote',
      description: 'Creative designer needed to improve user experience and interface.',
      applyLink: 'mailto:hr@astirpassage.com?subject=UI/UX Designer Application',
    },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>We Are Hiring</h1>
      <p>Join our team! Below are the current job openings:</p>
      <ul>
        {jobs.map((job, index) => (
          <li key={index} style={{ marginBottom: '1.5rem' }}>
            <h2>{job.title}</h2>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.description}</p>
            <a href={job.applyLink} style={{ color: 'blue', textDecoration: 'none' }}>Apply Now</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeAreHiring;
