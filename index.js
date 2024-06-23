const express=require("express")
const app=express()
const port =3500
const fs=require("fs")
const path=require("path")
app.use(express.json())
    
    const folderPath = path.join(__dirname, 'folder');

  
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
      console.log(`Folder created at: ${folderPath}`);
    } else {
      console.log(`Folder already exists at: ${folderPath}`);
    }
app.get("/createfile",(req,res)=>{
    

    const currentDate = new Date().toISOString().slice(0,10)
    const currenttime = new Date().toTimeString().slice(0,8).replace(/:/g, '-')
   const file=`${currentDate}_${currenttime}.txt`
  
   fs.appendFile(path.join(__dirname,"folder",file),file,(err)=>{
    console.log(err)
   })
   res.send(file)
})

app.get('/files', (req, res) => {
      fs.readdir(path.join(__dirname,'folder'),(err,files)=>{
        if(err){
            console.log(err)
        }
        res.json(files)
      })
  });






app.listen(port,()=> console.log(`Server is running on http://localhost:${port}`))