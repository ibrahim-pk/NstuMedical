import Image from "next/image";

export default function HelpSupport() {
  return (
    <div className="bg-gray-100 py-5">
      <div className="mx-auto  max-w-screen-lg">
        <div className="flex flex-col bg-white rounded-lg md:flex-row items-center justify-center ">
          {/* Left Side - Doctor Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/doctor.png"
              alt="Doctor"
              width={400}
              height={500}
              className="rounded-lg"
            />
          </div>

          {/* Right Side - Help & Support Content */}
          <div className="md:w-1/2  md:text-left p-6">
            <h2 className="text-3xl font-bold py-5 text-red-600">Help & Support</h2>
            <p className="text-gray-600 font-bold mt-2">
              The center provides service usually 8.30 am to 5.00 pm in working days but provide emergency services 24 hours.
              All members of the university get medicine from the medical center at free of cost .
              The center also has an ambulance, for 24 hours service.
            </p>
            <ul className="text-gray-700  mt-5 space-y-2">
              <li className="font-semibold">1. Location:Noakhali Science and Technology University</li>
              <li className="font-semibold">2. Office Hour: 9:00 AM to 5:00 PM, Days: Sunday to Thursday, Closed weekend day: Friday and Saturday</li>
              <li className="font-semibold">3. Phone: 02334496572 (Office)</li>
              <li className="font-semibold">4. Website : www.nstu.edu.bd</li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}
