export default {
    eleventyNavigation: data => {
        const url = data.page.url, nav = data.eleventyNavigation
        return {
            key: nav?.key ?? url,
            title: nav?.title ?? data.title,
            parent: nav?.parentKey ?? (url === '/' ? null
                : url.endsWith('/') ? url.replace(/[^/]+\/$/, '')
                : url.replace(/[^/]+$/, '')),
        }
    }
}
