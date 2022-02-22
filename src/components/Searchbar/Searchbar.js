import PropTypes from "prop-types";
import { Component } from "react/cjs/react.production.min";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
    state = {
        searchQuery: '',
    };

    handleQueryChange = e => {
        this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = e => {
        const { searchQuery } = this.state;

        e.preventDefault();

        if (searchQuery.trim() === '') {
            alert("Enter something!");
            return
        }
        
        this.props.onSubmit(searchQuery);
        this.resetSearchQuery();
    }

    resetSearchQuery = () => {
        this.setState({ searchQuery: '' });
    };

    render() {
        const { searchQuery } = this.state;

        return (
            <header className={s.searchbar}>
                <form
                    className={s.form}
                    onSubmit={this.handleSubmit}
                >
                    <button type="submit" className={s.button}>
                    <span className={s.button_label}>Search</span>
                    </button>

                    <input
                        className={s.input}
                        type="text"
                        autoComplete="off"
                        value={searchQuery}
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleQueryChange}
                    />
                </form>
            </header>
        )
    };  
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Searchbar;