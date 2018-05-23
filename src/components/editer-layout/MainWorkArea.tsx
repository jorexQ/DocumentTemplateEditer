import * as React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

import '../../assist/styles/editer-layout/main-work-area.scss';

interface MainWorkAreaProps {
    headerHeight?: number,
    footerHeight?: number
};

interface MainWorkAreaState {
    canvasHeight: number
};

export class MainWorkArea extends React.Component<MainWorkAreaProps, MainWorkAreaState> {

    constructor(props: MainWorkAreaProps) {
        super(props);
        this.state = {
            canvasHeight: 0
        };
    }

    public render () {
        return <Content className='main-work-area'>
            <div
                className='canvas-wrap'
                style={ {
                    height: this.state.canvasHeight + 'px'
                } }>
                Main Work Area
            </div>
        </Content>;
    }

    public setCanvasHeight () {
        let windowHeight = window.innerHeight;
        let headerHeight = this.props.headerHeight
            ? this.props.headerHeight
            : 0;
        let footerHeight = this.props.footerHeight
            ? this.props.footerHeight
            : 0;
        this.setState({
            canvasHeight: windowHeight - headerHeight - footerHeight
        });
    }

    public componentDidMount () {
        this.setCanvasHeight()
        window.addEventListener('resize', this.setCanvasHeight.bind(this));
    }

    public componentWillUnmount () {
        window.removeEventListener('resize', this.setCanvasHeight.bind(this));
    }
}
