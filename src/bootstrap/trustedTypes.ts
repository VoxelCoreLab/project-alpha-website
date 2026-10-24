// The CSP enforces `require-trusted-types-for 'script'`. Firebase Auth injects
// Google's gapi script via `script.src = url`, which is blocked unless a
// Trusted Types policy approves the URL. Only allow-listed script URLs pass.
const ALLOWED_SCRIPT_ORIGINS = ['https://apis.google.com', 'https://umami.pibern.ch']

export function setupTrustedTypes() {
    const tt = (window as any).trustedTypes
    if (!tt?.createPolicy) return

    try {
        tt.createPolicy('default', {
            createScriptURL: (url: string) => {
                const parsed = new URL(url, window.location.origin)
                if (
                    parsed.origin === window.location.origin ||
                    ALLOWED_SCRIPT_ORIGINS.includes(parsed.origin)
                ) {
                    return url
                }
                throw new TypeError(`Blocked script URL: ${url}`)
            }
        })
    } catch {
        // policy already exists
    }
}
