import NavBar from '@/components/app/NavBar'
import Surah from '@/components/app/Surah'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/shadcn/ui/resizable'
import React from 'react'

const Quran = ({ change }) => {
  return (
    <div>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={20}>
          <NavBar change={change} />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={80}>
          <Surah change={change} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default Quran
