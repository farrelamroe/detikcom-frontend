import { Footer } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Blog() {
  const [next, setNext] = useState(false);
  const data = [
    {
      imageUrl: "/images/blog-1.png",
      title: "Data exported by Team Cloud organization",
      text: "An internal investigation recently uncovered a vulnerability (identified as CVE-2022-21706) in Zulip’s invitation links.",
      avatar: "/images/avatar-blog-1.png",
      name: "Cameron Williamson",
      date: "July 1, 2023",
    },
    {
      imageUrl: "/images/blog-2.png",
      title: "Swap long video calls and emails for asynchronous video",
      text: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      avatar: "/images/avatar-blog-2.png",
      name: "Robert Fox",
      date: "June 21, 2023",
    },
    {
      imageUrl: "/images/blog-3.png",
      title: "Flexibility reigns: six key takeaways from Frontiers 2023",
      text: "The future of work is having a digital HQ that works for you.",
      avatar: "/images/avatar-blog-3.png",
      name: "Jenny Wilson",
      date: "June 10, 2023",
    },
    {
      imageUrl: "/images/blog-4.png",
      title: "Team plus Sales Cloud: Your sales team’s new digital HQ",
      text: "Why everyone on your sales team will benefit from our app’s killer features.",
      avatar: "/images/avatar-blog-1.png",
      name: "Kathryn Murphy",
      date: "May 11, 2023",
    },
    {
      imageUrl: "/images/blog-5.png",
      title: "What is digital culture?",
      text: "The teams best prepared for change use modern digital communication tools, feel comfortable learning new ones and continually adapt how they work.",
      avatar: "/images/avatar-blog-5.png",
      name: "Devon Lane",
      date: "May 22, 2023",
    },
    {
      imageUrl: "/images/blog-6.png",
      title: "Steve Dotto’s top 10 tips for overcoming workplace hiccups",
      text: "The executive producer of Dotto Tech shares his favorite Slack strategies for conquering common challenges in the digital-first workplace.",
      avatar: "/images/avatar-blog-5.png",
      name: "Theresa Webb",
      date: "April 4, 2023",
    },
    {
      imageUrl: "/images/blog-7.png",
      title: "What’s new in Team: iPad updates, split-screen view and more",
      text: "An internal investigation recently uncovered a vulnerability (identified as CVE-2022-21706) in Zulip’s invitation links.",
      avatar: "/images/avatar-blog-7.png",
      name: "Eleanor Pena",
      date: "March 18, 2023",
    },
    {
      imageUrl: "/images/blog-8.png",
      title:
        "Drive more efficiency and cost savings with these updates to Workflow Builder",
      text: "New and upcoming automation features help your teams do more with less.",
      avatar: "/images/avatar-blog-8.png",
      name: "Jerome Bell",
      date: "February 12, 2023",
    },
    {
      imageUrl: "/images/blog-9.png",
      title: "7 tips to onboard sales reps with ease",
      text: "The executive producer of Dotto Tech shares his favorite Slack strategies for conquering common challenges in the digital-first workplace.",
      avatar: "/images/avatar-blog-9.png",
      name: "Savannah Nguyen",
      date: "January 7, 2023",
    },
    {
      imageUrl: "/images/blog-10.png",
      title: "Team Security Update",
      text: "Because we take security, privacy, and transparency very seriously, we are sharing the details of a recent incident.",
      avatar: "/images/avatar-blog-10.png",
      name: "Bessie Cooper",
      date: "December 24, 2022",
    },
    {
      imageUrl: "/images/blog-11.png",
      title:
        "Everything you need to know about our first price change and plan updates",
      text: "Over the years, we have transformed TeamApp from a channel-based messaging app to your digital HQ, adding more value to empower our customers.",
      avatar: "/images/avatar-blog-11.png",
      name: "Kristin Watson",
      date: "December 10, 2022",
    },
    {
      imageUrl: "/images/blog-12.png",
      title: "New profile updates enhance hybrid work experience for teams",
      text: "Introducing new ways to foster connection, collaboration and inclusion with teammates in your digital HQ.",
      avatar: "/images/avatar-blog-12.png",
      name: "Wade Warren",
      date: "November 20, 2022",
    },
    {
      imageUrl: "/images/blog-13.png",
      title: "A new look and improved functionality for the TeamApp iPad",
      text: "Introducing ways to help you stay productive, organized and connected from anywhere.",
      avatar: "/images/avatar-blog-13.png",
      name: "Jenny Wilson",
      date: "November 4, 2022",
    },
    {
      imageUrl: "/images/blog-14.png",
      title: "Leveling the playing field in the new hybrid workplace",
      text: "Data from the TeamForum reveals alarming discrepancies between who is and isn’t coming into the office.",
      avatar: "/images/avatar-blog-14.png",
      name: "Floyd Miles",
      date: "October 30, 2022",
    },
    {
      imageUrl: "/images/blog-15.png",
      title:
        "Everything you need to know about our first price change and plan updates",
      text: "Over the years, we have transformed TeamApp from a channel-based messaging app to your digital HQ, adding more value to empower our customers",
      avatar: "/images/avatar-blog-15.png",
      name: "Cody Fisher",
      date: "October 14, 2022",
    },
    {
      imageUrl: "/images/blog-16.png",
      title: "Exploring better ways to work",
      text: "Reimagining work and management for a more flexible, productive and balanced future.",
      avatar: "/images/avatar-blog-16.png",
      name: "Guy Hawkins",
      date: "September 1, 2022",
    },
    {
      imageUrl: "/images/blog-17.png",
      title: "Winning the war for talent in the post-pandemic world",
      text: "IFuture Forum study of 10,000 knowledge workers shows that 93% want flexibility in when and how they work; more than half are open to a job change.",
      avatar: "/images/avatar-blog-17.png",
      name: "Mark Brooklyn",
      date: "July 29, 2022",
    },
    {
      imageUrl: "/images/blog-18.png",
      title: "Say hello to the updated TeamApp Forum",
      text: "Bring all the magic of the community right into TeamApp.",
      avatar: "/images/avatar-blog-18.png",
      name: "Jane Cooper",
      date: "July 11, 2022",
    },
  ];
  return (
    <>
      <div className="bg-white px-[30px] font-lexend">
        <div className="flex flex-row justify-between pt-[30px] items-center md:pt-[40px]">
          <Link href="/">
            <Image
              src="/images/Logo-dark.png"
              alt=""
              height={1000}
              width={1000}
              className="w-[138px] h-[52px]"
            />
          </Link>
          <Image
            src="/images/Mobile-Menu-dark.png"
            alt=""
            height={1000}
            width={1000}
            className="w-[24px] h-[24px] lg:hidden"
          />
          <div className="flex-row gap-x-[56px] items-center hidden lg:flex">
            <p className="text-[16px] leading-[24px] text-primary-300 underline">
              Product
            </p>
            <p className="text-[16px] leading-[24px] text-primary-300 underline">
              Blog
            </p>
            <p className="text-[16px] leading-[24px] text-primary-300 underline">
              Support
            </p>
            <p className="text-[16px] leading-[24px] text-primary-300 underline">
              Log In
            </p>
            <p className="text-[16px] leading-[24px] text-primary-300 underline bg-primary-200/50 px-[44px] py-[10px] rounded-[4px]">
              Get Access
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-[12px] pt-[64px]">
          <p className="text-[50px] leading-[64px] font-bold text-primart-300">
            Blog
          </p>
          <p className="text-[14px] leading-[23px] font-regular text-primart-300">
            Open-source threaded team chat that helps teams stay productive and
            focused.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[29.5px] gap-y-[20.5px]">
          {!next && (
            <>
              {data
                .slice(0, 9)
                .map(({ imageUrl, name, text, title, date, avatar }) => {
                  return (
                    <div
                      className="mt-[48px] rounded-[8px] bg-pure-white w-[260px] max-h-[493px] md:w-[508px] md:max-h-[530px] lg:w-[367px] lg:max-h-full"
                      key="">
                      <Image
                        src={imageUrl}
                        alt=""
                        height={1000}
                        width={1000}
                        className="rounded-t-[8px] md:max-h-[280px] lg:max-h-[220px] object-cover"
                      />
                      <div className="flex flex-col justify-between">
                        <div>
                          <p className="pt-[24px] px-[12px] text-[24px] leading-[30px] text-primary-200 md:px-[16px]">
                            {title}
                          </p>
                          <p className="pt-[16px] px-[12px] text-[12px] leading-[23px] text-primary-300 line-clamp-3 md:px-[16px] md:pt-[24px]">
                            {text}
                          </p>
                        </div>
                        <div className="flex flex-row pt-[32px] px-[12px] gap-x-[8px] items-center pb-[16px] lg:pt-[78px]">
                          <Image
                            src={avatar}
                            alt=""
                            height={1000}
                            width={1000}
                            className="w-[40px] h-[40px]"
                          />
                          <p className="text-[12px] leading-[23px] text-primary-200 w-[82px] md:w-fit">
                            {name}
                          </p>
                          <div className="border-2 border-primary-200 h-[40px]" />
                          <p className="text-[12px] leading-[23px] text-primary-200 w-[66px] md:w-fit">
                            {date}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </>
          )}
          {next && (
            <>
              {data
                .slice(9, 18)
                .map(({ imageUrl, name, text, title, date, avatar }) => {
                  return (
                    <div
                      className="mt-[48px] rounded-[8px] bg-pure-white w-[260px] max-h-[493px] md:w-[508px] md:max-h-[530px] lg:w-[367px] lg:max-h-full"
                      key="">
                      <Image
                        src={imageUrl}
                        alt=""
                        height={1000}
                        width={1000}
                        className="rounded-t-[8px] md:max-h-[280px] lg:max-h-[220px] object-cover"
                      />
                      <div className="flex flex-col justify-between">
                        <div>
                          <p className="pt-[24px] px-[12px] text-[24px] leading-[30px] text-primary-200 md:px-[16px]">
                            {title}
                          </p>
                          <p className="pt-[16px] px-[12px] text-[12px] leading-[23px] text-primary-300 line-clamp-3 md:px-[16px] md:pt-[24px]">
                            {text}
                          </p>
                        </div>
                        <div className="flex flex-row pt-[32px] px-[12px] gap-x-[8px] items-center pb-[16px] lg:pt-[78px]">
                          <Image
                            src={avatar}
                            alt=""
                            height={1000}
                            width={1000}
                            className="w-[40px] h-[40px]"
                          />
                          <p className="text-[12px] leading-[23px] text-primary-200 w-[82px] md:w-fit">
                            {name}
                          </p>
                          <div className="border-2 border-primary-200 h-[40px]" />
                          <p className="text-[12px] leading-[23px] text-primary-200 w-[66px] md:w-fit">
                            {date}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </>
          )}
        </div>
        <div className="py-[96px] md:py-[80px] lg:py-[120px]">
          <button
            className="bg-primary-200/50 w-[200px] h-[56px] text-primary-200 text-center rounded-[4px] block mx-auto text-[18px] leading-[27px]"
            onClick={() => setNext((prev: boolean) => !prev)}>{`${
            next ? "Previous" : "Next"
          }`}</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
