const homepageUrl = browser.runtime.getURL('homepage.html');

browser.tabs.onCreated.addListener(tab => {
    if (tab.url !== 'about:newtab') {
        return;
    }

    browser.tabs.update(tab.id, { url: homepageUrl });
});
