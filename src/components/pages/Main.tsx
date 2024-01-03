import Image from "next/image";

export function Main() {
  return (
    <>
      <div className="bg-white pt-[100px] lg:pl-[140px]">
        <div className="flex flex-col lg:flex-row-reverse">
          <Image
            src="/images/mockup.png"
            alt=""
            height={10000}
            width={10000}
            className="max-h-[654px] md:hidden"
          />
          <Image
            src="/images/mockup-landscape.png"
            alt=""
            height={10000}
            width={10000}
            className="max-h-[654px] hidden md:block lg:hidden w-[1050.69px]"
          />
          <Image
            src="/images/mockup-desktop.png"
            alt=""
            height={10000}
            width={10000}
            className="max-h-[654px] hidden lg:block"
          />
          <div className="flex flex-col">
            <p className="text-[34px] leading-[42px] font-bold font-lexend text-primary-300 pt-[48px] px-[30px]  md:text-[50px] md:leading-[64px]">
              Chats for your distributed teams
            </p>
            <p className="text-[16px] leading-[24px] font-regular font-lexend text-primary-300 pt-[24px] px-[30px]">
              Team combines the immediacy of real-time chat with an email
              threading model. With Team, you can catch up on important
              conversations while ignoring irrelevant ones.
            </p>
            <div className="flex flex-row gap-x-[8px] pt-[48px] px-[30px] items-center text-center justify-start">
              <p className="text-[16px] leading-[24px] font-medium font-lexend text-primary-200">
                Learn more
              </p>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.1485 13.7549H6.38599C5.69849 13.7549 5.13599 14.3174 5.13599 15.0049C5.13599 15.6924 5.69849 16.2549 6.38599 16.2549H20.1485V18.4924C20.1485 19.0549 20.8235 19.3299 21.211 18.9299L24.686 15.4424C24.9235 15.1924 24.9235 14.8049 24.686 14.5549L21.211 11.0674C20.8235 10.6674 20.1485 10.9549 20.1485 11.5049V13.7549Z"
                  fill="#5468E7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-[106px] md:mt-[156px] lg:gap-x-[139px] lg:pr-[140px] lg:mt-[120px]">
          <Image
            src="/images/img-group.png"
            alt=""
            height={10000}
            width={10000}
            className="max-w-[300px] md:h-[360px] h-[288px] md:mt-0 lg:max-w-[565px] lg:h-[565px]"
          />
          <div className="flex flex-col">
            <p className="text-[34px] leading-[42px] font-bold font-lexend text-primary-300 pt-[48px] pl-[24px] lg::text-[50px] lg:leading-[64px] max-w-[460px]">
              Chats for your distributed teams
            </p>
            <p className="text-[16px] leading-[24px] font-regular font-lexend text-primary-300 pt-[24px] pl-[24px] lg:text-[18px] lg:leading-[27px] lg:max-w-[456px]">
              Team combines the immediacy of real-time chat with an email
              threading model. With Team, you can catch up on important
              conversations while ignoring irrelevant ones.
            </p>
            <div className="flex flex-row gap-x-[8px] pt-[48px] px-[30px] items-center text-center justify-start">
              <p className="text-[16px] leading-[24px] font-medium font-lexend text-primary-200">
                Learn more
              </p>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.1485 13.7549H6.38599C5.69849 13.7549 5.13599 14.3174 5.13599 15.0049C5.13599 15.6924 5.69849 16.2549 6.38599 16.2549H20.1485V18.4924C20.1485 19.0549 20.8235 19.3299 21.211 18.9299L24.686 15.4424C24.9235 15.1924 24.9235 14.8049 24.686 14.5549L21.211 11.0674C20.8235 10.6674 20.1485 10.9549 20.1485 11.5049V13.7549Z"
                  fill="#5468E7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center mt-[72px] md:mt-[64px] lg:gap-x-[139px] lg:pr-[140px] lg:mt-[120px]">
          <Image
            src="/images/img-group-2.png"
            alt=""
            height={10000}
            width={10000}
            className="max-w-[300px] md:h-[360px] h-[288px] lg:max-w-[565px] lg:h-[565px]"
          />
          <div className="flex flex-col">
            <p className="text-[34px] leading-[42px] font-bold font-lexend text-primary-300 pt-[48px] pl-[24px] lg::text-[50px] lg:leading-[64px] max-w-[460px]">
              Choose how you want to work
            </p>
            <p className="text-[16px] leading-[24px] font-regular font-lexend text-primary-300 pt-[24px] pl-[24px] lg:max-w-[456px]">
              In Team, you’ve got all the flexibility to work when, where and
              how it’s best for you. You can easily chat, send audio and video
              clips, or hop on a huddle to talk things out live.
            </p>
            <div className="flex flex-row gap-x-[8px] pt-[48px] px-[30px] items-center text-center justify-start">
              <p className="text-[16px] leading-[24px] font-medium font-lexend text-primary-200">
                Learn more
              </p>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.1485 13.7549H6.38599C5.69849 13.7549 5.13599 14.3174 5.13599 15.0049C5.13599 15.6924 5.69849 16.2549 6.38599 16.2549H20.1485V18.4924C20.1485 19.0549 20.8235 19.3299 21.211 18.9299L24.686 15.4424C24.9235 15.1924 24.9235 14.8049 24.686 14.5549L21.211 11.0674C20.8235 10.6674 20.1485 10.9549 20.1485 11.5049V13.7549Z"
                  fill="#5468E7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-[87px] md:mt-[64px] lg:gap-x-[139px] lg:pr-[140px] lg:mt-[120px]">
          <Image
            src="/images/img-group-3.png"
            alt=""
            height={10000}
            width={10000}
            className="max-w-[300px] md:h-[360px] h-[288px] lg:max-w-[565px] lg:h-[565px]"
          />
          <div className="flex flex-col">
            <p className="text-[34px] leading-[42px] font-bold font-lexend text-primary-300 pt-[48px] pl-[24px] lg::text-[50px] lg:leading-[64px] max-w-[460px]">
              Move faster with your Team tools
            </p>
            <p className="text-[16px] leading-[24px] font-regular font-lexend text-primary-300 pt-[24px] pl-[24px] max-w-[456px]">
              With your other work apps connected to Team, you can work faster
              by switching tabs less. And with powerful tools like Workflow
              Builder, you can automate away routine tasks.
            </p>
            <div className="flex flex-row gap-x-[8px] pt-[48px] px-[30px] items-center text-center justify-start">
              <p className="text-[16px] leading-[24px] font-medium font-lexend text-primary-200">
                Learn more
              </p>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.1485 13.7549H6.38599C5.69849 13.7549 5.13599 14.3174 5.13599 15.0049C5.13599 15.6924 5.69849 16.2549 6.38599 16.2549H20.1485V18.4924C20.1485 19.0549 20.8235 19.3299 21.211 18.9299L24.686 15.4424C24.9235 15.1924 24.9235 14.8049 24.686 14.5549L21.211 11.0674C20.8235 10.6674 20.1485 10.9549 20.1485 11.5049V13.7549Z"
                  fill="#5468E7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
