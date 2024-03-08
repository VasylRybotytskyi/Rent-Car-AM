import { Typography } from "@mui/material";

type ItemCharacteristicsType = {
  featureName: string;
  featureValue: string;
};

const ItemCharacteristics = ({
  featureName,
  featureValue,
}: ItemCharacteristicsType) => {
  return (
    <Typography variant="h6">
      {featureName}: {featureValue}
    </Typography>
  );
};

export default ItemCharacteristics;
