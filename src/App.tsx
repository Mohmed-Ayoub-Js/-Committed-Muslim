import './App.css'
import React, { useState } from 'react'
import Home from './home/Page';
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const navigateToPage = (page: string) => {
    setCurrentPage(page);
  };
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div>
          <div className='hidden md:block'>
            <Home change={navigateToPage}/>
          </div>
          <p className='text-3xl font-bold text-red-500 md:hidden'>
            يرجى تكبير الشاشة
          </p>
          <p className='text-1xl text-gray-600 md:hidden'>
            لا يمكن تنسيق التطبيق في حجم شاشة صغير جدا ، خاصة وان هذا التطبيق موجه الى اجهزة الكمبيوتر
          </p>
          </div>
        );

      case 'about':
        return (
          <div>
            <h1>صفحة حول</h1>
            <p>محتوى الصفحة حول</p>
            <button onClick={() => navigateToPage('home')}>العودة إلى الصفحة الرئيسية</button>
          </div>
        );

      default:
        return <div>صفحة غير معروفة</div>;
    }
  };

  return <div className='w-full'>{renderPageContent()}</div>;
};

export default App;
