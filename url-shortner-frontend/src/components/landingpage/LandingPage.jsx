import logo from "../../assets/images/img2.png";
import Card from "../card/Card";
import { cardData } from "../../content";
import { motion } from "motion/react";
// import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../../contextApi/ContextApi";

const LandingPage = () => {
  // let desc =
  //   "Generate short, memorable links with ease using Linklytics’s intuitive interface. Share URLs effortlessly across platforms. Optimize your sharing strategy with Linklytics. Track clicks and manage your links seamlessly to enhance your online presence. Generate short, memorable links with ease using Linklytics’s intuitive interface. Share URLs effortlessly across platforms.";
  // const navigate = useNavigate()
  const {token} = useStoreContext()
  console.log('TOKEN FROM LANDING PAGE: ', token)
  return (
    <>
      <div className=" min-h-[100vh] lg:px-14 sm:px-8 px-4">
        <div className="lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between items-center">
          <div className="flex-1 items-center">
            <motion.h1
              initial={{ opacity: 0, y: -80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-semibold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full w-full md:w-[70%]"
            >
              EZ <span className="text-[#5bc8ac]">Short</span> Simplifying URL
              Shortening For Efficient Sharing.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-slate-700 text-sm my-5 w-full"
            >
              EZ Short streamlines the process of URL shortening, making sharing
              links effortless and efficient. With its user-friendly interface,
              EZ Short allows you to generate concise, easy-to-share URLs in
              seconds. Simplify your sharing experience with EZ Short today.
            </motion.p>
            <div className="flex items-center gap-3">
              <motion.button
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-[#5bc8ac] w-40 text-white rounded-md py-2"
              >
                Manage Links
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="border-[#5bc8ac] bg-white border w-40 text-[#5bc8ac] rounded-md py-2"
              >
                Create Short Link
              </motion.button>
            </div>
          </div>
          <div className="   flex-1 flex   justify-center w-full">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sm:w-[480px] w-[400px] object-cover rounded-md"
              src={logo}
              alt=""
            />
          </div>
        </div>
        <div className="sm:pt-12 pt-7">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-slate-800 font-roboto font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
          >
            Trusted by individuals and teams at the world best companies{" "}
          </motion.p>
          <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
            {cardData.map((data) => (
              <Card key={data.id} title={data.title} desc={data.desc} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
