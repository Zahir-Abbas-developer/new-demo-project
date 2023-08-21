import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
  import { Space, Progress, Dropdown, Select, Table, Button } from "antd";
import AddClientModal from '../AddClientModal';
import Dots from "../../assets/dots.png";
import Edit from "../../assets/edit.svg";
import Delete from "../../assets/Delete.svg";
import { useState } from 'react';
import axios from 'axios';

  function Todos() {
    const [addEditJobRole ,setAddEditJobRole]=useState(false)
    const [editModal ,setEditModal]=useState(false)
    const [deleteModal ,setDeleteModal]=useState(false)
    const [selectedRowRecord ,setSelectedRowRecord]=useState({})
    // Access the client
    const queryClient = useQueryClient()
const fetchTodos=async()=>{
    const response = await fetch('https://gateway.dev.carelibrary.developersorcalo.com/email-template', {
        headers: {
          Authorization: `Bearer eyJraWQiOiJKNnFZOG84M1RXSDBwQzNkaTVQdjVMZDRwOTU0akJoUlVQVVNCQWhVdU1ZPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzNDM1Nzk1Mi0zMDg5LTRjODgtODU2My1hYjFhYTRiOGM2MmUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl9YYjEwWGprTXUiLCJjbGllbnRfaWQiOiI3OTI2a25scm9yNmY2N2U5c2RhZDB1bnY0cSIsIm9yaWdpbl9qdGkiOiI0MzRkODM0ZC00M2E4LTQwYjAtOGNlMC05MTk3MTQxMTlkM2UiLCJldmVudF9pZCI6ImMxYTI4YzAxLWZjNmItNDRiZi1iNjk1LTQ3MDc4MWQ4YmVhYyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2OTIwNzYzMjgsImV4cCI6MTY5MjExMjMyOCwiaWF0IjoxNjkyMDc2MzI4LCJqdGkiOiI4YjAyYjRiNC0wZWQ2LTQxMmYtYTRmNC0xNjZjMTNkZmFkY2IiLCJ1c2VybmFtZSI6IjM0MzU3OTUyLTMwODktNGM4OC04NTYzLWFiMWFhNGI4YzYyZSJ9.a61ztbsSG6Vln0CV2I7lSmK9H8MB7TNcGGpEJjQCY5fHOLUe9auil9As0rmCU9loPWZbfG1B3xkySApWN83YfC9_bVxSZfkrzLgQVydfp9OZ4sfhlyf8Vn9K_O7WKAUIlYGtmO5HCmPKcPVMnfqt6vIaUV8hgO6_XiaEMZIdti77cTWGPtSV86OGy2KsQTD9pNGXnakPZ58hX012MTN3RIhlsP9k5k-7ycWvVjMrFdq436g0lSVG_rM-1UrpJWwn1vtEXjnN03wgXmSo4KAr-2JrZ47nLAG5fppMzDS2GJKxfThA4NQNR_zUja2hxM4uLXWpG0xdiuqemoLWKxBuHg`, // Attach the token to the Authorization header
        },
      });
    
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
const deleteMutation = useMutation(
  async () => {
    const response = await axios.delete(`https://gateway.dev.carelibrary.developersorcalo.com/email-template?id=${selectedRowRecord?._id}`, {
      headers: {
        Authorization: `Bearer eyJraWQiOiJKNnFZOG84M1RXSDBwQzNkaTVQdjVMZDRwOTU0akJoUlVQVVNCQWhVdU1ZPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzNDM1Nzk1Mi0zMDg5LTRjODgtODU2My1hYjFhYTRiOGM2MmUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl9YYjEwWGprTXUiLCJjbGllbnRfaWQiOiI3OTI2a25scm9yNmY2N2U5c2RhZDB1bnY0cSIsIm9yaWdpbl9qdGkiOiI0MzRkODM0ZC00M2E4LTQwYjAtOGNlMC05MTk3MTQxMTlkM2UiLCJldmVudF9pZCI6ImMxYTI4YzAxLWZjNmItNDRiZi1iNjk1LTQ3MDc4MWQ4YmVhYyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2OTIwNzYzMjgsImV4cCI6MTY5MjExMjMyOCwiaWF0IjoxNjkyMDc2MzI4LCJqdGkiOiI4YjAyYjRiNC0wZWQ2LTQxMmYtYTRmNC0xNjZjMTNkZmFkY2IiLCJ1c2VybmFtZSI6IjM0MzU3OTUyLTMwODktNGM4OC04NTYzLWFiMWFhNGI4YzYyZSJ9.a61ztbsSG6Vln0CV2I7lSmK9H8MB7TNcGGpEJjQCY5fHOLUe9auil9As0rmCU9loPWZbfG1B3xkySApWN83YfC9_bVxSZfkrzLgQVydfp9OZ4sfhlyf8Vn9K_O7WKAUIlYGtmO5HCmPKcPVMnfqt6vIaUV8hgO6_XiaEMZIdti77cTWGPtSV86OGy2KsQTD9pNGXnakPZ58hX012MTN3RIhlsP9k5k-7ycWvVjMrFdq436g0lSVG_rM-1UrpJWwn1vtEXjnN03wgXmSo4KAr-2JrZ47nLAG5fppMzDS2GJKxfThA4NQNR_zUja2hxM4uLXWpG0xdiuqemoLWKxBuHg`, // Attach the token to the Authorization header
      },
    });
    return response.data;
  },
  {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  }
);

const handleDeleteClick = () => {
  deleteMutation.mutate();
};

    // Queries
    const { data,isLoading ,isSuccess} = useQuery({ queryKey: ['todos'], queryFn: fetchTodos , useErrorBoundary: true,})
  
   // get table data start here
  let clientManagerTableDatas


  if (isSuccess) {
    clientManagerTableDatas = data;
  }

    // Mutations
    const mutation = useMutation({
      mutationFn: 'https://gateway.dev.carelibrary.developersorcalo.com/manage-user?page=1&limit=10',
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['todos'] })
      },
    })
    const items = [
      {
        label: (
          <div onClick={() => setEditModal(true)}>
            <Space>
              <img src={Edit} alt="Edit" className="d-flex align-center" width={14} height={16} />
              <span className="fs-14 fw-400 title-color">Edit</span>
            </Space>
          </div>
        ),
        key: "1",
      },
      {
        label: (
          <Space onClick={handleDeleteClick}>
            <img src={Delete} alt="Delete" className="d-flex align-center" width={14} height={16} />
            <span className="fs-14 fw-400 title-color">Delete</span>
          </Space>
        ),
        key: "2",
      },
    ];
  
    const columns = [
      {
        title: <span>Title</span>,
        dataIndex: "title",
        key: "title",
        ellipsis: true,
        width: 270,
        render: (_, text) => (
          <div className="cursor-pointer d-flex align-center ">
          
  
            <span
              className="fs-14 fw-400 title-color"
              style={{ marginLeft: "30px" }}
            >
              {text.title}
            </span>
          </div>
        ),
      },
      {
        title: <span>Description</span>,
        dataIndex: "discription",
        key: "discription",
        ellipsis: true,
        width: 270,
        render: (_, text) => (
          <div className="cursor-pointer d-flex align-center ">
          
  
            <span
              className="fs-14 fw-400 title-color"
              style={{ marginLeft: "30px" }}
            >
              {text.discription}
            </span>
          </div>
        ),
      },
      {
        title: "Actions",
        dataIndex: "actions",
        key: "actions",
        render: (_, record) => (
          <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]} rootClassName="actionDropDown">
            <div className="border-color cursor-pointer d-flex algin-center justify-center" onClick={() => setSelectedRowRecord(record)}>
              <img src={Dots} alt="dotImg" style={{cursor:"pointer"}}/>
            </div>
          </Dropdown>
        ),
      },
    ];
      let onBoardingData;
  let totalRecords
  if (isSuccess) {
    onBoardingData = data;
    totalRecords = data;
  }
    return (
      <div>
        <Button onClick={()=>setAddEditJobRole(true)}>Add Client</Button>
        <AddClientModal addEditJobRole={addEditJobRole} setAddEditJobRole={setAddEditJobRole}  />
        <Table
            className="wrapper-table"
            columns={columns}
            loading={isLoading}
            dataSource={clientManagerTableDatas?.data}
            scroll={{ x: "max-content" }}
          
          />
      </div>
    )
  }
export default Todos