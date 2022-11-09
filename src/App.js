import { useEffect, useState } from "react";
import Form from "./components/form/Form";
import Table from "./components/table/Table";
import { ref, get, child, set, remove } from "firebase/database";
import { database } from "./utils/firebaseConfig"

function App() {
  const [name, setname] = useState("")
  const [phone, setphone] = useState("")
  const [gender, setgender] = useState("")
  const [data, setdata] = useState(null)

  function getdata() {
    const dbRef = ref(database);
      get(child(dbRef, `/`)).then((snapshot) => {
        if (snapshot.exists()) {
          setdata(snapshot.val())
          console.log(snapshot.val())
        } else {
          setdata([])
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
  }

  function add(e) {
    e.preventDefault()
    set(ref(database, '/'), data ? [...data,
      {
        name: name,
        phone: phone,
        gender: gender,
      }
    ]:[{
        name: name,
        phone: phone,
        gender: gender,
      }])
    getdata()
    setgender("")
    setname("")
    setphone("")
  }

  const deletedata = async (index) => {
    await remove(ref(database, '/' + index))

    getdata()
  }


    useEffect(() => {
      getdata()
    }, [])

  return (
    <div className="h-screen bg-[url('https://picsum.photos/1600/900')] bg-cover flex flex-row items-center justify-center">
      <div className="w-[80%] h-auto flex flex-row items-center justify-center gap-5">
        <Form gender={gender} name={name} phone={phone} setname={setname} setphone={setphone} setgender={setgender} add={add}/>
        <Table deletedata={deletedata} data={data}/>
      </div>
    </div>
  );
}

export default App;
