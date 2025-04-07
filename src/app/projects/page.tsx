export default function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">E-commerce Platform</h2>
            <p className="text-gray-600 mb-4">
              A full-stack e-commerce platform built with Next.js, TypeScript, and MongoDB.
              Features include user authentication, product management, and payment integration.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                Next.js
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                TypeScript
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                MongoDB
              </span>
            </div>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View Project →
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Task Management App</h2>
            <p className="text-gray-600 mb-4">
              A collaborative task management application with real-time updates,
              built using React, Node.js, and WebSocket technology.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                React
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                Node.js
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                WebSocket
              </span>
            </div>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 