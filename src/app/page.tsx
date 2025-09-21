// app/page.tsx
import Strapi from "strapi-sdk-js";

const strapi = new Strapi({
  url: process.env.STRAPI_URL || "http://localhost:1337",
});

export default async function Home() {
  let heroText: string | null = null;

  try {
    const response = await strapi.find("static-content", { populate: "*", locale: "uk" });
    heroText = response?.data?.heroText ?? null;
  } catch (err) {
    console.error("Error fetching heroText:", err);
  }

  return (
    <div>
      {heroText ? heroText : "No hero text found"}
    </div>
  );
}
