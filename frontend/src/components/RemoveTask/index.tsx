import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const RemoveTask = () => {
  return (
    <div>
      <IconButton >
        <DeleteIcon aria-label="Remove task" />
      </IconButton>
    </div>
  );
};

export default RemoveTask;
