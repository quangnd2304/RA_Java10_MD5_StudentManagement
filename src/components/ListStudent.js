import React, { Component } from 'react';
import Student from './Student';

class ListStudent extends Component {
    handleUpdate = (selectedStudent, actionName) => {
        this.props.handleAction(actionName, true, selectedStudent);
    }
    render() {
        // let students = this.props.students;
        let { students } = this.props;
        let elementListStudent = students.map((student, index) => {
            return <Student key={student.studentId} studentInfo={student} stt={index} handleUpdate={this.handleUpdate} />
        })
        return (
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Ngày tháng</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elementListStudent}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListStudent;