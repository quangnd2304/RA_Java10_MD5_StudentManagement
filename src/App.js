import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Control from './components/Control';
import ListStudent from './components/ListStudent';
import Form from './components/Form';

class App extends Component {
  // Khởi tạo dữ liệu danh sách sinh viên
  constructor() {
    super();
    this.state = {
      students: [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2003-05-18", birthPlace: "HN", address: "Hà Nội" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 22, sex: false, birthDate: "2001-09-12", birthPlace: "ĐN", address: "Đà Nẵng" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2004-01-09", birthPlace: "HCM", address: "Thành phố Hồ Chí Minh" }
      ],
      searchData: "",
      sortDir: "",
      sortBy: ""
    }
  }
  handleSearch = (searchData) => {
    //Nhận dữ liệu từ component Control --> set vào state (searchData)
    this.setState({
      searchData: searchData
    });
  }

  handleSort = (sortDir, sortBy) => {
    //Nhận dữ liệu sắp xếp từ Control --> cập nhật vào state
    this.setState({
      sortDir: sortDir,
      sortBy: sortBy
    })
  }
  render() {
    // Tìm kiếm dữ liệu
    let students = [];
    if (this.state.searchData != "") {
      this.state.students.forEach(student => {
        if (student.studentName.toLowerCase().includes(this.state.searchData.toLowerCase())) {
          students.push(student);
        }
      })
    } else {
      students = [...this.state.students];
    }
    //Sắp xếp dữ liệu
    if (this.state.sortDir == "studentName") {
      //Sắp xếp theo tên sinh viên
      if (this.state.sortBy == "ASC") {
        //tên tăng dần
        students.sort((a, b) => (a.studentName > b.studentName) ? 1 : (a.studentName < b.studentName) ? -1 : 0);
      } else {
        //Tên giảm dần
        students.sort((a, b) => (a.studentName > b.studentName) ? -1 : (a.studentName < b.studentName) ? 1 : 0);
      }
    } else {
      //Sắp xếp theo tuổi sinh viên
      if (this.state.sortBy == "ASC") {
        //tuổi tăng dần
        students.sort((a, b) => a.age - b.age);
      } else {
        //tuổi giảm dần
        students.sort((a, b) => b.age - a.age);
      }
    }
    return (
      <div className="App">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* START CONTROL */}
              <Control handleSearchProps={this.handleSearch} handleSortProps={this.handleSort}></Control>
              {/* END CONTROL */}
              {/* START LIST STUDENT */}
              <ListStudent students={students}></ListStudent>
              {/* END LIST STUDENT */}
            </div>
          </div>
          {/* START FORM SINH VIEN */}
          <Form></Form>
          {/* END FORM SINH VIÊN */}
        </div>

      </div>
    );
  }
}

export default App;
