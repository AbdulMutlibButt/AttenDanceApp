import React from "react";
import "./style.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Modal, Button } from "antd";
import { Form, Input } from "antd";
import { DataGrid } from "@material-ui/data-grid";

function Home() {
  const [visible, setVisible] = React.useState(false);
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [role, setRole] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setData([...data, { name, age, role, number }]);
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
    { field: "id", headerName: "ID", width: 120 },
    { field: "name", headerName: "Name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 120,
    },
    {
      field: "number",
      headerName: "Number",
      type: "number",
      width: 140,
    },
    {
      field: "role",
      headerName: "Role",
      width: 120,
    },
  ];

  const rows = data.map((val, id) => ({
    id: id,
    name: val.name,
    age: val.age,
    number: val.number,
    role: val.role,
  }));
  return (
    <div className="home">
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
        style={{ marginLeft: "10px" }}
        onClick={showModal}
        className="home__button"
        type="primary"
        shape="round"
      >
        <span style={{ marginRight: "5px" }}>Add Faculty</span>
        <AddCircleOutlineIcon fontSize="small" />{" "}
      </Button>

      <Modal
        title="Add Teacher"
        visible={visible}
        onOk={handleOk}
        okText="Save"
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          className="home__form"
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
            name="Age"
            rules={[
              {
                required: true,
                message: "Please Enter Your Age",
              },
            ]}
          >
            <Input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
          </Form.Item>

          <Form.Item
            style={{ width: "150%" }}
            name="Phone Number"
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
          <Form.Item
            style={{ width: "150%", marginBottom: -50 }}
            name="Role"
            rules={[
              {
                required: true,
                message: "Please Enter Teacher Role",
              },
            ]}
          >
            <Input
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
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

export default Home;
