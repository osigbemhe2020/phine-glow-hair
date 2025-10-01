export function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      title: "Premium Quality",
      description:
        "99% naturally derived hair color products for healthier, shinier results.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Expert Stylists",
      description:
        "Certified professionals with years of experience in hair coloring.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Flexible Scheduling",
      description: "Convenient appointment times to fit your busy schedule.",
    },
  ];

  return (
    <div className="mt-16 bg-white rounded-lg shadow-lg p-8 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Why Choose Phine Glow Hairs?
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience the difference with our premium hair color services using
          naturally derived products that protect and nourish your hair.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {feature.icon}
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">
              {feature.title}
            </h4>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
