import React from "react";
import Image from "next/image";

export const ExperienceCard = ({ experience }) => {
  const { logo, company, jobTitle, skills, startDate, endDate, location } =
    experience || {};

  // Convert skills to array if it's a string
  const skillsArray =
    typeof skills === "string" ? skills.split(", ") : skills || [];

  // Helper functions to format dates and calculate duration
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const options = { month: "short", year: "numeric" };
    return new Date(dateStr).toLocaleDateString("en-US", options);
  };

  const getDuration = (start, end) => {
    if (!start) return "";
    const startD = new Date(start);
    const endD = end === "Present" ? new Date() : new Date(end);
    const months =
      (endD.getFullYear() - startD.getFullYear()) * 12 +
      (endD.getMonth() - startD.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    let duration = "";
    if (years > 0) duration += `${years} yr${years > 1 ? "s" : ""} `;
    if (remainingMonths > 0)
      duration += `${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`;
    return duration.trim();
  };

  return (
    <div className="card w-80 h-auto bg-[#07182E] rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,183,255,0.5)]">
      <div className="card-content p-4 relative z-10">
        {/* Logo and Company Name */}
        <div className="flex items-center mb-4">
          {logo && (
            <Image
              src={logo}
              alt={`${company} logo`}
              width={48}
              height={48}
              className="rounded-full"
            />
          )}
          <div className="ml-2">
            <h2
              title={company}
              className="text-md font-bold text-white/90 break-words"
            >
              <span className="text-wrap">{company || "Company Name"}</span>
            </h2>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-500/20 text-green-300/90">
              {endDate === "Present" ? "Current" : "Past"}
            </span>
          </div>
        </div>

        {/* Job Title and Dates */}
        <div className="mb-4">
          <h3 className="text-xs font-semibold text-white/80 mb-2">
            Position:
          </h3>
          <div className="text-sm font-medium text-white/90">
            {jobTitle || "Job Title"}
          </div>
          <div className="text-xs text-white/60 mt-1">
            {startDate || "Start Date"} - {endDate || "End Date"}
          </div>
        </div>

        {/* Skills section */}
        <div className="mb-4">
          <h3 className="text-xs font-semibold text-white/80 mb-2">Skills:</h3>
          <div className="flex flex-wrap -mx-1">
            {skillsArray.map((skill, index) => (
              <div
                key={index}
                className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Other Details section */}
        <div className="mb-4">
          <h3 className="text-xs font-semibold text-white/80 mb-2">
            Other Details:
          </h3>
          <ul className="text-xs text-white/60 grid grid-cols-1 gap-1">
            {startDate && (
              <li className="flex items-center">
                <span title="Total Duration" className="truncate">
                  Total Duration: {getDuration(startDate, endDate)}
                </span>
              </li>
            )}
            {location && (
              <li className="flex items-center">
                <span title="Location" className="truncate">
                  Location: {location}
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
