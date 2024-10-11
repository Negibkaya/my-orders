"use client";

import { useState } from "react";
import { Switch, styled } from "@mui/material";
import Image from "next/image";

export default function Settings() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const LargeSwitch = styled(Switch)({
    transform: "scale(3.5)",
    "& .MuiSwitch-thumb": {
      backgroundColor: "green",
    },
    "& .MuiSwitch-track": {
      backgroundColor: "purple",
    },
  });

  return (
    <div className="h-screen bg-custom-image3">
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="mb-8 text-6xl font-bold text-black text-center">
          Настройки
        </h1>

        <div className="flex w-full items-center justify-evenly mb-16">
          <p className="-mr-28 text-3xl font-semibold">Закрыть</p>
          <Image
            src="/1.jpg"
            alt="main"
            width={250}
            height={250}
            className="rounded-full"
          />
          <LargeSwitch
            className="-ml-16"
            checked={checked1}
            onChange={() => setChecked1((prev) => !prev)}
          />
        </div>

        <div className="flex w-full items-center justify-evenly">
          <p className="-mr-28 text-3xl font-semibold">Без звука</p>
          <Image
            src="/2.jpg"
            alt="main"
            width={250}
            height={250}
            className="rounded-full"
          />
          <LargeSwitch
            className="-ml-16"
            checked={checked2}
            onChange={() => setChecked2((prev) => !prev)}
          />
        </div>

        <a
          href="/"
          className="bg-purple-400 text-4xl rounded-2xl py-2 px-4 fixed bottom-6"
        >
          Назад
        </a>
      </div>
    </div>
  );
}
