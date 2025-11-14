import { MapPin, Phone } from "lucide-react";

const FindUs = () => {
  return (
    <section id="find-us" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
        <div className="bg-white dark:bg-dark p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Google Map */}
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0587759001746!2d72.77868099999999!3d21.1500591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dc44dfe42f3%3A0x623c23315a63d369!2sDr.%20Jash%20Ajmera%20%7C%20Psychiatrist%20and%20Psychotherapist%20in%20Surat%20%7C%20Sadbhav%20Neuropsychiatry%20Clinic!5e0!3m2!1sen!2sin!4v1763095117185!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sadbhav Neuropsychiatry Clinic Location"
              ></iframe>
            </div>
            {/* Clinic Information */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">Sadbhav Neuropsychiatry Clinic</h3>
              <div className="flex items-center mb-2">
                <MapPin className="text-blue-600 mr-2" size={20} />
                <p>208, 4th floor, Someshwar Square, Opp. Aagam Heritage bungalows, Near University Road, Vesu, Surat.</p>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="text-blue-600 mr-2" size={20} />
                <p>+91 7861024557</p>
              </div>
              <a
                href="https://maps.app.goo.gl/reprPyC8r9cdeKjB7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;