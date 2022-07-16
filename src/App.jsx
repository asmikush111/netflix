import Card from './Card';
import Sdata from './Sdata';

function App() {
  return (
    <>
    <h1 className='heading_style'>Netfix Series Clone</h1>
    {Sdata.map((data,i) => {
        return <Card 
        key={data.id}
        imgsrc={data.imgsrc}
        title={data.title}
        sname={data.sname}
        link={data.links}
        />
    })}
    </>
  );
}

export default App;
