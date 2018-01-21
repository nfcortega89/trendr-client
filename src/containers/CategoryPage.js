import React, { Component } from "react";
import Category from "../components/Category";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/categoryActions";
import { Link } from "react-router-dom";

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.renderCategories = this.renderCategories.bind(this);
  }
  componentDidMount() {
    this.props.actions.categoryDataRequest();
  }
  renderCategories() {
    return this.props.categories.map(category => {
      return (
        <Link
          className="category-wrapper"
          key={category._id}
          to={`/gallery/${category.title}`}>
          <Category category={category} featuredurl={""} />
        </Link>
      );
    });
  }
  render() {
    if (!this.props.categories.length) {
      return (
        <div className="loader-wrapper">
          <div className="loader" />;
        </div>
      );
    }
    return (
      <div className="category-container">
        <div className="category-list">{this.renderCategories()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.category.categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

CategoryPage.propTypes = {
  categories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
