/* eslint react/prop-types: 0 */

import React from 'react'

import styled from 'styled-components'

const HeaderWrapper = styled.header`
    height: 20%;
    border-bottom: 3px solid #000000;
`

const HeaderItemWrapper = styled.div`
    width: 25%;
    padding-top: 5%;
    text-align: center;
    float: left;
`

import { HeaderItem } from './header_item'

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            toggled: false
        }

        this.toggleContent = this.toggleContent.bind(this)
    }

    toggleContent() {
        this.setState({toggled: !this.state.toggled})
        this.props.toggleContent()
    }

    render() {
        const { data } = this.props.header

        return (
            <HeaderWrapper>
                { data.map((datum, idx) => 
                    <HeaderItemWrapper key={ idx }>
                        <HeaderItem datum={ datum } />
                    </HeaderItemWrapper>) 
                }
                <HeaderItemWrapper>
                    <div onClick={ this.toggleContent }>{ this.state.toggled ? '+': '-' }</div>
                </HeaderItemWrapper>
            </HeaderWrapper>
        )
    }

}

export default Header