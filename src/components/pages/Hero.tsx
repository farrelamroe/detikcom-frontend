import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <>
      <div className="px-[30px] bg-hero-img md:bg-hero-img-landscape bg-cover lg:bg-hero-img-desktop lg:px-[140px] lg:h-[800px] font-lexend">
        <div className="flex flex-row justify-between pt-[30px] items-center md:pt-[40px]">
          <Image
            src="/images/Logo.png"
            alt=""
            height={1000}
            width={1000}
            className="w-[138px] h-[52px]"
          />
          <Image
            src="/images/Mobile-Menu.png"
            alt=""
            height={1000}
            width={1000}
            className="w-[24px] h-[24px] lg:hidden"
          />
          <div className="flex-row gap-x-[56px] items-center hidden lg:flex">
            <p className="text-[16px] leading-[24px] text-white underline">
              Product
            </p>
            <Link href="/blog">
              <p className="text-[16px] leading-[24px] text-white underline">
                Blog
              </p>
            </Link>
            <p className="text-[16px] leading-[24px] text-white underline">
              Support
            </p>
            <p className="text-[16px] leading-[24px] text-white underline">
              Log In
            </p>
            <p className="text-[16px] leading-[24px] text-white underline bg-primary-200/50 px-[44px] py-[10px] rounded-[4px]">
              Get Access
            </p>
          </div>
        </div>
        <p className="text-[34px] leading-[42px] font-bold font-lexend text-white pt-[188px] md:pt-[152px] lg:pt-[160px] md:text-[50px] md:leading-[64px] max-w-[564px]">
          Instant collaboration for remote teams
        </p>
        <p className="text-[16px] leading-[24px] font-regular font-lexend text-white pt-[16px] md:text-[18px] md:leading-[27px] max-w-[397px]">
          All-in-one place for your remote team to chat, collaborate and track
          project progress.
        </p>
        <div className="flex flex-col md:flex-row gap-x-[12px] mt-[56px]">
          <textarea
            className="border-2 border-primary-100 bg-white rounded-[4px] font-lexend w-full py-[12px] h-[47px] text-[14px] leading-[22.4px] pl-[16px] md:min-w-[297px] max-w-[298px]"
            placeholder="Email"
          />
          <button className="bg-primary-200 rounded-[4px] py-[10px] text-[18px] leading-[27px] w-full mt-[16px] font-lexend text-white mb-[88px] md:mt-0 max-w-[233px]">
            Get Early Access
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
