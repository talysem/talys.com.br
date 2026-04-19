const modules = import.meta.glob('/src/pages/**/index.jsx', { eager: true })

export const routes = Object.entries(modules)
    .filter(([, mod]) => mod.config && mod.default)
    .map(([path, mod]) => ({
        path: (mod.config.path ?? path
            .replace('/src/pages', '')
            .replace('/index.jsx', '')) || '/',
        element: mod.default,
    }))