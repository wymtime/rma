import React from 'react';

import styled from 'styled-components';

const HeaderItems = styled.div`
    padding-top: 4%;
`;

const HeaderItemWrapper = styled.div`
    width: 25%;
    text-align: center;
    float: left;
`;

import { HeaderItem } from './header_item';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggled: false
        };

        this.togglePanels = this.togglePanels.bind(this);
    }

    togglePanels() {
        this.setState({toggled: !this.state.toggled});
        this.props.togglePanels();
    }

    render() {
        const { data } = this.props.header;

        return (
            <HeaderItems>
                { data.map((datum, idx) => 
                    <HeaderItemWrapper key={ idx }>
                        <HeaderItem datum={ datum } />
                    </HeaderItemWrapper>) 
                }
                <HeaderItemWrapper>
                    <div onClick={ this.togglePanels }>{ this.state.toggled ? '+': '-' }</div>
                </HeaderItemWrapper>
            </HeaderItems>
        );
    }

}

export default Header;