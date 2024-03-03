import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../shadcn/ui/card'
import { Button } from '../shadcn/ui/button'
import {
  Book,
  GraduationCap,
  HomeIcon,
  MessageCircle,
  Bookmark,
} from 'lucide-react'

const NavBar = ({ change }) => {
  const [isFlashing, setIsFlashing] = useState(false)
  function pageChange(page: string) {
    change(page)
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFlashing((prevIsFlashing) => !prevIsFlashing)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const data = [
    {
      title: 'الرئيسية',
      icon: <HomeIcon />,
      link: () => {
        pageChange('home')
      },
    },
    {
      title: 'القرآن الكريم',
      icon: <Book />,
      link: () => {
        pageChange('Quran')
      },
    },
    { title: 'التفسير', icon: <GraduationCap /> },
    {
      title: 'القرآن الكريم مباشر',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-radio"
        >
          <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
          <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
          <circle cx="12" cy="12" r="2" />
          <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
          <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
        </svg>
      ),
    },
    { title: 'المحتوى الديني', icon: <MessageCircle /> },
    {
      title: 'تعلم العلم الشرعي',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-book-open-text"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          <path d="M6 8h2" />
          <path d="M6 12h2" />
          <path d="M16 8h2" />
          <path d="M16 12h2" />
        </svg>
      ),
    },
    {
      title: 'نصائح',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-list-collapse"
        >
          <path d="m3 10 2.5-2.5L3 5" />
          <path d="m3 19 2.5-2.5L3 14" />
          <path d="M10 6h11" />
          <path d="M10 12h11" />
          <path d="M10 18h11" />
        </svg>
      ),
    },
    { title: 'اذكار', icon: <Bookmark /> },
  ]

  return (
    <div className="fixed flex items-center flex-col">
      <img
        src="icon.webp"
        className="w-[50px] h-[50px] hover:w-[100px] hover:h-[100px] cursor-pointer"
        style={{ transition: '0.5s' }}
        alt="Icon"
      />
      {data.map((item, index) => (
        <div key={index} onClick={item.link}>
          <Button
            variant="outline"
            style={{ transition: '0.5s' }}
            className="w-[200px] hover:scale-105 mt-2 mb-2 p-3 hover:bg-black hover:text-white flex justify-between items-center flex-row"
          >
            <p>{item.icon}</p>
            {item.title}
          </Button>
        </div>
      ))}
      <div>
        <Card
          className={`w-[200px]  cursor-pointer ${
            isFlashing ? 'bg-black text-white' : ''
          }`}
          style={{ transition: '0.5s' }}
        >
          <CardHeader>
            <CardTitle>الاصدار 2.0.0</CardTitle>
          </CardHeader>
          <CardContent>
            <p>قراءة المزيد عن هذا الاصدار</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default NavBar
