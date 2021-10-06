const router = require("express").Router();
let Member = require("../modules/member");



http://Localhost:1000/member/add

router.route("./add").post((req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const ContactNumber = Number(req.body.ContactNumber);
    const RegNum = Number(req.body.RegNum);


    const newMember = new Member({
        name,
        age,
        gender,
        ContactNumber,
        RegNum
    })

    newMember.save().then(() =>{
        res.json("Member Added")
    }).catch((err) => {
        console.log(err);
    })
})
http://Localhost:1000/member

router.route("/").get((req,res)=>{

    Member.find().then((students) =>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})
http://Localhost:1000/member/update/id

router.route("/update/:id").put(async (req,res) =>{
   let userId = req.params.id;
   //dstructure
   const {name ,age ,gender ,ContactNumber ,RegNum} = req.body;

   const updatMember = {
       name,
       age,
       gender,
       ContactNumber,
       RegNum
   }

 const update = await Member.findByIdAndUpdate(userId, updateMember).then(()=>{
     
 
 res.status(200).send({status: "User updated"})
 }).catch((err)=>{
     res.status(500).send({status: "    Error with updating data"});
 })
})

http://Localhost:1000/member/delete/id
router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await Member.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status: "User deleted"})
 }).catch((err)=>{
     res.status(500).send({status: "    Error with deleting data"});
 })

})
router.route("/get/:id").get(async(req,res) => {
    let userId = req.params.id;
    const user = await Member.findById(userId)
    .then((member)=>{
        res.status(200).send({status: "User fetched",member})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error:err.message});
    })
})


module.exports = router;