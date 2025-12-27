import React from 'react'
import Questionnaire from './components/Questionnaire'
import Report from './components/Report'
import { BarChart2 } from 'lucide-react'

function App() {
  const [answers, setAnswers] = React.useState<Record<string, any>>({})
  const [report, setReport] = React.useState<{
    type: string
    analyses: string[]
    advice: string
  } | null>(null)

  const handleAnswer = (id: string, value: any) => {
    setAnswers(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = () => {
    // Simple scoring logic
    const scores = Object.values(answers).map(v => typeof v === 'number' ? v : 0)
    const avg = scores.reduce((a, b) => a + b, 0) / (scores.length || 1)

    let type = ''
    let analyses: string[] = []
    let advice = ''

    if (avg > 7) {
      type = '叙事焦虑型'
      analyses = [
        '你对市场叙事的追随像追逐流星，永远在寻找下一颗闪耀的星。',
        '每一次“看盘”都像是一次心理测验，答案总是“我在等下一波涨停”。',
        '你对叙事的敏感度高到可以在凌晨 3 点就收到“下一波牛市”的预警。',
      ]
      advice = '别让叙事把你逼成“叙事狂人”，偶尔给自己一个“无聊”日。'
    } else if (avg > 4) {
      type = '重仓自信型'
      analyses = [
        '你对仓位的把控像是把握一把火，既热情又不失冷静。',
        '每一次“看盘”都像是一次自我挑战，目标是“把握住每一次机会”。',
        '你对市场的信心足以让你在牛市中自带光环。',
      ]
      advice = '保持自信，但别忘了给自己留点“安全垫”。'
    } else {
      type = 'PTSD 康复期'
      analyses = [
        '你对市场的恐惧像是一次心理创伤，仍在慢慢恢复。',
        '每一次“看盘”都像是一次“心理排练”，你在练习如何不被恐慌吞噬。',
        '你对市场的依赖程度低到可以在凌晨 3 点不看手机。',
      ]
      advice = '给自己一点时间，别让恐惧成为你前进的绊脚石。'
    }

    setReport({ type, analyses, advice })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white flex flex-col items-center p-4">
      <header className="flex items-center space-x-2 mb-8">
        <BarChart2 size={32} />
        <h1 className="text-3xl font-bold">Web3 心理状态监测仪</h1>
      </header>

      <main className="w-full max-w-3xl flex-1">
        {!report ? (
          <Questionnaire onAnswer={handleAnswer} onSubmit={handleSubmit} />
        ) : (
          <Report report={report} />
        )}
      </main>

      <footer className="mt-8 text-sm opacity-70">
        © 2025 Web3 心理状态监测仪 – 纯娱乐，非医疗建议
      </footer>
    </div>
  )
}

export default App
