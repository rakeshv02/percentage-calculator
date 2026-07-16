import { useState } from 'react'

export default function App() {
  const [tab, setTab] = useState('findPercentage')
  const [number, setNumber] = useState('')
  const [percentage, setPercentage] = useState('')
  const [result, setResult] = useState(null)
  const [originalNumber, setOriginalNumber] = useState('')
  const [percentageIncrease, setPercentageIncrease] = useState('')
  const [increaseResult, setIncreaseResult] = useState(null)

  const calculatePercentage = () => {
    if (number && percentage) {
      const calc = (parseFloat(number) * parseFloat(percentage)) / 100
      setResult(calc.toFixed(2))
    }
  }

  const calculateIncrease = () => {
    if (originalNumber && percentageIncrease) {
      const increase = (parseFloat(originalNumber) * parseFloat(percentageIncrease)) / 100
      const final = parseFloat(originalNumber) + increase
      setIncreaseResult({
        increase: increase.toFixed(2),
        final: final.toFixed(2)
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800 rounded-lg shadow-2xl p-8 border border-slate-700">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">📊 Percentage Calculator</h1>
            <p className="text-slate-400 text-sm">Calculate percentages, increases, and more instantly</p>
          </div>

          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setTab('findPercentage')}
              className={`flex-1 py-2 px-3 rounded font-medium transition ${
                tab === 'findPercentage'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Find %
            </button>
            <button
              onClick={() => setTab('increase')}
              className={`flex-1 py-2 px-3 rounded font-medium transition ${
                tab === 'increase'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              % Increase
            </button>
          </div>

          {tab === 'findPercentage' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Number</label>
                <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Enter number"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Percentage (%)</label>
                <input
                  type="number"
                  value={percentage}
                  onChange={(e) => setPercentage(e.target.value)}
                  placeholder="Enter percentage"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                onClick={calculatePercentage}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
              >
                Calculate
              </button>

              {result !== null && (
                <div className="bg-blue-900 bg-opacity-30 p-4 rounded border border-blue-600">
                  <p className="text-slate-300 text-sm mb-1">Result</p>
                  <p className="text-2xl font-bold text-blue-400">{result}</p>
                </div>
              )}
            </div>
          )}

          {tab === 'increase' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Original Number</label>
                <input
                  type="number"
                  value={originalNumber}
                  onChange={(e) => setOriginalNumber(e.target.value)}
                  placeholder="Enter original number"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">% Increase</label>
                <input
                  type="number"
                  value={percentageIncrease}
                  onChange={(e) => setPercentageIncrease(e.target.value)}
                  placeholder="Enter percentage increase"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                onClick={calculateIncrease}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
              >
                Calculate
              </button>

              {increaseResult && (
                <div className="bg-blue-900 bg-opacity-30 p-4 rounded border border-blue-600 space-y-2">
                  <div>
                    <p className="text-slate-300 text-sm">Increase Amount</p>
                    <p className="text-xl font-bold text-blue-400">{increaseResult.increase}</p>
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">New Total</p>
                    <p className="text-xl font-bold text-green-400">{increaseResult.final}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7039091592734005"
           crossorigin="anonymous"></script>
    </div>
  )
}
