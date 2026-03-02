/**
 * * Configuration of the i18n system data files and text translations
 * Example translations below are for English and French, with textTranslations used in src/layouts/BlogLayoutCenter.astro and src/components/Hero/[hero].astro
 */

/**
 * * Data file configuration for the i18n system
 * Every {Data} key must exist in the below object
 */
import testimonialDataDa from "./da/testimonialData.json.ts";
import siteDataDa from "./da/siteData.json.ts";
import navDataDa from "./da/navData.json.ts";
import faqDataDa from "./da/faqData.json.ts";
import testimonialDataEt from "./et/testimonialData.json.ts";
import siteDataEt from "./et/siteData.json.ts";
import navDataEt from "./et/navData.json.ts";
import faqDataEt from "./et/faqData.json.ts";
import faqDataEn from "./en/faqData.json.ts";
import navDataEn from "./en/navData.json.ts";
import siteDataEn from "./en/siteData.json.ts";
import testimonialDataEn from "./en/testimonialData.json.ts";

export const dataTranslations = {
  da: {
    faqData: faqDataDa,
    navData: navDataDa,
    siteData: siteDataDa,
    testimonialData: testimonialDataDa,
  },
  et: {
    faqData: faqDataEt,
    navData: navDataEt,
    siteData: siteDataEt,
    testimonialData: testimonialDataEt,
  },
  en: {
    siteData: siteDataEn,
    navData: navDataEn,
    faqData: faqDataEn,
    testimonialData: testimonialDataEn,
  },
  
} as const;

/**
 * * Text translations are used with the `useTranslation` function from src/js/i18nUtils.ts to translate various strings on your site.
 *
 * ## Examples
 *
 * ```ts
 * import { getLocaleFromUrl } from "@js/localeUtils";
 * import { useTranslations } from "@js/translationUtils";
 * const currLocale = getLocaleFromUrl(Astro.url);
 * const t = useTranslations(currLocale);
 * t("back_to_all_posts"); // this would be "Retour à tous les articles" if the current locale is "fr"
 * ```
 * or
 * ```ts
 * import { useTranslations } from "@js/translationUtils";
 * const t = useTranslations("fr");
 * t("back_to_all_posts"); // this would be "Retour à tous les articles"
 * ```
 */
export const textTranslations = {
  da: {
    hero_description: `Regnskabsfirmaer sparer over 12 timer per teammedlem ugentligt og øger profitmarginen med 23,5% gennem automatiserede workflows og integreret CRM.`,
    back_to_all_posts: "Tilbage til alle indlæg",
    updated: "Opdateret",
  },
  et: {
    hero_description: `Raamatupidamisbürood säästavad üle 12 tunni meeskonnaliikme kohta nädalas ja suurendavad kasumimarginaali 23,5% automatiseeritud töövoogude ja integreeritud CRM-i abil.`,
    back_to_all_posts: "Tagasi kõigi postituste juurde",
    updated: "Uuendatud",
  },
  en: {
    hero_description: `Accounting firms save over 12 hours per team member weekly and increase profit margins by 23.5% through automated workflows and integrated CRM.`,
    back_to_all_posts: "Back to all posts",
    updated: "Updated",
  },
  
} as const;

/**
 * * Route translations are used to translate route names for the language switcher component
 * This can be useful for SEO reasons. The key does not matter, it just needs to match between languages
 *
 * These routes must be everything after the base domain. So if this is "atlas.com/blog", the route would be "blog"
 * Or if this is "atlas.com/legal/privacy", the route would be "legal/privacy"
 *
 * This also supports wildcards. For example, "categories/*" would match "categories/1" or "categories/2" etc for that language.
 *
 * Note: This works in conjunction with the localizedCollections object below
 */
export const routeTranslations = {
  da: {
    overviewKey: "overview",
    categoryKey: "categories",
    categoryKey2: "categories/*",
    categoryKey3: "categories",
    blogKey: "blog",
  },
  et: {
    overviewKey: "overview",
    categoryKey: "categories",
    categoryKey2: "categories/*",
    categoryKey3: "categories",
    blogKey: "blog",
  },
  en: {
    overviewKey: "overview",
    categoryKey: "categories",
    categoryKey2: "categories/*",
    categoryKey3: "categories",
    blogKey: "blog",
  },
  
} as const;

/**
 * * Content collection translations used by the language switcher and hreflang generator
 *
 * Per-collection, per-locale route base mapping (collections to localize are the keys)
 *
 * If you have a key of "blog" then the blog content collection will be localized. This will look
 * for a "mappingKey" in the entry metadata, and use that to map the entry to the correct locale
 *
 * You can use the locale value to map the collection to a different route if desired
 */
export const localizedCollections = {
  blog: {
		en: "blog",
		et: "blog",
		da: "blog"
	},
  // Add more collections/locales as needed
} as const;
