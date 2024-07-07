import { useSelectedLanguage } from 'next-export-i18n'

const useDirection = () => {
  const { lang } = useSelectedLanguage()
  if (!lang) {
    return 'ltr'
  }

  return lang === 'ar' ? 'rtl' : 'ltr'
}
export default useDirection
