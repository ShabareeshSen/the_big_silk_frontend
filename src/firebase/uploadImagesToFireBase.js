import storage from "./firebaseSetup";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";


const uploader=  async (image)=>{
   let urls=[];
    
 
  
   

}

export const uploadImageToFirebase=  async(image ) =>{
  let url=[];
const metadata = {
    contentType: "image/jpeg",
  };
let pusher=[]
      console.log("Image is being uploaded .... ");
       await image.map(async(e)=>{
          
          const imageRef = ref(storage, "images/" + e?.name);
          let a= await uploadBytesResumable(imageRef, e, metadata);
          // let b=await getDownloadURL(a.ref)
          pusher.push(await getDownloadURL(a.ref));
          // uploadBytesResumable(imageRef, e, metadata)
          // .then(async(snapshot) => {
          //   console.log("Uploaded", snapshot.totalBytes, "bytes.");
          //   console.log("File metadata:", snapshot.metadata);
          //   // Let's get a download URL for the file.
          //   console.log(await getDownloadURL(snapshot.ref))
          //   url.push(await getDownloadURL(snapshot.ref))
            
          // })
          // .catch((error) => {
          //   console.error("Upload failed", error);
          //   // ...
          // });
        // url.push(append);
        if(pusher.length===image.length){
             console.log(pusher)
             return pusher
        }else{console.log("OnProcess");}
       
        
        
        })
       


  // const myPromise = new Promise((resolve, reject) => {
    
  //     resolve(uploader(image));

  // });
  
  // myPromise
  //   .then((e)=>{
  //     console.log(e," promi ");
  //   })

    
   
}

