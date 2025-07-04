import { ProjectCard } from "@/components/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      {/* Mountain image at the top */}
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          src="/mountain.jpg"
          alt="mountain"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
            textShadow: "0 2px 8px rgba(0,0,0,0.7)",
            zIndex: 1,
          }}
        >
          Take a look at some projects below
        </div>
      </div>
      <div className="h-[15%]"></div>
      {/* Forest image below mountain */}
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          src="/forest.jpg"
          alt="forest"
          fill
          style={{ objectFit: "cover" }}
          priority={false}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "110%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 50,
        }}
      >
        <div className="flex flex-row items-end gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "175%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 50,
          width: "100%",
          height: "80%",
        }}
      >
        <div className="grid grid-cols-10 grid-rows-10 gap-4 w-full h-[100%]">
          <div
            id="about"
            className="row-start-2 col-span-2 col-start-2 text-2xl text-center"
          >
            About Me
          </div>
          <div className="row-start-2 col-span-3 col-start-7 text-2xl text-center">
            Contact Me
          </div>
          <div className="row-start-4 col-start-2 row-span-3 col-span-2 flex items-center justify-center">
            <Image
              src="/shaun.jpg"
              alt="shaun"
              width={300}
              height={300}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              priority={false}
            />
          </div>
          <div className="row-start-4 col-start-4 row-end-7 col-span-2 bg-gray-800">
            Text about myself
          </div>
          <div className="row-start-7 col-start-2 row-end-10 col-span-2 bg-gray-800">
            Some other text yo
          </div>
          <div className="row-start-7 col-start-4 row-end-10 col-span-2 bg-gray-800">
            PLUHHHH
          </div>
          <div className="row-start-3 col-start-7 col-span-1 text-xl text-center">
            Name
          </div>
          <div className="row-start-4 col-start-7 col-span-1 text-xl text-center">
            Email
          </div>
          <div className="row-start-5 col-start-7 col-span-1 text-xl text-center">
            Message
          </div>
          <div className="row-start-3 col-start-8 col-span-2 bg-gray-800 w-full h-full">
            <input
              id="contact"
              className="w-full h-full"
              placeholder="Enter Name"
            ></input>
          </div>
          <div className="row-start-4 col-start-8 col-span-2 bg-gray-800">
            <input
              id="emailInput"
              className="w-full h-full"
              placeholder="Enter Email"
            ></input>
          </div>
          <div className="row-start-5 row-span-4 col-start-8 col-span-2 bg-gray-800">
            <input
              id="messageInput"
              className="w-full h-full"
              placeholder="Enter Message"
            ></input>
          </div>
          <div className="row-start-9 col-start-8 col-span-2 bg-gray-800 text-center">
            SEND (does nothing rn)
          </div>
        </div>
      </div>
    </div>
  );
}
