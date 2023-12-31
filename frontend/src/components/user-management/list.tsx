import { Button, Form, Input, Modal, DatePicker } from "antd";
import axios from "axios";
import { useState } from "react";
import { updateUserHandler } from "../../api/users-list";
import { useSelector } from "react-redux";
import moment from "moment";
import { baseUrl } from "../../utils/api-url";

const UserList = ({ data, fetchdata, fetchSetData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleID, setSingleId] = useState("");
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState("");
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = (id: any) => {
    setIsModalOpen(true);
    setSingleId(id);
    fetchSingleData(id);
  };

  const fetchSingleData = async (id: any) => {
    try {
      let singleData = await axios.get(`${baseUrl}/show-single-user/${id}`);
      form.setFieldsValue({
        name: singleData?.data?.name,
        email: singleData?.data?.email,
        phone: singleData?.data?.phone,
        nid: singleData?.data?.nid,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    const values = await form.validateFields();

    const fields = {
      id: singleID,
      name: values?.name,
      email: values?.email,
      phone: values?.phone,
      nid: values?.nid,
      dob: values?.dob,
    };
    console.log("formmm", fields);

    try {
      setLoading(true);
      await updateUserHandler(fields)
        .then((res) => res.json())
        .then((res) => {
          if (res?.info === "updated") {
            setLoading(false);
            setError("");
            setIsModalOpen(false);
            fetchSetData();
            form.setFieldsValue({
              name: "",
              email: "",
              phone: "",
              nid: "",
              dob: "",
            });
            // openNotification(res?.message);
          } else if (res?.statusCode === 400 && res?.status === "error") {
            setLoading(false);
            setError(res?.errors?.[0]?.msg?.en);
          } else if (res?.statusCode === 400) {
            setLoading(false);
            setError(res?.message?.en);
          } else if (res?.statusCode === 500) {
            setLoading(false);
            setError(res?.message);
          }
        });
    } catch (e) {
      console.error(e);
    }
  };
  const deleteUser = async (id: any) => {
    try {
      const mydata = await axios.delete(`${baseUrl}/delete-user/${id}`);
      console.log(mydata);

      fetchSetData();
    } catch (er) {
      console.log(er);
    }
  };

  const tokenData = useSelector((state) => state?.auth?.tokenData);

  const validateEmail = (rule, value, callback) => {
    const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;
    if (!emailRegex.test(value)) {
      callback('Invalid email address');
    } else {
      callback();
    }
  };

  return (
    <div className="list-area">
      <div className="table-area mt-5">
        <table id="customers">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>NID</th>
              <th>Date of birth</th>
              {tokenData?.roles?.join("").toString() === "ROLE_ADMIN" ||
              tokenData?.roles?.join("").toString() === "ROLE_MODERATOR" ? (
                <th>Action</th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {data?.map((item: any, index: any) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.phone}</td>
                  <td>{item?.nid}</td>
                  <td>{moment(item?.dob).subtract(10, "days").calendar()} </td>
                  {tokenData?.roles?.join("").toString() === "ROLE_ADMIN" ||
                  tokenData?.roles?.join("").toString() === "ROLE_MODERATOR" ? (
                    <td>
                      <div className="d-flex">
                        <button
                          className="bg-[#E8F2FC] px-4 py-1 font-bold text-base text-[#28A0F7] rounded mx-2"
                          onClick={() => showModal(item?._id)}
                        >
                          Edit
                        </button>

                        <button
                          className="bg-[#E8F2FC] px-4 py-1 font-bold text-base text-[red] rounded"
                          onClick={() => deleteUser(item?._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  ) : null}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Modal
        title="Update User"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
        footer={false}
      >
        <>
          <div className="form-area mt-3">
            <div className="container">
              <div className="grid grid-cols-1">
                <div className="form-wrapper-area">
                  <Form
                    className="form-input-item"
                    form={form}
                    layout="vertical"
                  >
                    <Form.Item
                      name="name"
                      label="Name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your name!",
                        },
                      ]}
                    >
                      <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[
                        { required: true, message: 'Email is required' },
                        { validator: validateEmail },
                      ]}
                    >
                      <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                      name="phone"
                      label="Phone number"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                      ]}
                    >
                      <Input placeholder="Phone number" />
                    </Form.Item>
                    <Form.Item
                      name="nid"
                      label="NID"
                      rules={[
                        {
                          required: true,
                          message: "Please input your nid!",
                        },
                      ]}
                    >
                      <Input placeholder="NID" />
                    </Form.Item>
                    <Form.Item
                      name="dob"
                      label="Date of birth"
                      rules={[
                        {
                          required: true,
                          message: "Please input your date of birth!",
                        },
                      ]}
                    >
                      <DatePicker className="other-type-input" />
                    </Form.Item>
                    <p className="text-[red]">{getError}</p>
                    <Form.Item>
                      <Button type="primary" ghost onClick={handleSubmit}>
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </div>
  );
};

export default UserList;
