import { RightOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Breadcrumb, Space, Table } from "antd";
import { Link, Navigate } from "react-router-dom";
import { getUsers } from "../../http/api";
import { User } from "../../types";
import { useAuthStore } from "../../store";

const Users = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return getUsers().then((res) => res.data);
    },
  });

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
      render: (_text: string, record: User) => {
        return (
          <div>
            {record.firstName} {record.lastName}
          </div>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_text: string, record: User) => {
        return <div>{record.email}</div>;
      },
    },

    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
  ];

  const { user } = useAuthStore();
  if (user?.role !== "admin") {
    return <Navigate to="/auth/login" replace={true} />;
  }
  return (
    <>
      <Space direction="vertical" size={"large"} style={{ width: "100%" }}>
        <Breadcrumb
          separator={<RightOutlined />}
          items={[
            { title: <Link to={"/"}>Dashboard</Link> },
            { title: "Users" },
          ]}
        />
        {isLoading && <div>Loading...</div>}
        {isError && <div>{error?.message}</div>}
        <Table dataSource={users} columns={columns} />;
      </Space>
    </>
  );
};

export default Users;
