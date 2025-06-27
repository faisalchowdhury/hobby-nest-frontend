import React, { useContext } from "react";
import Slider from "../Component/Slider";
import CountUp from "react-countup";
import { Link } from "react-router";
import { PiShareNetwork, PiUsersThreeFill } from "react-icons/pi";
import { SiReadthedocs } from "react-icons/si";
import { useLoaderData } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import { ThemeContext } from "../Context/ThemeContext";
import Newsletter from "../Component/Newsletter";

const Home = () => {
  const data = useLoaderData();
  const { darkMode } = useContext(ThemeContext);
  console.log(data);

  return (
    <div>
      <title>Hobbynest</title>
      <Slider></Slider>

      <h2 className="mt-10 text-4xl">
        Join Ongoing groups
        <span className="text-[#02BE60]">
          <Typewriter
            words={[
              "",
              ` ${data[0]?.group_name}`,
              ` ${data[1]?.group_name}`,
              ` ${data[2]?.group_name}`,
              ` ${data[3]?.group_name}`,
              ` ${data[4]?.group_name}`,
              ` ${data[5]?.group_name}`,
              ,
            ]}
            loop={100}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
          />
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-5 ">
        {data.map((group) => (
          <div
            key={group._id}
            className={`${
              darkMode === true ? "bg-slate-800" : "bg-slate-100"
            } border border-gray-700 rounded-lg p-5  shadow hover:shadow-xl hover:-translate-y-1 transition-all space-y-2`}>
            <h2 className="text-2xl">{group.group_name}</h2>
            <p>End Date : {group.end_date}</p>
            <p className="text-xl">
              <span className="bg-primary text-white px-2">
                {" "}
                Group Category : {group["hobby-category"]}
              </span>
            </p>
            <p>Description :{group.description.slice(0, 130)}...</p>

            <Link
              to={`/group/${group._id}`}
              className="btn bg-primary text-white hover:bg-black">
              See More
            </Link>
          </div>
        ))}
      </div>

      {/* Popular Hobbies */}

      <div className="space-y-5">
        <div className="space-y-3 my-20">
          <h3 className="text-2xl">Popular Groups</h3>
          <h1 className="text-3xl md:text-6xl font-semibold">
            Join the most active and inspiring hobby communities.
          </h1>
        </div>
        <div className="popular-hobby grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-primary text-white p-10 rounded-xl space-y-3">
            <h2 className="text-2xl">Creative Arts & DIY</h2>
            <h1 className="text-3xl font-semibold">
              Join crafters and creators to share projects and spark ideas.
            </h1>
            <Link
              to={"/login"}
              className="btn border-none bg-white rounded-md text-black hover:bg-black hover:text-white">
              Join Us
            </Link>
          </div>
          <div className="bg-slate-200 text-black p-10 rounded-xl space-y-3">
            <h2 className="text-2xl">Outdoor Adventures</h2>
            <h1 className="text-3xl font-semibold">
              Love the outdoors? Rally your fellow explorers or build your own
              adventure group today.
            </h1>
            <Link
              to={"/login"}
              className="btn border-none bg-white rounded-md text-black hover:bg-black hover:text-white">
              Join Us
            </Link>
          </div>
        </div>
      </div>

      {/* Why Us */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-40">
        <div
          style={{ boxShadow: "-15px 15px 0px 0px #004122" }}
          className={`text-center ${
            darkMode === true ? "bg-slate-800" : "bg-white"
          }  px-5 py-20 relative rounded-t-2xl  hover:-translate-y-5 transition duration-500 border-5 border-b-0`}>
          <div className="absolute flex justify-center items-center -top-15 left-0 right-0 bg-white border-5 border-#004122 w-[120px] h-[120px] mx-auto rounded-full">
            <PiShareNetwork color="#004122" size={80} />
          </div>

          <h1 className="text-5xl font-semibold">
            <CountUp start={0} end={9} suffix="X"></CountUp>
          </h1>
          <h2 className="text-2xl">More engagement then social</h2>
        </div>

        <div
          style={{ boxShadow: "-15px 15px 0px 0px purple" }}
          className={`text-center ${
            darkMode === true ? "bg-slate-800" : "bg-white"
          }  px-5 py-20 relative rounded-t-2xl  hover:-translate-y-5 transition duration-500 border-5 border-b-0`}>
          <div className="absolute flex justify-center items-center -top-15 left-0 right-0 bg-white border-5 border-#004122 w-[120px] h-[120px] mx-auto rounded-full">
            <SiReadthedocs color="#004122" size={80} />
          </div>

          <h1 className="text-5xl font-semibold">
            <CountUp start={0} end={100} suffix="+"></CountUp>
          </h1>
          <h2 className="text-2xl"> 100+ active groups </h2>
        </div>

        <div
          style={{ boxShadow: "-15px 15px 0px 0px orange" }}
          className={`text-center ${
            darkMode === true ? "bg-slate-800" : "bg-white"
          }  px-5 py-20 relative rounded-t-2xl  hover:-translate-y-5 transition duration-500 border-5 border-b-0`}>
          <div className="absolute flex justify-center items-center -top-15 left-0 right-0 bg-white border-5 border-#004122 w-[120px] h-[120px] mx-auto rounded-full">
            <PiUsersThreeFill color="#004122" size={80} />
          </div>

          <h1 className="text-5xl font-semibold">
            <CountUp start={0} end={2} suffix="M"></CountUp>
          </h1>
          <h2 className="text-2xl">2 Million users around the world</h2>
        </div>
      </div>

      {/* Newsletter */}
      <Newsletter></Newsletter>
      {/* Newsletter */}
    </div>
  );
};

export default Home;
