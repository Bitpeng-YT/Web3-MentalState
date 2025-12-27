import React from 'react'
import { questions, Question } from '../data/questions'
import { MessageCircle, SliderHorizontal } from 'lucide-react'

interface Props {
  onAnswer: (id: string, value: any) => void
  onSubmit: () => void
}

const Questionnaire: React.FC<Props> = ({ onAnswer, onSubmit }) => {
  const [localAnswers, setLocalAnswers] = React.useState<Record<string, any>>({})

  const handleChange = (id: string, value: any) => {
    setLocalAnswers(prev => ({ ...prev, [id]: value }))
    onAnswer(id, value)
  }

  return (
    <div className="space-y-6">
      {questions.map(q => (
        <div key={q.id} className="p-4 bg-gray-800 rounded-lg shadow-sm">
          <div className="flex items-center space-x-2 mb-2">
            <MessageCircle size={20} />
            <h3 className="text-lg font-medium">{q.text}</h3>
          </div>

          {q.type === 'options' && q.options && (
            <div className="grid grid-cols-2 gap-2">
              {q.options.map(opt => (
                <label key={opt} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name={q.id}
                    value={opt}
                    checked={localAnswers[q.id] === opt}
                    onChange={() => handleChange(q.id, opt)}
                    className="form-radio text-indigo-400"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          )}

          {q.type === 'slider' && (
            <div className="flex items-center space-x-4">
              <SliderHorizontal size={20} />
              <input
                type="range"
                min={q.min}
                max={q.max}
                step={q.step}
                value={localAnswers[q.id] ?? q.min}
                onChange={e => handleChange(q.id, Number(e.target.value))}
                className="flex-1"
              />
              <span className="w-8 text-center">{localAnswers[q.id] ?? q.min}</span>
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-end">
        <button
          onClick={onSubmit}
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-medium transition-colors"
        >
          生成报告
        </button>
      </div>
    </div>
  )
}

export default Questionnaire
