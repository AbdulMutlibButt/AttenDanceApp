import React from "react";
import "./style.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Modal, Button } from "antd";
import { Form, Input } from "antd";
import { DataGrid } from "@material-ui/data-grid";

function CLasses() {
  const [visible, setVisible] = React.useState(false);
  const [room, setRoom] = React.useState("");
  const [time, setTime] = React.useState("");
  const [id, setID] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [faculty, setFaculty] = React.useState("");
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setData([...data, { room, time, id, subject, faculty }]);

      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  console.log(data);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "subject", headerName: "Subject", width: 130 },
    {
      field: "faculty",
      headerName: "Faculty",
      width: 130,
    },
    {
      field: "time",
      headerName: "Time",
      type: "number",
      width: 110,
    },
    {
      field: "room",
      headerName: "Room",
      width: 120,
    },
  ];

  const rows = data.map((val, id) => ({
    id: val.id,
    faculty: val.faculty,
    subject: val.subject,
    time: val.time,
    room: val.room,
  }));

  return (
    <div className="Classes">
      <div style={{ height: 400, width: "70%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>

      <Button
        style={{ marginLeft: "8px" }}
        onClick={showModal}
        className="Classes__button"
        type="primary"
        shape="round"
      >
        <span style={{ marginRight: "5px" }}>Add Class</span>{" "}
        <AddCircleOutlineIcon fontSize="small" />{" "}
      </Button>
      <Modal
        title="Add Teacher"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          className="Classes__form"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            style={{ width: "150%" }}
            name="ID"
            rules={[
              {
                required: true,
                message: "Please Enter Your ID!",
              },
            ]}
          >
            <Input placeholder="ID" onChange={(e) => setID(e.target.value)} />
          </Form.Item>

          <Form.Item
            style={{ width: "150%" }}
            name="Subject"
            rules={[
              {
                required: true,
                message: "Please Enter Your Subject Name",
              },
            ]}
          >
            <Input
              placeholder="Subject Name"
              onChange={(e) => setSubject(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="Faculty"
            style={{ width: "150%" }}
            rules={[
              {
                required: true,
                message: "Please Enter the Faculty Name",
              },
            ]}
          >
            <Input
              placeholder="Faculty"
              onChange={(e) => setFaculty(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            style={{ width: "150%" }}
            name="Time"
            rules={[
              {
                required: true,
                message: "Please Enter the Class Timing",
              },
            ]}
          >
            <Input
              placeholder="Time"
              onChange={(e) => setTime(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            style={{ width: "150%", marginBottom: -50 }}
            name="Room"
            rules={[
              {
                required: true,
                message: "Please Enter the Room No",
              },
            ]}
          >
            <Input
              placeholder="Room No"
              onChange={(e) => setRoom(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          ></Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default CLasses;
