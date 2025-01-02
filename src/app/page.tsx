import Navbar from "@/components/Navbar"
import React from "react"
import Author from "@/components/Author"
import Mega from "@/components/Mega"
import Feature from "@/components/Feature"
import Footer from "@/components/Footer"
export default function Home() {
  return (
   <div>
    <Navbar />
    <Feature/>
    <Mega />
    <Author />
    <Footer/>
   </div>
  )};