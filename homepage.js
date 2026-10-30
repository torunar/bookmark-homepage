(async() => {
    const root = document.getElementById('root');

    const bookmarks = await browser.bookmarks.getChildren('menu________');
    bookmarks.map(bookmark => {
        if (bookmark.type !== 'bookmark') {
            return;
        }

        const link = document.createElement('a');
        link.classList.add('link');
        link.href = bookmark.url;

        const favicon = document.createElement('img');
        favicon.classList.add('favicon');
        favicon.alt = '';
        favicon.width = 32;
        favicon.height = 32;
        favicon.src = `https://external-content.duckduckgo.com/ip3/${(new URL(bookmark.url)).hostname}.ico`;
        link.appendChild(favicon);

        const title = document.createElement('header');
        title.classList.add('title');
        title.appendChild(document.createTextNode(bookmark.title));
        link.appendChild(title);

        root.appendChild(link);
    })
})();
