import { FIRST_NAME } from '@/config'
import store from '@/store'

const sections = [
    {
        name: `Info about ${FIRST_NAME}`,
        commands: [
            'about',
            'contact',
            'github',
            'resume',
        ],
    },

    {
        name: 'Games',
        commands: [
            'amethyst',
            'retrodle',
            'trampoline',
        ],
        pronounciations: [
            'amethyst',
            'retro-dull',
            'trampoline',
        ],
    },

    {
        name: 'Utilities',
        commands: [
            'cake',
            'clear',
            'echo',
            'eightball',
            'fire',
            'joke',
            'missingno',
            'python',
            'zen',
        ],
    },
]

export default async ({ output }) => {
    await output('Available commands...\n\n')

    for (const [idx, section] of sections.entries()) {
        await Promise.all([
            output(`${section.name}:`, { speak: false }),
            output(`${section.commands.join(', ')}${idx < sections.length - 1 ? '\n\n' : ''}`, { speak: (section.pronounciations || section.commands).join(', '), speechOptions: { rate: 1.5 } }),
        ])
    }

    if (!store.state.sound && store.state.firstHelp) {
        store.commit('setFirstHelp', false)
        await output('\nBy the way, the site is best enjoyed with sound. Click the speaker in the top-right corner to turn it on.')
    }
}
