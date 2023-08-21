import { Button, Col, Form, Input, Modal, Row } from "antd"
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import axios from 'axios';
const AddClientModal = ({ addEditJobRole, setAddEditJobRole }) => {
    // Access the client
    const queryClient = useQueryClient()
    const fetchTodos = async () => {
        const response = await fetch('https://gateway.dev.carelibrary.developersorcalo.com/client-groups?page=1&limit=10', {
            headers: {
                Authorization: `Bearer eyJraWQiOiJKNnFZOG84M1RXSDBwQzNkaTVQdjVMZDRwOTU0akJoUlVQVVNCQWhVdU1ZPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzNDM1Nzk1Mi0zMDg5LTRjODgtODU2My1hYjFhYTRiOGM2MmUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl9YYjEwWGprTXUiLCJjbGllbnRfaWQiOiI3OTI2a25scm9yNmY2N2U5c2RhZDB1bnY0cSIsIm9yaWdpbl9qdGkiOiI0MzRkODM0ZC00M2E4LTQwYjAtOGNlMC05MTk3MTQxMTlkM2UiLCJldmVudF9pZCI6ImMxYTI4YzAxLWZjNmItNDRiZi1iNjk1LTQ3MDc4MWQ4YmVhYyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2OTIwNzYzMjgsImV4cCI6MTY5MjExMjMyOCwiaWF0IjoxNjkyMDc2MzI4LCJqdGkiOiI4YjAyYjRiNC0wZWQ2LTQxMmYtYTRmNC0xNjZjMTNkZmFkY2IiLCJ1c2VybmFtZSI6IjM0MzU3OTUyLTMwODktNGM4OC04NTYzLWFiMWFhNGI4YzYyZSJ9.a61ztbsSG6Vln0CV2I7lSmK9H8MB7TNcGGpEJjQCY5fHOLUe9auil9As0rmCU9loPWZbfG1B3xkySApWN83YfC9_bVxSZfkrzLgQVydfp9OZ4sfhlyf8Vn9K_O7WKAUIlYGtmO5HCmPKcPVMnfqt6vIaUV8hgO6_XiaEMZIdti77cTWGPtSV86OGy2KsQTD9pNGXnakPZ58hX012MTN3RIhlsP9k5k-7ycWvVjMrFdq436g0lSVG_rM-1UrpJWwn1vtEXjnN03wgXmSo4KAr-2JrZ47nLAG5fppMzDS2GJKxfThA4NQNR_zUja2hxM4uLXWpG0xdiuqemoLWKxBuHg`, // Attach the token to the Authorization header
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }
    const updateUser = async (values) => {
        
        const response = await axios.post('https://gateway.dev.carelibrary.developersorcalo.com/email-template', values,{
            headers:{
                Authorization: `Bearer eyJraWQiOiJKNnFZOG84M1RXSDBwQzNkaTVQdjVMZDRwOTU0akJoUlVQVVNCQWhVdU1ZPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzNDM1Nzk1Mi0zMDg5LTRjODgtODU2My1hYjFhYTRiOGM2MmUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl9YYjEwWGprTXUiLCJjbGllbnRfaWQiOiI3OTI2a25scm9yNmY2N2U5c2RhZDB1bnY0cSIsIm9yaWdpbl9qdGkiOiI0MzRkODM0ZC00M2E4LTQwYjAtOGNlMC05MTk3MTQxMTlkM2UiLCJldmVudF9pZCI6ImMxYTI4YzAxLWZjNmItNDRiZi1iNjk1LTQ3MDc4MWQ4YmVhYyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2OTIwNzYzMjgsImV4cCI6MTY5MjExMjMyOCwiaWF0IjoxNjkyMDc2MzI4LCJqdGkiOiI4YjAyYjRiNC0wZWQ2LTQxMmYtYTRmNC0xNjZjMTNkZmFkY2IiLCJ1c2VybmFtZSI6IjM0MzU3OTUyLTMwODktNGM4OC04NTYzLWFiMWFhNGI4YzYyZSJ9.a61ztbsSG6Vln0CV2I7lSmK9H8MB7TNcGGpEJjQCY5fHOLUe9auil9As0rmCU9loPWZbfG1B3xkySApWN83YfC9_bVxSZfkrzLgQVydfp9OZ4sfhlyf8Vn9K_O7WKAUIlYGtmO5HCmPKcPVMnfqt6vIaUV8hgO6_XiaEMZIdti77cTWGPtSV86OGy2KsQTD9pNGXnakPZ58hX012MTN3RIhlsP9k5k-7ycWvVjMrFdq436g0lSVG_rM-1UrpJWwn1vtEXjnN03wgXmSo4KAr-2JrZ47nLAG5fppMzDS2GJKxfThA4NQNR_zUja2hxM4uLXWpG0xdiuqemoLWKxBuHg`,
            }
        });
          console.log(response)
          setAddEditJobRole(false)
      };
    
      // Queries
      const { data, isLoading, isSuccess } = useQuery('todos', fetchTodos);
    
      const updateUserMutation = useMutation(updateUser, {
        onSuccess: (data) => {
          console.log(data);
          // This function will be called when the mutation is successful
          // Here, you can do something with the updated data if needed
          // For example, you can invalidate the 'todos' query to trigger a refetch
          queryClient.invalidateQueries('todos');
        },
      });
    
      const onFinish = (values) => {
        console.log(values);
        // Call handleUpdateUser with the necessary parameters here
        updateUserMutation.mutate(values);
      };
    const [form] = Form.useForm();
    return (<Modal
        title="Add Details"
        open={addEditJobRole}
        onOk={() => setAddEditJobRole(false)}
        onCancel={() => setAddEditJobRole(false)}
        centered
        className="add-Manage-Job-Role"
        footer={false}
        width="888px"
        maskClosable={false}
    >
        <Form form={form} onFinish={onFinish}>
            <Row gutter={20} style={{ marginTop: "20px" }}>
                <Col lg={12} xs={24} style={{ marginBottom: "20px" }}>
                    <label className="fs-14 fw-600">Title</label>
                    <Form.Item
                        name="title"
                        rules={[{ required: true, message: "Required field " }]}
                        style={{ marginBottom: "8px" }}

                    >
                        <Input
                            placeholder="Enter Title"
                            id="title"
                            style={{ marginTop: "2px", height: "40px", }}
                        />
                    </Form.Item>
                    <label className="fs-14 fw-600">Description</label>
                    <Form.Item
                        name="discription"
                        rules={[{ required: true, message: "Required field " }]}
                        style={{ marginBottom: "8px" }}

                    >
                        <Input
                            placeholder="Enter discription"
                            id="discription"
                            style={{ marginTop: "2px", height: "40px", }}
                        />
                    </Form.Item>
                  
                </Col>

            </Row>

            <Form.Item>

                {/* {apiErrorMessage !== undefined && <p className="fs-14 fw-400 line-height-18 error-color  m-0" style={{ marginBottom: "1rem" }}>{apiErrorMessage?.status === 400 ? 'Request not fulfilled! Try again after some time.' : 'Something went wrong.'}</p>} */}
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    </Modal>)
}
export default AddClientModal