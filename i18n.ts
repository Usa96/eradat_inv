import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enTranslations from './locales/en.json'
import arTranslations from './locales/ar.json'
i18n
    
.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: process.env.NODE_ENV === 'development',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
            translation: enTranslations,
            },
            ar: {
            translation: arTranslations,
            },
        },
        react: {
            useSuspense: false,
        },
    })

export default i18n