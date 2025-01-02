import React from "react";
import BlogCard from "../components/BlogCard";
import { title } from "process";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "Mind & Mood",
      description: " In the US, supplements are not tested in the way prescription medicines are, and their manufacturers can make claims about their abilities that may or may not be true. But there are some rules supplement makers must follow, and the FDA's plan to revamp its regulation of dietary supplements is a step toward improving consumer protection.",
      date: "2024-12-28",
      image: "../images/card1.jpeg",
    },

    {
      id: "2",
      title: "Mind & Mood",
      description:
        "Gratitude enhances health, brings happiness — and may even lengthen lives Gratitude has the power to boost well-being, improve sleep, lessen depression, and help heart health. Now new data from the long-term Nurses' Health Study shows that it may extend lives. How can you jump start a gratitude practice in your life?",
      date: "2024-12-28",
      image: "../images/card2.jpeg",
    },

    {
      id: "3",
      title: "Staying Healthy",
      description:"Smoke affects air quality and health As wildfires become more frequent due to climate change and drier conditions,more of us and more of our communities are at risk for harm. Here is information to help you prepare and protect yourself .The smoke can travel to distant regions, carried by weather patterns and jet streams.",
      date: "2024-12-28",
      image: "../images/card3.jpeg",
    },

    {
      id: "4",
      title: "Diseases & Conditions",
      description: "Medication side effects: What are your options? Medications can provide a host of health benefits. They may prevent or eliminate a disease. They might improve your quality of life and even help you live longer. But the medicines we take also have potential side effects. While listed side effects don't always occur, it's always possible.",
      date: "2024-12-28",
      image: "../images/card4.jpeg",
    },

    {
      id: "5",
      title: "Staying Healthy",
      description: "As people get older, the complex system that helps them maintain balance does not work as effectively, increasing the risk of a fall. A study found that specific exercises can improve balance in older adults.While keeping proper balance may seem simple, it involves a complex system with many moveable parts.",
      date: "2024-12-28",
      image: "../images/card5.jpg",
    },

    {
      id: "6",
      title: "Nutrition",
      description: "The holiday season is one of the hardest times of the year to resist salty, fatty, sugary foods. Who doesn't want to enjoy the special dishes and treats that evoke memories and meaning — especially during the pandemic? Physical distancing and canceled gatherings may make you feel that indulging is a way to pull some joy out of the season.",
      date: "2024-12-28",
      image: "../images/card6.jpeg",
    },

    {
      id: "7",
      title: "Staying Healthy",
      description:
        "If you've ever tried to lose weight, you've probably heard the advice to drink water before a meal because it makes you feel fuller and you'll stop eating sooner. It seems like a reasonable idea — but does it work? And if it doesn't, why do people think it does?",
      date: "2024-12-28",
      image: "../images/card7.jpeg",
    },

    {
      id: "8",
      title: "Pain",
      description: "Which migraine medications are most helpful? Many medications claim to relieve migraine pain, but some are more helpful than others. In a large study looking at real-world data on 25 drugs, migraine sufferers rated the most and least helpful options.",
      date: "2024-12-28",
      image: "../images/card8.jpeg",
    },

    {
      id: "9",
      title: "Staying Healthy",
      description: "Eye drops that claim to change a person's eye color are being promoted online, and the ability to do this may sound tempting. But are these products safe? The answer is a hard no according to the American Academy of Ophthalmology.",
      date: "2024-12-28",
      image: "../images/card9.jpeg",
    },
  ];
  return (
    <>
      <div className="my-8 ">
        <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change ">
           Live a Healthier Lifestyle</h1>
       
      </div>

      <div className="grid grid-cols-1 sm:-grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
