import Image from "next/image";

import FormTwo from "./form-2";
import ZodiakTwo from "./zodiak-2";

export default function Home() {
  return (
    <main className="pb-12">
      <div className="mx-auto  mb-6 ">
        <div className="p-6">
          <Image
            className="mx-auto"
            src={"/HeartConnect.png"}
            alt="next"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="ml-6 absolute">
        <ZodiakTwo />
      </div>

      <div className="flex ">
        <div className=" mx-auto">
          <FormTwo />
        </div>
      </div>

      <div>
        <Image
          className="mx mx-auto p-6"
          src={"/heart-cycle.svg"}
          alt="next"
          width={120}
          height={120}
        />
      </div>

      {/* jodoh */}
      <div
        className="form rounded-xl overflow-hidden  flex justify-start
         flex-col mx-auto bg-white border-[#0016D8] border
       w-[691px] h-[309px]"
      >
        <h3 className="text-xl bg-blue-300 p-3 rounded-xl/ rounded-t-xl  font-black text-center text-blue-600">
          JODOH
        </h3>
        <div className=" p-6 flex flex-col ">
          <form action="" className="text text-[16px] grid grid-cols-2 ">
            <label htmlFor="">Nama</label>
            <input type="text" className="rounded p-1" name="" id="" required />
            <label htmlFor="">Jenis Kelamin</label>
            <input type="text" className="rounded p-1" name="" id="" required />
            <label htmlFor="">Tanggal Lahir</label>
            <input type="text" className="rounded p-1" name="" id="" required />
            <label htmlFor="">Zodiak</label>
            <input type="text" className="rounded p-1" name="" id="" required />
            <label htmlFor="">Hobi</label>
            <input type="text" className="rounded p-1" name="" id="" required />
            <label htmlFor="">No. Telp</label>
            <input type="text" className="rounded p-1" name="" id="" required />
          </form>
        </div>
      </div>
    </main>
  );
}
