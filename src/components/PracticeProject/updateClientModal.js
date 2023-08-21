const updateClientModal=()=>{
    const fetchTodos=async()=>{
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

    // Queries
    const { data,isLoading ,isSuccess} = useQuery({ queryKey: ['todos'], queryFn: fetchTodos })
    return(
        <>
        </>
    )
}
export default updateClientModals