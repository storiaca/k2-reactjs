import React from 'react';

export function CardComponent({ item }) {
  return (
    <div className="w-[300px] border border-slate-400 rounded-2xl">
      <div className="relative">
        <img
          src={item.thumbnail}
          alt={item.description}
          className="rounded-t-2xl h-[150px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 rounded-t-2xl hover:bg-transparent transition-all cursor-pointer" />
      </div>
      <div className="p-5">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>${item.price}</p>
      </div>
      <button className="px-6 py-3 border-none bg-blue-400 text-white rounded-full hover:bg-red-400 transition-all">
        Add to Cart
      </button>
    </div>
  );
}
