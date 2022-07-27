import { builder } from "@netlify/functions";
import fetch from "node-fetch";

async function handler(event, context) {
  const time = new Date().toLocaleTimeString();

  const domain = "https://editors.dexerto.com";

  const path = event.path.split("/");
  const param = path[path.length - 1];

  const sitemap = await (await fetch(`${domain}/${param}`)).text();

  console.log("TESTING", param, sitemap);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: sitemap,
    ttl: 60,
  };
}

exports.handler = builder(handler);
