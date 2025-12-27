import React from 'react'
import { AlertCircle, CheckCircle } from 'lucide-react'

interface Props {
  report: {
    type: string
    analyses: string[]
    advice: string
  }
}

const Report: React.FC<Props> = ({ report }) => {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
          <CheckCircle size={28} className="text-green-400" />
          <span>当前 Web3 心理状态报告</span>
        </h2>
        <p className="text-xl font-semibold mb-2">{report.type}</p>
        <ul className="list-disc list-inside space-y-1">
          {report.analyses.map((a, i) => (
            <li key={i} className="text-gray-300">
              {a}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2 flex items-center space-x-2">
          <AlertCircle size={24} className="text-yellow-400" />
          <span>Web3 风格心理建议</span>
        </h3>
        <p className="text-gray-200">{report.advice}</p>
      </div>
    </div>
  )
}

export default Report
