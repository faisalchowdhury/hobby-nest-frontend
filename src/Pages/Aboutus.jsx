import React from "react";
import hobby1 from "./../assets/hobby1.jpg";
import hobby2 from "./../assets/hobby2.jpg";
import hobby3 from "./../assets/hobby3.jpg";
import hobby4 from "./../assets/hobby4.jpg";
const Aboutus = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <img className="rounded-xl" src={hobby1} alt="" />
              </div>
              <div>
                <img className="rounded-xl" src={hobby2} alt="" />
              </div>

              <div>
                <img className="rounded-xl" src={hobby3} alt="" />
              </div>

              <div>
                <img className="rounded-xl" src={hobby4} alt="" />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl ">Who we Are ?</h1>
            <p className="py-6">
              Welcome to Hobbynest – your cozy corner on the internet to
              connect, share, and grow through hobbies you love. We believe
              hobbies are more than just pastimes; they are gateways to
              friendship, creativity, and personal joy. Whether you're a painter
              looking to share your latest piece, a gamer searching for your
              next raid team, a reader eager to discuss your favorite book, or a
              runner wanting a motivational circle, Hobbynest is here to help
              you find your people. At Hobbynest, you can discover new groups,
              join communities that align with your interests, or create your
              own group to bring like-minded enthusiasts together. It’s a place
              where your passions are celebrated, and meaningful connections are
              made—one shared interest at a time. Join us and turn your hobbies
              into friendships, your interests into communities, and your free
              time into something truly fulfilling. Find your people. Share your
              passion. Grow together. Welcome to Hobbynest.
            </p>
            <button className="btn btn-primary border-none text-white hover:bg-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
