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

const Varients = () => {
  const [varients, setVarients] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVarients = async () => {
      try {
        const response = await axios.get("/variants/get");
        setVarients(response.data.variants);
        console.log("Varients:", response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Varients:", error);
      }
    };
    fetchVarients();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/variants/delete/${id}`);
      const response = await axios.get("/variants/get");
      setVarients(response.data.variants);
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
        <h2>Variants</h2>
        <Link className="btn btn-dark mt-2" to="./add">
          Add Variant
        </Link>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Values</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {varients.map((variant) => (
              <TableRow key={variant._id}>
                <TableCell>{variant.category}</TableCell>
                <TableCell>{variant.values.join(", ")}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: grey[800] }}
                    onClick={() => handleDelete(variant._id)}
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

export default Varients;
