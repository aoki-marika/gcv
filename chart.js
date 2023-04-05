function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

// scroll drum charts to the bottom by default
if (/^.*\/d[0-9]\.html$/.test(window.location)) {
    document.addEventListener("DOMContentLoaded", scrollToBottom, false)
}