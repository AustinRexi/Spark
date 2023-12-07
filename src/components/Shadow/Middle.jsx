import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import Ticktok from "../../Assets/Ticktok.svg";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Facebook from "../../Assets/Facebook.svg";
function Middle() {
  return (
    <div className="mt-6 ">
      <div className="  grid grid-cols-3 gap-1 md:grid-cols-8  ">
        <div>
          <h1 className="font-bold text-xl">Legal </h1>
          <p className="mt-2">
            <Link href="#" underline="none">
              {"Privacy"}
            </Link>
          </p>
          <p>
            <Link href="#" underline="none">
              {"Terms"}
            </Link>
          </p>
          <p>
            <Link href="#" underline="none">
              {"Cookie Policy"}
            </Link>
          </p>
          <p>
            <Link href="#" underline="none">
              {"Intellectual Property"}
            </Link>
          </p>
        </div>
        <div className="pr-3 md:pr-0">
          <h1 className=" font-bold text-xl">Careers</h1>
          <p className="mt-2">
            <Link href="#" underline="none">
              {"Careers Portal"}
            </Link>
          </p>
          <p>
            <Link href="#" underline="none">
              {"Tech Blog"}
            </Link>
          </p>
        </div>
        <div className=" ">
          <h1 className="font-bold text-xl">Social</h1>
          <p className="mt-2 flex flex-wrap md:flex space-x-2">
            <InstagramIcon />
            <img src={Ticktok} alt="tiktok" />
            <YouTubeIcon />
            <TwitterIcon />
            <img src={Facebook} alt="facebook" />
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <h1 className="font-normal text-xl">FAQ</h1>
          <p className="mt-2">
            <Link href="#" underline="none">
              {"Destinations"}
            </Link>
          </p>
          <p>
            <Link href="#" underline="none">
              {"Press Room"}
            </Link>
          </p>
          <p>
            <Link href="#" underline="none">
              {"Contact"}
            </Link>
          </p>
          <p>
            <Link href="#" underline="none">
              {"Promo Code"}
            </Link>
          </p>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="mt-6 flex">
        <h1 className="text-lg font-bold mt-12 pl-4">Get the app!</h1>
        <div className=" flex  ">
          <img
            src="https://developer.apple.com/news/images/og/app-store-badge-og-twitter.jpg"
            alt="apple download"
            className=" hidden sm:flex w-64  "
          />

          <img
            src="https://www.freepnglogos.com/uploads/play-store-logo-png/play-store-logo-nisi-filters-australia-11.png"
            alt="googleplay"
            className=" my-10 px-4 w-48 "
          />
        </div>
      </div>
      <p className="mr-10">
        Single people, listen up: If you’re looking for love, want to start
        dating, or just keep it casual, you need to be on Spark. With over 55
        billion matches made, it’s the place to be to meet your next best match.
        Let’s be real, the dating landscape looks very different today, as most
        people are meeting online. With Spark, the world’s most popular free
        dating app, you have millions of other single people at your fingertips
        and they’re all ready to meet someone like you. Whether you’re straight
        or in the LGBTQIA community, Spark’s here to bring you all the sparks.
        There really is something for everyone on Spark. Want to get into a
        relationship? You got it. Trying to find some new friends? Say no more.
        New kid on campus and looking to make the most of your college
        experience? Spark U’s got you covered. Spark isn’t your average dating
        site — it’s the most diverse dating app, where adults of all backgrounds
        and experiences are invited to make connections, memories, and
        everything in between.
      </p>
      <hr className="mt-8" />
      <div className=" block sm:flex sm:space-x-80  ">
        <div className="flex space-x-2">
          <Link href="#" underline="none">
            {"FAQ"}
          </Link>{" "}
          /
          <Link href="#" underline="none">
            {"Safety Tips"}
          </Link>{" "}
          /
          <Link href="#" underline="none">
            {"Terms"}
          </Link>{" "}
          /
          <Link href="#" underline="none">
            {"Cookie policy"}
          </Link>{" "}
          /
          <Link href="#" underline="none">
            {"privacy Settings"}
          </Link>
        </div>
        <div className="mt-4 sm:mt-0">
          © 2023 Match Group, LLC, All Rights Reserved.{" "}
        </div>
      </div>
    </div>
  );
}
export default Middle;
