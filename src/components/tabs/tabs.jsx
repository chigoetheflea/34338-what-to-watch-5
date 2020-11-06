import React, {PureComponent} from "react";
import TabOverview from "../tab-overview/tab-overview.jsx";
import TabDetails from "../tab-details/tab-details.jsx";
import TabReviews from "../tab-reviews/tab-reviews.jsx";

import filmPropTypes from "../../prop-types/film-prop-types.js";
import reviewsPropTypes from "../../prop-types/reviews-prop-types.js";

const TAB_NAMES = [
  `Overview`,
  `Details`,
  `Reviews`
];

const ACTIVE_TAB_CLASS = `movie-nav__item--active`;

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };

    this.tabClickHandler = this.tabClickHandler.bind(this);
  }

  _showActiveTabContent() {
    switch (this.state.activeTab) {
      case 0:
        return (
          <TabOverview film = {this.props.film} />
        );

      case 1:
        return (
          <TabDetails film = {this.props.film} />
        );

      case 2:
        return (
          <TabReviews reviews = {this.props.reviews} />
        );

      default:
        return null;
    }
  }

  tabClickHandler(evt) {
    evt.preventDefault();

    this.setState({
      activeTab: +evt.target.dataset.tab
    });
  }

  render() {
    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list" onClick={this.tabClickHandler}>
            {TAB_NAMES.map((tab, index) => {
              return (
                <li key={index} className={`movie-nav__item ${index === this.state.activeTab ? ACTIVE_TAB_CLASS : ``}`}>
                  <a href="#" className="movie-nav__link" data-tab={index}>{tab}</a>
                </li>
              );
            })}
          </ul>
        </nav>

        {this._showActiveTabContent()}

      </div>
    );
  }
}

Tabs.propTypes = {
  film: filmPropTypes,
  reviews: reviewsPropTypes
};

export default Tabs;
