import { cookies } from 'next/headers'
import {
  defaultLocale,
  getLocaleConfig,
  getMessages,
  isLocale,
  LOCALE_COOKIE,
  type Locale,
} from '@/lib/i18n'

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const value = cookieStore.get(LOCALE_COOKIE)?.value
  if (value && isLocale(value)) return value
  return defaultLocale
}

export async function getLocaleData() {
  const locale = await getLocale()
  return {
    locale,
    messages: getMessages(locale),
    config: getLocaleConfig(locale),
  }
}
