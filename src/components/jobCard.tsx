import { Link } from "react-router-dom";
import type { Job } from "../types/job";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Link to={`/job/${job.id}`} className="group">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border border-gray-100 hover:border-blue-300 h-full flex flex-col">
        {/* Logo & Remote */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            {job.company.charAt(0)}
          </div>

          {job.remote && (
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
              Remote
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
          {job.title}
        </h3>

        <p className="text-gray-600 font-medium mb-4">{job.company}</p>

        {/* Info */}
        <div className="space-y-2 mb-4 flex-1 text-sm text-gray-500">
          <p>{job.location}</p>
          <p>{job.createdAt}</p>
        </div>

        {/* Button */}
        <div className="pt-4 border-t border-gray-100 mt-auto">
          <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition">
            Detaya Git
          </button>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
