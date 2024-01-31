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
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
                }}
            >
                <p className="font-playfair font-semibold text-4xl mb-5">
                    MY <span className="text-blue">SKILLS</span>
                </p>
                <div className="flex justify-center mt-5">
                    <LineGradient width="w-2/3" />
                </div>


                <p className="mt-10 mb-7">
                    These are some of the technologies I have experience with

                </p>
                </motion.div>


            </div>

            <div className="md:flex md:justify-between mt-16 gap-32">
                        <LanguageList/>
            </div>
        </section>
    )
}

export default MySkills
