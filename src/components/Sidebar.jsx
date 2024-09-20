import { Button } from "antd";
import {RightOutlined} from '@ant-design/icons';

function Sidebar({}) {
  return (
    <div className="sm:w-24 md:w-36 lg:w-48">
        <Button className="w-full">Mens Wear <RightOutlined /></Button>
        <Button className="w-full">Mens Wear <RightOutlined /></Button>
        <Button className="w-full">Mens Wear <RightOutlined /></Button>
        <Button className="w-full">Mens Wear <RightOutlined /></Button>
     </div>
  );
}
export default Sidebar