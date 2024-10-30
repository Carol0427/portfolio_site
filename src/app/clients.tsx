"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
//yo
//yo
const CLIENTS = [
  "reactlogofr",
  "nodelogofr",
  "nextlogofr",
  "gologo",
  "sqllogo",
  "mongodb_logo"
];
//yo
export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
      <Typography variant="h2" color="blue-gray" className="mb-4">
          Skills
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-14">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={100}
              height={100}
              // className="w-40"
              src={`/logos/${logo}.png`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
