import SocialMediaIcons from "../components/SocialMediaIcons";

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
const Footer = () => {
    return (
        <footer className="h-64 bg-red pt-10">

            <div className="w-5/6 mx-auto">
                <SocialMediaIcons/>
                <div className="ms:flex justify-center md:justify-between text-center">
                    <p className="font-playfair font-semibold text-2xl text-yellow">SO MURAKAMI</p>
                    <p className="font-playfair text-md text-yellow">
                        @{currentYear} Murakami. All Rights Reserved.
                    </p>
                </div>

            </div>

        </footer>
    )
}

export default Footer
