const UserCard = () => {
  // Array of 16 skills
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Python",
    "Java",
    "C++",
    "Git",
    "Linux",
    "AWS",
    "Agile",
    "Scrum",
  ];

  return (
    <div className="w-8/12 flex flex-col gap-4 items-start">
      <img
        src="https://picsum.photos/100"
        alt="User"
        className="rounded-full"
      />
      <h1 className="font-semibold">Tu Nguyen</h1>
      <p className="text-slate-500">An inquisitive programmer</p>
      <h2 className="font-semibold">SKILLS</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li className="bg-teal-400 text-slate-200 p-1 rounded-md" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
      <p>© {new Date().getFullYear()} Tu Nguyen</p>
    </div>
  );
};

export default UserCard;
