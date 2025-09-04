"use client";

import React, { useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Slideshow() {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const images = [
    {
      src: "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/501399971_24076278151978535_7287700868075577350_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lvmwnu07ORAQ7kNvwGT8NXK&_nc_oc=AdnGwlZPWZJBgRlUR3K9HsyReaXF0a9MpOJPMhpPq_CFXoylFDrJqHnU2PagUzFnEPASbyh-qURNKV0XFzVISUH8&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=oCb4Q5sJUr9aloKPMUd_jA&oh=00_AfVwaKXZpIBJOiDQDbBjWXVTe0VDwAgVYM8z5TSeuP154A&oe=68BB34D1",
      alt: "School Campus View 1",
    },
    {
      src: "/graduation/_DCS7409.jpg",
      alt: "School Campus View 2",
    },
    {
      src: "/cultural%20day/_DCS5799.jpg",
      alt: "School Campus View 3",
    },
    {
      src: "/graduation/DSC_2283.jpg",
      alt: "School Campus View 4",
    },
    {
      src: "/class%20pictures/_DCS7272.jpg",
      alt: "School Campus View 5",
    },
  ];

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative min-h-[500px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                objectFit="cover"
                className="object-center transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
        onClick={scrollNext}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
}
