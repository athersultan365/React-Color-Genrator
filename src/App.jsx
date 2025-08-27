import React, { useState } from "react";
import Values from "values.js";
import OneColor from "./onecolor";

export default function app() {
  const [color, setcolor] = useState("");
  const [list, setlist] = useState(new Values("#f15025").all(10));

  console.log(list);

  const handleSubmit = (e) => {
    e.preventDefault();

    const colors = new Values(color).all(10);
    setlist(colors);
    setcolor("");
  };
  return (
    <>
      <section className="w-full flex items-center p-5 bg-[rgb(241,245,248)] ">
        <h1 className="text-[35px] font-bold ">Color Genrator</h1>

        <form onSubmit={handleSubmit}>
          <input
            onchange={(e) => setcolor(e.target.value)}
            placeholder="#f15025"
            value={color}
            type="text"
            name=""
            id=""
            className="w[300px] h-[45px]  pl-2 outline-none ml-4 rounded-l-md"
          />
          <button
            type="submit"
            className="p-2 h-[45px] bg-origin-500 rounded-r-md text-white"
          >
            Submit
          </button>
        </form>
      </section>
      <section className="flex justify-center flex-wrap h-auto w-full">
        {list.map((color, index) => {
          return (
            <OneColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}
