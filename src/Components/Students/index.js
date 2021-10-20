import React from "react";
import "./style.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Modal, Button, DatePicker } from "antd";
import { Form, Input, Select } from "antd";
import { DataGrid } from "@material-ui/data-grid";

function Students() {
  const [visible, setVisible] = React.useState(false);
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [date, setDate] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setData([...data, { name, gender, address, number, date }]);
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
    { field: "id", headerName: "ID", width: 95 },
    { field: "name", headerName: "Name", width: 120 },
    {
      field: "number",
      headerName: "Number",
      type: "number",
      width: 130,
    },
    {
      field: "address",
      headerName: "Address",
      width: 130,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 130,
    },
    {
      field: "date",
      headerName: "Date Of Birth",
      width: 300,
    },
  ];

  const rows = data.map((val, id) => ({
    id: id,
    name: val.name,
    number: val.number,
    address: val.address,
    date: val.date,
    gender: val.gender,
  }));

  return (
    <div className="Student">
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
        className="Student__button"
        type="primary"
        shape="round"
      >
        <span style={{ marginRight: "5px" }}>Add Student</span>
        <AddCircleOutlineIcon fontSize="small" />{" "}
      </Button>
      <Modal
        title="Add Student"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          className="Student__form"
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
            name="Name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            style={{ width: "150%" }}
            name="Address"
            rules={[
              {
                required: true,
                message: "Please Enter Your Address",
              },
            ]}
          >
            <Input
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="Phone Number"
            style={{ width: "150%" }}
            rules={[
              {
                required: true,
                message: "Please input your Phone Number!",
              },
            ]}
          >
            <Input
              placeholder="Phone Number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </Form.Item>
          <Form.Item name="Gender" style={{ width: "150%" }}>
            <Select
              onChange={(genders) => setGender(genders)}
              placeholder="Gender"
            >
              <Select.Option value="Male">Male</Select.Option>
              <Select.Option value="Female">Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="Date" style={{ marginBottom: -50 }}>
            <DatePicker
              onChange={(dates) => setDate(dates)}
              style={{ width: "150%" }}
              placeholder="Date Of Birth"
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

export default Students;
