const url = new URL(window.location.href);
const code = url.searchParams.get("code")
if (code) {
  document.querySelector('h1').innerText = "Tu token es: "
  document.querySelector('h2').innerText = code
}
