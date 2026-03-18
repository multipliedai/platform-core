
import { ConfigProvider, Cascader } from "antd";
import type { DefaultOptionType } from "antd/es/cascader";

interface Props {
  dashboardOptionValues: string[][];
  dropdownOptions: DefaultOptionType[];
  setDashboardOptionValues: (values: string[][]) => void;
  placeholder:string;
  multiple:any;
}

function CustomCascader({
  dashboardOptionValues,
  dropdownOptions,
  setDashboardOptionValues,
  placeholder,multiple
}: Props) {
  return (
    <ConfigProvider 
      theme={{
        token: {
          colorPrimary: "#000000", 
          colorPrimaryBg:"#e5e5e5",
          colorText: "#000000",
          colorBgBase: "#ffffff",
          borderRadius: 8,
          controlHeight: 40,
          lineWidth: 1, 
          controlOutlineWidth: 0,
          controlOutline: "transparent", 
        },
      }}
    >
      <Cascader
        options={dropdownOptions}
        value={dashboardOptionValues}
        onChange={(values: any) => setDashboardOptionValues(values as string[][])}
        placeholder={placeholder}
        multiple={multiple}
        className="w-full min-w-[300px] focus:outline-none focus:ring-0 focus:border-black rounded-lg "
        showCheckedStrategy="SHOW_CHILD"
        maxTagCount="responsive"
        style={{ width: "100%", height: "40px", minWidth: "300px" }}
        showSearch={{
          filter: (input: string, path: DefaultOptionType[]) =>
            path.some((option: DefaultOptionType) =>
              typeof option.label === "string"
                ? option.label.toLowerCase().includes(input.toLowerCase())
                : false
            ),
        }}
      />
      
    </ConfigProvider>
  );
}

export default CustomCascader;
