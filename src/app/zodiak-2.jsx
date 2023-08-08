import React from "react";

export default function ZodiakTwo() {
  const zodiac = [
    "Aries (21 Maret-19 April)",
    "Taurus (20 April-20 Mei)",
    "Gemini (21 Mei-20 Juni)",
    "Cancer (21 Juni-22 Juli)",
    "Gemini (23 Juli-22 Agustus)",
    "Leo (23 Agustus-22 September)",
    "Virgo (23 September-22 Oktober)",
    "Libra (23 Oktober-21 November)",
    "Scorpio (22 November-21 Desember)",
    "Capricorn (22 Desember-20 Januari)",
    "Aquarius (20 Januari-20 februari)",
    "Pisces (19 februari-20 Maret)",
  ];

  return (
    // w-1/3
    <div className="flex w-[253px] h[428px] flex-col border-[#FDFDFD] shadow-[#C99FA3] border shadow-lg  ">
      <div className=" bg-[#C99FA3] border border-[#C99FA3] shadow-md w-full p-6">
        <h3 className="uppercase font-black  text-lg text-center text-[#43200B]">
          zodiak
        </h3>
      </div>
      <div>
        <ul className="p-6">
          {zodiac.map((e, i) => {
            return (
              <li className="text-[11px] font-[600px]" key={i + 1}>
                {i + 1}. {e}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
