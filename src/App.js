
import './App.css';
import Input from './Components/Input';
import { useItem } from './Components/DataProvider';
import InputList from './Components/InputList';
function App() {
  const {items} = useItem();
  return (
    <div className="App">
     <Input/>
   
   {console.log(items)}
   {items.map((item,i)=>{
     return(  <InputList item={item.item} id={item.id}/>)
   })}
    </div>
  );
}

export default App;
