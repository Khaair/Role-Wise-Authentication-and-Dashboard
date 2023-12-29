
const UserTable = ({ data }: any) => {
  console.log("data", data);
  return (
    <div className="grid grid-cols-1">
      <div className="section-title flex justify-between mb-5">
        <h2 className="text-lg">Users</h2>
        <div className="flex">
          <button className="border  font-bold py-2 px-4 rounded-lg">
            Import
          </button>
          <button className="bg-[#6941C6] hover:bg-[#7f5fc7] text-white font-bold py-2 px-2 rounded-lg ml-[10px]">
            Add User
          </button>
        </div>
      </div>
      <table id="customers">
        <tbody>
          <tr>
            <th className="text-base">User Info</th>
            <th className="text-base">About</th>
            <th className="text-base">Status</th>
          </tr>
          {data?.data?.data?.length > 0 ? (
            data?.data?.data?.map((item: any, index: any) => (
              <tr key={index}>
                <td className="text-base flex">
                  <div className="h-[50px] w-[50px] shring-0">
                    <img
                      className="h-full w-full"
                      src={item?.avatar}
                      alt="user img"
                    />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg">{item?.first_name}</h4>
                    <h6 className="text-base">{item?.email}</h6>
                  </div>
                </td>
                <td className="text-base">
                  <h4>Some dummy Content</h4>
                </td>
                <td>
                  <button className="bg-[#ECFDF3] px-3 py-1 text-base text-[#027A48] rounded">
                    Customer
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <h4 className="text-lg text-[red] mt-4">Not found</h4>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
