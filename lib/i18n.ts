import translations from '@/i18n/translations.json'

export type Locale = keyof typeof translations.messages

export const locales = Object.keys(translations.config.locales) as Locale[]
export const defaultLocale = translations.config.defaultLocale as Locale

export const LOCALE_COOKIE = 'zwad-locale'

export type Messages = (typeof translations.messages)[Locale]

export type LocaleProps = {
  locale: Locale
  messages: Messages
}

export function getLocaleConfig(locale: Locale) {
  return translations.config.locales[locale]
}

export function getMessages(locale: Locale): Messages {
  return translations.messages[locale]
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'ar' ? 'en' : 'ar'
}
