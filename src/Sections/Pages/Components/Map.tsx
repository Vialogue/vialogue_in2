"use client";

const MapSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-10 lg:px-40 pt-16 sm:pt-16">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADING ===== */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-900">
            Our Location
          </h2>
          <p className="mt-2 text-gray-600">
            Gurugram, Haryana — India
          </p>
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
