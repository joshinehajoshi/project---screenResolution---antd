import './App.css';
import 'antd/dist/antd.css'; 
import { Layout } from 'antd';
import HeaderCommon from './Components/HeaderCommon';
import TableComp from './Components/TableComp';
import FormComp from './Components/FormComp';
function App() {
  return (
    <div>
  <Layout className="layout">
  <HeaderCommon />
  </Layout>
  <TableComp />
  <FormComp/>
  </div>
  );
}

export default App;
