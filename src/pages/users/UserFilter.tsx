import { Card, Col, Row, Select, Space } from "antd";
import Search from "antd/es/input/Search";

type UserFilterProps = {
  children?: React.ReactNode;
  onFilterChange: (filterName: string, filterValue: string) => void;
};

const UserFilter = ({ onFilterChange, children }: UserFilterProps) => {
  return (
    <Card style={{ width: "100%" }}>
      <Row>
        <Col span={18}>
          <Space size={24}>
            <Search
              placeholder="input search text"
              onSearch={() => console.log("ahjs")}
              style={{ width: 200 }}
            />
            <Select
              style={{ width: 150 }}
              showSearch
              placeholder="status"
              optionFilterProp="children"
              onChange={(selected) => onFilterChange("statusFilter", selected)}
              onSearch={() => console.log("skhs")}
              // filterOption={() => console.log("skhs")}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
            <Select
              style={{ width: 150 }}
              showSearch
              placeholder="Select role"
              optionFilterProp="children"
              onChange={(selected) => onFilterChange("roleFilter", selected)}
              onSearch={() => console.log("skhs")}
              // filterOption={() => console.log("skhs")}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          </Space>
        </Col>
        <Col span={6}>{children}</Col>
      </Row>
    </Card>
  );
};

export default UserFilter;
