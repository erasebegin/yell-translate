export async function translateText(text) {
  const response = await fetch("https://translate.mentality.rip/translate", {
    method: "POST",
    body: JSON.stringify({
      q: text,
      source: "de",
      target: "en",
      format: "text",
    }),
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}
