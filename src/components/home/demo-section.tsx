import { Pizza } from "lucide-react";

export default function DemoSection() {
  return (
    <section className=" relative  z-20">
      <div className=" py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none  absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-30"
        >
          <div
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9089FC] via-[#FF80B5] to-[#f9569a] opacity-20 sm:left-[calc(50%-30rem)]  sm:w-[72rem]"
          />
        </div>
        <div className=" flex flex-col items-center text-center space-y-4">
          <div className=" inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs border border-gray-500/20 mb-4">
            <Pizza className=" w-6 h-6 text-rose-500" />
          </div>

          <div className=" text-center mb-16">
            <h3 className=" font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6">
              Watch how Sum-Ri transforms{" "}
              <span className=" bg-linear-to-r from-rose-500 to-rose-700  bg-clip-text text-transparent">
                this Next.js course PDF
              </span>{" "}
              into an easy-to-read summary!
            </h3>
          </div>

          <div className=" flex justify-center items-center px-2 sm:px-4 lg:px-6">
            {/* summary viewer */}
          </div>
        </div>
      </div>
    </section>
  );
}
