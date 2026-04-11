import React from "react";

export default function Blur() {
  return (
    <h1 className="pointer-events-none fixed inset-x-0 bottom-0 z-10 h-15 select-none bg-gradient-to-t from-background to-transparent opacity-100 backdrop-blur-[5px] [mask-image:linear-gradient(to_top,black_50%,transparent)] [-webkit-mask-image:linear-gradient(to_top,black_50%,transparent)] dark:[mask-image:linear-gradient(to_top,black_50%,transparent)] dark:[-webkit-mask-image:linear-gradient(to_top,black_50%,transparent)] ">
      {" "}
    </h1>
  );
}
