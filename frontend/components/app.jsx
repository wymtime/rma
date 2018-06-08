import React from 'react';

import HeaderContainer from './header/header_container';

import ContentContainer from './content/content_container';

export const App = () => (
    <div>
        <header>
            <HeaderContainer />
        </header>
        <section>
            <ContentContainer />
        </section>
    </div>
)