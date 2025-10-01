export function useNavigationLinks() {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'World Map', path: '/world-map' },
        { name: 'Characters', path: '/characters' },
        { name: 'Skills', path: '/skills' },
        { name: 'FAQ', path: '/faq' }
    ]
    return {
        links
    }
}