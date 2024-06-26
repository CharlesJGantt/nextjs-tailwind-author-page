"use client";

import React from "react";
import {
  Button,
  IconButton,
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { PhoneIcon, EnvelopeIcon, LinkIcon } from "@heroicons/react/24/solid";
export function ContactForm() {
  return (
       <section className="container mx-auto px-8 h-[22rem] lg:px-48 translate-y-8"> 
        <div className="text-center mb-6"> {/* Centered "About Me" heading */}
        <Typography variant="h3" className="text-blue-gray" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          About Me
        </Typography>
      </div>
      <Typography variant="lead" className="text-gray-500 mt-1" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
       <p className="mb-3 text-gray-500 dark:text-gray-500">
       With over 15 years of experience as a Content Creator, Freelance Writer and Drupal Developer, 
       I bring a wealth of expertise in both technical content creation and web development. Throughout my career, 
       I&apos;ve written about diverse subjects, including electrical engineering, consumer electronics, 
       high-end computer hardware, and ASIC design, delivering insightful and engaging articles that resonate with audiences.
       </p>

       <p className="mb-3 text-gray-500 dark:text-gray-500">     
       In the Drupal ecosystem, I&apos;ve specialized in site building, harnessing my proficiency across Drupal versions 6 
       through 10 to create robust and scalable web solutions. My approach is marked by meticulous attention to 
       detail and a commitment to staying abreast of the latest industry trends and best practices. As a self-starter, 
       I pride myself on my organizational skills and ability to manage multiple projects simultaneously. 
       Whether it&apos;s strategizing for content creation or prioritizing development tasks, I thrive in fast-paced 
       environments and remain composed under pressure.
       </p>  

       <p className="mb-3 text-gray-500 dark:text-gray-500">
       Additionally, I have a comprehensive background as a freelance electrical engineer, specializing in small 
       hobbyist and small commercial electronics projects centered around ARM and AVR chips. My focus spans across 
       Arduino, Raspberry Pi, ESP32, MicroPython, and custom development board hardware. Moreover, I possess extensive 
       experience in YouTube content creation, amassing over 1.4 million views across various channels, with a dedicated
       subscriber and follower base of approximately 25,000 individuals. Proficient in Autodesk Fusion 360, 3D printing, 
       and basic 3-axis CNC programming and operation, I regularly design 2D and 3D models for 3D printing, CNC machining, 
       and laser-cutting, with a penchant for CNC mold design tailored for the fishing bait industry.
       </p>

       <p className="mb-3 text-gray-500 dark:text-gray-500">      
       If you&apos;re seeking a versatile professional who can blend technical prowess with a passion for effective
       communication and web development,
       </p> 
       
      </Typography>
    <div className="container mx-auto mb-5 md:mb-1 text-center">
      
      <Typography variant="h1" color="blue-gray" className="mb-4" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>

        <p>Say Hi!</p>
      </Typography>
      <Typography variant="lead" className="mx-auto !text-gray-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        Any questions or remarks? Just send me a messaage!
      </Typography>
    </div>
    <div className="container mx-auto">
  <Card shadow={true} className="border border-gray/50" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
    <CardBody className="flex justify-center items-center" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
      <div className="w-full rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
        <Typography variant="h4" color="white" className="mb-2" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          Contact Information
        </Typography>
        <div className="flex flex-col my-2 gap-5"> {/* Added flex-col class to create a flex column layout */}
          <div className="flex items-center gap-5">
            <EnvelopeIcon className="h-6 w-6 text-white" />
            <Typography variant="h6" color="white" className="mb-2" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              cjgantt@gmail.com
            </Typography>
          </div>
          <div className="flex items-center gap-5">
            <LinkIcon className="h-6 w-6 text-white" />
            <a href="https://www.linkedin.com/in/charles-gantt-b5aa8351" target="_blank" rel="noopener noreferrer">
              <Typography variant="h6" color="white" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                Linkedin
              </Typography>
            </a>
          </div>
          <div className="flex items-center gap-5">
            <LinkIcon className="h-6 w-6 text-white" />
            <a href="https://open-source-silicon.slack.com/team/U01LRHC4AFR" target="_blank" rel="noopener noreferrer">
              <Typography variant="h6" color="white" className="mb-2" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                Slack
              </Typography>
            </a>
          </div>
          <div className="flex items-center gap-5">
            <LinkIcon className="h-6 w-6 text-white" />
            <a href="https://twitter.com/makersworkbench" target="_blank" rel="noopener noreferrer">
              <Typography variant="h6" color="white" className="mb-2" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} >
                Twitter
              </Typography>
            </a>
          </div>
        </div>
      </div>
    </CardBody>
  </Card>
</div>


  </section>
  );
}
export default ContactForm;