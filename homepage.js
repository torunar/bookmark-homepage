(async() => {
    const root = document.getElementById('root');

    const bookmarks = await browser.bookmarks.getChildren('menu________');
    bookmarks.map(bookmark => {
        if (bookmark.type !== 'bookmark') {
            return;
        }

        const link = document.createElement('a');
        link.classList.add('link');
        link.target = '_blank';
        link.href = bookmark.url;
        link.appendChild(document.createTextNode(bookmark.title));

        root.appendChild(link);
    })
})();
