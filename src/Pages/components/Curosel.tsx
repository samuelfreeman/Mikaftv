import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { img1, img2, img3, img4 } from "@/assets"

export default function ImageSlider() {
  const [api, setApi] = useState<any>(null)
  const [current, setCurrent] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })], // Add autoplay plugin
  )

  const scrollTo = useCallback(
    (index: number) => {
      if (!api) return
      api.scrollTo(index)
    },
    [api],
  )

  const onSelect = useCallback(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
  }, [api])

  useEffect(() => {
    if (!api) return

    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, onSelect])

  const images = [img1, img2, img3, img4, img2, img3, img4]

  return (
    <div className="w-full max-h-[70vh] md:min-h-[80vh] mx-auto px-4 border pt-10 ">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="  md:basis-1/2 lg:basis-1/5 transition-all duration-300">
              <div
                className={cn(
                  "p-1 transition-all duration-300",
                  current === index ? "scale-110 z-10" : "scale-90 opacity-100",
                )}
              >
                <Card className="overflow-hidden border-0 rounded-xl shadow-lg">
                  <CardContent className="p-0">
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`Slide ${index + 1}`}
                      className="w-full md:h-[58vh] object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              current === index ? "w-8 bg-[#681FA3]" : "w-4 bg-gray-300 hover:bg-[#681FA3]",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

