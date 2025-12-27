export interface Question {
  id: string
  text: string
  type: 'options' | 'slider'
  options?: string[]
  min?: number
  max?: number
  step?: number
}

export const questions: Question[] = [
  {
    id: 'watchFrequency',
    text: '今天看盘的频率',
    type: 'slider',
    min: 0,
    max: 10,
    step: 1,
  },
  {
    id: 'narrativeSwitch',
    text: '最近有没有频繁切换叙事',
    type: 'options',
    options: ['从未', '偶尔', '经常', '总是'],
  },
  {
    id: 'richReaction',
    text: '看到别人暴富时的真实反应',
    type: 'options',
    options: ['无动于衷', '羡慕', '嫉妒', '狂喜'],
  },
  {
    id: 'lastUnique',
    text: '最近一次说“这把不一样”的时间',
    type: 'slider',
    min: 0,
    max: 30,
    step: 1,
  },
  {
    id: 'twitterDependency',
    text: '对推特时间线的依赖程度',
    type: 'slider',
    min: 0,
    max: 10,
    step: 1,
  },
]
