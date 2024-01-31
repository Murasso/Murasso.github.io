import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion";
import LanguageList from "../components/LanguageList";

const MySkills = () => {
    const isAboveMediumScreens=useMediaQuery("(min-width: 1060px)")

    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
            <motion.div
                className="md:w-1/3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
             >
                <p className="font-playfair font-semibold text-4xl mb-5">
                    MY <span className="text-blue">SKILLS</span>
                </p>
                <LineGradient width="w-1/3"/>

                <p className="mt-10 mb-7">
                    Helloooooo

                </p>
                </motion.div>
                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                        before:w-full md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
                      >
                        <img
                          alt="skills"
                          className="z-10"
                          src="/skills-image.png"
                        />
                        </div>
                    ):(
                        <img
                          alt="skills"
                          className="z-10"
                          src="/skills-image.png"
                        />
                    )}

                </div>

            </div>

            <div className="md:flex md:justify-between mt-16 gap-32">
                        <LanguageList/>
            </div>
        </section>
    )
}

export default MySkills
