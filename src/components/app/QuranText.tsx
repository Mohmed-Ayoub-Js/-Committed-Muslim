import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../shadcn/ui/card'
import './css/QuranFont.css'
import { Button } from '../shadcn/ui/button'
const QuranText = ({ change }) => {
  const [count, setCount] = useState<number | null>(null)
  const [Surah, setSurah] = useState<any>([])
  const [handel, setHandel] = useState(0)
  setTimeout(() => {
    setHandel(handel + 1)
  }, 2000)
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data: any = localStorage.getItem('last')
        if (data) {
          const cleanedCount = removeLeadingZeros(data)
          const parsedInt = convertStringToInt(cleanedCount)

          if (parsedInt !== null) {
            setCount(parsedInt)
            console.log(parsedInt)

            const config = {
              method: 'get',
              maxBodyLength: Infinity,
              url: 'https://api.quran.com/api/v4/quran/verses/indopak',
              headers: {
                Accept: 'application/json',
              },
              params: {
                chapter_number: count,
              },
            }

            const response = await axios(config)
            setSurah(response.data.verses)
            console.log(Surah)
          }
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [count, handel])
  function removeLeadingZeros(input: string): string {
    let result = input.replace(/^0+/, '')
    return result === '' ? '0' : result
  }
  function convertStringToInt(input: string): number | null {
    const parsedInt = parseInt(input, 10)
    if (isNaN(parsedInt)) {
      console.error('تعذر تحويل السلسلة إلى عدد صحيح.')
      return null
    }

    return parsedInt
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <Button
              className={null}
              variant={'destructive'}
              onClick={() => {
                change('Quran')
              }}
            >
              رجوع
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {Surah.map((item, index) => (
            <div
              className="quran-bold text-4xl hover:text-green-600 cursor-pointer"
              style={{ transition: '0.5s' }}
            >
              {item.text_indopak}
            </div>
          ))}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  )
}

export default QuranText
