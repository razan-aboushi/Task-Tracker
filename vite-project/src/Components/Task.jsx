import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import "./Crud.css"
import DatePicker from "react-datepicker";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState, useEffect } from 'react';

import { AiFillDelete } from "react-icons/ai";
import { AiOutlineFolderView } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

let array000 = []
export default function Task() {



  const [valueDate, setValueDate] = useState("17/8/1997");
  const [valueTitle, setValueTitle] = useState("");
  const [valueDescription, setValueDescription] = useState("");
  const [file, setFile] = useState()


  const [ButtonStatus, setButtonStatus] = useState("create");
  const [ButtonStatusId, setButtonStatusId] = useState(0);
  const [ArrayStatusId, setArrayStatusId] = useState(0);


  const [priority, setOption] = useState("lOW");

  const [WhatToDo, setWhatToDo] = useState();
  let localData = []
  
  if (localStorage.data != [] && localStorage.data != null && localStorage.data != undefined) {
    localData = JSON.parse(localStorage.data)
  }
  const [AllListsObj, setAllListsObj] = useState(localData);


  function AddList() {
    let x = WhatToDo

    array000 = []
    setAllListsObj(prevArray => [...prevArray, { ToDo: x, array: [] }])
  }

  function handleChange(event) {
    setFile(event.target.files[0])
  }

  function CreateNew() {

    let TaskObj = {
      Id: array000.length,
      Title: valueTitle,
      Date: valueDate,
      Discription: valueDescription,
      File: file,
      Priority: priority,
    }

    if (ButtonStatus == "create") {


      Swal.fire({
        title: 'List has been added',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })

      array000.push(TaskObj)


      let AllTest = AllListsObj.map((e) => {

        if (WhatToDo == e.ToDo) {

          e.array = array000;


        }

        return e
      })


      setAllListsObj(AllTest)







    } else {

      Swal.fire({
        title: 'List has been updated',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })

      let NewTasksData = [...AllListsObj]

      NewTasksData[ButtonStatusId].array[ArrayStatusId].Title = valueTitle
      NewTasksData[ButtonStatusId].array[ArrayStatusId].Date = valueDate
      NewTasksData[ButtonStatusId].array[ArrayStatusId].Discription = valueDescription
      NewTasksData[ButtonStatusId].array[ArrayStatusId].File = file
      NewTasksData[ButtonStatusId].array[ArrayStatusId].Priority = priority

      setAllListsObj(NewTasksData)
      setButtonStatus("create")


    }


  }

  function DeleteRecipe(id, index) {



    const newItems = AllListsObj[index].array.filter(
      (item) => item.Id !== id
    );

    let xx = [...AllListsObj]
    xx[index].array = newItems


    xx[index].array.map((e, i) => {
      e.Id = i
    })

    const xxx = AllListsObj.filter(
      (item) => item.array.length !== 0
    );


    setAllListsObj(xxx)

    array000 = newItems
    console.log(AllListsObj)





    Swal.fire({
      title: 'List has been deleted',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })







  }

  function UpdateRecipe(e, id) {

    setValueDate(e.Date)
    setValueTitle(e.Title)
    setValueDescription(e.Discription)
    setOption(e.Priority)
    setFile(() => {
      return (e.File)
    }
    )

    setButtonStatus("update")
    setButtonStatusId(id)
    setArrayStatusId(e.Id)
  }


  return (

    <>



      <div className="CrudFormContainer">




        <Card className="CrudFormCard" color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Add New List
          </Typography>

          <div className="AddNewListCard">
            <input style={{ border: "1px solid black" }}
              type="text"
              value={WhatToDo}
              onChange={(e) => setWhatToDo(e.target.value)}
            />
            <Button onClick={() => AddList()}>Add</Button>
            {/* <button onClick={()=>AddList()}>Add New List</button> */}
          </div>


          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <Typography color="gray" className="mt-1 font-normal">
              Enter Task details .
            </Typography>
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="title"
                value={valueTitle}
                onChange={(e) => setValueTitle(e.target.value)}
              />

              <div>
                <label>Due Date: </label>
                <DatePicker
                  label="Controlled picker"
                  value={valueDate}
                  onChange={(date) => {
                    const d = new Date(date).toLocaleDateString('fr-FR');
                    setValueDate(d)

                  }}
                />

              </div>

              <textarea style={{ border: "1px black solid" }} required name="content" placeholder="description" rows="5"
                value={valueDescription}
                onChange={(newValue) => setValueDescription(newValue.target.value)}
              ></textarea>

              <input type="file" onChange={handleChange} />

            </div>


            <select
              value={priority}
              onChange={e => setOption(e.target.value)}
            >
              <option style={{ backgroundColor: "blue" }} value="LOW">LOW</option>
              <option style={{ backgroundColor: "green" }} value="MEDIUM">MEDIUM</option>
              <option style={{ backgroundColor: "red" }} value="HIGH">HIGH</option>
            </select>


            <Button onClick={() => { CreateNew() }} className="mt-6" fullWidth>
              {ButtonStatus}
            </Button>

          </form>
        </Card>
      </div>

      <div className="ListsContainer">
        {AllListsObj?.map((ev, index) => {

          return (





            <div className="TasksContainer">
              <fieldset>
                <legend>{ev.ToDo}</legend>

                {

                  ev.array?.map((e, i) => {
                    return (
                      <>
                        <div className="taskCardContainer">
                          <p>Title: {e.Title}</p>

                          <div className="taskCardContainer2">
                            <p>Due Date: {e.Date}</p>
                            <div className="CrudOperationsButtons">
                              <div><AiOutlineFolderView size="1.5rem" style={{ cursor: "pointer" }} /></div>
                              <div><AiFillEdit size="1.5rem" style={{ cursor: "pointer" }} onClick={() => UpdateRecipe(e, index)} /></div>



                              <div><AiFillDelete size="1.5rem" style={{ cursor: "pointer" }} onClick={() => DeleteRecipe(e.Id, index)} /></div>



                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })

                }


              </fieldset>
            </div>

          )
        }




        )}
        {localStorage.setItem("data", JSON.stringify(AllListsObj))}
      </div>




    </>
  );
}