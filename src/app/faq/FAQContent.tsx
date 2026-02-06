'use client'

import { useState } from 'react'
import { faqCategories } from './faqData'

export default function FAQContent() {
  const [activeCategory, setActiveCategory] = useState('general')

  const activeCategoryData = faqCategories.find(cat => cat.id === activeCategory)
  const allFAQs = activeCategory === 'all' ? faqCategories.flatMap(cat => cat.faqs) : (activeCategoryData?.faqs || [])

  return (
    <>
      {/* Category Filter */}
      <section className="py-8 md:py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-teal-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Topics
            </button>
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-teal-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {activeCategory === 'all' ? (
            <div className="space-y-12">
              {faqCategories.map((category) => (
                <div key={category.id}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-800">{category.name}</h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, i) => (
                      <details key={i} className="group bg-white rounded-lg shadow-sm">
                        <summary className="flex items-center justify-between cursor-pointer p-5 sm:p-6 font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                          <span className="pr-4 text-left">{faq.q}</span>
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </summary>
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {allFAQs.map((faq, i) => (
                <details key={i} className="group bg-white rounded-lg shadow-sm">
                  <summary className="flex items-center justify-between cursor-pointer p-5 sm:p-6 font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="pr-4 text-left">{faq.q}</span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
