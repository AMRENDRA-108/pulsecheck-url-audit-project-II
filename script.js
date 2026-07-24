/*
  This small script makes the form interactive. It does not contact a real
  server yet; it displays example audit data so the page can be demonstrated.
*/
const auditForm = document.querySelector("#audit-form");
const urlInput = document.querySelector("#url-input");
const inputHelp = document.querySelector("#input-help");
const results = document.querySelector("#results");
const scannedUrl = document.querySelector("#scanned-url");

// Add https:// when someone types only "example.com".
function normaliseUrl(value) {
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

auditForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents the browser from refreshing the page.

  const enteredUrl = normaliseUrl(urlInput.value.trim());

  // The URL constructor is a convenient built-in way to validate a web address.
  try {
    const validUrl = new URL(enteredUrl);
    inputHelp.textContent = "Audit complete! Scroll down to see the results.";
    inputHelp.classList.remove("error");
    scannedUrl.textContent = `Audited: ${validUrl.href}`;
    results.hidden = false;
    results.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch {
    inputHelp.textContent = "Please enter a valid address, for example: example.com";
    inputHelp.classList.add("error");
    urlInput.focus();
  }
});
