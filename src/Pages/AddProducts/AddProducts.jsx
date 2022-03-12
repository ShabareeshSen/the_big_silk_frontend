import { React, useState, useEffect } from "react";
import axios from "axios";
import FormData from "form-data";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { DropzoneArea } from "material-ui-dropzone";
import Button from "@mui/material/Button";
import storage from "../../firebase/firebaseSetup";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const AddProducts = () => {
  const [productDetails, setproductDetails] = useState({
    product_name: "",
    no_of_stars: null,
    no_of_review: null,
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

  const [openImage, setopenImage] = useState(false);
  const [subImageOpen, setsubImageOpen] = useState(false);
  const [colourImageOpen, setcolourImageOpen] = useState(false);
  //
  const [mainImgToUrl, setmainImgToUrl] = useState([]);
  const [subImgToUrl, setsubImgToUrl] = useState([]);
  const [colorImgToUrl, setcolorImgToUrl] = useState([]);
  //
  var form = new FormData();

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
        console.log(sub, "loged");
        setproductDetails({ ...productDetails, main_pictue: sub[0] });

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
        console.log(sub, "loged");
        setproductDetails({ ...productDetails, sub_picture: sub });

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
        console.log(sub, "logedSub");

        setproductDetails({ ...productDetails, color_picture: sub });

        // setproductDetails({...productDetails,sub_picture:sub});
      }
    });
  };
  //
  const onSave = () => {
    // form.append(productDetails,"form");
    // console.log(form.getAllV, "final");
    axios.post("http://localhost:5000/products", productDetails);
  };
  console.log(productDetails, "worked");
  return (
    <div>
      <Grid container spacing={2} p={10}>
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
          <TextField
            required
            fullWidth
            id={"Category"}
            label={"Category"}
            defaultValue={productDetails.category}
            onChange={(val) => {
              setproductDetails({
                ...productDetails,
                category: val.target.value,
              });
            }}
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
              variant="contained"
              onClick={() => {
                setopenImage(true);
              }}
            >
              Main Pictures
            </Button>
          </div>
        </Grid>
        <Grid item xs={10}>
          {openImage ? (
            <>
              <DropzoneArea
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
                dropzoneText="main picture"
                showAlerts={false}
                filesLimit={20}
              />
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  onClick={() => {
                    setopenImage(false);
                  }}
                >
                  Close
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  onClick={async () => {
                    console.log(mainImgToUrl, "main");
                    await uploadToFireBaseMain(mainImgToUrl);
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
              variant="contained"
              onClick={() => {
                setsubImageOpen(true);
              }}
            >
              Sub Image
            </Button>
          </div>
        </Grid>
        <Grid item xs={10}>
          {subImageOpen ? (
            <>
              <DropzoneArea
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
                dropzoneText="sub picture"
                showAlerts={false}
                filesLimit={20}
              />
              <Button
                variant="contained"
                onClick={() => {
                  setsubImageOpen(false);
                }}
              >
                Close
              </Button>
              <Button
                variant="contained"
                onClick={async () => {
                  await uploadToFireBaseSub(subImgToUrl);
                }}
              >
                upload
              </Button>
            </>
          ) : (
            <></>
          )}
        </Grid>
        <Grid item xs={5}>
          <div>
            <Button
              variant="contained"
              onClick={() => {
                setcolourImageOpen(true);
              }}
            >
              colour Image
            </Button>
          </div>
        </Grid>
        <Grid item xs={10}>
          {colourImageOpen ? (
            <>
              <DropzoneArea
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
              />
              <Button
                variant="contained"
                onClick={() => {
                  setcolourImageOpen(false);
                }}
              >
                Close
              </Button>
              <Button
                variant="contained"
                onClick={async () => {
                  await uploadToFireBaseColor(colorImgToUrl);
                }}
              >
                upload
              </Button>
            </>
          ) : (
            <></>
          )}
        </Grid>

        <Grid>
          <button
            onClick={() => {
              onSave();
            }}
          >
            Upload
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddProducts;
