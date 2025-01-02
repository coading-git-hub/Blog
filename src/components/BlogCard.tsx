import React from "react";
import { Card, CardContant, CardTitle } from "../components/ui/cards";
import Image from "next/image";
interface BlogCardProps {
  post: {
    imageUrl: string ;
    id: string;
    title: string;
    description: string;
    date: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
    

      <Image
     src={post.imageUrl} 
     width={500}
     height={500}
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      
      <CardTitle className="text-xl font-normal mt-4 text-center">
        {" "}
        {post.title}
      </CardTitle>

      <br />
      <CardContant className="text-center">
        <p>{post.description}</p>{" "}
      </CardContant>

      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published on {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/post/${post.id}`}
          className={`w-full text-center text-white bg-purple-600 rounded hover:bg-purple-400 ${
            isDarkBackground
              ? "bg-black hover:bg-red-500"
              : "bg-black hover:bg-red-500 "
          }`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
