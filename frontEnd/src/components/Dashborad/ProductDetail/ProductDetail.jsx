import { useEffect, useState } from "react";
import axios from "../../../api/axios";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CircularProgress,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(true);
  const fetchVarients = async () => {
    try {
      const response = await axios.get("/product/details");
      setDetails(response.data.details);
      console.log("response:", response.data.details);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Varients:", error);
    }
  };
  useEffect(() => {
    fetchVarients();
  }, []);

  const handleDelete = async (key) => {
    try {
      await axios.delete(`/product/details/${key}`);
      fetchVarients();
    } catch (error) {
      console.error("Error deleting variant:", error);
    }
  };

  if (loading) {
    return (
      <div className="container d-flex gap-2 justify-content-center p-5">
        {" "}
        <CircularProgress />
        {loading && <h2>Loading...</h2>}
      </div>
    );
  }

  return (
    <div className="container p-5">
      <div className="d-flex justify-content-between">
        <h2>Product details</h2>
        <Link className="btn btn-dark mt-2" to="./add">
          Add Product detail Key
        </Link>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Key</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {details.map((details) => (
              <TableRow key={details._id}>
                <TableCell>{details.key}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: grey[800] }}
                    onClick={() => handleDelete(details._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductDetail;
