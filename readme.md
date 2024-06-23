 >first i install the required tools ex:express..
  >first i install the required third parties
  >And created the code as per the requirement..
# write API endpoint which will create a text file in a particular folder
app.get("/createfile",(req,res)=>{
    

    const currentDate = new Date().toISOString().slice(0,10)
    const currenttime = new Date().toTimeString().slice(0,8).replace(/:/g, '-')
   const file=`${currentDate}_${currenttime}.txt`
  
   fs.appendFile(path.join(__dirname,"folder",file),file,(err)=>{
    console.log(err)
   })
   res.send(file)
})
# write API endpoint to show all files in the particular folder
app.get('/files', (req, res) => {
      fs.readdir(path.join(__dirname,'folder'),(err,files)=>{
        if(err){
            console.log(err)
        }
        res.json(files)
      })
  });
 