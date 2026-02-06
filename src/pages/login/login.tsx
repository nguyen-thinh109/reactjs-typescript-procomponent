import { ProForm, ProFormText, ProLayout } from "@ant-design/pro-components";
import logo from "../../assets/logo.svg";

export default () => {
  return (
    <ProLayout title="React TS Test" logo={logo} suppressSiderWhenMenuEmpty={true}>
      <ProForm
        onFinish={async (values) => {
          console.log(values);
        }}
      >
        <ProFormText name="name" label="姓名" />
      </ProForm>
    </ProLayout>
  );
};
