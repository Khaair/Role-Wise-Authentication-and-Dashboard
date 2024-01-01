import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbDeviceImacQuestion } from "react-icons/tb";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import avatar from "../assets/img/avatar.png";
import storage from "redux-persist/es/storage";
import { useSelector } from "react-redux";

const Layout = ({ children }: any) => {
  const [isExpanded, setIsExpanded] = useState(true);
  function handleToggle() {
    setIsExpanded(!isExpanded);
  }

  const logout = async () => {
    try {
      storage.removeItem("persist:root");
      sessionStorage.removeItem("persist:root");
      window.location.href = "/login";
    } catch (e) {
      console.error(e);
    }
  };

  const tokenData = useSelector((state) => state?.auth?.tokenData);

  return (
    <>
      <div className="admin-header shadow-md bg-[white]">
        <div className="top-header-container">
          <div className="top-header-inner-content">
            <Link to="/dashboard">
              <div className="flex items-center p-[22px]">
                {/* <img src={logo} alt="Logo" /> */}
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
                LOGO
                </h2>
              </div>
            </Link>

            <div className="top-header-right-sidebar ">
              <div className="humberger-menu-icon flex items-center">
                <button
                  onClick={() => handleToggle()}
                  className=" bg-[#E8F2FC] px-2 py-[7px] rounded"
                >
                  <GiHamburgerMenu color="#4D5FAB" size="25px" />
                </button>
                <button className="ml-[27px] bg-[#E8F2FC] px-4 py-2 font-bold text-base text-[#28A0F7] rounded">
                  Stack
                </button>
                <button className="ml-[10px] bg-[#E8F2FC] px-4 py-2 font-bold text-base text-[#28A0F7] rounded">
                  Users
                </button>
              </div>

              <div className="top-header-action">
                <ul className="flex items-center">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.08"
                      height="18.686"
                      viewBox="0 0 25.08 26.686"
                    >
                      <g
                        id="Group_13022"
                        data-name="Group 13022"
                        transform="translate(-1603.354 -44.314)"
                      >
                        <path
                          id="Path_2"
                          data-name="Path 2"
                          d="M50.81,82.9v1.112a2.163,2.163,0,0,1-2.09,2.224H34.09A2.163,2.163,0,0,1,32,84.008V69.553a2.163,2.163,0,0,1,2.09-2.224H46.63V65.1a1.08,1.08,0,0,1,1.045-1.112,1.015,1.015,0,0,1,.739.326l3.135,3.336a1.106,1.106,0,0,1,.178.253l0,0c.014.027.026.054.037.082l.008.017c.01.025.018.05.026.076,0,.009.006.018.009.028s.012.049.018.073.006.022.008.033c0,.027.008.053.011.08,0,.01,0,.019,0,.029,0,.037.005.074.005.111h0s0,.007,0,.01c0,.033,0,.065,0,.1s-.006.043-.009.065,0,.028-.006.042-.011.05-.017.074,0,.02-.007.03c-.007.026-.016.051-.025.076l-.009.026c-.01.026-.022.052-.033.077l-.01.021c-.014.028-.03.056-.046.083l-.006.01a1.1,1.1,0,0,1-.143.183l-3.126,3.326a1,1,0,0,1-1.478,0,1.149,1.149,0,0,1-.306-.786V69.553H34.09V84.008H48.72V82.9a1.047,1.047,0,1,1,2.09,0Z"
                          transform="translate(1571.354 -15.232)"
                          fill="#9c9c9c"
                        />
                        <path
                          id="Path_3"
                          data-name="Path 3"
                          d="M89.765,31.993H75.135a2.163,2.163,0,0,0-2.09,2.224v1.112a1.047,1.047,0,1,0,2.09,0V34.217h14.63V48.671H77.225V46.448a1.08,1.08,0,0,0-1.045-1.112,1.014,1.014,0,0,0-.739.326l-3.126,3.326a1.108,1.108,0,0,0-.143.183l-.006.01c-.016.027-.032.054-.046.083l-.01.021c-.012.025-.023.051-.033.077,0,.008-.006.017-.009.026-.009.025-.018.05-.025.076,0,.01,0,.02-.007.03s-.012.049-.017.074,0,.028-.006.042-.007.043-.009.065,0,.065,0,.1c0,0,0,.007,0,.01h0c0,.037,0,.074.005.111,0,.01,0,.019,0,.029,0,.027.007.053.011.08,0,.011.005.022.008.033s.011.049.018.073.006.019.009.028c.008.025.016.051.026.076l.008.018c.011.028.023.055.037.082l0,0a1.106,1.106,0,0,0,.178.253l3.135,3.336a1,1,0,0,0,1.478,0,1.149,1.149,0,0,0,.306-.786V50.895h12.54a2.162,2.162,0,0,0,2.09-2.224V34.217A2.163,2.163,0,0,0,89.765,31.993Z"
                          transform="translate(1536.579 12.321)"
                          fill="#e6e6e6"
                        />
                      </g>
                    </svg>
                  </li>
                  <li>
                    <svg
                      id="Group_3"
                      data-name="Group 3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.08"
                      height="18.686"
                      viewBox="0 0 25.452 26.315"
                    >
                      <rect
                        id="Rectangle_10"
                        data-name="Rectangle 10"
                        width="8.506"
                        height="8.469"
                        rx="1"
                        transform="translate(12.922 0) rotate(47)"
                        fill="#9c9c9c"
                      />
                      <rect
                        id="Rectangle_11"
                        data-name="Rectangle 11"
                        width="8.506"
                        height="8.469"
                        rx="1"
                        transform="translate(12.922 14.319) rotate(47)"
                        fill="#9c9c9c"
                      />
                      <rect
                        id="Rectangle_12"
                        data-name="Rectangle 12"
                        width="8.506"
                        height="8.469"
                        rx="1"
                        transform="translate(19.651 7.159) rotate(47)"
                        fill="#e6e6e6"
                      />
                      <rect
                        id="Rectangle_13"
                        data-name="Rectangle 13"
                        width="8.506"
                        height="8.469"
                        rx="1"
                        transform="translate(6.194 7.159) rotate(47)"
                        fill="#e6e6e6"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.08"
                      height="18.686"
                      viewBox="0 0 29.428 26.092"
                    >
                      <g
                        id="Group_13021"
                        data-name="Group 13021"
                        transform="translate(-1709.2 -44.314)"
                      >
                        <g
                          id="Group_2"
                          data-name="Group 2"
                          transform="translate(1709.2 44.314)"
                        >
                          <path
                            id="cart-svgrepo-com"
                            d="M5.729,9.175,5.32,6.566H3.854A1.986,1.986,0,0,0,1.962,5,2.03,2.03,0,0,0,0,7.087,2.03,2.03,0,0,0,1.962,9.175,1.987,1.987,0,0,0,3.854,7.609h.635l.245,1.566H4.715L7.251,22.751a2.592,2.592,0,0,0-2.335,2.335A2.721,2.721,0,0,0,5.539,27.1a2.4,2.4,0,0,0,1.818.862h.981a3.044,3.044,0,0,0,2.943,3.131,3.044,3.044,0,0,0,2.943-3.131h5.4a2.948,2.948,0,1,0,5.886,0h1.962a.523.523,0,0,0,0-1.044H25.332a2.883,2.883,0,0,0-5.542,0H14.052a2.963,2.963,0,0,0-2.771-2.087A2.963,2.963,0,0,0,8.51,26.918H7.357A1.438,1.438,0,0,1,6.266,26.4a1.613,1.613,0,0,1-.373-1.209,1.57,1.57,0,0,1,1.556-1.4H26.981a2.531,2.531,0,0,0,2.446-2.6V9.175ZM1.962,8.131a1.046,1.046,0,0,1,0-2.087,1.046,1.046,0,0,1,0,2.087Zm20.6,17.743A2.091,2.091,0,1,1,20.6,27.961,2.03,2.03,0,0,1,22.561,25.874Zm-11.281,0a2.091,2.091,0,0,1,0,4.175,2.091,2.091,0,0,1,0-4.175Zm17.166-4.69a1.516,1.516,0,0,1-1.465,1.559H8.25L5.911,10.218H28.447Z"
                            transform="translate(0 -5)"
                            fill="#9c9c9c"
                          />
                          <ellipse
                            id="Ellipse_4"
                            data-name="Ellipse 4"
                            cx="2.515"
                            cy="2.676"
                            rx="2.515"
                            ry="2.676"
                            transform="translate(9.055 20.74)"
                            fill="#9c9c9c"
                          />
                          <ellipse
                            id="Ellipse_5"
                            data-name="Ellipse 5"
                            cx="2.515"
                            cy="2.676"
                            rx="2.515"
                            ry="2.676"
                            transform="translate(20.121 20.74)"
                            fill="#9c9c9c"
                          />
                        </g>
                        <path
                          id="Path_1"
                          data-name="Path 1"
                          d="M1996.5,37.356h20.05v8.919s0,1.563-1.988,1.517-16.118,0-16.118,0Z"
                          transform="translate(-280.186 13.406)"
                          fill="#e2e2e2"
                        />
                      </g>
                    </svg>
                  </li>
                  <li>
                    <svg
                      id="Group_1"
                      data-name="Group 1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.08"
                      height="18.686"
                      viewBox="0 0 24.594 26.168"
                    >
                      <rect
                        id="Rectangle_6"
                        data-name="Rectangle 6"
                        width="10.356"
                        height="12.395"
                        rx="1"
                        transform="translate(0)"
                        fill="#28A0F7"
                      />
                      <rect
                        id="Rectangle_9"
                        data-name="Rectangle 9"
                        width="10.356"
                        height="11.018"
                        rx="1"
                        transform="translate(0 15.15)"
                        fill="#e6e6e6"
                      />
                      <rect
                        id="Rectangle_7"
                        data-name="Rectangle 7"
                        width="11.65"
                        height="12.395"
                        rx="1"
                        transform="translate(12.944)"
                        fill="#e6e6e6"
                      />
                      <rect
                        id="Rectangle_8"
                        data-name="Rectangle 8"
                        width="11.65"
                        height="11.018"
                        rx="1"
                        transform="translate(12.944 15.15)"
                        fill="#e6e6e6"
                      />
                    </svg>
                  </li>
                  <li className="avatar">
                    <div className="w-[40px] h-[40px] rounded-full">
                      <img
                        className="h-full w-full rounded-full border"
                        src={avatar}
                        alt="Logo"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="admin-sidebar">
        {tokenData?.roles?.join("").toString() === "ROLE_ADMIN" && (
          <Sidebar collapsed={!isExpanded}>
            <Menu>
              <MenuItem
                component={<Link to="/dashboard">Dashboard</Link>}
                active={window.location.pathname === "/"}
                icon={
                  <svg
                    id="Group_1"
                    data-name="Group 1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.594"
                    height="16.168"
                    viewBox="0 0 24.594 26.168"
                  >
                    <rect
                      id="Rectangle_6"
                      data-name="Rectangle 6"
                      width="10.356"
                      height="12.395"
                      rx="1"
                      transform="translate(0)"
                      fill="#28A0F7"
                    />
                    <rect
                      id="Rectangle_9"
                      data-name="Rectangle 9"
                      width="10.356"
                      height="11.018"
                      rx="1"
                      transform="translate(0 15.15)"
                      fill="#e6e6e6"
                    />
                    <rect
                      id="Rectangle_7"
                      data-name="Rectangle 7"
                      width="11.65"
                      height="12.395"
                      rx="1"
                      transform="translate(12.944)"
                      fill="#e6e6e6"
                    />
                    <rect
                      id="Rectangle_8"
                      data-name="Rectangle 8"
                      width="11.65"
                      height="11.018"
                      rx="1"
                      transform="translate(12.944 15.15)"
                      fill="#e6e6e6"
                    />
                  </svg>
                }
              >
                <Link to="/dashboard">
                  {" "}
                  <span className="text-[#28A0F7] font-bold">Dashboard</span>
                </Link>
              </MenuItem>

              <MenuItem icon={<TbDeviceImacQuestion />}>
                <Link to="/admin">
                  <span>Admin</span>
                </Link>
              </MenuItem>

              <SubMenu label="Admin menu" icon={<TbDeviceImacQuestion />}>
                <MenuItem>
                  <Link to="/add-user">Add user</Link>
                </MenuItem>
              </SubMenu>

              <SubMenu
                onClick={() => logout()}
                label="Log out"
                icon={<TbDeviceImacQuestion />}
              ></SubMenu>
            </Menu>
          </Sidebar>
        )}

        {tokenData?.roles?.join("").toString() === "ROLE_MODERATOR" && (
          <Sidebar collapsed={!isExpanded}>
            <Menu>
              <MenuItem
                component={<Link to="/dashboard">Dashboard</Link>}
                active={window.location.pathname === "/"}
                icon={
                  <svg
                    id="Group_1"
                    data-name="Group 1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.594"
                    height="16.168"
                    viewBox="0 0 24.594 26.168"
                  >
                    <rect
                      id="Rectangle_6"
                      data-name="Rectangle 6"
                      width="10.356"
                      height="12.395"
                      rx="1"
                      transform="translate(0)"
                      fill="#28A0F7"
                    />
                    <rect
                      id="Rectangle_9"
                      data-name="Rectangle 9"
                      width="10.356"
                      height="11.018"
                      rx="1"
                      transform="translate(0 15.15)"
                      fill="#e6e6e6"
                    />
                    <rect
                      id="Rectangle_7"
                      data-name="Rectangle 7"
                      width="11.65"
                      height="12.395"
                      rx="1"
                      transform="translate(12.944)"
                      fill="#e6e6e6"
                    />
                    <rect
                      id="Rectangle_8"
                      data-name="Rectangle 8"
                      width="11.65"
                      height="11.018"
                      rx="1"
                      transform="translate(12.944 15.15)"
                      fill="#e6e6e6"
                    />
                  </svg>
                }
              >
                <Link to="/dashboard">
                  {" "}
                  <span className="text-[#28A0F7] font-bold">Dashboard</span>
                </Link>
              </MenuItem>
              <MenuItem icon={<TbDeviceImacQuestion />}>
                <Link to="/hr">
                  <span>HR</span>
                </Link>
              </MenuItem>
              <SubMenu label="HR menu" icon={<TbDeviceImacQuestion />}>
                <MenuItem>
                  <Link to="/add-user">Add user</Link>
                </MenuItem>
              </SubMenu>

              <SubMenu
                onClick={() => logout()}
                label="Log out"
                icon={<TbDeviceImacQuestion />}
              ></SubMenu>
            </Menu>
          </Sidebar>
        )}

        {tokenData?.roles?.join("").toString() === "ROLE_USER" && (
          <Sidebar collapsed={!isExpanded}>
            <Menu>
              <MenuItem
                component={<Link to="/dashboard">Dashboard</Link>}
                active={window.location.pathname === "/"}
                icon={
                  <svg
                    id="Group_1"
                    data-name="Group 1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.594"
                    height="16.168"
                    viewBox="0 0 24.594 26.168"
                  >
                    <rect
                      id="Rectangle_6"
                      data-name="Rectangle 6"
                      width="10.356"
                      height="12.395"
                      rx="1"
                      transform="translate(0)"
                      fill="#28A0F7"
                    />
                    <rect
                      id="Rectangle_9"
                      data-name="Rectangle 9"
                      width="10.356"
                      height="11.018"
                      rx="1"
                      transform="translate(0 15.15)"
                      fill="#e6e6e6"
                    />
                    <rect
                      id="Rectangle_7"
                      data-name="Rectangle 7"
                      width="11.65"
                      height="12.395"
                      rx="1"
                      transform="translate(12.944)"
                      fill="#e6e6e6"
                    />
                    <rect
                      id="Rectangle_8"
                      data-name="Rectangle 8"
                      width="11.65"
                      height="11.018"
                      rx="1"
                      transform="translate(12.944 15.15)"
                      fill="#e6e6e6"
                    />
                  </svg>
                }
              >
                <Link to="/dashboard">
                  {" "}
                  <span className="text-[#28A0F7] font-bold">Dashboard</span>
                </Link>
              </MenuItem>
              <MenuItem icon={<TbDeviceImacQuestion />}>
                <Link to="/users">
                  <span>Users</span>
                </Link>
              </MenuItem>
              <SubMenu label="User menu" icon={<TbDeviceImacQuestion />}>
                <MenuItem>
                  <Link to="/add-user">Users</Link>
                </MenuItem>
              </SubMenu>

              <SubMenu
                onClick={() => logout()}
                label="Log out"
                icon={<TbDeviceImacQuestion />}
              ></SubMenu>
            </Menu>
          </Sidebar>
        )}
      </div>
      <div
        className={
          isExpanded ? "admin-main-content" : "short-admin-main-content"
        }
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
