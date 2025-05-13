import {
  BrainCircuit,
  DownloadCloud,
  FileOutput,
  FileText,
  MoveRight,
} from "lucide-react";
import React from "react";

type Steps = {
  icon: React.ReactNode;
  label: string;
  description: string;
};

const steps: Steps[] = [
  {
    icon: <FileText size={64} strokeWidth={1.5} />,
    label: "Upload your PDF",
    description: "Simply drag & drop your PDF document or click to upload.",
  },
  {
    icon: <BrainCircuit size={64} strokeWidth={1.5} />,
    label: "AI Analysis",
    description: "Our AI analyzes the document and extracts key information.",
  },
  {
    icon: <FileOutput size={64} strokeWidth={1.5} />,
    label: "Get your summary",
    description: "Receive a concise summary of the document's main points.",
  },
];

export default function HowItWorks() {
  return (
    <section className=" relative overflow-hidden bg-gray-50">
      <div className=" py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb16">
          <h2 className=" font-bold text-xl uppercase mb-4 text-rose-500">
            How it works
          </h2>
          <h3 className=" font-bold text-3xl max-w-2xl mx-auto">
            Transform any PDF into an easy-to-read summary with just a few
            clicks.
          </h3>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, index) => (
            <div key={index} className=" relative flex items-stretch">
              <StepItem {...step} />

              {index < steps.length - 1 && (
                <div className=" hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <MoveRight
                    className=" text-rose-400"
                    size={32}
                    strokeWidth={1}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepItem({ icon, label, description }: Steps) {
  return (
    <div className=" relative   bg-white/5 backdrop-blur-xs border-white/10  transition-colors group w-full p-6  rounded-2xl ">
      <div className=" flex flex-col gap-4 h-full ">
        <div className=" flex items-center justify-center w-24 h-24 mx-auto rounded-2xl  bg-linear-to-br from-rose-500/10 to-transparent group-hover:from-rose-500/20    transition-colors">
          <div className=" text-rose-500">{icon}</div>
        </div>
        <div className=" flex flex-col gap-1 justify-between">
          <h4 className=" font-bold text-center text-xl ">{label}</h4>
          <p className=" text-gray-600 text-center text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
