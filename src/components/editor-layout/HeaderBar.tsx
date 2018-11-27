import * as React from 'react';
import {Layout} from 'antd';
const {Header} = Layout;

import '../../assist/styles/editor-layout/header-bar.scss';

interface HeaderBarProps {
    height : number
};

interface HeaderBarState {};

export class HeaderBar extends React.Component < HeaderBarProps,
HeaderBarState > {
    render() {
        return (
            <Header
                className='header-wrap'
                style={{
                height: this.props.height + 'px'
            }}>
                <div className='logo-wrap'></div>
                <div className='content-wrap'></div>
                <div className='extend-wrap nev-title-wrap'>
                    <a onClick={this.printPdfTest}>Print 点我</a>
                </div>
            </Header>
        );
    }
    printPdfTest() {}
}
