import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-5xl w-full space-y-16">
        {/* Name & Photo Section */}
        <div className="flex items-start justify-between gap-12 border-b border-gray-200 pb-12">
          <div className="space-y-2">
            <h1 className="text-5xl font-light text-gray-900">Freddierick Doniego</h1>
            <p className="text-lg text-gray-500">Python Developer</p>
          </div>

          <div className="relative w-40 h-40 flex-shrink-0">
            <div className="absolute inset-0 bg-gray-100">
              <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">
                Photo
              </div>
              <Image
                src="/images/personal/pic1.jpeg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* About */}
        <div className="space-y-5 border-b border-gray-200 pb-16">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 font-medium">
            About
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
              Python Developer with over a year of experience in software development for legal operations. Currently at SP
              Madrid & Associates Law Firm, building and optimizing Python-based applications. Former intern at the same firm.
              B.S. in Computer Science, Technological Institute of the Philippines (2024). Skilled in Python, software
              development, and problem-solving
          </p>
        </div>

        {/* Contact & Connect */}
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-5">
            <h2 className="text-xs uppercase tracking-widest text-gray-400 font-medium">
              Contact
            </h2>
            <div className="space-y-3 text-sm">
              <p className="text-gray-600">fdoniego03@gmai.com</p>
              <p className="text-gray-600">09156412142</p>
              <p className="text-gray-600">Quezon City</p>
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="text-xs uppercase tracking-widest text-gray-400 font-medium">
              Connect
            </h2>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://github.com/RIK-IJI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/freddierick-doniego-086766234"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
