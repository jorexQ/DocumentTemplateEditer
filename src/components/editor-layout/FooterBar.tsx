import * as React from 'react';
import {Layout} from 'antd';
const {Footer} = Layout;

import '../../assist/styles/editor-layout/footer-bar.scss';

interface FooterBarProps {
    height:number
};

interface FooterBarState {};

export class FooterBar extends React.Component<FooterBarProps, FooterBarState> {
    public render() {
        return( 
            <Footer className='footer-wrap' style={{ height:this.props.height+'px'}}>
                FooterBar
            </Footer>
        );
    }
}
