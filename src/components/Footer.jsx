import React from "react";

const year = new Date().getFullYear();

function Footer() {
    return (
        <footer>
            <p>
                Copyright © {year} Compil3
            </p>
        </footer>
    );
}

export default Footer;