import SocialMediaLinks from "./SocialMediaLinks";

export default function Footer() {
  return (
    <section className="bg-gradient-to-r from-teal-600 to-teal-950">
      <hr className="h-px bg-gray-400 border-0" />
      <div className="mx-10 py-10 flex items-center">
        <div className="text-white mr-auto">
          © 2025 CarpNotes
        </div>
        <div className="flex">
          <SocialMediaLinks/>
        </div>
      </div>
    </section>
  );
}
