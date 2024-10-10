

export default  function Home() {
  async function FormGET(formData){
    "use server"
    const username = formData.get("username")
    const photo1 = formData.get("photo")
    const descripton = formData.get("description")
    console.log(username,photo1,descripton)
 }
  return (
    <>
    <form action={FormGET}>
      <label htmlFor="">Your name</label>
      <input type="text" name="username" />
      <label htmlFor="">your image</label>
      <input type="file" name="photo" />
      <input type="text" name="description" />
      <button>submit</button>
    </form>
    </>
  )

  
    
  
}
