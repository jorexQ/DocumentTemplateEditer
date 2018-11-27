import * as React from 'react';
import { Layout } from 'antd';
import { HeaderBar } from '../../components/editor-layout/HeaderBar';
import { FooterBar } from '../../components/editor-layout/FooterBar';
import { LeftBar } from '../../components/editor-layout/LeftBar';
import { RightBar } from '../../components/editor-layout/RightBar';
import { MainWorkArea } from '../../components/editor-layout/MainWorkArea';

interface EditorViewProps { };

interface EditorViewState {
    headerHeight: number,
    footerHeight: number
};

export class EditorView extends React.Component<EditorViewProps, EditorViewState> {

    constructor(props: EditorViewProps) {
        super(props);

        this.state = {
            headerHeight: 34,
            footerHeight: 70
        }
    }

    public render () {
        return (
            <Layout>
                <HeaderBar height={ this.state.headerHeight } />
                <Layout>
                    <LeftBar />
                    <Layout>
                        <Layout>
                            <MainWorkArea
                                headerHeight={ this.state.headerHeight }
                                footerHeight={ this.state.footerHeight } />
                            <RightBar />
                        </Layout>
                        <FooterBar height={ this.state.footerHeight } />
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
