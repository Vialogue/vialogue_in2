"use client";

const MapSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-10 lg:px-40 pt-16 sm:pt-16">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADING ===== */}
        <div className="mb-8 text-center sm:text-left flex flex-col items-center sm:items-start">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 uppercase">
            Our Location
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/20 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            Gurugram, Haryana — India
          </div>
        </div>

        {/* ===== MAP CONTAINER ===== */}
        <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865.7637438289732!2d77.05981341272592!3d28.390819114274674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd2381452569%3A0xd90c7168dffd88aa!2sVialogue%20Media%20(P)%20Ltd.!5e1!3m2!1sen!2sin!4v1778910740926!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
};

export default MapSection;
