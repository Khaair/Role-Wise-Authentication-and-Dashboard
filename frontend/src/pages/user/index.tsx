import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchUserListHandler } from "../../api/users-list";
import Pagination from "../../components/pagination";
import ListLoading from "../../components/preloader/list";
import Layout from "../../layout";
import { limitCount } from "../../utils/api-url";
import UserTable from "../../components/user-table";
import { useSelector } from "react-redux";

const User = () => {
  const loc = useLocation();
  const [limit] = useState<number>(limitCount);
  const [getallUsers, setAllUsers] = useState<any>({
    loading: false,
    data: null,
  });

  const fetchUsers: () => Promise<void> = useCallback(async () => {
    if (true) {
      await setAllUsers({ loading: true, data: null });
      await fetchUserListHandler( loc?.search).then((res) => {
        if (res?.status === 200) {
          setAllUsers({
            loading: false,
            data: res?.data,
          });
        } else {
          setAllUsers({
            loading: false,
            data: null,
          });
        }
      });
    }
  }, [limit, loc?.search]);
  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchUsers, window.scrollTo(0, 0)]);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const token = useSelector((state) => state?.auth?.token);

  return (
    <Layout>
      <div className="bg-white p-10 min-screen-height rounded-lg">
        <div className="container mx-auto">
          <div className="grid gap-4 grid-cols-1">
            <div>
              {getallUsers?.loading ? (
                <ListLoading />
              ) : (
                <UserTable data={getallUsers} />
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Pagination {...getallUsers?.data} />
          </div>
        </div>
        

      </div>
    </Layout>
  );
};

export default User;
