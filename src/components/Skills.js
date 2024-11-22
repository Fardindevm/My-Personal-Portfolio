import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-blue-400">My Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Frontend Development</h3>
              <ul className="space-y-4">
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">React.js</span>
                    <span className="text-blue-400">90%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </li>
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">HTML5 & CSS3</span>
                    <span className="text-blue-400">95%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </li>
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Tailwind CSS</span>
                    <span className="text-blue-400">85%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </li>
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">jQuery</span>
                    <span className="text-blue-400">80%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Other Skills</h3>
              <ul className="space-y-4">
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Git</span>
                    <span className="text-blue-400">85%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </li>
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">SASS</span>
                    <span className="text-blue-400">70%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </li>
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Responsive Design</span>
                    <span className="text-blue-400">90%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </li>
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Web Performance</span>
                    <span className="text-blue-400">85%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Skills
