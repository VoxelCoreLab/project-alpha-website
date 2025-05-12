export function useNavigationLinks() {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Weltkarte', path: '/world-map' },
        { name: 'Spielverlauf', path: '/game-process' },
        { name: 'Fertigkeiten', path: '/skills' },
        { name: 'FAQ', path: '/faq' }
    ]
    return {
        links
    }
}