const defaultLocale = "fr";
const supportedLocales = ["fr", "en"];
let locale;
let translations = {};

document.addEventListener("DOMContentLoaded", () => {
    const initialLocale = supportedOrDefault(browserLocales(true));
    setLocale(initialLocale);
});

async function setLocale(newLocale) {
    if (newLocale === locale) return;

    const newTranslations = await fetchTranslationsFor(newLocale);

    locale = newLocale;
    translations = newTranslations;

    translatePage();
}

async function fetchTranslationsFor(newLocale) {
    const response = await fetch(`/i18n/${newLocale}.json`);
    const translations = await response.json();
    return translations;
}

function translatePage() {
    document.querySelectorAll("[data-i18n-key]").forEach(translateElement);
}

function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const translation = translations[key];
  element.innerHTML = translation;
  document.getElementsByTagName('html')[0].lang = locale;
}

function browserLocales(languageCodeOnly = false) {
    return navigator.languages.map((locale) =>
      languageCodeOnly ? locale.split("-")[0] : locale,
    );
}

function isSupported(locale) {
    return supportedLocales.indexOf(locale) > -1;
}

function supportedOrDefault(locales) {
    return locales.find(isSupported) || defaultLocale;
}


function changeLanguage(lang) {
	document.get()
	location.reload();
}
		// Define the language reload anchors
let language = {
    };
}
