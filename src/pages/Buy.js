import Card from "../components/Card";
const Buy = ({query}) => {
  
  return (
    <div>
      <div className=" mx-5 grid grid-cols-4 gap-2 grid-flow-row ">
         <Card query={query}/>
      </div>
    </div>
  );
};

export default Buy;
