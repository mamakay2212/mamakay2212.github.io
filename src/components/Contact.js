import React from "react";
import { AtSymbolIcon } from "@heroicons/react/solid";

import { Icon } from '@iconify/react';

export default function Contact() {

   

  return (
    <section id="contact" className="p-6">
      <div className="text-center mb-20">
        <AtSymbolIcon className=" m-auto w-10 inline-block mb-4"/>
        <h2 className=" m:text-4xl text-3xl font-medium title-font text-white mb-4">Hire Me</h2>
        <p className=" leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">You can contact me on Linkedin, Twitter or kindly send an email.</p>

      </div>

     
      <div className="flex justify-between lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <a href="https://www.linkedin.com/in/kanyinsola-diyan"><Icon icon="logos:linkedin-icon" style={{ fontSize: '3rem', color: "#1E88E5" }}/></a>
      <a href="https://twitter.com/khay_zion?t=GvTsSvSDJ-vtTgBocyzKcQ&s=09"><Icon icon="logos:twitter" style={{ fontSize: '3rem', color: "#1E88E5"  }}/></a>
      <a href="https://github.com/mamakay2212"><Icon icon="logos:github-octocat" style={{ fontSize: '4rem', color: "#1E88E5"  }}/></a>
      <a href="mailto:kanyinsola2212@yahoo.com"><Icon icon="mdi:email" style={{ fontSize: '3rem', color: "#1E88E5" }}/></a>

      </div>

      <div className="mt-20">
        
        <p className="text-center text-blue">kanyinsola2212@yahoo.com</p>
        
      </div>
      
    </section>
  );
}