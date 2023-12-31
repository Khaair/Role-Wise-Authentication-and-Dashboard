import axios from "axios";
import { Form, Input, notification } from "antd";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useState } from "react";
import { baseUrl } from "../../utils/api-url";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState([]);

  const sendDatatoApp = async () => {
    const values = await form.validateFields();
    try {
      const res = await axios.post(`${baseUrl}/auth/signin`, {
        username: values?.userName,
        password: values?.password,
      });

      if (res?.status === 200) {
        dispatch(login(res?.data));
        navigate("/dashboard");
        openNotification();
      } else {
        setErrorMsg(res?.status);
      }
    } catch (er) {
      if (er) {
        setErrorMsg(er?.response?.data?.message);
      }
      console.log(er);
    }
  };

  const [form] = Form.useForm();

  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: "Login Successful!",
    });
  };

  return (
    <>
      {contextHolder}
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <a
                href="#"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="32"
                  viewBox="0 0 51 32"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50.4409 19.3835L48.5223 16.7586H49.7083C50.0269 16.7582 50.3199 16.6066 50.4725 16.3633C50.625 16.12 50.6129 15.8236 50.4409 15.5903L39.3393 0.417937C39.1809 0.19923 38.9039 0.0672498 38.6068 0.0689711H11.9734C11.6763 0.0672498 11.3992 0.19923 11.2409 0.417937L0.139303 15.5903C-0.0327482 15.8236 -0.044862 16.12 0.107706 16.3633C0.260275 16.6066 0.553238 16.7582 0.87185 16.7586H2.05788L0.139303 19.3835C-0.0327482 19.6167 -0.044862 19.9131 0.107706 20.1564C0.260275 20.3997 0.553238 20.5513 0.87185 20.5517H2.05788L0.139303 23.1766C-0.0327482 23.4098 -0.044862 23.7062 0.107706 23.9495C0.260275 24.1928 0.553238 24.3444 0.87185 24.3448H2.05788L0.139303 26.9697C-0.0327482 27.2029 -0.044862 27.4993 0.107706 27.7426C0.260275 27.9859 0.553238 28.1375 0.87185 28.1379H2.05788L0.139303 30.7628C-0.0327482 30.996 -0.044862 31.2924 0.107706 31.5357C0.260275 31.779 0.553238 31.9306 0.87185 31.931H49.7083C50.0269 31.9306 50.3199 31.779 50.4725 31.5357C50.625 31.2924 50.6129 30.996 50.4409 30.7628L48.5223 28.1379H49.7083C50.0269 28.1375 50.3199 27.9859 50.4725 27.7426C50.625 27.4993 50.6129 27.2029 50.4409 26.9697L48.5223 24.3448H49.7083C50.0269 24.3444 50.3199 24.1928 50.4725 23.9495C50.625 23.7062 50.6129 23.4098 50.4409 23.1766L48.5223 20.5517H49.7083C50.0269 20.5513 50.3199 20.3997 50.4725 20.1564C50.625 19.9131 50.6129 19.6167 50.4409 19.3835Z"
                    fill="#9E7AF4"
                  />
                </svg>
                <h2 className="ml-3  font-inter text-4xl font-bold text-[#4E5D78] font-inter">
                SM Fintech
                </h2>
              </a>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign In to continue with SM Fintech
              </h2>
              <div className="form-wrapper-area">
                <Form form={form} layout="vertical">
                  <Form.Item
                    name="userName"
                    label="User Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input the user name!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your user name" />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input the password!",
                      },
                    ]}
                  >
                    <Input.Password
                      className="bg-[#f1f4f7] border-none py-[8px]"
                      placeholder="Enter your password"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                  </Form.Item>

                  <p className="text-[red] mb-2">{errorMsg}</p>

                  <Form.Item>
                    <button
                      onClick={sendDatatoApp}
                      className="bg-[#6941C6] w-full hover:bg-[#7f5fc7] text-white font-bold py-2 px-4 rounded-lg mt-3"
                    >
                      Sign In
                    </button>
                  </Form.Item>
                </Form>
              </div>

              <h4>
                Don’t have an account?{" "}
                <Link to="/" className="text-[blue] cursor-pointer">
                  Sign Up
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
