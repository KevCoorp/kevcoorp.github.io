const defaultLocale = "fr";
const supportedLocales = ["fr", "en"];
let locale;
let translations = {};

document.addEventListener("DOMContentLoaded", () => {
    const initialLocale = supportedOrDefault(browserLocales(true));
    setLocale(initialLocale);
    bindLocaleSwitcher(initialLocale);
});

function bindLocaleSwitcher(initialValue) {
    const switcher = document.querySelector("[data-i18n-switcher]");

    switcher.value = initialValue;

    switcher.onchange = (e) => {
        setLocale(e.target.value);
    }
}

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
    document
        .querySelectorAll("[data-i18n-key]")
        .forEach(translateElement);
}

function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const translation = translations[key];
  element.innerHTML = translation;
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