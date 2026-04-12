export function useNavigationLinks() {
    const links = [
        { name: 'Home', path: '/', external: false },
        /*
        { name: 'World Map', path: '/world-map' },
        { name: 'Characters', path: '/characters' },
        { name: 'Skills', path: '/skills' },
        */
        { name: 'FAQ', path: '/faq', external: false },
        { name: 'Feedback', path: 'https://shadowinfection.userjot.com', external: true }
    ]
    return {
        links
    }
}