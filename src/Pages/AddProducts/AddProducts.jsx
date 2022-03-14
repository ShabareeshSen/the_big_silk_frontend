import { useState, useEffect } from "react";
import * as React from "react";
import axios from "axios";
import FormData from "form-data";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { DropzoneArea } from "material-ui-dropzone";
import { Dropzone, FileItem, FullScreenPreview } from "@dropzone-ui/react";
import Button from "@mui/material/Button";
import { Autocomplete } from "@mui/material";
import storage from "../../firebase/firebaseSetup";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { async } from "@firebase/util";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

const AddProducts = () => {
  const [productDetails, setproductDetails] = useState({
    product_name: "",
    no_of_stars: 0,
    no_of_review: 0,
    editors_notes: "",
    good_to_know: "",
    is_available: true,
    care_instruction: "",
    rate: null,
    rate2: null,
    category: "",
    main_pictue: "",
    sub_picture: [],
    color_picture: [],
    quantity: null,
  });

  const [progress, setProgress] = React.useState(10);
  const [openImage, setopenImage] = useState(false);
  const [subImageOpen, setsubImageOpen] = useState(false);
  const [colourImageOpen, setcolourImageOpen] = useState(false);
  //
  const [mainImgToUrl, setmainImgToUrl] = useState([]);
  const [subImgToUrl, setsubImgToUrl] = useState([]);
  const [colorImgToUrl, setcolorImgToUrl] = useState([]);
  //
  const [open, setopen] = useState(false);
  const [msg, setmsg] = useState("");
  const [severity, setseverity] = useState("");
  //
  const [mainLoader, setmainLoader] = useState(false);
  const [subLoader, setsubLoader] = useState(false);
  const [colorLoader, setcolorLoader] = useState(false);
  //
  const [files, setFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState(undefined);
  const updateFiles = (incommingFiles) => {
    console.log("incomming files", incommingFiles);
    setmainImgToUrl(incommingFiles);
  };
  const onDelete = (id) => {
    setmainImgToUrl(mainImgToUrl.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };
  const handleClean = (files) => {
    console.log("list cleaned", files);
  };
  //
  const [imageSrc1, setImageSrc1] = useState(undefined);
  const updateFiles1 = (incommingFiles) => {
    console.log("incomming files", incommingFiles);
    setsubImgToUrl(incommingFiles);
  };
  const onDelete1 = (id) => {
    setsubImgToUrl(subImgToUrl.filter((x) => x.id !== id));
  };
  const handleSee1 = (imageSource) => {
    setImageSrc1(imageSource);
  };
  const handleClean1 = (files) => {
    console.log("list cleaned", files);
  };
  //
  const [imageSrc2, setImageSrc2] = useState(undefined);
  const updateFiles2 = (incommingFiles) => {
    console.log("incomming files", incommingFiles);
    setcolorImgToUrl(incommingFiles);
  };
  const onDelete2 = (id) => {
    setcolorImgToUrl(colorImgToUrl.filter((x) => x.id !== id));
  };
  const handleSee2 = (imageSource) => {
    setImageSrc2(imageSource);
  };
  const handleClean2 = (files) => {
    console.log("list cleaned", files);
  };
  //
 

  var form = new FormData();
  //
  const [categoryToShow, setcategoryToShow] = useState(true);
  let arr = [];
if(arr.length==0){
axios.get("http://localhost:5000/category").then(async(res) => {
  await res?.data?.map((e) => {
    console.log(e.category);
     arr.push(e?.category);
  });
});
}
    
  
  console.log(arr);
  const uploadToFireBaseMain = async (image) => {
    const metadata = {
      contentType: "image/jpeg",
    };
    let sub = [];
    console.log("Image is being uploaded .... ");
    await image.map(async (e) => {
      const imageRef = ref(storage, "images/" + e?.name);
      let a = await uploadBytesResumable(imageRef, e, metadata);

      sub.push(await getDownloadURL(a.ref));
      if (image.length === sub.length) {
        await setmainLoader(false);
        console.log(sub, "loged");
        setproductDetails({ ...productDetails, main_pictue: sub[0] });
        
        if(mainLoader){
          
        }
        

        // setproductDetails({...productDetails,sub_pictue:sub});
      }
    });
  };

  //
  const uploadToFireBaseSub = async (image) => {
    const metadata = {
      contentType: "image/jpeg",
    };
    let sub = [];
    console.log("Image is being uploaded .... ");
    await image.map(async (e) => {
      const imageRef = ref(storage, "images/" + e?.name);
      let a = await uploadBytesResumable(imageRef, e, metadata);

      sub.push(await getDownloadURL(a.ref));
      if (image.length === sub.length) {
        await setsubLoader(false);
        console.log(sub, "loged");
        setproductDetails({ ...productDetails, sub_picture: sub });
        if(subLoader){
          
        }
        

        // setproductDetails({...productDetails,sub_picture:sub});
      }
    });
  };

  //
  const uploadToFireBaseColor = async (image) => {
    const metadata = {
      contentType: "image/jpeg",
    };
    let sub = [];
    console.log("Image is being uploaded .... ");
    await image.map(async (e) => {
      const imageRef = ref(storage, "images/" + e?.name);
      let a = await uploadBytesResumable(imageRef, e, metadata);

      sub.push(await getDownloadURL(a.ref));
      if (image.length === sub.length) {
        await setcolorLoader(false);
        console.log(sub, "logedSub");

        setproductDetails({ ...productDetails, color_picture: sub });
        if(colorLoader){
          
        }
        

        // setproductDetails({...productDetails,sub_picture:sub});
      }
    });
  };

  const checkr = (value) => {
    return value !== "" && value != undefined && value != null;
  };

  const isEmpty = Object.values(productDetails).every(checkr);
  //
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const onSave = (e) => {
    // form.append(productDetails,"form");
    // console.log(form.getAllV, "final");
    e.preventDefault();
    axios
      .post("http://localhost:5000/products", productDetails)
      .then((res) => {
        if (res?.data?.err) {
          setopen(true);
          setseverity("error");
          setmsg(res?.data?.err);
        } else {
          console.log("success");
          setopen(true);
          setseverity("success");
          setmsg(res?.data?.msg);
        }
      })
      .catch((err) => {
        console.log(err);
        setopen(true);
        setmsg(err);
      });
  };
  return (
    <div>
      <Grid container spacing={2} p={10}>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={open} autoHideDuration={3000}>
            <Alert
              onClose={() => setopen(false)}
              autoHideDuration={3000}
              severity={severity}
              sx={{ width: "100%" }}
            >
              {msg}
            </Alert>
          </Snackbar>
          {/* action={action} */}
          {open ? (
            <Alert
              autoHideDuration={3000}
              onClose={() => setopen(false)}
              severity={severity}
            >
              {msg}
            </Alert>
          ) : (
            <></>
          )}
        </Stack>
        <Grid item xs={10}>
          <TextField
            required
            fullWidth
            id={"Product Name"}
            label={"Product Name"}
            defaultValue={productDetails.product_name}
            onChange={(val) => {
              setproductDetails({
                ...productDetails,
                product_name: val.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={2}></Grid>

        <Grid item xs={5}>
          <TextField
            fullWidth
            required
            id={"Editors Note"}
            label={"Editors Note"}
            multiline
            rows={5}
            defaultValue={productDetails.editors_notes}
            onChange={(val) => {
              setproductDetails({
                ...productDetails,
                editors_notes: val.target.value,
              });
            }}
          />
        </Grid>

        <Grid item xs={5}>
          <TextField
            required
            fullWidth
            multiline
            rows={5}
            id={"Good To Know"}
            label={"Good To Know"}
            defaultValue={productDetails.good_to_know}
            onChange={(val) => {
              setproductDetails({
                ...productDetails,
                good_to_know: val.target.value,
              });
            }}
          />
        </Grid>

        <Grid item xs={5}>
          <TextField
            required
            fullWidth
            id={"Care Instruction"}
            label={"Care Instruction"}
            defaultValue={productDetails.care_instruction}
            onChange={(val) => {
              setproductDetails({
                ...productDetails,
                care_instruction: val.target.value,
              });
            }}
          />
        </Grid>

        <Grid item xs={5}>
          <TextField
            required
            fullWidth
            id={"Correct Rate"}
            label={"Correct Rate"}
            defaultValue={productDetails.rate}
            onChange={(val) => {
              setproductDetails({ ...productDetails, rate: val.target.value });
            }}
          />
        </Grid>

        <Grid item xs={5}>
          <TextField
            required
            fullWidth
            id={"Rate Striked"}
            label={"Rate striked"}
            defaultValue={productDetails.rate2}
            onChange={(val) => {
              setproductDetails({ ...productDetails, rate2: val.target.value });
            }}
          />
        </Grid>

        <Grid item xs={5}>
          <Autocomplete
            required
            fullWidth
            id={"Category"}
            label={"Category"}
            defaultValue={productDetails.category}
            onChange={(val, i) => {
              setproductDetails({
                ...productDetails,
                category: i,
              });
            }}
            options={arr}
            renderInput={(params) => (
              <TextField {...params} label="Category" variant="outlined" />
            )}
          />
        </Grid>

        <Grid item xs={5}>
          <TextField
            required
            fullWidth
            id={"Quantity"}
            label={"Quantity"}
            defaultValue={productDetails.quantity}
            onChange={(val) => {
              setproductDetails({
                ...productDetails,
                quantity: val.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={10}></Grid>
        <Grid item xs={5}>
          <div>
            <Button
              sx={{ mt: 3, mb: 2 }}
              variant="contained"
              onClick={() => {
                setopenImage(true);
              }}
            >
              Main Pictures
            </Button>

            {!openImage && mainLoader ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            ) : (
              <></>
            )}
          </div>
        </Grid>
        <Grid item xs={12}>
          {openImage ? (
            <>
              <div>
                <Dropzone
                  style={{ minWidth: "550px" }}
                  //view={"list"}
                  onChange={updateFiles}
                  minHeight="195px"
                  onClean={handleClean}
                  value={mainImgToUrl}
                  maxFiles={5}
                  //header={false}
                  // footer={false}
                  maxFileSize={2998000}
                  //label="Drag'n drop files here or click to browse"
                  //label="Suleta tus archivos aquí"
                  accept=".png,image/*"
                  // uploadingMessage={"Uploading..."}
                  url="https://my-awsome-server/upload-my-file"
                  //of course this url doens´t work, is only to make upload button visible
                  //uploadOnDrop
                  //clickable={false}
                  fakeUploading
                  //localization={"FR-fr"}
                  disableScroll
                >
                  {mainImgToUrl.map((file) => (
                    <FileItem
                      {...file}
                      key={file.id}
                      onDelete={onDelete}
                      onSee={handleSee}
                      //localization={"ES-es"}
                      resultOnTooltip
                      preview
                      info
                      hd
                    />
                  ))}
                  <FullScreenPreview
                    imgSource={imageSrc}
                    openImage={imageSrc}
                    onClose={(e) => handleSee(undefined)}
                  />
                </Dropzone>
                {/* <DropzoneArea
                  acceptedFiles={["image/*"]}
                  onChange={(e) => {
                    if (e.length !== 0) {
                      let tmp = mainImgToUrl;
                      tmp.push(e[e.length - 1]);
                      setmainImgToUrl(tmp);
                    }
                    // console.log(e);
                  }}
                  showFileNames={true}
                  dropzoneText="Main picture"
                  showAlerts={false}
                  filesLimit={20}
                /> */}
              </div>
              <Grid item xs={12}>
                <Button
                  sx={{ mt: 3, mb: 2 }}
                  variant="contained"
                  onClick={() => {
                    setopenImage(false);
                  }}
                >
                  Close
                </Button>

                <Button
                  style={{ float: "right" }}
                  sx={{ mt: 3, mb: 2 }}
                  variant="contained"
                  onClick={async () => {
                    console.log(mainImgToUrl, "main");
                    setopenImage(false);
                    setmainLoader(true);
                    await uploadToFireBaseMain(mainImgToUrl);
                  }}
                >
                  {" "}
                  upload
                </Button>
              </Grid>
            </>
          ) : (
            <></>
          )}
        </Grid>
        <Grid item xs={5}>
          <div>
            <Button
              sx={{ mt: 3, mb: 2 }}
              variant="contained"
              disabled={productDetails.main_pictue === ""}
              onClick={() => {
                setsubImageOpen(true);
              }}
            >
              Sub Image
            </Button>
            {!subImageOpen && subLoader ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            ) : (
              <></>
            )}
          </div>
        </Grid>
        <Grid item xs={12}>
          {subImageOpen ? (
            <>
              <div>
                <Dropzone
                  style={{ minWidth: "550px" }}
                  //view={"list"}
                  onChange={updateFiles1}
                  minHeight="195px"
                  onClean={handleClean1}
                  value={subImgToUrl}
                  maxFiles={5}
                  //header={false}
                  // footer={false}
                  maxFileSize={2998000}
                  label="Drag'n drop files here or click to browse"
                  //label="Suleta tus archivos aquí"
                  accept=".png,image/*"
                  // uploadingMessage={"Uploading..."}
                  url="https://my-awsome-server/upload-my-file"
                  //of course this url doens´t work, is only to make upload button visible
                  //uploadOnDrop
                  //clickable={false}
                  fakeUploading
                  //localization={"FR-fr"}
                  disableScroll
                >
                  {subImgToUrl.map((file) => (
                    <FileItem
                      {...file}
                      key={file.id}
                      onDelete={onDelete1}
                      onSee={handleSee1}
                      //localization={"ES-es"}
                      resultOnTooltip
                      preview
                      info
                      hd
                    />
                  ))}
                  <FullScreenPreview
                    imgSource={imageSrc1}
                    openImage={imageSrc1}
                    onClose={(e) => handleSee1(undefined)}
                  />
                </Dropzone>
                {/* <DropzoneArea
                  acceptedFiles={["image/*"]}
                  onChange={(e) => {
                    console.log(e);
                    if (e.length !== 0) {
                      let tmp = subImgToUrl;
                      tmp.push(e[e.length - 1]);
                      setsubImgToUrl(tmp);
                      // sub.push(e[e.length-1]);
                    }
                  }}
                  showFileNames={true}
                  dropzoneText="Sub picture to Upload"
                  showAlerts={false}
                  filesLimit={20}
                /> */}
              </div>
              <Grid item xs={12}>
                <Button
                  sx={{ mt: 3, mb: 2 }}
                  variant="contained"
                  onClick={() => {
                    setsubImageOpen(false);
                  }}
                >
                  Close
                </Button>
                <Button
                  style={{ float: "right" }}
                  sx={{ mt: 3, mb: 2 }}
                  variant="contained"
                  onClick={async () => {
                    setsubImageOpen(false);
                    setsubLoader(true);
                    await uploadToFireBaseSub(subImgToUrl);
                  }}
                >
                  upload
                </Button>
              </Grid>
            </>
          ) : (
            <></>
          )}
        </Grid>

        <Grid item xs={5}>
          <div>
            <Button
              sx={{ mt: 3, mb: 2 }}
              type="submit"
              variant="contained"
              disabled={
                productDetails.main_pictue === "" ||
                (productDetails.sub_picture.length === 0 &&
                  subImgToUrl.length !== productDetails.sub_picture.length)
              }
              onClick={() => {
                setcolourImageOpen(true);
              }}
            >
              colour Image
            </Button>
            {!colourImageOpen && colorLoader ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            ) : (
              <></>
            )}
          </div>
        </Grid>

        <Grid item xs={12}>
          {colourImageOpen ? (
            <>
              <div>
                <Dropzone
                  style={{ minWidth: "550px" }}
                  //view={"list"}
                  onChange={updateFiles2}
                  minHeight="195px"
                  onClean={handleClean2}
                  value={colorImgToUrl}
                  maxFiles={5}
                  //header={false}
                  // footer={false}
                  maxFileSize={2998000}
                  label="Drag'n drop files here or click to browse"
                  // label="Color Pictures"
                  accept=".png,image/*"
                  // uploadingMessage={"Uploading..."}
                  url="https://my-awsome-server/upload-my-file"
                  //of course this url doens´t work, is only to make upload button visible
                  //uploadOnDrop
                  //clickable={false}
                  fakeUploading
                  //localization={"FR-fr"}
                  disableScroll
                >
                  {colorImgToUrl.map((file) => (
                    <FileItem
                      {...file}
                      key={file.id}
                      onDelete={onDelete2}
                      onSee={handleSee2}
                      //localization={"ES-es"}
                      resultOnTooltip
                      preview
                      info
                      hd
                    />
                  ))}
                  <FullScreenPreview
                    imgSource={imageSrc2}
                    openImage={imageSrc2}
                    onClose={(e) => handleSee2(undefined)}
                  />
                </Dropzone>
                {/* <DropzoneArea
                  acceptedFiles={["image/*"]}
                  onChange={(e) => {
                    if (e.length !== 0) {
                      let tmp = colorImgToUrl;
                      tmp.push(e[e.length - 1]);
                      setcolorImgToUrl(tmp);
                    }
                    // console.log(e);
                  }}
                  showFileNames={true}
                  dropzoneText="color picture"
                  showAlerts={false}
                  filesLimit={20}
                /> */}
              </div>
              <Grid item xs={12}>
                <Button
                  disableElevation
                  sx={{ mt: 3, mb: 2 }}
                  type="submit"
                  variant="contained"
                  onClick={() => {
                    setcolourImageOpen(false);
                  }}
                >
                  Close
                </Button>
                <Button
                  style={{ float: "right" }}
                  disableElevation
                  sx={{ mt: 3, mb: 2 }}
                  type="submit"
                  variant="contained"
                  onClick={async () => {
                    setcolourImageOpen(false);
                    setcolorLoader(true)
                    await uploadToFireBaseColor(colorImgToUrl);
                  }}
                >
                  upload
                </Button>
              </Grid>
            </>
          ) : (
            <></>
          )}
        </Grid>

        <Grid item xs={12}>
          <Button
            style={{ float: "right" }}
            color={"success"}
            variant="contained"
            onClick={() => {
              onSave();
            }}
            disabled={!isEmpty || mainLoader || subLoader || colorLoader}
          >
            Add Product
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddProducts;
