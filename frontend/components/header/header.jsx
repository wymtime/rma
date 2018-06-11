import React from 'react';

import styled from 'styled-components';

const HeaderWrapper = styled.header`
    height: 20%;
    border-bottom: 3px solid #000000;
`;

const HeaderItemWrapper = styled.div`
    width: 25%;
    padding-top: 4%;
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
            <HeaderWrapper>
                { data.map((datum, idx) => 
                    <HeaderItemWrapper key={ idx }>
                        <HeaderItem datum={ datum } />
                    </HeaderItemWrapper>) 
                }
                <HeaderItemWrapper>
                    <div onClick={ this.togglePanels }>{ this.state.toggled ? '+': '-' }</div>
                </HeaderItemWrapper>
            </HeaderWrapper>
        );
    }

}

export default Header;