import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const AddTask = (props: any) => {
  return (
    <div>
      <IconButton type="submit">
        <AddIcon aria-label="Add task" />
      </IconButton>
    </div>
  );
};

export default AddTask;
