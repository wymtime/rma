import React from 'react';

import { HeaderItem } from './header_item';

class Header extends React.Componenet {
    constructor(props) {
        super(props)
        this.togglePanels = this.togglePanels.bind(this);
    }

    togglePanels(e) {
        e.preventDefault();
        this.props.togglePanels();
    }

    render() {
        const { data } = this.props;
        return (
            <div id='header-items'>
                { data.map((datum, idx) => <HeaderItem key={ idx } datum={ datum } />) }
                <HeaderItem onClick={ this.togglePanels } datum={ "-" }/>
            </div>
        );
    }

}

export default Header;