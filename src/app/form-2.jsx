"use client";
import { useState } from "react";

export default function FormTwo() {
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [zodiac, setZodiac] = useState("");
  const [hobby, setHobby] = useState("");
  const [number, setNumber] = useState(0);

  // const dates = new Date();
  // const dates = "1997-01-28";
  // console.log(dates);
  const findSign = (date) => {
    let days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
    let signs = [
      "Aquarius",
      "Pisces",
      "Aries",
      "Taurus",
      "Gemini",
      "Cancer",
      "Leo",
      "Virgo",
      "Libra",
      "Scorpio",
      "Sagittarius",
      "Capricorn",
    ];
    // let month = date.getMonth();
    // let day = date.getDate();
    let month = date.slice(6, 7);
    console.log(month);
    let day = date.slice(8, 10);
    if (month == 0 && day <= 20) {
      month = 11;
    } else if (day < days[month]) {
      month--;
    }
    return signs[month];
  };

  // const sign = findSign(dates);
  // console.log(sign);
  // console.log(findSign(date));

  // Import the filesystem module

  // let datas = "This is a file containing a collection of movies.";

  function handleZodiac(date) {
    const sign = findSign(date);
    setZodiac(sign);
    setDate(date);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const sign = findSign(date);
    setZodiac(sign);

    setData({
      name,
      gender,
      date,
      zodiac,
      hobby,
      number,
    });

    // setName("");
    // setGender("");
    // setDate("");
    // setZodiac("");
    // setHobby("");
    // setNumber("");

    console.log(date);

    const jsonData = JSON.stringify(data);
    // fs.writeFile(
    //   "movies.txt",
    //   jsonData,
    //   {
    //     encoding: "utf8",
    //     flag: "w",
    //     mode: 0o666,
    //   },
    //   (err) => {
    //     if (err) console.log(err);
    //     else {
    //       console.log("File written successfully\n");
    //       console.log("The written has the following contents:");
    //       console.log(fs.readFileSync("movies.txt", "utf8"));
    //     }
    //   }
    // );
    console.log(jsonData);
  }

  return (
    <div
      className="form w-[691px] h-[428px] flex justify-start overflow-hidden shadow-2xl
     flex-col mx-auto rounded-xl bg-red-200 border border-[#F85C5C]
 "
    >
      <div className=" shadow-xl  border-[#F85C5C] border-b-2 p-1">
        <h3
          className="text-lg  p-3 
         font-black text-center text-[#FB0732]"
        >
          CARI JODOH
        </h3>
      </div>
      <div className=" p-6 flex flex-col gap-6 shadow-xl">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-3 text-[18px]"
        >
          <label htmlFor="">Nama</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="rounded p-1"
            name=""
            id=""
            required
          />
          <label htmlFor="">Jenis Kelamin</label>
          <input
            type="text"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            className="rounded p-1"
            name=""
            id=""
            required
          />
          <label htmlFor="">Tanggal Lahir</label>
          <input
            type="date"
            onChange={(e) => handleZodiac(e.target.value)}
            value={date}
            className="rounded p-1"
            name=""
            id=""
            required
          />
          <label htmlFor="" className="relative">
            Zodiak
            <span className="absolute top-3 font-black left-8 text-[10px] text-red-500">
              *otomatis
            </span>
          </label>
          <input
            onChange={(e) => handleZodiac(date)}
            type="text"
            readOnly
            value={zodiac}
            className="rounded p-1"
            name=""
            id=""
            required
          />
          <label htmlFor="">Hobi</label>
          <input
            type="text"
            onChange={(e) => setHobby(e.target.value)}
            value={hobby}
            className="rounded p-1"
            name=""
            id=""
            required
          />
          <label htmlFor="">No. Telp</label>
          <input
            type="number"
            onChange={(e) => setNumber(e.target.value)}
            value={number || ""}
            className="rounded p-1"
            name=""
            id=""
            required
          />
          {/* <div className="flex col-span-2  justify-center mx-auto"> */}
          <button className="px-6 py-2  mx-auto  col-span-2 bg-red-600 rounded-lg  text-white">
            submit
          </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
}
