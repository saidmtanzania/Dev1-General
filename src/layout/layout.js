function renderLayout(content) {
    return `<html>
    <body>
        <nav>
            <a href="/">Home</a> |
            <a href="/about-us">About Us</a> |
            <a href="/provider-search">Provider Search</a>
        </nav>

        <hr/>


        ${content}

        <hr/>


        <footer>
            <a href="/provider-search">Bottom Nav</a>
        </footer>

    </body>
    </html>`;
}

module.exports = renderLayout;