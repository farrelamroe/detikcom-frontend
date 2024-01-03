import Image from "next/image";

export function Footer(){
    return (
      <div className="bg-primary-300 ">
        <div className="bg-primary-300 pl-[24px] font-lexend pr-[28px] md:pl-[40px] lg:flex-row lg:flex lg:justify-between lg:px-[140px]">
          <div className="flex flex-col gap-y-[16px] pt-[48px]">
            <Image
              src="/images/Logo.png"
              alt=""
              height={1000}
              width={1000}
              className="w-[138px] h-[52px]"
            />
            <p className="text-[14px] leading-[23px] text-white w-[168px]">
              Collaboration platform for mordern team
            </p>
          </div>
          <div className="flex flex-col pt-[56px] gap-y-[48px] md:flex-col-reverse lg:flex-row-reverse">
            <div className="flex flex-col">
              <p className="text-[24px] leading-[30px] text-primary-200">
                Stay up to date
              </p>
              <p className="text-[14px] leading-[23px] text-white w-[182px] pt-[16px]">
                Subscribe to our newseller
              </p>
              <textarea
                className="border-2 border-primary-100 bg-white rounded-[4px] font-lexend w-full mt-[10px] flex justify-center items-center py-[12px] h-[47px] text-[14px] leading-[22.4px] pl-[16px] max-w-[268px] lg:w-[268px]"
                placeholder="Email"></textarea>
            </div>
            <div className="flex flex-col gap-y-[48px] md:flex-row">
              <div className="flex flex-col">
                <p className="text-[24px] leading-[30px] text-primary-200">
                  Company
                </p>
                <p className="text-[14px] leading-[23px] text-white w-[182px] pt-[16px]">
                  Product
                </p>
                <p className="text-[14px] leading-[23px] text-white w-[182px] pt-[12px]">
                  Blog
                </p>
                <p className="text-[14px] leading-[23px] text-white w-[182px] pt-[12px]">
                  Support
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[24px] leading-[30px] text-primary-200">
                  Features
                </p>
                <p className="text-[14px] leading-[23px] text-white w-[182px] pt-[16px]">
                  Screen Sharing
                </p>
                <p className="text-[14px] leading-[23px] text-white w-[182px] pt-[12px]">
                  iOS & Android Apps
                </p>
                <p className="text-[14px] leading-[23px] text-white w-[182px] pt-[12px]">
                  File Sharing
                </p>
                <p className="text-[14px] leading-[23px] text-white w-[182px] pt-[12px]">
                  User Managment
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[24px] leading-[30px] text-primary-200">
                  Contact Us
                </p>
                <p className="text-[14px] leading-[23px] text-white w-[182px] pt-[16px]">
                  info@teamapp.com
                </p>
                <p className="text-[14px] leading-[23px] text-white w-[182px] pt-[12px]">
                  1-800-200-300
                </p>
                <p className="text-[14px] leading-[23px] text-white w-[138px] pt-[12px]">
                  1010 Sunset Blv. Palo Alto, California
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[14px] leading-[23px] text-white pt-[120px] pb-[37px] md:pb-[56px] lg:pl-[140px] md:pl-[40px] pl-[24px]">
          © Copyright Team Inc.
        </p>
      </div>
    );
}

export default Function