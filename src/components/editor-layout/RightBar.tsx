import * as React from 'react';
import {Layout} from 'antd';
const {Sider} = Layout;

interface RightBarProps {};

interface RightBarState {};

export class RightBar extends React.Component<RightBarProps, RightBarState> {
    static __ANT_LAYOUT_SIDER: any = true;
    public render(): JSX.Element {
        return (<Sider>RightBar</Sider>);
    }
}

