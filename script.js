(() => {
  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Copy email
  const btn = document.getElementById("copyEmailBtn");
  const status = document.getElementById("copyStatus");
  const email = "ops@meridianridgepartners.com";

  if (!btn || !status) return;

  const setStatus = (msg) => {
    status.textContent = msg;
    window.clearTimeout(setStatus._t);
    setStatus._t = window.setTimeout(() => (status.textContent = ""), 3500);
  };

  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Copied.");
    } catch {
      // Fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setStatus("Copied.");
    }
  });
})();
