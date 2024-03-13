import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { Box, Card, Stack, Typography } from "@mui/material";
import { removeFromOrder } from "../redux/slices/orderSlice";
import { toast } from "react-toastify";
import { useAppDispatch } from "../hooks/use-redux";
import { OrderProps } from "../Types/Props";

export default function OrderItem({ cars }: OrderProps) {
  const dispatch = useAppDispatch();

  const handleRemoveFromOrder = (id: string) => {
    dispatch(removeFromOrder(id));
    toast.success("Бронювання успішно скасовано");
  };

  return (
    <div className="w-full ">
      {cars.map(({ id, name, imagePath, price, formData }) => (
        <Accordion
          key={id}
          defaultExpanded
          sx={{
            backgroundColor: "#000000",
            color: "#fff",
            border: "1px solid #fff",
          }}
        >
          <AccordionSummary>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Card sx={{ maxWidth: { xs: "20%", sm: "130px" } }}>
                {imagePath && imagePath.length > 0 && (
                  <CardMedia
                    component="img"
                    image={imagePath[0]?.url}
                    alt="Car"
                  />
                )}
              </Card>
              <Typography
                sx={{ typography: { md: "h6", sm: "body1", xs: "body2" } }}
              >
                {name}
              </Typography>
              <Stack>
                <Typography
                  sx={{
                    typography: { md: "body1", sm: "body2", xs: "caption" },
                  }}
                >
                  До сплати
                </Typography>
                <Typography
                  sx={{
                    typography: { md: "body1", sm: "body2", xs: "caption" },
                  }}
                  textAlign="center"
                >
                  {price}₴
                </Typography>
              </Stack>
            </Box>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Stack>
              <Typography variant="subtitle1">
                Інформація про клієнта:
              </Typography>
              <Typography variant="subtitle2">
                {formData?.surName} {formData?.name}
              </Typography>
              <Typography variant="subtitle2">{formData?.phone}</Typography>
              <Typography variant="subtitle2">{formData?.email}</Typography>
            </Stack>
            <Box sx={{ display: "flex", alignItems: "end" }}>
              <Stack>
                <Typography variant="subtitle2">
                  Дата подачі:
                  {formData?.startDate}
                </Typography>
                <Typography variant="subtitle2">
                  Дата повернення:
                  {formData?.endDate}
                </Typography>
              </Stack>
            </Box>
          </AccordionDetails>
          <AccordionActions>
            <Button onClick={() => handleRemoveFromOrder(id)} color="secondary">
              Скасувати
            </Button>
          </AccordionActions>
        </Accordion>
      ))}
    </div>
  );
}
