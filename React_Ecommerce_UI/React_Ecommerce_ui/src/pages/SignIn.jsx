// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";

// import FormLabel from "@mui/material/FormLabel";
// import FormControl from "@mui/material/FormControl";

// import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
// import Card from "@mui/material/Card";
// import { Link } from "react-router-dom";

// export default function SignIn() {
//   return (
//     <Stack
//       sx={{ width: "80%", mx: "auto" }}
//       direction="column"
//       justifyContent="space-between"
//     >
//       <Card sx={{ p: 10 }} variant="outlined">
//         <Typography
//           component="h1"
//           variant="h4"
//           sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
//         >
//           Sign in
//         </Typography>
//         <Box
//           component="form"
//           onSubmit={() => {}}
//           noValidate
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             width: "100%",
//             gap: 2,
//           }}
//         >
//           <FormControl>
//             <FormLabel htmlFor="email">Email</FormLabel>
//             <TextField
//               id="email"
//               type="email"
//               name="email"
//               placeholder="your@email.com"
//               autoComplete="email"
//               autoFocus
//               required
//               fullWidth
//               variant="outlined"
//               sx={{ ariaLabel: "email" }}
//             />
//           </FormControl>
//           <FormControl>
//             <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//               <FormLabel htmlFor="password">Password</FormLabel>
//             </Box>
//             <TextField
//               name="password"
//               placeholder="••••••"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               autoFocus
//               required
//               fullWidth
//               variant="outlined"
//             />
//           </FormControl>

//           <Button type="submit" fullWidth variant="contained">
//             Sign in
//           </Button>
//           <Typography sx={{ textAlign: "center" }}>
//             Don&apos;t have an account?{" "}
//             <span>
//               <Link to="/sign-up">Sign up</Link>
//             </span>
//           </Typography>
//         </Box>
//       </Card>
//     </Stack>
//   );
// }

// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import FormLabel from "@mui/material/FormLabel";
// import FormControl from "@mui/material/FormControl";

// import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
// import Card from "@mui/material/Card";
// import { Link } from "react-router-dom";

// export default function SignUp() {
//   return (
//     <Stack
//       sx={{ width: "80%", mx: "auto" }}
//       direction="column"
//       justifyContent="space-between"
//     >
//       <Card sx={{ p: 10 }} variant="outlined">
//         <Typography
//           component="h1"
//           variant="h4"
//           sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
//         >
//           Sign Up
//         </Typography>
//         <Box
//           component="form"
//           onSubmit={() => {}}
//           noValidate
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             width: "100%",
//             gap: 2,
//           }}
//         >
//           <FormControl>
//             <FormLabel htmlFor="name">Name</FormLabel>
//             <TextField
//               id="name"
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               autoComplete="name"
//               autoFocus
//               required
//               fullWidth
//               variant="outlined"
//             />
//           </FormControl>

//           <FormControl>
//             <FormLabel htmlFor="email">Email</FormLabel>
//             <TextField
//               id="email"
//               type="email"
//               name="email"
//               placeholder="your@email.com"
//               autoComplete="email"
//               required
//               fullWidth
//               variant="outlined"
//             />
//           </FormControl>

//           <FormControl>
//             <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//               <FormLabel htmlFor="password">Password</FormLabel>
//             </Box>
//             <TextField
//               name="password"
//               placeholder="••••••"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               required
//               fullWidth
//               variant="outlined"
//             />
//           </FormControl>

//           <Button type="submit" fullWidth variant="contained">
//             Sign Up
//           </Button>
//           <Typography sx={{ textAlign: "center" }}>
//             Already have an account? <Link to="/sign-in">Sign In</Link>
//           </Typography>
//         </Box>
//       </Card>
//     </Stack>
//   );
// }
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { Alert } from "@mui/material";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()

      .required("Required"),
  })
  .required();

export default function SignUp() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const mutation = useMutation({
    mutationFn: async (data) => {
      //here We Cal the API.
      const res = await axios.post("http://localhost:3000/auth/sign-in", data);
      return res.data;
    },
    onSuccess: (data) => {
      //navigate to signin page

      navigate("/");
      toast.success(data.message);
    },
    onError: (err) => {
      // console.log(err.response.data.message);
      toast.error(err.response.data.message);
    },
  });
  //in order to trigger the Mutation function we have to make mutation.mutate

  console.log(mutation.error);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
  };
  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Set the selected image file to the state
  };

  console.log(errors);

  return (
    <Stack
      sx={{ width: "80%", mx: "auto" }}
      direction="column"
      justifyContent="space-between"
    >
      <Card sx={{ p: 10 }} variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
        >
          Sign Up
        </Typography>
        {mutation.error && (
          <Alert sx={{ my: 2 }} severity="error">
            {mutation.error.response.data.message}
          </Alert>
        )}
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              autoFocus
              fullWidth
              variant="outlined"
              error={Boolean(errors?.email?.message)}
              helperText={errors?.email?.message}
              sx={{ ariaLabel: "email" }}
              {...register("email")}
            />
          </FormControl>
          <FormControl>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <FormLabel htmlFor="password">Password</FormLabel>
            </Box>
            <TextField
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="current-password"
              autoFocus
              fullWidth
              error={Boolean(errors?.password?.message)}
              helperText={errors?.password?.message}
              variant="outlined"
              {...register("password")}
            />
          </FormControl>
          {/*<FormControl>
          <FormLabel htmlFor="image">Upload Image</FormLabel>
          <input
            id="image"
            type="file"
            accept="image/*"
            name="image"
            onChange={handleImageChange}  // Handle image file selection
          />
        </FormControl> */}
          <Button type="submit" fullWidth variant="contained">
            Sign In
          </Button>
          <Typography sx={{ textAlign: "center" }}>
            Don't have an Account?{" "}
            <span>
              <Link to="/sign-up">Sign up</Link>
            </span>
          </Typography>
        </Box>
      </Card>
    </Stack>
  );
}
