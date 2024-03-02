import React, { useState } from 'react'
import data from '@/components/json/Surah.json'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/shadcn/ui/card'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/shadcn/ui/hover-card'
import { Button } from '../shadcn/ui/button'

const Surah = () => {
  const [app, setApp] = useState(data)
  return (
    <div className="grid grid-cols-4 gap-5 p-10">
      {app.map((item, index) => (
        <div key={index}>
          <HoverCard>
            <HoverCardTrigger>
              <Card
                style={{ transition: '0.5s' }}
                className="hover:bg-black h-[250px] hover:text-white cursor-pointer  hover:scale-110"
              >
                <CardHeader>
                  <CardTitle>
                    {item.titleAr} / {item.title}
                  </CardTitle>
                  <CardDescription>{item.pages} </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center items-center flex-col">
                    <p>{item.type} نوع السورة : </p>
                    <p>{item.place} مكان النزول : </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <p>عدد الايات : {item.count}</p>
                </CardFooter>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent>
              <p
                className="text-2xl font-bold hover:text-green-500"
                style={{ transition: '0.5s' }}
              >
                سورة {item.titleAr}
              </p>
              <p className="flex justify-center items-center flex-row gap-6">
                <Button className={undefined}>قراءة</Button>
                <Button className={undefined} variant={'outline'}>
                  الاستماع
                </Button>
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
      ))}
    </div>
  )
}

export default Surah
