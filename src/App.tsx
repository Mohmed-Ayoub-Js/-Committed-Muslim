import './App.css'
import React, { useState } from 'react'
import Home from './home/Page'
import Quran from './quran/Page'
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home')
  const navigateToPage = (page: string) => {
    setCurrentPage(page)
    console.log(currentPage)
  }
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div>
            <div className="hidden md:block">
              <Home change={navigateToPage} />
            </div>
            <p className="text-3xl font-bold text-red-500 md:hidden">
              يرجى تكبير الشاشة
            </p>
            <p className="text-1xl text-gray-600 md:hidden">
              لا يمكن تنسيق التطبيق في حجم شاشة صغير جدا ، خاصة وان هذا التطبيق
              موجه الى اجهزة الكمبيوتر
            </p>
          </div>
        )

      case 'Quran':
        return (
          <div>
            <div className="hidden md:block">
              <Quran change={navigateToPage} />
            </div>
            <p className="text-3xl font-bold text-red-500 md:hidden">
              يرجى تكبير الشاشة
            </p>
            <p className="text-1xl text-gray-600 md:hidden">
              لا يمكن تنسيق التطبيق في حجم شاشة صغير جدا ، خاصة وان هذا التطبيق
              موجه الى اجهزة الكمبيوتر
            </p>
          </div>
        )

      default:
        return <div>صفحة غير معروفة</div>
    }
  }

  return <div className="w-full">{renderPageContent()}</div>
}

export default App
