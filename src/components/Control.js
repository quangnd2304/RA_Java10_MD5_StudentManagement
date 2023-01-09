import React, { Component } from 'react';
class Control extends Component {
    constructor() {
        super();
        this.state = {
            searchData: ""
        }
    }
    handleChangeSearch = (event) => {
        let value = event.target.value;
        //Lưu trữ vào state     
        this.setState({
            searchData: value
        })
    }
    handleSearch = (e) => {
        //Chuyển dự liệu this.state.searchData về App compovent --> event
        this.props.handleSearchProps(this.state.searchData);
        e.preventDefault();
    }

    handleChangeSort = (event) => {
        let value = event.target.value;
        let arr = value.split("-");
        this.props.handleSortProps(arr[0], arr[1]);
    }
    render() {

        return (
            // return element
            <div className="card-header">
                <div className="row">
                    <div className="col-3">
                        <button type="button" className="btn btn-primary btn-icon-text">
                            Thêm mới sinh viên
                        </button>
                    </div>
                    <div className="col-6">
                        <form className="search-form" action="#">
                            <i className="icon-search" />
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search Here"
                                name='searchData'
                                title="Search here" onChange={this.handleChangeSearch}
                            />
                            <button className="btn btn-primary btn-icon-text" onClick={this.handleSearch}>
                                Tìm kiếm
                            </button>
                        </form>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <select className="form-control" onChange={this.handleChangeSort}>
                            <option value="">Chọn sắp xếp</option>
                            <option value="studentName-ASC">Tên SV tăng dần</option>
                            <option value="studentName-DESC">Tên SV giảm dần</option>
                            <option value="age-ASC">Tuổi tăng dần</option>
                            <option value="age-DESC">Tuổi giảm dần</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}
export default Control;