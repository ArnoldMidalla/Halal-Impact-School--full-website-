"use client";

import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { motion } from "framer-motion";

export default function EmblaCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%] min-w-0">
          <img
            src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/501399971_24076278151978535_7287700868075577350_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lvmwnu07ORAQ7kNvwGT8NXK&_nc_oc=AdnGwlZPWZJBgRlUR3K9HsyReaXF0a9MpOJPMhpPq_CFXoylFDrJqHnU2PagUzFnEPASbyh-qURNKV0XFzVISUH8&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=oCb4Q5sJUr9aloKPMUd_jA&oh=00_AfVwaKXZpIBJOiDQDbBjWXVTe0VDwAgVYM8z5TSeuP154A&oe=68BB34D1"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-[0_0_100%] min-w-0">
          <img
            src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/500292302_24076278218645195_7271838394148909064_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZIV9VC6jRowQ7kNvwHNYWDo&_nc_oc=Adk-pB6PsYO4h4NHsnd_1z-udANZJNfNcPPoUAjlpw9QjVc-m3IHz8p69VEzzO4DUEAyxW1ycrL-jSEw8enWExSe&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=TmAkvxxNs1FFNV9vC1M3oA&oh=00_AfXb3I0rpA8QmpVc62-x46L_beoMLjk-slHcobyS8ETtbA&oe=68BB695B"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-[0_0_100%] min-w-0">
          <img
            src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/500130094_24076278188645198_3591995014450597060_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OWcu9hPfXQ0Q7kNvwGu-jfD&_nc_oc=AdkCa8CuZAklbaVv3PxlC0Gx8jr6KtTvovRj0yPc-K3G4X-Sr1sabdmtNMk0sWmZpDAH3I9Pnfy9_IK04tidKkuh&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=rraC--NchVvE1wgvr26Wuw&oh=00_AfUxHB0rwDJVq6vMo9XDp_tlnPhWMs3dWfAJ48JA7lrIzg&oe=68BB33D3"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
