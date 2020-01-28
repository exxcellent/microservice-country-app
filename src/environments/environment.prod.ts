export const environment = {
  production: true,
  countryServiceUrl: window["env"]["countryServiceUrl"] || "http://country-svc-service:8080",
  currencyServiceUrl: window["env"]["currencySerivceUrl"] || "http://currency-svc-service:8081",
  languageServiceUrl: window["env"]["languageServiceUrl"] || "http://language-svc-service:8082"
};
