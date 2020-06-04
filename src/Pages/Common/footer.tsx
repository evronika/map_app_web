import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-copyright text-center py-3">
                    &copy; {new Date().getFullYear()} Copyright: <a href="/"> example.com </a>
            </div>
        );
    }
}

export default Footer;