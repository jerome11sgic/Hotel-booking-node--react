import React from "react";
import { Link,withRouter } from "react-router-dom";
import { connect } from 'react-redux';

class Header extends React.Component {
    constructor(){
        super();

        this.handleLogout =this.handleLogout.bind(this);
    }
    handleLogout(){
        this.props.logout();
        this.props.history.push('/rentals');
    }
    renderAuthButton() {
        const { isAuth } = this.props.auth;
        if (isAuth) {
            return <li className="nav-item"><a className="nav-link clickable" onClick={this.handleLogout}> Logout</a></li>
        }
        return (
            <React.Fragment>
                <li
                    className="nav-item active"><Link className="nav-link" to='/login'>Log in <span className="sr-only">(current)</span></Link>
                </li>
                <li
                    className="nav-item"><Link class="nav-link" to='/register'>Register</Link>
                </li>
            </React.Fragment>

        )
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" to='/rentals'>
                    Book With Me !!!
              </Link>

                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2 bwm-search"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0 btn-bwm-search" type="submit">
                        Search
                </button>
                </form>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    {this.renderAuthButton()}
                    </ul>
                </div>
            </nav>
        );
    }

}
function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default withRouter(connect(mapStateToProps)(Header));