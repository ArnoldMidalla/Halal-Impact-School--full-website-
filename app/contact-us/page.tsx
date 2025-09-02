import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { ComboboxDemo } from "@/app/components/contact comp";
import { Send } from "lucide-react";

import Slideshow from '@/app/components/slideshow';

export default function page() {
  return (
    <>
      <section className="flex w-screen h-130 bg-gray-100 p-4 gap-4">
        <div className="h-full w-130 overflow-clip rounded-md">
          {/* <img
            src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/501399971_24076278151978535_7287700868075577350_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lvmwnu07ORAQ7kNvwGT8NXK&_nc_oc=AdnGwlZPWZJBgRlUR3K9HsyReaXF0a9MpOJPMhpPq_CFXoylFDrJqHnU2PagUzFnEPASbyh-qURNKV0XFzVISUH8&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=oCb4Q5sJUr9aloKPMUd_jA&oh=00_AfVwaKXZpIBJOiDQDbBjWXVTe0VDwAgVYM8z5TSeuP154A&oe=68BB34D1"
            alt=""
            className="object-cover w-full h-full"
          /> */}
          <Slideshow />
        </div>
        <div className="w-full h-full bg-white rounded-md p-16 flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="w-full">
              <label htmlFor="First Name" className="text-sm font-semibold">
                First Name
              </label>
              <Input
                id="firstName"
                name="firstName"
                required
                placeholder="First Name"
                autoComplete="given-name"
              />
            </div>
            <div className="w-full">
              <label htmlFor="Last Name" className="text-sm font-semibold">
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                required
                placeholder="Last Name"
                autoComplete="family-name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="Email Address" className="text-sm font-semibold">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              required
              placeholder="Email Address"
            />
          </div>
          <ComboboxDemo />
          <div>
            <label htmlFor="message" className="text-sm font-semibold">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Message"
            />
          </div>
          <Button type="submit">
            Submit Form <Send />
          </Button>
        </div>
      </section>
    </>
  );
}
