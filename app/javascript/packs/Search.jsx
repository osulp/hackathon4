import React from "react";

import Asset from "./Asset";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchResults: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }


  fetchSearch() {
    return (
      [{ "parent": { "id": 4, "name": "Middle Child", "skill_id": 3, "created_at": "2019-05-03T17:21:01.913Z", "updated_at": "2019-05-03T17:21:01.913Z", "category_id": null }, "children": [{ "id": 5, "name": "Last Child", "skill_id": 4, "created_at": "2019-05-03T17:21:17.920Z", "updated_at": "2019-05-03T17:21:17.920Z", "category_id": null }] }, { "parent": { "id": 5, "name": "Last Child", "skill_id": 4, "created_at": "2019-05-03T17:21:17.920Z", "updated_at": "2019-05-03T17:21:17.920Z", "category_id": null }, "children": [] }]
    )
  };


  handleChange(e) {
    console.log(e);
    this.setState({ search: e.target.value });
  }

  search(e) {
    e.preventDefault();
    let search = this.fetchSearch();
    this.setState({ searchResults: search });
    console.log(search);
    console.log(this.state.searchResults);
  }
  render() {
    return (

      <div className="search">
        <div className="search-bar">
          <input onChange={this.handleChange} placeholder="Graphic Design/Web Development/Event Planning"></input>
          <button name="search-submit" onClick={this.search}>Search</button>
        </div>
        <div className="search-results">
          {
            this.state.searchResults.map(result => {
              return <Asset key={result.parent.id} parent={result.parent} children={result.children} loadPeople={this.props.loadPeople} />
            })
          }
        </div>
      </div>
    )
  }
}

export default Search;