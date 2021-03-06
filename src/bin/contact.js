import { EMAIL, FIRST_NAME, PRONOUN_OBJECT } from '@/config'

export default async ({ output, confirm }) => {
    await output(`${FIRST_NAME} can be reached at:`)
    await output(EMAIL, { delay: 0, speak: `${FIRST_NAME} say pan at fast mail dot com` })
    if (await confirm(`Would you like to email ${PRONOUN_OBJECT} now?`)) {
        window.open(`mailto:${EMAIL}`, '_blank')
    }
}
