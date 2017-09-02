import * as React from 'react';
import {Layout} from 'antd';
import {HeaderBar} from '../components/editer-layout/HeaderBar';
import {FooterBar} from '../components/editer-layout/FooterBar';
import {LeftBar} from '../components/editer-layout/LeftBar';
import {RightBar} from '../components/editer-layout/RightBar';
import {MainWorkArea} from '../components/editer-layout/MainWorkArea';

interface EditerViewProps {};

interface EditerViewState {
    headerHeight : number,
    footerHeight : number
};

export class EditerView extends React.Component < EditerViewProps,
EditerViewState > {

    constructor() {
        super();
        this.state = {
            headerHeight: 34,
            footerHeight: 70
        }
    }

    public render() {
        return (
            <Layout>
                <HeaderBar height={this.state.headerHeight}/>
                <Layout>
                    <LeftBar/>
                    <Layout>
                        <Layout>
                            <MainWorkArea
                                headerHeight={this.state.headerHeight}
                                footerHeight={this.state.footerHeight}/>
                            <RightBar/>
                        </Layout>
                        <FooterBar height={this.state.footerHeight}/>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
