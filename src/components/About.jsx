"use client";

const About = () => {
  const introText = `I'm Adhiraj Saha, a passionate web developer with a keen interest in blockchain technology. I enjoy exploring new technologies and building intuitive, engaging web experiences. With a strong foundation in ReactJS, Python, and Django, I'm focused on creating projects that make a difference.`;

  return (
    <div id="about" className="relative z-10 text-white h-screen px-8 lg:px-56 py-10 lg:pt-36">
      <h1 className="text-4xl font-bold text-center mb-10">About Me</h1>
      
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-evenly space-y-8 lg:space-y-0">
        {/* Left Side - Profile Image */}
        <div className="mb-6 lg:mb-0 flex-shrink-0">
            <img
              src="/assets/profile-picture.png"
              alt="Profile Picture"
              className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-full shadow-lg"
            />
        </div>

        {/* Right Side - Introduction Text */}
        <div className="text-left space-y-4 lg:w-2/3">
          <p className="text-lg lg:text-xl">{introText}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
