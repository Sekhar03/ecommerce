"use client"

import { HeadLine } from "@/components/global/HeadLine"
import { WidgetWrapper } from "@/components/global/WidgetWrapper"
import { CircularGallery } from "@/components/style/CircularGallery"

export const Gallery = () => {
    return (
        <WidgetWrapper>
    <HeadLine title="Gallery" subtitle="Check out the amazing memories we've created over the years." titleClass="text-red-500 text-3xl sm:text-5xl"/>
    <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
  </WidgetWrapper>
    )
}
