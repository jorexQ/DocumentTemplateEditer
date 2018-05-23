import * as React from 'react';
import { Layout } from 'antd';
const {Sider} = Layout;

interface LeftBarProps {};

interface LeftBarState {};

export class LeftBar extends React.Component<LeftBarProps, LeftBarState> {
    static __ANT_LAYOUT_SIDER: any = true;
    public render(): JSX.Element {
        return (<Sider>LeftBar</Sider>);
    }
}

