import { Button, DatePicker, Form, Input, Modal } from "antd";
import { useState } from "react";
import { AppstoreOutlined } from "@ant-design/icons";
import { addUserHandler } from "../../api/users-list";
import { useSelector } from "react-redux";

const AddUser = ({ fetch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState("");
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  // onsubmit handler
  const handleSubmit = async () => {
    const values = await form.validateFields();

    const fields = {
      name: values?.name,
      email: values?.email,
      phone: values?.phone,
      nid: values?.nid,
      dob: values?.dob,
    };

    try {
      setLoading(true);
      await addUserHandler(fields)
        .then((res) => res.json())
        .then((res) => {
          if (res?.status === "200") {
            setLoading(false);
            setError("");
            setIsModalOpen(false);
            fetch();
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
    <>
      <div className="flex justify-between">
        <div className="flex items-center">
          <AppstoreOutlined style={{ fontSize: "20px", color: "#28A0F7" }} />
          <div className="ml-2">
            <h3 className="text-lg font-bold">User management</h3>
          </div>
        </div>
        <div>
          {tokenData?.roles?.join("").toString() === "ROLE_ADMIN" ||
          tokenData?.roles?.join("").toString() === "ROLE_MODERATOR" ? (
            <button
              onClick={showModal}
              className="bg-[#E8F2FC] px-4 py-2 font-bold text-base text-[#28A0F7] rounded"
            >
              Add User
            </button>
          ) : null}
        </div>
      </div>
      <hr className="mt-2 h-[0.5px]" />

      <Modal
        title="Add New User"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
        footer={false}
      >
        <div className="form-area mt-3">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="form-wrapper-area">
                <Form className="form-input-item" form={form} layout="vertical">
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

                  <p className="text-[red mb-2]">{getError}</p>

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
      </Modal>
    </>
  );
};

export default AddUser;
