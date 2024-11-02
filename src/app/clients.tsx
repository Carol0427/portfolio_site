"use client";

import Image from "next/image";

const CLIENTS = [
  "reactlogofr",
  "nodelogofr",
  "nextlogofr",
  "gologo",
  "sqllogo",
  "mongodb_logo"
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Skills
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-14">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={100}
              height={100}
              src={`/logos/${logo}.png`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;