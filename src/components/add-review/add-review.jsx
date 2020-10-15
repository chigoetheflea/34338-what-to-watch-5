import React, {PureComponent} from "react";
import {Link} from "react-router-dom";

import filmPropTypes from "../../prop-types/film-prop-types.js";

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: null,
      comment: ``
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.fieldChangeHandler = this.fieldChangeHandler.bind(this);
    this.ratingClickHandler = this.ratingClickHandler.bind(this);
  }

  submitHandler(evt) {
    evt.preventDefault();
  }

  fieldChangeHandler(evt) {
    this.setState({
      comment: evt.target.value
    });
  }

  ratingClickHandler(evt) {
    const rating = Number.parseInt(evt.target.value, 10);

    this.setState({
      rating
    });
  }

  render() {
    const {film} = this.props;
    const {id, title, poster} = film;

    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__header">
            <div className="movie-card__bg">
              <img src={poster} alt={title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              <div className="logo">
                <Link
                  to = "/"
                  className = "logo__link"
                >
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <Link
                      to = {`/films/${id}`}
                      className = "breadcrumbs__link"
                    >
                      {title}
                    </Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </div>
            </header>

            <div className="movie-card__poster movie-card__poster--small">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>
          </div>

          <div className="add-review">
            <form action="#" className="add-review__form" onSubmit={this.submitHandler}>
              <div className="rating">
                <div className="rating__stars">
                  <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onClick={this.ratingClickHandler}/>
                  <label className="rating__label" htmlFor="star-1">Rating 1</label>

                  <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onClick={this.ratingClickHandler}/>
                  <label className="rating__label" htmlFor="star-2">Rating 2</label>

                  <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onClick={this.ratingClickHandler}/>
                  <label className="rating__label" htmlFor="star-3">Rating 3</label>

                  <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onClick={this.ratingClickHandler}/>
                  <label className="rating__label" htmlFor="star-4">Rating 4</label>

                  <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onClick={this.ratingClickHandler}/>
                  <label className="rating__label" htmlFor="star-5">Rating 5</label>
                </div>
              </div>

              <div className="add-review__text">
                <textarea
                  className="add-review__textarea"
                  name="review-text"
                  id="review-text"
                  placeholder="Review text"
                  onChange={this.fieldChangeHandler}>
                </textarea>
                <div className="add-review__submit">
                  <button className="add-review__btn" type="submit">Post</button>
                </div>
              </div>
            </form>
          </div>

        </section>
      </>
    );
  }
}

AddReview.propTypes = {
  film: filmPropTypes
};

export default AddReview;
