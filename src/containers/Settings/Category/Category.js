import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CategoryMenu from '../../../components/Settings/Category/CategoryMenu';
import CategoryContent from '../../../components/Settings/Category/CategoryContent';
import actions from '../../../store/actions';

/**
 * Category Settings Container
 */
class CategorySettings extends Component {
    componentDidMount() {
        this.props.onCategoryInit();
    }
    
    renderCategoryMenu() {
        if (this.props.categoryList) {
            return (
                <CategoryMenu
                    categoryList={this.props.categoryList}
                    handleCreateCategory={this.props.handleCreateCategory}
                    handleGetCategory={this.props.handleGetCategory}
                />
            );
        }
        return null;
    }
    
    renderCategoryContent() {
        if (this.props.categoryContent) {
            return (
                <CategoryContent
                    categoryContent={this.props.categoryContent}
                    handlePatchCategory={this.props.handlePatchCategory}
                />
            );
        }
        return null;
    }
    
    render() {
        return (
            <Grid padded>
                <Grid.Row>
                    <Grid.Column width={4}>
                        {this.renderCategoryMenu()}
                    </Grid.Column>
                    <Grid.Column width={12}>
                        {this.renderCategoryContent()}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    categoryList: state.categorySettings.categoryList,
    categoryContent: state.categorySettings.categoryContent,
});

const mapDispatchToProps = dispatch => ({
    onCategoryInit: bindActionCreators(actions.categorySettings.findCategorySettingsList, dispatch),
    handleCreateCategory: bindActionCreators(actions.categorySettings.createCategory, dispatch),
    handlePatchCategory: bindActionCreators(actions.categorySettings.patchCategory, dispatch),
    handleGetCategory: bindActionCreators(actions.categorySettings.getCategory, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategorySettings);
