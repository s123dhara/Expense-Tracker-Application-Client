import { useState } from 'react'

function Dashboard() {
  const [currentMonth] = useState('December 2024')
  const [budget] = useState({ total: 5000, spent: 3200, remaining: 1800 })
  const [showModal, setShowModal] = useState(false)
  const [showLentModal, setShowLentModal] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showBudgetModal, setShowBudgetModal] = useState(false)
  const [expenseForm, setExpenseForm] = useState({
    amount: '',
    category: '',
    description: '',
    date: new Date().toISOString().split('T')[0]
  })
  const [lentForm, setLentForm] = useState({
    name: '',
    amount: '',
    date: new Date().toISOString().split('T')[0]
  })
  const [paymentForm, setPaymentForm] = useState({
    name: '',
    amount: '',
    due: new Date().toISOString().split('T')[0]
  })
  const [budgetForm, setBudgetForm] = useState({
    total: budget.total
  })
  const [lentMoney] = useState([
    { name: 'John', amount: 500, date: '2024-12-01' },
    { name: 'Sarah', amount: 300, date: '2024-12-05' }
  ])
  const [paymentsDue] = useState([
    { name: 'Credit Card', amount: 1200, due: '2024-12-25' },
    { name: 'Rent', amount: 1500, due: '2024-12-30' }
  ])

  const expenses = [
    { category: 'Food', amount: 800, color: '#8b5cf6' },
    { category: 'Transport', amount: 400, color: '#ec4899' },
    { category: 'Entertainment', amount: 600, color: '#06b6d4' },
    { category: 'Bills', amount: 1400, color: '#f59e0b' }
  ]

  const monthlyData = [
    { month: 'Aug', amount: 2800 },
    { month: 'Sep', amount: 3100 },
    { month: 'Oct', amount: 2900 },
    { month: 'Nov', amount: 3400 },
    { month: 'Dec', amount: 3200 }
  ]

  const budgetPercentage = (budget.spent / budget.total) * 100
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0)
  const maxMonthly = Math.max(...monthlyData.map(d => d.amount))

  const PieChart = ({ data }) => {
    let cumulativePercentage = 0
    return (
      <div className="relative w-48 h-48 mx-auto">
        <svg className="w-48 h-48 transform -rotate-90">
          <circle cx="96" cy="96" r="80" fill="transparent" stroke="var(--bg-secondary)" strokeWidth="16" />
          {data.map((item, index) => {
            const percentage = (item.amount / totalExpenses) * 100
            const strokeDasharray = `${percentage * 5.02} 502`
            const strokeDashoffset = -cumulativePercentage * 5.02
            cumulativePercentage += percentage
            return (
              <circle
                key={index}
                cx="96"
                cy="96"
                r="80"
                fill="transparent"
                stroke={item.color}
                strokeWidth="16"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-300"
              />
            )
          })}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl font-bold text-[var(--text-primary)]">${totalExpenses}</p>
            <p className="text-sm text-[var(--text-secondary)]">Total</p>
          </div>
        </div>
      </div>
    )
  }

  const BarChart = ({ data }) => (
    <div className="space-y-4">
      <div className="flex items-end justify-between h-40 gap-3 px-2">
        {data.map((item, index) => {
          const height = Math.max((item.amount / maxMonthly) * 120, 8)
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="flex flex-col items-center justify-end h-32">
                <div 
                  className="w-8 bg-[var(--accent)] rounded-t-md transition-all duration-300 hover:bg-[var(--accent-hover)] min-h-[8px]"
                  style={{ height: `${height}px` }}
                ></div>
              </div>
              <p className="text-xs text-[var(--text-secondary)] mt-2">{item.month}</p>
            </div>
          )
        })}
      </div>
      <div className="grid grid-cols-5 gap-1 text-center">
        {data.map((item, index) => (
          <p key={index} className="text-xs text-[var(--text-primary)] font-medium">${item.amount}</p>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[var(--text-primary)]">Dashboard</h1>
            <p className="text-[var(--text-secondary)]">{currentMonth}</p>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="px-6 py-2 bg-[var(--accent)] text-[var(--text-primary)] rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-colors"
          >
            Add Expense
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[var(--text-secondary)] text-sm">Total Budget</p>
                <p className="text-2xl font-bold text-[var(--text-primary)]">${budget.total}</p>
              </div>
              <div className="w-12 h-12 bg-[var(--accent)] rounded-lg flex items-center justify-center text-2xl">💰</div>
            </div>
          </div>
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[var(--text-secondary)] text-sm">Spent</p>
                <p className="text-2xl font-bold text-red-400">${budget.spent}</p>
              </div>
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-2xl">📉</div>
            </div>
          </div>
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[var(--text-secondary)] text-sm">Remaining</p>
                <p className="text-2xl font-bold text-green-400">${budget.remaining}</p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-2xl">💚</div>
            </div>
          </div>
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[var(--text-secondary)] text-sm">Lent Out</p>
                <p className="text-2xl font-bold text-[var(--accent)]">${lentMoney.reduce((sum, item) => sum + item.amount, 0)}</p>
              </div>
              <div className="w-12 h-12 bg-[var(--accent)] rounded-lg flex items-center justify-center text-2xl">🤝</div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-1 gap-2 mb-8'>
 {/* Monthly Trend */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Monthly Spending</h3>
            <BarChart data={monthlyData} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Pie Chart */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Expense Distribution</h3>
            <PieChart data={expenses} />
          </div>

          {/* Monthly Trend */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Monthly Spending</h3>
            <BarChart data={monthlyData} />
          </div>

          {/* Budget Progress */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">Budget Status</h3>
              <button 
                onClick={() => setShowBudgetModal(true)}
                className="px-3 py-1 bg-[var(--accent)] text-[var(--text-primary)] rounded text-sm hover:bg-[var(--accent-hover)] transition-colors"
              >
                Set Budget
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--text-secondary)]">Spent: ${budget.spent}</span>
                <span className="text-[var(--text-secondary)]">Budget: ${budget.total}</span>
              </div>
              <div className="w-full bg-[var(--bg-secondary)] rounded-full h-3">
                <div 
                  className="h-3 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${budgetPercentage}%`,
                    backgroundColor: budgetPercentage > 80 ? '#ef4444' : 'var(--accent)'
                  }}
                ></div>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                {budgetPercentage.toFixed(1)}% of budget used
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Expense Breakdown */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Categories</h3>
            <div className="space-y-4">
              {expenses.map((expense, index) => {
                const percentage = ((expense.amount / totalExpenses) * 100).toFixed(1)
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: expense.color }}
                        ></div>
                        <span className="text-[var(--text-primary)]">{expense.category}</span>
                      </div>
                      <span className="text-[var(--text-primary)] font-medium">${expense.amount}</span>
                    </div>
                    <div className="w-full bg-[var(--bg-secondary)] rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${percentage}%`,
                          backgroundColor: expense.color
                        }}
                      ></div>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">{percentage}%</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Lent Money Status */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">Money Lent Out</h3>
              <button 
                onClick={() => setShowLentModal(true)}
                className="px-3 py-1 bg-[var(--accent)] text-[var(--text-primary)] rounded text-sm hover:bg-[var(--accent-hover)] transition-colors"
              >
                + Add
              </button>
            </div>
            <div className="space-y-4">
              {lentMoney.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-[var(--bg-secondary)] rounded-lg">
                  <div>
                    <p className="text-[var(--text-primary)] font-medium">{item.name}</p>
                    <p className="text-[var(--text-secondary)] text-sm">{item.date}</p>
                  </div>
                  <span className="text-[var(--accent)] font-bold">${item.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Due Status */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">Upcoming Payments</h3>
              <button 
                onClick={() => setShowPaymentModal(true)}
                className="px-3 py-1 bg-[var(--accent)] text-[var(--text-primary)] rounded text-sm hover:bg-[var(--accent-hover)] transition-colors"
              >
                + Add
              </button>
            </div>
            <div className="space-y-4">
              {paymentsDue.map((payment, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-[var(--bg-secondary)] rounded-lg">
                  <div>
                    <p className="text-[var(--text-primary)] font-medium">{payment.name}</p>
                    <p className="text-[var(--text-secondary)] text-sm">Due: {payment.due}</p>
                  </div>
                  <span className="text-red-400 font-bold">${payment.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Expense Modal */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-lg bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Add Expense</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-2xl"
              >
                ×
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  value={expenseForm.amount}
                  onChange={(e) => setExpenseForm({...expenseForm, amount: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                  placeholder="0.00"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Category
                </label>
                <select
                  value={expenseForm.category}
                  onChange={(e) => setExpenseForm({...expenseForm, category: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                >
                  <option value="">Select category</option>
                  <option value="Food">Food</option>
                  <option value="Transport">Transport</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Bills">Bills</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Health">Health</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Description
                </label>
                <input
                  type="text"
                  value={expenseForm.description}
                  onChange={(e) => setExpenseForm({...expenseForm, description: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                  placeholder="Enter description"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={expenseForm.date}
                  onChange={(e) => setExpenseForm({...expenseForm, date: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-[var(--border)] text-[var(--text-secondary)] rounded-lg hover:text-[var(--text-primary)] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[var(--accent)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
                >
                  Add Expense
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Lent Money Modal */}
      {showLentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Add Lent Money</h2>
              <button onClick={() => setShowLentModal(false)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-2xl">×</button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Person Name</label>
                <input
                  type="text"
                  value={lentForm.name}
                  onChange={(e) => setLentForm({...lentForm, name: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Amount</label>
                <input
                  type="number"
                  value={lentForm.amount}
                  onChange={(e) => setLentForm({...lentForm, amount: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Date</label>
                <input
                  type="date"
                  value={lentForm.date}
                  onChange={(e) => setLentForm({...lentForm, date: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowLentModal(false)} className="flex-1 px-4 py-2 border border-[var(--border)] text-[var(--text-secondary)] rounded-lg hover:text-[var(--text-primary)] transition-colors">Cancel</button>
                <button type="submit" className="flex-1 px-4 py-2 bg-[var(--accent)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--accent-hover)] transition-colors">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Add Payment</h2>
              <button onClick={() => setShowPaymentModal(false)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-2xl">×</button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Payment Name</label>
                <input
                  type="text"
                  value={paymentForm.name}
                  onChange={(e) => setPaymentForm({...paymentForm, name: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                  placeholder="e.g., Rent, Credit Card"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Amount</label>
                <input
                  type="number"
                  value={paymentForm.amount}
                  onChange={(e) => setPaymentForm({...paymentForm, amount: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Due Date</label>
                <input
                  type="date"
                  value={paymentForm.due}
                  onChange={(e) => setPaymentForm({...paymentForm, due: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowPaymentModal(false)} className="flex-1 px-4 py-2 border border-[var(--border)] text-[var(--text-secondary)] rounded-lg hover:text-[var(--text-primary)] transition-colors">Cancel</button>
                <button type="submit" className="flex-1 px-4 py-2 bg-[var(--accent)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--accent-hover)] transition-colors">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Budget Modal */}
      {showBudgetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Set Monthly Budget</h2>
              <button onClick={() => setShowBudgetModal(false)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-2xl">×</button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Monthly Budget</label>
                <input
                  type="number"
                  value={budgetForm.total}
                  onChange={(e) => setBudgetForm({...budgetForm, total: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                  placeholder="5000"
                />
              </div>
              <div className="bg-[var(--bg-secondary)] p-3 rounded-lg">
                <p className="text-sm text-[var(--text-secondary)]">Current Budget: <span className="text-[var(--text-primary)] font-medium">${budget.total}</span></p>
                <p className="text-sm text-[var(--text-secondary)]">Spent: <span className="text-red-400 font-medium">${budget.spent}</span></p>
                <p className="text-sm text-[var(--text-secondary)]">Remaining: <span className="text-green-400 font-medium">${budget.remaining}</span></p>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowBudgetModal(false)} className="flex-1 px-4 py-2 border border-[var(--border)] text-[var(--text-secondary)] rounded-lg hover:text-[var(--text-primary)] transition-colors">Cancel</button>
                <button type="submit" className="flex-1 px-4 py-2 bg-[var(--accent)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--accent-hover)] transition-colors">Update Budget</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard