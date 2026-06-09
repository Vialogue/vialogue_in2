import Image from "next/image";

import { StaticImageData } from "next/image";

export interface KeyFeature {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  span: string;
}

interface Props {
  heading?: string;
  features: KeyFeature[];
}

const KeyFeatures: React.FC<Props> = ({
  heading = "Key Features",
  features,
}) => {
  return (
    <section className="w-full md:py-16 py-15">
      <div className="mx-auto md:px-40 px-4">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-medium heading-two text-gray-800 mb-14">
          {heading}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {features.map((feature) => (
            <div key={feature.id} className={`${feature.span} flex flex-col border-gray-200 border-2 rounded-2xl p-6 bg-white`}>
              
              {/* Image Card */}
              <div className="relative w-full rounded-xl bg-white overflow-hidden mb-6">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={100}
                  height={100}
                  className="object-cover  w-full  md:object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-5">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;