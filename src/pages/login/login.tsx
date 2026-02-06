import { ProForm, ProFormText, ProLayout } from "@ant-design/pro-components";
import logo from "../../assets/logo.svg";

export default () => {
  return (
    <ProLayout title="React TS Test" logo={logo} suppressSiderWhenMenuEmpty={true}>
      <ProForm
        onFinish={async (values) => {
          console.log(values);
        }}
        submitter={{
          searchConfig: {
            submitText: "Save Changes", // Change submit button text
            resetText: "Clear Form", // Change reset button text
          },
        }}
      >
        <ProFormText name="name" label="Your name" placeholder={"Please fill in your name"}/>
      </ProForm>
    </ProLayout>
  );
};
