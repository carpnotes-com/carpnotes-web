// app/page.tsx
import Strapi from "strapi-sdk-js";

const strapi = new Strapi({
  url: process.env.STRAPI_URL,
});

export default async function Home() {

  console.log("process.env.STRAPI_URL ", process.env.STRAPI_URL);

  let heroText: string | null = null;

  try {
    const response = await strapi.find("static-content", { populate: "*", locale: "uk" });
    // Type assertion for expected response shape
    type StrapiResponse = {
      data?: {
        heroText?: string;
      };
    };
    const typedResponse = response as StrapiResponse;
    heroText = typedResponse?.data?.heroText ?? null;
  } catch (err) {
    console.error("Error fetching heroText:", err);
  }

  return (
    <div>
      {heroText ? heroText : "No hero text found"}
    </div>
  );
}
