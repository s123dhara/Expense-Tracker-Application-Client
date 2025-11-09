import React, { useState } from 'react'
import { FiEdit, FiTrash2, FiPlus, FiSearch } from 'react-icons/fi'

const CategoryPage = () => {
  const [categories] = useState([
    { id: 1, name: 'Food', description: 'Food and dining expenses', color: '#8b5cf6', count: 25 },
    { id: 2, name: 'Transport', description: 'Transportation costs', color: '#ec4899', count: 12 },
    { id: 3, name: 'Entertainment', description: 'Movies, games, fun activities', color: '#06b6d4', count: 8 },
    { id: 4, name: 'Bills', description: 'Utilities and monthly bills', color: '#f59e0b', count: 15 },
    { id: 5, name: 'Shopping', description: 'Clothing and personal items', color: '#10b981', count: 18 },
    { id: 6, name: 'Health', description: 'Medical and healthcare', color: '#ef4444', count: 6 }
  ])

  return (
    <div className="p-6 bg-[var(--bg-primary)] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[var(--text-primary)]">Categories</h1>
            <p className="text-[var(--text-secondary)]">Manage your expense categories</p>
          </div>
          <button className="px-4 py-2 bg-[var(--accent)] text-[var(--text-primary)] rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-colors flex items-center gap-2">
            <FiPlus className="w-4 h-4" />
            Add Category
          </button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)] w-4 h-4" />
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full pl-10 pr-4 py-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
            />
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-[var(--bg-secondary)] border-b border-[var(--border)]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-[var(--text-secondary)] uppercase">Category</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[var(--text-secondary)] uppercase">Description</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[var(--text-secondary)] uppercase">Transactions</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[var(--text-secondary)] uppercase">Color</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-[var(--text-secondary)] uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-[var(--bg-secondary)] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: category.color }}></div>
                      <span className="text-sm font-medium text-[var(--text-primary)]">{category.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--text-secondary)]">{category.description}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-[var(--accent)] bg-opacity-20 text-[var(--text-secondary)] rounded-full text-xs">
                      {category.count} transactions
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded border" style={{ backgroundColor: category.color }}></div>
                      <span className="ml-2 text-sm text-[var(--text-secondary)]">{category.color}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent)] rounded">
                        <FiEdit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-[var(--text-secondary)] hover:text-red-400 rounded">
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
